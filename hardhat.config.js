require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.YOUR_ALCHEMY_API_URL,
      accounts: [process.env.YOUR_PRIVATE_SEPOLIA_ACCOUNT_KEY],
    },
  },
};