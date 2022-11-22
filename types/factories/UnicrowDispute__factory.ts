/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UnicrowDispute,
  UnicrowDisputeInterface,
} from "../UnicrowDispute";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "unicrow_",
        type: "address",
      },
      {
        internalType: "address",
        name: "unicrowClaim_",
        type: "address",
      },
      {
        internalType: "address",
        name: "unicrowArbitrator_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "escrowId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "challengeExtension",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "challengePeriodStart",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "marketplace",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "marketplaceFee",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "challengePeriodEnd",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "claimed",
            type: "uint16",
          },
          {
            internalType: "int16[2]",
            name: "consensus",
            type: "int16[2]",
          },
          {
            internalType: "uint16[4]",
            name: "split",
            type: "uint16[4]",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Escrow",
        name: "escrow",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint16[2]",
        name: "latestSettlementOffer",
        type: "uint16[2]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[5]",
        name: "amounts",
        type: "uint256[5]",
      },
    ],
    name: "ApproveOffer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "escrowId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "challengeExtension",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "challengePeriodStart",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "marketplace",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "marketplaceFee",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "challengePeriodEnd",
            type: "uint64",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "claimed",
            type: "uint16",
          },
          {
            internalType: "int16[2]",
            name: "consensus",
            type: "int16[2]",
          },
          {
            internalType: "uint16[4]",
            name: "split",
            type: "uint16[4]",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Escrow",
        name: "escrow",
        type: "tuple",
      },
    ],
    name: "Challenge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "escrowId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16[2]",
        name: "latestSettlementOffer",
        type: "uint16[2]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "latestSettlementOfferBy",
        type: "address",
      },
    ],
    name: "SettlementOffer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "escrowId",
        type: "uint256",
      },
      {
        internalType: "uint16[2]",
        name: "validation",
        type: "uint16[2]",
      },
    ],
    name: "approveSettlement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "escrowId",
        type: "uint256",
      },
    ],
    name: "challenge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "escrowId",
        type: "uint256",
      },
    ],
    name: "getSettlementDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "latestSettlementOfferBy",
            type: "address",
          },
          {
            internalType: "uint16[2]",
            name: "latestSettlementOffer",
            type: "uint16[2]",
          },
        ],
        internalType: "struct Settlement",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "latestSettlementOffer",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "latestSettlementOfferBy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "escrowId",
        type: "uint256",
      },
      {
        internalType: "uint16[2]",
        name: "newSplit",
        type: "uint16[2]",
      },
    ],
    name: "offerSettlement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unicrow",
    outputs: [
      {
        internalType: "contract Unicrow",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unicrowArbitrator",
    outputs: [
      {
        internalType: "contract IUnicrowArbitrator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unicrowClaim",
    outputs: [
      {
        internalType: "contract IUnicrowClaim",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162002f4138038062002f41833981810160405281019062000037919062000104565b60016000819055508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505050620001b3565b600081519050620000fe8162000199565b92915050565b60008060006060848603121562000120576200011f62000194565b5b60006200013086828701620000ed565b93505060206200014386828701620000ed565b92505060406200015686828701620000ed565b9150509250925092565b60006200016d8262000174565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620001a48162000160565b8114620001b057600080fd5b50565b60805160601c60a05160601c60c05160601c612d2b62000216600039600061021501526000818161087f01526115550152600081816102390152818161029e015281816107e9015281816109cf0152818161108101526112030152612d2b6000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80639f8621b8116100665780639f8621b814610134578063ab82d9a014610150578063c57086451461016c578063e9db7d7914610188578063fe5e2969146101a657610093565b8063325369f61461009857806349c4920f146100c85780636e4e2934146100e65780637e684d0514610104575b600080fd5b6100b260048036038101906100ad9190611c25565b6101d6565b6040516100bf91906124f7565b60405180910390f35b6100d0610213565b6040516100dd91906122e2565b60405180910390f35b6100ee610237565b6040516100fb9190612318565b60405180910390f35b61011e60048036038101906101199190611bb8565b61025b565b60405161012b91906122c7565b60405180910390f35b61014e60048036038101906101499190611be5565b61028e565b005b61016a60048036038101906101659190611bb8565b610971565b005b61018660048036038101906101819190611be5565b6111a5565b005b610190611553565b60405161019d91906122fd565b60405180910390f35b6101c060048036038101906101bb9190611bb8565b611577565b6040516101cd91906124dc565b60405180910390f35b600260205281600052604060002081600281106101f257600080fd5b60109182820401919006600202915091509054906101000a900461ffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610298611660565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596856040518263ffffffff1660e01b81526004016102f59190612512565b6102006040518083038186803b15801561030e57600080fd5b505afa158015610322573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103469190611b5d565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806103b55750806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6103f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103eb90612373565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610497576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048e906123f3565b60405180910390fd5b6001600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610539576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610530906123b3565b60405180910390fd5b6000600260008681526020019081526020016000206002806020026040519081016040528092919082600280156105ad576020028201916000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116105745790505b5050505050905080600060ff16600281106105cb576105ca612a3c565b5b602002015161ffff1684600060ff16600281106105eb576105ea612a3c565b5b6020020160208101906105fe9190611b8b565b61ffff1614801561065a575080600160ff166002811061062157610620612a3c565b5b602002015161ffff1684600160ff166002811061064157610640612a3c565b5b6020020160208101906106549190611b8b565b61ffff16145b610699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069090612413565b60405180910390fd5b6000826101400151905081600060ff16600281106106ba576106b9612a3c565b5b602002015181600060ff16600481106106d6576106d5612a3c565b5b602002019061ffff16908161ffff168152505081600160ff1660028110610700576106ff612a3c565b5b602002015181600160ff166004811061071c5761071b612a3c565b5b602002019061ffff16908161ffff1681525050600161075a846101200151600060ff16600281106107505761074f612a3c565b5b6020020151611668565b61076491906127d0565b836101200151600060ff16600281106107805761077f612a3c565b5b602002019060010b908160010b815250506107ba836101200151600160ff16600281106107b0576107af612a3c565b5b6020020151611668565b836101200151600160ff16600281106107d6576107d5612a3c565b5b602002019060010b908160010b815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166364166e6387838661012001516040518463ffffffff1660e01b815260040161084993929190612564565b600060405180830381600087803b15801561086357600080fd5b505af1158015610877573d6000803e3d6000fd5b5050505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b34291a6886040518263ffffffff1660e01b81526004016108d69190612512565b60a060405180830381600087803b1580156108f057600080fd5b505af1158015610904573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109289190611b30565b9050867f8746324d5672b242169429b77e7b4504a32504d259a5db1f170fdc4babbe1ce1858542856040516109609493929190612493565b60405180910390a250505050505050565b600260005414156109b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ae90612433565b60405180910390fd5b600260008190555060006109c9611660565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596846040518263ffffffff1660e01b8152600401610a269190612512565b6102006040518083038186803b158015610a3f57600080fd5b505afa158015610a53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a779190611b5d565b9050806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480610ae65750806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b610b25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1c90612373565b60405180910390fd5b6000816101200151600160ff1660028110610b4357610b42612a3c565b5b602002015160010b131580610b7c57506000816101200151600060ff1660028110610b7157610b70612a3c565b5b602002015160010b13155b610bbb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb290612393565b60405180910390fd5b8060c0015167ffffffffffffffff164210610c0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c02906123d3565b60405180910390fd5b806060015167ffffffffffffffff164211610c5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5290612353565b60405180910390fd5b806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580610cbe57506000816101200151600060ff1660028110610cb357610cb2612a3c565b5b602002015160010b13155b610cfd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf490612453565b60405180910390fd5b806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580610d6057506000816101200151600160ff1660028110610d5557610d54612a3c565b5b602002015160010b13155b610d9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9690612473565b60405180910390fd5b806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f0057612710816101400151600060ff1660048110610df657610df5612a3c565b5b602002019061ffff16908161ffff16815250506000816101400151600160ff1660048110610e2757610e26612a3c565b5b602002019061ffff16908161ffff16815250506001610e65826101200151600060ff1660028110610e5b57610e5a612a3c565b5b6020020151611668565b610e6f91906127d0565b816101200151600060ff1660028110610e8b57610e8a612a3c565b5b602002019060010b908160010b81525050610ec5816101200151600160ff1660028110610ebb57610eba612a3c565b5b6020020151611668565b610ece906129c4565b816101200151600160ff1660028110610eea57610ee9612a3c565b5b602002019060010b908160010b8152505061105e565b806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561105d57612710816101400151600160ff1660048110610f5757610f56612a3c565b5b602002019061ffff16908161ffff16815250506000816101400151600060ff1660048110610f8857610f87612a3c565b5b602002019061ffff16908161ffff1681525050610fc4816101200151600060ff1660028110610fba57610fb9612a3c565b5b6020020151611668565b610fcd906129c4565b816101200151600060ff1660028110610fe957610fe8612a3c565b5b602002019060010b908160010b815250506001611025826101200151600160ff166002811061101b5761101a612a3c565b5b6020020151611668565b61102f91906127d0565b816101200151600160ff166002811061104b5761104a612a3c565b5b602002019060010b908160010b815250505b5b60008160c001519050600082602001518360c0015161107d919061287e565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630a6b25f28685610140015186610120015186866040518663ffffffff1660e01b81526004016110ea95949392919061259b565b600060405180830381600087803b15801561110457600080fd5b505af1158015611118573d6000803e3d6000fd5b5050505081836060019067ffffffffffffffff16908167ffffffffffffffff1681525050808360c0019067ffffffffffffffff16908167ffffffffffffffff1681525050847f1bf91df05bbf296f1592f5d8d9f79322ee89b9a7d806d8819f62baa78ba60a26428560405161118e9291906125f0565b60405180910390a250505050600160008190555050565b600260005414156111eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e290612433565b60405180910390fd5b600260008190555060006111fd611660565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637d19e596856040518263ffffffff1660e01b815260040161125a9190612512565b6102006040518083038186803b15801561127357600080fd5b505afa158015611287573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ab9190611b5d565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148061131a5750806040015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b611359576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135090612373565b60405180910390fd5b6000816101200151600160ff166002811061137757611376612a3c565b5b602002015160010b1315806113b057506000816101200151600060ff16600281106113a5576113a4612a3c565b5b602002015160010b13155b6113ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e690612393565b60405180910390fd5b61271083600160ff166002811061140957611408612a3c565b5b60200201602081019061141c9190611b8b565b84600060ff166002811061143357611432612a3c565b5b6020020160208101906114469190611b8b565b6114509190612846565b61ffff1614611494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148b90612333565b60405180910390fd5b816001600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826002600086815260200190815260200160002090600261150892919061168d565b50837fad77a7f72aee179b5a343e49e8b5cdf52d31d42bb43df14f33d26ccb08d0a66e42853360405161153d9392919061252d565b60405180910390a2505060016000819055505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61157f61172e565b600060405180604001604052806001600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002600086815260200190815260200160002060028060200260405190810160405280929190826002801561164d576020028201916000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116116145790505b5050505050815250905080915050919050565b600033905090565b6000808260010b1215611684578161167f906129c4565b611686565b815b9050919050565b826002600f0160109004810192821561171d5791602002820160005b838211156116ed57833561ffff1683826101000a81548161ffff021916908361ffff16021790555092602001926002016020816001010492830192600103026116a9565b801561171b5782816101000a81549061ffff02191690556002016020816001010492830192600103026116ed565b505b50905061172a9190611764565b5090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200161175e611781565b81525090565b5b8082111561177d576000816000905550600101611765565b5090565b6040518060400160405280600290602082028036833780820191505090505090565b60006117b66117b18461263f565b61261a565b905080828560208602820111156117d0576117cf612aa4565b5b60005b8581101561180057816117e68882611990565b8452602084019350602083019250506001810190506117d3565b5050509392505050565b600061181d61181884612665565b61261a565b9050808285602086028201111561183757611836612aa4565b5b60005b85811015611867578161184d8882611adc565b84526020840193506020830192505060018101905061183a565b5050509392505050565b600061188461187f8461268b565b61261a565b9050808285602086028201111561189e5761189d612aa4565b5b60005b858110156118ce57816118b48882611b06565b8452602084019350602083019250506001810190506118a1565b5050509392505050565b6000815190506118e781612c82565b92915050565b600082601f83011261190257611901612a9a565b5b600261190f8482856117a3565b91505092915050565b60008190508260206002028201111561193457611933612aa4565b5b92915050565b600082601f83011261194f5761194e612a9a565b5b600461195c84828561180a565b91505092915050565b600082601f83011261197a57611979612a9a565b5b6005611987848285611871565b91505092915050565b60008151905061199f81612c99565b92915050565b600061020082840312156119bc576119bb612a9f565b5b6119c761018061261a565b905060006119d7848285016118d8565b60008301525060206119eb84828501611b1b565b60208301525060406119ff848285016118d8565b6040830152506060611a1384828501611b1b565b6060830152506080611a27848285016118d8565b60808301525060a0611a3b84828501611b06565b60a08301525060c0611a4f84828501611b1b565b60c08301525060e0611a63848285016118d8565b60e083015250610100611a7884828501611adc565b61010083015250610120611a8e848285016118ed565b61012083015250610160611aa48482850161193a565b610140830152506101e0611aba84828501611b06565b6101608301525092915050565b600081359050611ad681612cb0565b92915050565b600081519050611aeb81612cb0565b92915050565b600081359050611b0081612cc7565b92915050565b600081519050611b1581612cc7565b92915050565b600081519050611b2a81612cde565b92915050565b600060a08284031215611b4657611b45612aa9565b5b6000611b5484828501611965565b91505092915050565b60006102008284031215611b7457611b73612aa9565b5b6000611b82848285016119a5565b91505092915050565b600060208284031215611ba157611ba0612aa9565b5b6000611baf84828501611ac7565b91505092915050565b600060208284031215611bce57611bcd612aa9565b5b6000611bdc84828501611af1565b91505092915050565b60008060608385031215611bfc57611bfb612aa9565b5b6000611c0a85828601611af1565b9250506020611c1b85828601611918565b9150509250929050565b60008060408385031215611c3c57611c3b612aa9565b5b6000611c4a85828601611af1565b9250506020611c5b85828601611af1565b9150509250929050565b6000611c718383611fb8565b60208301905092915050565b6000611c89838361226d565b60208301905092915050565b6000611ca1838361228b565b60208301905092915050565b611cb6816128bc565b82525050565b611cc5816128bc565b82525050565b611cd4816126e3565b611cde818461275b565b9250611ce9826126b1565b8060005b83811015611d1a578151611d018782611c65565b9650611d0c8361271a565b925050600181019050611ced565b505050505050565b611d2b816126e3565b611d358184612766565b9250611d40826126b1565b8060005b83811015611d71578151611d588782611c65565b9650611d638361271a565b925050600181019050611d44565b505050505050565b611d82816126ee565b611d8c818461277c565b9250611d97826126bb565b8060005b83811015611dd057611dad82846127b9565b611db78782611c7d565b9650611dc283612727565b925050600181019050611d9b565b505050505050565b611de1816126f9565b611deb8184612771565b9250611df6826126c5565b8060005b83811015611e27578151611e0e8782611c7d565b9650611e1983612734565b925050600181019050611dfa565b505050505050565b611e38816126f9565b611e42818461277c565b9250611e4d826126c5565b8060005b83811015611e7e578151611e658782611c7d565b9650611e7083612734565b925050600181019050611e51565b505050505050565b611e8f81612704565b611e998184612787565b9250611ea4826126cf565b8060005b83811015611ed5578151611ebc8782611c7d565b9650611ec783612741565b925050600181019050611ea8565b505050505050565b611ee681612704565b611ef08184612792565b9250611efb826126cf565b8060005b83811015611f2c578151611f138782611c7d565b9650611f1e83612741565b925050600181019050611eff565b505050505050565b611f3d8161270f565b611f47818461279d565b9250611f52826126d9565b8060005b83811015611f83578151611f6a8782611c95565b9650611f758361274e565b925050600181019050611f56565b505050505050565b611f9481612927565b82525050565b611fa381612939565b82525050565b611fb28161294b565b82525050565b611fc1816128ce565b82525050565b6000611fd46005836127a8565b9150611fdf82612abf565b602082019050919050565b6000611ff76005836127a8565b915061200282612ae8565b602082019050919050565b600061201a6005836127a8565b915061202582612b11565b602082019050919050565b600061203d6005836127a8565b915061204882612b3a565b602082019050919050565b60006120606005836127a8565b915061206b82612b63565b602082019050919050565b60006120836005836127a8565b915061208e82612b8c565b602082019050919050565b60006120a66005836127a8565b91506120b182612bb5565b602082019050919050565b60006120c96005836127a8565b91506120d482612bde565b602082019050919050565b60006120ec601f836127a8565b91506120f782612c07565b602082019050919050565b600061210f6005836127a8565b915061211a82612c30565b602082019050919050565b60006121326005836127a8565b915061213d82612c59565b602082019050919050565b6102008201600082015161215f6000850182611cad565b50602082015161217260208501826122a9565b5060408201516121856040850182611cad565b50606082015161219860608501826122a9565b5060808201516121ab6080850182611cad565b5060a08201516121be60a085018261228b565b5060c08201516121d160c08501826122a9565b5060e08201516121e460e0850182611cad565b506101008201516121f961010085018261226d565b5061012082015161220e610120850182611ccb565b50610140820151612223610160850182611e86565b506101608201516122386101e085018261228b565b50505050565b6060820160008201516122546000850182611cad565b5060208201516122676020850182611dd8565b50505050565b612276816128db565b82525050565b612285816128db565b82525050565b61229481612909565b82525050565b6122a381612909565b82525050565b6122b281612913565b82525050565b6122c181612913565b82525050565b60006020820190506122dc6000830184611cbc565b92915050565b60006020820190506122f76000830184611f8b565b92915050565b60006020820190506123126000830184611f9a565b92915050565b600060208201905061232d6000830184611fa9565b92915050565b6000602082019050818103600083015261234c81611fc7565b9050919050565b6000602082019050818103600083015261236c81611fea565b9050919050565b6000602082019050818103600083015261238c8161200d565b9050919050565b600060208201905081810360008301526123ac81612030565b9050919050565b600060208201905081810360008301526123cc81612053565b9050919050565b600060208201905081810360008301526123ec81612076565b9050919050565b6000602082019050818103600083015261240c81612099565b9050919050565b6000602082019050818103600083015261242c816120bc565b9050919050565b6000602082019050818103600083015261244c816120df565b9050919050565b6000602082019050818103600083015261246c81612102565b9050919050565b6000602082019050818103600083015261248c81612125565b9050919050565b6000610300820190506124a96000830187612148565b6124b7610200830186611e2f565b6124c561024083018561229a565b6124d3610260830184611f34565b95945050505050565b60006060820190506124f1600083018461223e565b92915050565b600060208201905061250c600083018461227c565b92915050565b6000602082019050612527600083018461229a565b92915050565b6000608082019050612542600083018661229a565b61254f6020830185611d79565b61255c6060830184611cbc565b949350505050565b600060e082019050612579600083018661229a565b6125866020830185611edd565b61259360a0830184611d22565b949350505050565b6000610120820190506125b1600083018861229a565b6125be6020830187611edd565b6125cb60a0830186611d22565b6125d860e08301856122b8565b6125e66101008301846122b8565b9695505050505050565b600061022082019050612606600083018561229a565b6126136020830184612148565b9392505050565b6000612624612635565b90506126308282612993565b919050565b6000604051905090565b600067ffffffffffffffff82111561265a57612659612a6b565b5b602082029050919050565b600067ffffffffffffffff8211156126805761267f612a6b565b5b602082029050919050565b600067ffffffffffffffff8211156126a6576126a5612a6b565b5b602082029050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b600060029050919050565b600060029050919050565b600060029050919050565b600060049050919050565b600060059050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b60006127c86020840184611ac7565b905092915050565b60006127db826128ce565b91506127e6836128ce565b925081617fff0383136000831215161561280357612802612a0d565b5b817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff800003831260008312161561283b5761283a612a0d565b5b828201905092915050565b6000612851826128db565b915061285c836128db565b92508261ffff0382111561287357612872612a0d565b5b828201905092915050565b600061288982612913565b915061289483612913565b92508267ffffffffffffffff038211156128b1576128b0612a0d565b5b828201905092915050565b60006128c7826128e9565b9050919050565b60008160010b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b60006129328261295d565b9050919050565b60006129448261295d565b9050919050565b60006129568261296f565b9050919050565b600061296882612981565b9050919050565b600061297a82612981565b9050919050565b600061298c826128e9565b9050919050565b61299c82612aae565b810181811067ffffffffffffffff821117156129bb576129ba612a6b565b5b80604052505050565b60006129cf826128ce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8000821415612a0257612a01612a0d565b5b816000039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f312d303037000000000000000000000000000000000000000000000000000000600082015250565b7f312d303139000000000000000000000000000000000000000000000000000000600082015250565b7f312d303039000000000000000000000000000000000000000000000000000000600082015250565b7f312d303035000000000000000000000000000000000000000000000000000000600082015250565b7f312d303230000000000000000000000000000000000000000000000000000000600082015250565b7f312d303136000000000000000000000000000000000000000000000000000000600082015250565b7f312d303137000000000000000000000000000000000000000000000000000000600082015250565b7f312d303138000000000000000000000000000000000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f312d303134000000000000000000000000000000000000000000000000000000600082015250565b7f312d303135000000000000000000000000000000000000000000000000000000600082015250565b612c8b816128bc565b8114612c9657600080fd5b50565b612ca2816128ce565b8114612cad57600080fd5b50565b612cb9816128db565b8114612cc457600080fd5b50565b612cd081612909565b8114612cdb57600080fd5b50565b612ce781612913565b8114612cf257600080fd5b5056fea26469706673582212208ade3992dfcf3c0b62db54810edf155e2c5de7a6aa934972763abc655f64d39d64736f6c63430008070033";

type UnicrowDisputeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnicrowDisputeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UnicrowDispute__factory extends ContractFactory {
  constructor(...args: UnicrowDisputeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UnicrowDispute";
  }

  deploy(
    unicrow_: string,
    unicrowClaim_: string,
    unicrowArbitrator_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UnicrowDispute> {
    return super.deploy(
      unicrow_,
      unicrowClaim_,
      unicrowArbitrator_,
      overrides || {}
    ) as Promise<UnicrowDispute>;
  }
  getDeployTransaction(
    unicrow_: string,
    unicrowClaim_: string,
    unicrowArbitrator_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      unicrow_,
      unicrowClaim_,
      unicrowArbitrator_,
      overrides || {}
    );
  }
  attach(address: string): UnicrowDispute {
    return super.attach(address) as UnicrowDispute;
  }
  connect(signer: Signer): UnicrowDispute__factory {
    return super.connect(signer) as UnicrowDispute__factory;
  }
  static readonly contractName: "UnicrowDispute";
  public readonly contractName: "UnicrowDispute";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnicrowDisputeInterface {
    return new utils.Interface(_abi) as UnicrowDisputeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UnicrowDispute {
    return new Contract(address, _abi, signerOrProvider) as UnicrowDispute;
  }
}
