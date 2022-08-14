# [Alchemy Web3 Code](https://docs.alchemy.com/docs/welcome-to-the-road-to-web3)

# 1. First week: [NFT smart contract](https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy)

Steps:
```shell
# Download codes
git clone https://github.com/tokenchaos/alchemy-web3.git

cd alchemy-web3

# Install dependencies
yarn install

# Copy .env.dev to .env and change it's configuration to yours.
cp .env.dev .env

# Compile contracts
yarn hardhat compile

# Depoly it to testnet, you should get some ETH from [Faucet](https://rinkebyfaucet.com/)
yarn hardhat run --network alchemy scripts\00-deploy-first-week-nft.js
```
