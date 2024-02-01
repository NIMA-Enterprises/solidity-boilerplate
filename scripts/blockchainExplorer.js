const hre = require('hardhat');
const { ethers } = hre;

async function main() {
  const recentBlocksToLoad = 10000;

  // Block containing transaction -> 387442;

  const latestBlock = await ethers.provider.getBlock('latest');
  const initialBlock = latestBlock.number - recentBlocksToLoad;

  for (
    let currentBlock = initialBlock;
    currentBlock < latestBlock.number;
    currentBlock++
  ) {
    const block = await ethers.provider.getBlock(currentBlock);
    console.log(`
      - Block ${currentBlock} Data:
        - Hash: ${block.hash}
        - Miner: ${block.miner}
        - Timestamp: ${block.timestamp}
        - Gas Used: ${block.gasUsed}/${block.gasLimit}
        - Difficulty: ${block.difficulty}
        - Transaction Number: ${block.transactions.length}`);
    for (let i = 0; i < block.transactions.length; i++) {
      const txHash = block.transactions[i];
      const tx = await ethers.provider.getTransaction(txHash);
      const txReceipt = await ethers.provider.getTransactionReceipt(txHash);
      console.log(`
           - Transaction ${i}
              - txHash: ${txHash}
              - nonce: ${tx.nonce}
              - data: ${txReceipt.contractAddress ? 'contract deployment' : tx.data}
              - type: ${tx.type}
              - status: ${txReceipt.status === 1 ? 'success' : 'reverted'}
              - deployedContractAddress: ${txReceipt.contractAddress || 'none'}
              - from: ${tx.from}
              - interacted with (to): ${txReceipt.to}
              - value: ${tx.value}
              - gasLimit: ${tx.gasLimit}
              - gasPrice: ${tx.gasPrice}
              - gasUsed : ${txReceipt.gasUsed}`);
      console.log(`               Events Log:`);

      for (let i = 0; i < txReceipt.logs.length; i++) {
        const log = txReceipt.logs[i];
        const eventSignature = log.topics[0];
        log.topics.shift();
        console.log(`
                 Log Index: ${log.logIndex}
                  - eventSignature: ${eventSignature}
                  - indexedEventValues: ${log.topics}
                  - data: ${log.data}`);
      }
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
