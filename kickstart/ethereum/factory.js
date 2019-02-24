import web3 from "./web3";
import campaignFactory from "./build/campaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  "0x5D5C23f86EF6Fd78531eE5e5b493435F3a5a891c"
);

export default instance;
