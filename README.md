![Screenshot](cover.png)
# Sei Solidity Boilerplate | by NIMA  ![CI](https://github.com/NIMA-Enterprises/solidity-boilerplate/actions/workflows/ci.yml/badge.svg)

Start your Sei smart-contract project easily!

This repository has already prepared benefits for your development:

- Hardhat configuration adapted for Sei network testnet and mainnet deployment.
- Full project structure with the Token sample contract.
- Configuration directory with prepared structure made to save your abis, addresses and configurations.
- Utils local module which enables easy management of your json files.
- Testing helpers module.
- CI performing lint, test and abi updating on each push on the main tree (develop, staging and master) and every PR.
- Yarn scripts for quick fork of the Sei network and more.
- Solcover, solhint and prettier configurations.
- Scripts for retrieval of transaction data and wallet information.
- Scripts for easy token distribution.

## Setup

### Git config
`$ git config url."https://".insteadOf git://`

### Dependencies
- Make sure to use node version 16 or higher.
- to install do `$ yarn`

### Environment
 - Fill in the environment values as described with .env.example template inside the .env file (comand below)
---
## Usage
### Compile code
`$ yarn compile`

### Run tests
`$ yarn test`

### Run coverage
`$ yarn coverage`

### Run lint
`$ yarn lint`

### Format code
`$ yarn prettier`

### Compute bytecode size of each contract
`$ yarn size`

---
## Setup local node
### Setup hardhat node
`$ yarn node`

### Setup node forked from Sei Mainnet
`$ yarn node-mainnet`

### Setup node forked from Sei Testnet
`$ yarn node-testnet`

## Deployment
### Deploy token to testnet
`$ npx hardhat run --network testnet scripts/token.deploy.js`

## CI
### Update abis manually
`$ node scripts/updateAbis.js`

---
## License
MIT
