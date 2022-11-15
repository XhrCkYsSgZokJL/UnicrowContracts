// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "./interfaces/IUnicrow.sol";
import "./interfaces/IUnicrowClaim.sol";
import "./UnicrowDispute.sol";
import "./interfaces/IUnicrowArbitrator.sol";
import "./interfaces/ICrowRewards.sol";
import "./UnicrowTypes.sol";

/// @title The primary Unicrow contract
/// @notice Receives and distributes the payments, maintains and provides information about the escrow records, and allows basic operations
contract Unicrow is ReentrancyGuard, IUnicrow, Context {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    /// Generates unique escrow ID in incremental order
    Counters.Counter public escrowIdCounter;

    /// @notice Arbitrator information and functionality for the escrows
    IUnicrowArbitrator public unicrowArbitrator;

    /// @notice Withdraws payments from the escrows once the criteria are met
    IUnicrowClaim public unicrowClaim;

    /// @notice Dispute resolution, incl. challenges and settlements
    UnicrowDispute public unicrowDispute;

    /// @notice Escrow fee in bips (can never be higher than 100)
    uint16 public escrowFee = 0;

    /// address of a governance contract (multisig initially, DAO governor eventually)
    address public governanceAddress;

    /// storage of the primary escrow data. The key is generated by the contract incrementally
    mapping(uint256 => Escrow) escrows;

    /**
     * @notice Emitted when the payment is deposited into the contract and an escrow record is created
     * @param escrowId Unique, contract-generated escrow record identifier
     * @param blockTime timestamp of the block in which the transaction was included
     * @param escrow Details of the escrow as stored in the contract
     * @param arbitrator Address of an arbitrator (zero is returned if no arbitrator was defined)
     * @param arbitratorFee Arbitrator's fee in bips
     * @param challengePeriod Initial challenge period in seconds
     */
    event Pay(uint256 indexed escrowId, uint256 blockTime, Escrow escrow, address arbitrator, uint256 arbitratorFee, uint256 challengePeriod);

    /**
     * @notice Emitted when the buyer releases the payment manually (regardless of the challenge period)
     * @param escrowId ID of the released escrow payment
     * @param blockTime Timestamp of the block in which the transaction was included
     * @param escrow Details of the released Escrow
     * @param amounts Amounts in token allocated to each party (incl. fees). See UnicrowTypes for mapping of each party (WHO_*)
     */
    event Release(uint256 indexed escrowId, uint256 blockTime, Escrow escrow, uint256[5] amounts);

    /**
     * @notice Emitted when seller fully refunds the payment. Detailed calculated values are not returned because the payment is refunded in full, all fees are waived
     * @param escrowId Id of the refunded payment
     * @param escrow Details of the refunded payment
     * @param blockTime Timestamp of the block in which the transaction was included
     */
    event Refund(uint256 indexed escrowId, Escrow escrow, uint256 blockTime);

    /// The contructor initiates immutable and governed references to other contracts
    constructor(
        address unicrowClaim_,
        address unicrowArbitrator_,
        address unicrowDispute_,
        address governanceAddress_
    ) {
        unicrowArbitrator = IUnicrowArbitrator(unicrowArbitrator_);
        unicrowClaim = IUnicrowClaim(unicrowClaim_);
        unicrowDispute = UnicrowDispute(unicrowDispute_);
        governanceAddress = governanceAddress_;
    }

    /// Check that the governance contract is calling this
    modifier onlyGovernance() {
        require(_msgSender() == governanceAddress);
        _;
    }

    /// Check that Unicrow's claim contract is calling this
    modifier isUnicrowClaim() {
        require(_msgSender() == address(unicrowClaim));
        _;
    }

    /// Check that arbitration or dispute contract is calling this
    modifier isUnicrowArbitratorOrDispute() {
        require(_msgSender() == address(unicrowArbitrator) || _msgSender() == address(unicrowDispute));
        _;
    }

    /// Check that dispute contract is calling this
    modifier isUnicrowDispute() {
        require(_msgSender() == address(unicrowDispute));
        _;
    }

    receive() external payable {}

    /// @inheritdoc IUnicrow
    function pay(
        DepositInput memory data,
        address arbitrator,
        uint16 arbitratorFee
    ) external override payable nonReentrant {
        uint256 escrowId = escrowIdCounter.current();

        address buyer = _msgSender();

        require(escrows[escrowId].buyer == address(0), "0-001");
        require(data.seller != address(0), "0-002");
        require(buyer != data.seller, "0-003");

        if (msg.value != 0) {
            require(data.amount == msg.value);
        }

        if (arbitrator != address(0)) {
            unicrowArbitrator.setArbitrator(escrowId, arbitrator, arbitratorFee);
        }

        uint16 escrowFee_ = escrowFee;

        uint16[4] memory split = [0, 10000, data.marketplaceFee, escrowFee_];
        int16[2] memory consensus = [int16(0), int16(1)];

        Escrow memory escrow = Escrow({
            buyer: buyer,
            seller: data.seller,
            currency: data.currency,
            marketplace: data.marketplace,
            marketplaceFee: data.marketplaceFee,
            claimed: 0,
            split: split,
            consensus: consensus,
            challengeExtension: uint64(data.challengeExtension > 0 ? data.challengeExtension : data.challengePeriod),
            challengePeriodStart: uint64(block.timestamp), //challenge start
            challengePeriodEnd: uint64(block.timestamp + data.challengePeriod), //chalenge end
            amount: data.amount
        });

        if (data.currency != address(0)) {
            SafeERC20.safeTransferFrom(
                IERC20(data.currency),
                buyer,
                address(this),
                data.amount
            );
        }

        escrows[escrowId] = escrow;

        // Increment escrowId
        escrowIdCounter.increment();

        emit Pay(escrowId, block.timestamp, escrow, arbitrator, arbitratorFee, data.challengePeriod);
    }

    /// @inheritdoc IUnicrow
    function refund(uint256 escrowId) external override nonReentrant {
        address sender = _msgSender();
        Escrow memory escrow = escrows[escrowId];

        require(sender == escrow.seller, "1-011");

        require(escrow.claimed == 0, "0-005");

        escrow.split[WHO_BUYER] = 10000;
        escrow.split[WHO_SELLER] = 0;
        escrow.split[WHO_MARKETPLACE] = 0;
        escrow.split[WHO_CROW] = 0;

        escrow.consensus[0] = abs8(escrow.consensus[0]) == int8(0)
            ? int8(1)
            : abs8(escrow.consensus[0]);
        escrow.consensus[1] = abs8(escrow.consensus[1]);

        escrows[escrowId].split = escrow.split;
        escrows[escrowId].consensus = escrow.consensus;

        if (address(escrow.currency) == address(0)) {
            (bool success, ) = escrow.buyer.call{value: escrow.amount}("");
            require(success, "1-012");
        } else {
            SafeERC20.safeTransfer(
                IERC20(escrow.currency),
                escrow.buyer,
                escrow.amount
            );
        }

        escrows[escrowId].claimed = 1;

        escrow.claimed = 1;

        emit Refund(escrowId, escrow, block.timestamp);
    }

    /// @inheritdoc IUnicrow
    function release(uint256 escrowId) external override nonReentrant {
        address sender = _msgSender();
        Escrow memory escrow = escrows[escrowId];

        require(sender == escrow.buyer, "1-025");

        int16 currentConsensus = abs8(escrow.consensus[WHO_BUYER]) == 0
            ? int16(1)
            : abs8(escrow.consensus[WHO_BUYER]);

        escrow.consensus[WHO_BUYER] = currentConsensus;
        escrow.consensus[WHO_SELLER] = abs8(escrow.consensus[WHO_SELLER]);

        escrows[escrowId].consensus = escrow.consensus;

        uint256[5] memory amounts = unicrowClaim.singleClaim(escrowId);

        emit Release(escrowId, block.timestamp, escrow, amounts);
    }

    /// @inheritdoc IUnicrow
    function challenge(
        uint256 escrowId,
        uint16[4] memory split,
        int16[2] memory consensus,
        uint64 challengeStart,
        uint64 challengeEnd
    ) external override isUnicrowDispute {
        escrows[escrowId].split = split;
        escrows[escrowId].consensus = consensus;
        escrows[escrowId].challengePeriodStart = challengeStart;
        escrows[escrowId].challengePeriodEnd = challengeEnd;
    }

    /// @inheritdoc IUnicrow
    function updateEscrowFee(uint16 fee) external override onlyGovernance {
        require(fee <= 100, "0-008");
        escrowFee = fee;
    }

    /// @inheritdoc IUnicrow
    function updateGovernance(address governance) external override onlyGovernance {
        governanceAddress = governance;
    }

    /// @notice Return basic escrow information (excl. arbitration information, settlement offers, and token details)
    /// @param escrowId ID of the escrow to be returned
    function getEscrow(uint256 escrowId)
        external
        override
        view
        returns (Escrow memory)
    {
        return escrows[escrowId];
    }

    /// @notice Return all the escrow data (incl. arbitration information, settlement offers, and token details)
    /// @param escrowId ID of the escrow to be returned
    function getAllEscrowData(uint256 escrowId)
        external
        view
        returns (Data memory)
    {
        address currency = escrows[escrowId].currency;

        Token memory token = Token({
            address_: currency,
            decimals: currency == address(0) ? 18 : ERC20(currency).decimals(),
            symbol: currency == address(0) ? "ETH" : ERC20(currency).symbol()
        });

        Arbitrator memory arbitrator = unicrowArbitrator.getArbitratorData(escrowId);
        Settlement memory settlement = unicrowDispute.getSettlementDetails(escrowId);

        return Data(
            escrows[escrowId],
            arbitrator,
            settlement,
            token
        );
    }

    /// @dev Transfer ether or token from this contract's treasury. Can be called only by Unicrow's Claim contract
    function sendEscrowShare(
        address to,
        uint256 amount,
        address currency
    ) public isUnicrowClaim {
         if(currency == address(0)) {
            (bool success, ) = to.call{value: amount}("");
            require(success, "1-012");
         } else {
            SafeERC20.safeTransfer(
                IERC20(currency),
                to,
                amount
            );
         }
     }

    /// @inheritdoc IUnicrow
    function settle(
        uint256 escrowId,
        uint16[4] memory split,
        int16[2] memory consensus
    ) external override isUnicrowArbitratorOrDispute {
        escrows[escrowId].split = split;
        escrows[escrowId].consensus = consensus;
    }

    /// @inheritdoc IUnicrow
    function splitCalculation(
        uint16[5] memory currentSplit
    ) external pure override returns (uint16[] memory) {
         uint16[] memory split = new uint16[](4);

        uint16 calculatedArbitratorFee;

        if (currentSplit[WHO_CROW] > 0) {
            unchecked {
                split[WHO_CROW] = uint16(
                    uint256(currentSplit[WHO_CROW])
                        .mul(currentSplit[WHO_SELLER])
                        .div(_100_PCT_IN_BIPS)
                );
            }
        }

        if (currentSplit[WHO_MARKETPLACE] > 0) {
            unchecked {
                split[WHO_MARKETPLACE] = uint16(
                    uint256(currentSplit[WHO_MARKETPLACE])
                        .mul(currentSplit[WHO_SELLER])
                        .div(_100_PCT_IN_BIPS)
                );
            }
        }

        unchecked {
            calculatedArbitratorFee = uint16(
                uint256(currentSplit[WHO_ARBITRATOR]).mul(currentSplit[WHO_SELLER]).div(
                    _100_PCT_IN_BIPS
                )
            );
        }

        unchecked {
            split[WHO_SELLER] = currentSplit[WHO_SELLER] - split[WHO_CROW] - split[WHO_MARKETPLACE] - calculatedArbitratorFee;
            split[WHO_BUYER] = currentSplit[WHO_BUYER];
        }

        return split;
    }

    /// @inheritdoc IUnicrow
    function setClaimed(uint256 escrowId) external override isUnicrowClaim {
        escrows[escrowId].claimed = 1;
    }
}