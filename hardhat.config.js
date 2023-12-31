require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-web3');
require('@openzeppelin/hardhat-upgrades');
require('solidity-coverage');
require('hardhat-gas-reporter');
require('hardhat-contract-sizer');

const accounts = process.env.PK ? [process.env.PK] : [];
const timeout = 50000;

module.exports = {
  networks: {
    mainnet: {
      url: 'to be added',
      chainId: 0,
      timeout,
      accounts,
    },
    testnet: {
      url: 'https://evm-devnet.seinetwork.io',
      chainId: 713715,
      timeout,
      accounts,
    },
    local: {
      url: 'http://localhost:8545',
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.20',
        settings: {
          evmVersion: 'paris',
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
    ],
  },
};
