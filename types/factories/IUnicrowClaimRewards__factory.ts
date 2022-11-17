/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IUnicrowClaimRewards,
  IUnicrowClaimRewardsInterface,
} from "../IUnicrowClaimRewards";

const _abi = [
  {
    inputs: [
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
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IUnicrowClaimRewards__factory {
  static readonly abi = _abi;
  static createInterface(): IUnicrowClaimRewardsInterface {
    return new utils.Interface(_abi) as IUnicrowClaimRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUnicrowClaimRewards {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUnicrowClaimRewards;
  }
}