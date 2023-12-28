# Nima Sei Starter Contracts Repository

![CI](https://github.com/NIMA-Enterprises/solidity-boilerplate/actions/workflows/ci.yml/badge.svg)

## Setup
### Git config
`$ git config url."https://".insteadOf git://`
### Dependencies
`$ yarn`
### Environment
 - Fill in the environment values as described with .env.example template inside the .env file

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
