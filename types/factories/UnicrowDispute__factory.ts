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
            internalType: "uint64",
            name: "challengePeriodEnd",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "challengeExtension",
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
            internalType: "uint64",
            name: "challengePeriodEnd",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "challengeExtension",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002d0c38038062002d0c833981810160405281019062000037919062000122565b600160008190555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620001d1565b6000815190506200011c81620001b7565b92915050565b6000806000606084860312156200013e576200013d620001b2565b5b60006200014e868287016200010b565b935050602062000161868287016200010b565b925050604062000174868287016200010b565b9150509250925092565b60006200018b8262000192565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b620001c2816200017e565b8114620001ce57600080fd5b50565b612b2b80620001e16000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063325369f6146100675780637e684d05146100975780639f8621b8146100c7578063ab82d9a0146100e3578063c5708645146100ff578063fe5e29691461011b575b600080fd5b610081600480360381019061007c9190611b81565b61014b565b60405161008e9190612376565b60405180910390f35b6100b160048036038101906100ac9190611b14565b610188565b6040516100be9190612197565b60405180910390f35b6100e160048036038101906100dc9190611b41565b6101bb565b005b6100fd60048036038101906100f89190611b14565b6108c8565b005b61011960048036038101906101149190611b41565b611100565b005b61013560048036038101906101309190611b14565b611494565b604051610142919061235b565b60405180910390f35b6005602052816000526040600020816002811061016757600080fd5b60109182820401919006600202915091509054906101000a900461ffff1681565b60046020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006101c561157d565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637d19e596856040518263ffffffff1660e01b81526004016102249190612391565b6102006040518083038186803b15801561023d57600080fd5b505afa158015610251573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102759190611ae6565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806102e45750806020015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b610323576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031a906121f2565b60405180910390fd5b6004600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156103c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bc90612232565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166004600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045f90612272565b60405180910390fd5b6000600560008681526020019081526020016000206002806020026040519081016040528092919082600280156104dc576020028201916000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116104a35790505b5050505050905080600060ff16600281106104fa576104f961283c565b5b602002015161ffff1684600060ff166002811061051a5761051961283c565b5b602002015161ffff1614801561056d575080600160ff16600281106105425761054161283c565b5b602002015161ffff1684600160ff16600281106105625761056161283c565b5b602002015161ffff16145b6105ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a390612292565b60405180910390fd5b600082610140015190506000806105e2856101200151600060ff16600281106105d8576105d761283c565b5b6020020151611585565b60010b14610624576001610615856101200151600060ff166002811061060b5761060a61283c565b5b6020020151611585565b61061f919061263c565b610627565b60015b905082600060ff16600281106106405761063f61283c565b5b602002015182600060ff166004811061065c5761065b61283c565b5b602002019061ffff16908161ffff168152505082600160ff16600281106106865761068561283c565b5b602002015182600160ff16600481106106a2576106a161283c565b5b602002019061ffff16908161ffff168152505080846101200151600060ff16600281106106d2576106d161283c565b5b602002019060010b908160010b8152505061070c846101200151600160ff16600281106107025761070161283c565b5b6020020151611585565b846101200151600160ff16600281106107285761072761283c565b5b602002019060010b908160010b81525050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166364166e6388848761012001516040518463ffffffff1660e01b815260040161079d939291906123e3565b600060405180830381600087803b1580156107b757600080fd5b505af11580156107cb573d6000803e3d6000fd5b505050506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b34291a6896040518263ffffffff1660e01b815260040161082c9190612391565b60a060405180830381600087803b15801561084657600080fd5b505af115801561085a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087e9190611ab9565b9050877f4ddd0d366374522f804ecaa3ad96835645d0b72cff36124aef9df54c9cb3baa0868642856040516108b69493929190612312565b60405180910390a25050505050505050565b6002600054141561090e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610905906122b2565b60405180910390fd5b6002600081905550600061092061157d565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637d19e596846040518263ffffffff1660e01b815260040161097f9190612391565b6102006040518083038186803b15801561099857600080fd5b505afa1580156109ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d09190611ae6565b9050806020015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480610a3f5750806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b610a7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a75906121f2565b60405180910390fd5b6000816101200151600160ff1660028110610a9c57610a9b61283c565b5b602002015160010b131580610ad557506000816101200151600060ff1660028110610aca57610ac961283c565b5b602002015160010b13155b610b14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0b90612212565b60405180910390fd5b806060015167ffffffffffffffff164210610b64576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5b90612252565b60405180910390fd5b806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580610bc757506000816101200151600060ff1660028110610bbc57610bbb61283c565b5b602002015160010b13155b610c06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfd906122d2565b60405180910390fd5b806020015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141580610c6957506000816101200151600160ff1660028110610c5e57610c5d61283c565b5b602002015160010b13155b610ca8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9f906122f2565b60405180910390fd5b806040015167ffffffffffffffff164211610cf8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cef906121d2565b60405180910390fd5b806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e5957612710816101400151600060ff1660048110610d4f57610d4e61283c565b5b602002019061ffff16908161ffff16815250506000816101400151600160ff1660048110610d8057610d7f61283c565b5b602002019061ffff16908161ffff16815250506001610dbe826101200151600060ff1660028110610db457610db361283c565b5b6020020151611585565b610dc8919061263c565b816101200151600060ff1660028110610de457610de361283c565b5b602002019060010b908160010b81525050610e1e816101200151600160ff1660028110610e1457610e1361283c565b5b6020020151611585565b610e27906127c4565b816101200151600160ff1660028110610e4357610e4261283c565b5b602002019060010b908160010b81525050610fb7565b806020015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fb657612710816101400151600160ff1660048110610eb057610eaf61283c565b5b602002019061ffff16908161ffff16815250506000816101400151600060ff1660048110610ee157610ee061283c565b5b602002019061ffff16908161ffff1681525050610f1d816101200151600060ff1660028110610f1357610f1261283c565b5b6020020151611585565b610f26906127c4565b816101200151600060ff1660028110610f4257610f4161283c565b5b602002019060010b908160010b815250506001610f7e826101200151600160ff1660028110610f7457610f7361283c565b5b6020020151611585565b610f88919061263c565b816101200151600160ff1660028110610fa457610fa361283c565b5b602002019060010b908160010b815250505b5b600081606001519050600082608001518360600151610fd691906126ea565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630a6b25f28685610140015186610120015186866040518663ffffffff1660e01b815260040161104595949392919061241a565b600060405180830381600087803b15801561105f57600080fd5b505af1158015611073573d6000803e3d6000fd5b5050505081836040019067ffffffffffffffff16908167ffffffffffffffff168152505080836060019067ffffffffffffffff16908167ffffffffffffffff1681525050847f77b7286d957f26f537d326e5e4827ce9e7301d2c888d53fc985a93da2f0a195042856040516110e992919061246f565b60405180910390a250505050600160008190555050565b60026000541415611146576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113d906122b2565b60405180910390fd5b6002600081905550600061115861157d565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637d19e596856040518263ffffffff1660e01b81526004016111b79190612391565b6102006040518083038186803b1580156111d057600080fd5b505afa1580156111e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112089190611ae6565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806112775750806020015173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b6112b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ad906121f2565b60405180910390fd5b6000816101200151600160ff16600281106112d4576112d361283c565b5b602002015160010b13158061130d57506000816101200151600060ff16600281106113025761130161283c565b5b602002015160010b13155b61134c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134390612212565b60405180910390fd5b61271083600160ff16600281106113665761136561283c565b5b602002015184600060ff16600281106113825761138161283c565b5b602002015161139191906126b2565b61ffff16146113d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113cc906121b2565b60405180910390fd5b816004600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560008681526020019081526020016000209060026114499291906115aa565b50837fad77a7f72aee179b5a343e49e8b5cdf52d31d42bb43df14f33d26ccb08d0a66e42853360405161147e939291906123ac565b60405180910390a2505060016000819055505050565b61149c611647565b600060405180604001604052806004600086815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005600086815260200190815260200160002060028060200260405190810160405280929190826002801561156a576020028201916000905b82829054906101000a900461ffff1661ffff16815260200190600201906020826001010492830192600103820291508084116115315790505b5050505050815250905080915050919050565b600033905090565b6000808260010b12156115a1578161159c906127c4565b6115a3565b815b9050919050565b826002600f016010900481019282156116365791602002820160005b8382111561160657835183826101000a81548161ffff021916908361ffff16021790555092602001926002016020816001010492830192600103026115c6565b80156116345782816101000a81549061ffff0219169055600201602081600101049283019260010302611606565b505b509050611643919061167d565b5090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200161167761169a565b81525090565b5b8082111561169657600081600090555060010161167e565b5090565b6040518060400160405280600290602082028036833780820191505090505090565b60006116cf6116ca846124be565b612499565b905080828560208602820111156116e9576116e86128a4565b5b60005b8581101561171957816116ff8882611919565b8452602084019350602083019250506001810190506116ec565b5050509392505050565b6000611736611731846124e4565b612499565b905080828560208602820111156117505761174f6128a4565b5b60005b8581101561178057816117668882611a50565b845260208401935060208301925050600181019050611753565b5050509392505050565b600061179d6117988461250a565b612499565b905080828560208602820111156117b7576117b66128a4565b5b60005b858110156117e757816117cd8882611a65565b8452602084019350602083019250506001810190506117ba565b5050509392505050565b60006118046117ff84612530565b612499565b9050808285602086028201111561181e5761181d6128a4565b5b60005b8581101561184e57816118348882611a8f565b845260208401935060208301925050600181019050611821565b5050509392505050565b60008151905061186781612a82565b92915050565b600082601f8301126118825761188161289a565b5b600261188f8482856116bc565b91505092915050565b600082601f8301126118ad576118ac61289a565b5b60026118ba848285611723565b91505092915050565b600082601f8301126118d8576118d761289a565b5b60046118e584828561178a565b91505092915050565b600082601f8301126119035761190261289a565b5b60056119108482856117f1565b91505092915050565b60008151905061192881612a99565b92915050565b600061020082840312156119455761194461289f565b5b611950610180612499565b9050600061196084828501611858565b600083015250602061197484828501611858565b602083015250604061198884828501611aa4565b604083015250606061199c84828501611aa4565b60608301525060806119b084828501611aa4565b60808301525060a06119c484828501611858565b60a08301525060c06119d884828501611a8f565b60c08301525060e06119ec84828501611858565b60e083015250610100611a0184828501611a65565b61010083015250610120611a178482850161186d565b61012083015250610160611a2d848285016118c3565b610140830152506101e0611a4384828501611a8f565b6101608301525092915050565b600081359050611a5f81612ab0565b92915050565b600081519050611a7481612ab0565b92915050565b600081359050611a8981612ac7565b92915050565b600081519050611a9e81612ac7565b92915050565b600081519050611ab381612ade565b92915050565b600060a08284031215611acf57611ace6128a9565b5b6000611add848285016118ee565b91505092915050565b60006102008284031215611afd57611afc6128a9565b5b6000611b0b8482850161192e565b91505092915050565b600060208284031215611b2a57611b296128a9565b5b6000611b3884828501611a7a565b91505092915050565b60008060608385031215611b5857611b576128a9565b5b6000611b6685828601611a7a565b9250506020611b7785828601611898565b9150509250929050565b60008060408385031215611b9857611b976128a9565b5b6000611ba685828601611a7a565b9250506020611bb785828601611a7a565b9150509250929050565b6000611bcd8383611e88565b60208301905092915050565b6000611be5838361213d565b60208301905092915050565b6000611bfd838361215b565b60208301905092915050565b611c1281612728565b82525050565b611c2181612728565b82525050565b611c308161257e565b611c3a81846125de565b9250611c4582612556565b8060005b83811015611c76578151611c5d8782611bc1565b9650611c68836125aa565b925050600181019050611c49565b505050505050565b611c878161257e565b611c9181846125e9565b9250611c9c82612556565b8060005b83811015611ccd578151611cb48782611bc1565b9650611cbf836125aa565b925050600181019050611ca0565b505050505050565b611cde81612589565b611ce881846125f4565b9250611cf382612560565b8060005b83811015611d24578151611d0b8782611bd9565b9650611d16836125b7565b925050600181019050611cf7565b505050505050565b611d3581612589565b611d3f81846125ff565b9250611d4a82612560565b8060005b83811015611d7b578151611d628782611bd9565b9650611d6d836125b7565b925050600181019050611d4e565b505050505050565b611d8c81612594565b611d96818461260a565b9250611da18261256a565b8060005b83811015611dd2578151611db98782611bd9565b9650611dc4836125c4565b925050600181019050611da5565b505050505050565b611de381612594565b611ded8184612615565b9250611df88261256a565b8060005b83811015611e29578151611e108782611bd9565b9650611e1b836125c4565b925050600181019050611dfc565b505050505050565b611e3a8161259f565b611e448184612620565b9250611e4f82612574565b8060005b83811015611e80578151611e678782611bf1565b9650611e72836125d1565b925050600181019050611e53565b505050505050565b611e918161273a565b82525050565b6000611ea460058361262b565b9150611eaf826128bf565b602082019050919050565b6000611ec760058361262b565b9150611ed2826128e8565b602082019050919050565b6000611eea60058361262b565b9150611ef582612911565b602082019050919050565b6000611f0d60058361262b565b9150611f188261293a565b602082019050919050565b6000611f3060058361262b565b9150611f3b82612963565b602082019050919050565b6000611f5360058361262b565b9150611f5e8261298c565b602082019050919050565b6000611f7660058361262b565b9150611f81826129b5565b602082019050919050565b6000611f9960058361262b565b9150611fa4826129de565b602082019050919050565b6000611fbc601f8361262b565b9150611fc782612a07565b602082019050919050565b6000611fdf60058361262b565b9150611fea82612a30565b602082019050919050565b600061200260058361262b565b915061200d82612a59565b602082019050919050565b6102008201600082015161202f6000850182611c09565b5060208201516120426020850182611c09565b5060408201516120556040850182612179565b5060608201516120686060850182612179565b50608082015161207b6080850182612179565b5060a082015161208e60a0850182611c09565b5060c08201516120a160c085018261215b565b5060e08201516120b460e0850182611c09565b506101008201516120c961010085018261213d565b506101208201516120de610120850182611c27565b506101408201516120f3610160850182611d83565b506101608201516121086101e085018261215b565b50505050565b6060820160008201516121246000850182611c09565b5060208201516121376020850182611cd5565b50505050565b61214681612747565b82525050565b61215581612747565b82525050565b61216481612775565b82525050565b61217381612775565b82525050565b6121828161277f565b82525050565b6121918161277f565b82525050565b60006020820190506121ac6000830184611c18565b92915050565b600060208201905081810360008301526121cb81611e97565b9050919050565b600060208201905081810360008301526121eb81611eba565b9050919050565b6000602082019050818103600083015261220b81611edd565b9050919050565b6000602082019050818103600083015261222b81611f00565b9050919050565b6000602082019050818103600083015261224b81611f23565b9050919050565b6000602082019050818103600083015261226b81611f46565b9050919050565b6000602082019050818103600083015261228b81611f69565b9050919050565b600060208201905081810360008301526122ab81611f8c565b9050919050565b600060208201905081810360008301526122cb81611faf565b9050919050565b600060208201905081810360008301526122eb81611fd2565b9050919050565b6000602082019050818103600083015261230b81611ff5565b9050919050565b6000610300820190506123286000830187612018565b612336610200830186611d2c565b61234461024083018561216a565b612352610260830184611e31565b95945050505050565b6000606082019050612370600083018461210e565b92915050565b600060208201905061238b600083018461214c565b92915050565b60006020820190506123a6600083018461216a565b92915050565b60006080820190506123c1600083018661216a565b6123ce6020830185611d2c565b6123db6060830184611c18565b949350505050565b600060e0820190506123f8600083018661216a565b6124056020830185611dda565b61241260a0830184611c7e565b949350505050565b600061012082019050612430600083018861216a565b61243d6020830187611dda565b61244a60a0830186611c7e565b61245760e0830185612188565b612465610100830184612188565b9695505050505050565b600061022082019050612485600083018561216a565b6124926020830184612018565b9392505050565b60006124a36124b4565b90506124af8282612793565b919050565b6000604051905090565b600067ffffffffffffffff8211156124d9576124d861286b565b5b602082029050919050565b600067ffffffffffffffff8211156124ff576124fe61286b565b5b602082029050919050565b600067ffffffffffffffff8211156125255761252461286b565b5b602082029050919050565b600067ffffffffffffffff82111561254b5761254a61286b565b5b602082029050919050565b6000819050919050565b6000819050919050565b6000819050919050565b6000819050919050565b600060029050919050565b600060029050919050565b600060049050919050565b600060059050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600081905092915050565b600082825260208201905092915050565b60006126478261273a565b91506126528361273a565b925081617fff0383136000831215161561266f5761266e61280d565b5b817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80000383126000831216156126a7576126a661280d565b5b828201905092915050565b60006126bd82612747565b91506126c883612747565b92508261ffff038211156126df576126de61280d565b5b828201905092915050565b60006126f58261277f565b91506127008361277f565b92508267ffffffffffffffff0382111561271d5761271c61280d565b5b828201905092915050565b600061273382612755565b9050919050565b60008160010b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b61279c826128ae565b810181811067ffffffffffffffff821117156127bb576127ba61286b565b5b80604052505050565b60006127cf8261273a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80008214156128025761280161280d565b5b816000039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f312d303037000000000000000000000000000000000000000000000000000000600082015250565b7f312d303139000000000000000000000000000000000000000000000000000000600082015250565b7f312d303039000000000000000000000000000000000000000000000000000000600082015250565b7f312d303035000000000000000000000000000000000000000000000000000000600082015250565b7f312d303230000000000000000000000000000000000000000000000000000000600082015250565b7f312d303136000000000000000000000000000000000000000000000000000000600082015250565b7f312d303137000000000000000000000000000000000000000000000000000000600082015250565b7f312d303138000000000000000000000000000000000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f312d303134000000000000000000000000000000000000000000000000000000600082015250565b7f312d303135000000000000000000000000000000000000000000000000000000600082015250565b612a8b81612728565b8114612a9657600080fd5b50565b612aa28161273a565b8114612aad57600080fd5b50565b612ab981612747565b8114612ac457600080fd5b50565b612ad081612775565b8114612adb57600080fd5b50565b612ae78161277f565b8114612af257600080fd5b5056fea2646970667358221220c70ae53ef2e07d14a282433f864171f50073c804760b665184635b7f28d453e164736f6c63430008070033";

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
