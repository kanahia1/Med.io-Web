/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "zCG3MX2Mtu81_Vw3--IM6nu_w5_fTyDx";
const SEPOLIA_PRIVATE_KEY = "56ec2ab23d5d0426e32b86df9c708b76db76c938eb585fb12cfbd37aa78dd667";
module.exports = {
  solidity: "0.8.9",

  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${SEPOLIA_PRIVATE_KEY}`],
    }
  }
};
