const hre = require('hardhat');
const { networks } = require('../hardhat.config');
const rpc = networks[hre.network.name]['url'];
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(rpc));

async function main() {
  const wallet = '';

  const transactionCount = await web3.eth.getTransactionCount(wallet);
  const balance = await web3.eth.getBalance(wallet);

  console.log(`
    Wallet: ${wallet} - TransactionCount: ${transactionCount} - Balance: ${balance}
  `);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
