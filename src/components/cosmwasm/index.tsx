import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { useQuery } from "./useQuery";
import { DirectSecp256k1HdWallet, EncodeObject } from "@cosmjs/proto-signing";
// import React from "react";
// import BigNumber from "bignumber.js";
export const CosmWasm = () => {
  // const [response, setResponse] = React.useState<unknown>();
  const contractAddress =
    "archway19wkj0j2k77jy9r5z3eapk8y4es77dmq8qydlsqa9kyqa0y64ykqq7j6dmq";

  const to = "archway17ccs4gzhd64kj62pk6s4cnlem47ztls6mldgzv";
  console.log("to", to);
  const executeData = async () => {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      "crisp slam imitate wild install chaos damp nest olympic luxury fluid exile",
      {
        prefix: "archway", // Replace with the correct prefix for Archway
      }
    );
    const accounts = await wallet.getAccounts();
    const { address } = accounts[0];
    console.log(address);

    const client = await SigningCosmWasmClient.connectWithSigner(
      "https://rpc.constantine.archway.tech",
      wallet
    );
    const fee = {
      amount: [
        {
          denom: "uatom",
          amount: "2000",
        },
      ],
      gas: "180000", // 180k
    };

    try {
      const msg: EncodeObject = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          sender: 'archway1d5pp20zaqehca8kdyzjfnqvfpp7ff42j53y830',
          contract: contractAddress,
          msg: {
            transfer: {
              amount: "0.1",
              recipient: "archway17ccs4gzhd64kj62pk6s4cnlem47ztls6mldgzv",
            },
          },
        },
      };

      const gasFee = await client.signAndBroadcast(
        address,
        [msg],
        fee,
        "this is the memo"
      );
      console.log("gasFee", gasFee);
      // const fee = {
      //   amount: [
      //     {
      //       denom: "uatom",
      //       amount: "2000",
      //     },
      //   ],
      //   gas: "180000", // 180k
      // };
      // const memo = "Use your power wisely";
      // const result = await client.signAndBroadcast(
      //   address,
      //   [msgAny],
      //   fee,
      //   memo
      // );
      // console.log(await result.events);

      // const txResponse = await client.execute(
      //   address,
      //   contractAddress,
      //   {
      //     transfer: {
      //       amount: 0.1,
      //       recipient: "archway17ccs4gzhd64kj62pk6s4cnlem47ztls6mldgzv",
      //       // data:,
      //     },
      //   },
      //   'auto',
      //   ''
      // );
      // console.log("txResponse", txResponse);
      // setResponse(txResponse);
    } catch (e) {
      console.log(e);
      // setResponse(e as string);
    }
  };

  const { response: balanceResponse } = useQuery({
    balance: { address: "archway1d5pp20zaqehca8kdyzjfnqvfpp7ff42j53y830" },
  });
  const { response: token_info } = useQuery({
    token_info: {},
  });
  console.log(balanceResponse, token_info);

  return (
    <div className="w-full flex justify-center flex-col gap-8 items-center h-[40vh]">
      <h2>Cosmswasm</h2>
      <button
        onClick={executeData}
        className="w-fit bg-green-500 px-4 py-2 text-white rounded-sm"
      >
        Execute
      </button>
    </div>
  );
};

export default CosmWasm;
