import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(campaignFactory.interface),
  "0xDDb35c69FD4245daCBca67B4c7D355c210436A70"
);

export default instance;
