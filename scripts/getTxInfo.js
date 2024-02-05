const hre = require('hardhat');
const { ethers } = hre;

async function main() {
  // Tx Hash to inspect
  const txHash =
    '0x751e5cedf91664afd4c4369a754bf303a39b27628c498e20d726ad085e7c62a0';

  // get transaction
  const tx = await ethers.provider.getTransaction(txHash);
  // get receipt
  const txReceipt = await ethers.provider.getTransactionReceipt(txHash);
  // get block info
  const blockInfo = await ethers.provider.getBlock(txReceipt.blockNumber);
  // get network
  const network = await ethers.provider.getNetwork();

  // log relevant transaction data
  // transaction data/input is logged in cases other than contract deployment
  console.log(`
        - network chain id: ${network.chainId}
        - txHash: ${txHash}
        - nonce: ${tx.nonce}
        - data: ${txReceipt.contractAddress ? 'contract deployment' : tx.data}
        - type: ${tx.type}
        - status: ${txReceipt.status === 1 ? 'success' : 'reverted'}
        - block: ${txReceipt.blockNumber}
        - transactionIndex: ${txReceipt.transactionIndex}
        - timestamp: ${blockInfo.timestamp} - ${new Date(blockInfo.timestamp * 1000)}
        - deployedContractAddress: ${txReceipt.contractAddress || 'none'}
        - from: ${txReceipt.from}
        - interacted with (to): ${txReceipt.to}
        - value: ${tx.value}
        - gasLimit: ${tx.gasLimit}
        - gasPrice: ${tx.gasPrice}
        - gasUsed : ${txReceipt.gasUsed}
        - signature: 
            - r: ${tx.r}
            - s: ${tx.s}
            - v: ${tx.v}
    `);

  for (let i = 0; i < txReceipt.logs.length; i++) {
    const log = txReceipt.logs[i];
    const eventSignature = log.topics[0];
    log.topics.shift();
    console.log(`
       Log Index: ${log.logIndex}
        - eventSignature: ${eventSignature}
        - indexedEventValues: ${log.topics}
        - data: ${log.data}
    `);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
