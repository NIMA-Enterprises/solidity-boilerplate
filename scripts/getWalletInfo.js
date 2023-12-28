const hre = require('hardhat');
const { ethers } = hre;
const { networks } = require('../hardhat.config');


async function main() {
    // Wallet address to inspect
    const wallet = '0xf3B39c28bF4c5c13346eEFa8F90e88B78A610381';

    // Get nonce
    const transactionCount = await ethers.provider.getTransactionCount(wallet);
    // Get wallet balance
    const balance = await ethers.provider.getBalance(wallet);

    // Log results
    console.log(`
        - Wallet: ${wallet} 
        - TransactionCount: ${transactionCount} 
        - Balance: ${balance}    
    `);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
