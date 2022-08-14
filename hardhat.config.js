require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

task("accounts", "Show all accounts in hardhat").setAction(async () => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    alchemy: {
      url: process.env.AlchemyRinkebyAPI,
      accounts: [process.env.PrivateKey]
    }
  }
};
