require("@nomicfoundation/hardhat-toolbox");
const API_URL = "https://l2rpc.a1.taiko.xyz";
const PRIVATE_KEY = "privkey"
const PUBLIC_KEY = "0x805F6B8280E8364A2E23AE6498c16c0Cd28fc393";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "yourtestnetname",
  networks: {
    hardhat:{},
    yourtestnetname:{
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
