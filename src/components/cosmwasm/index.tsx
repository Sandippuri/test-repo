import { useQuery } from "./useQuery";
export const CosmWasm = () => {
  const { response:balanceResponse } = useQuery({
    balance: { address: "archway1d5pp20zaqehca8kdyzjfnqvfpp7ff42j53y830" },
  });
  const { response:token_info } = useQuery({
    token_info: {},
  });

  console.log(balanceResponse, token_info);


  return <div>CosmWasm</div>;
};

export default CosmWasm;
