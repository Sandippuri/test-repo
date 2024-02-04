import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import {
  DirectSecp256k1HdWallet
} from "@cosmjs/proto-signing";
import React from "react";

const useExecute = () => {
  const [response, setResponse] = React.useState<unknown>();

  
  React.useEffect(() => {
      const contractAddress =
      "archway19wkj0j2k77jy9r5z3eapk8y4es77dmq8qydlsqa9kyqa0y64ykqq7j6dmq";
      const executeData = async () => {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic('crisp slam imitate wild install chaos damp nest olympic luxury fluid exile',{
            prefix:"archway",
        });
        const accounts = await wallet.getAccounts();
        const { address} = accounts[0];
      try {
        const client = await SigningCosmWasmClient.connectWithSigner(
          "https://rpc.constantine.archway.tech",
          wallet
        );
        const txResponse = await client.execute(
            address,
            contractAddress,
            {
                cross_transfer:{
                    amount: 0.1,
                    to: "hxb436f9ab65462452cbb76156e6d1b0156f4cfad2",
                    // data:,
                }
            },
            "auto",
        );
        console.log("txResponse", txResponse);
        setResponse(txResponse);
      } catch (e) {
        console.log(e);
      }
    };
    executeData();
  }, []);
  return {response};
};

export default useExecute;
