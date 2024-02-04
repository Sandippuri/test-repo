import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import React from "react";

export const useQuery = (queryMsg: unknown) => {
        const [response, setResponse] = React.useState(null);
        React.useEffect(() => {
            const contractAddress =
                "archway19wkj0j2k77jy9r5z3eapk8y4es77dmq8qydlsqa9kyqa0y64ykqq7j6dmq";
            const fetchData = async () => {
                try {
                    const client = await SigningCosmWasmClient.connect(
                        "https://rpc.constantine.archway.tech"
                    );
                    const response = await client.queryContractSmart(
                        contractAddress,
                        queryMsg
                    );
                    setResponse(response);
                } catch (e) {
                    console.log(e);
                }
            };
            fetchData();
        }, []); // Add an empty array as the second argument to useEffect
    
        return { response };
    };
