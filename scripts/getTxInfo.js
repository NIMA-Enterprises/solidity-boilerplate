const hre = require('hardhat');
const { ethers } = hre;
const { networks } = require('../hardhat.config');


async function main() {

    // Tx Hash to inspect
    const txHash = '0x751e5cedf91664afd4c4369a754bf303a39b27628c498e20d726ad085e7c62a0';

    // get transaction
    const tx = await ethers.provider.getTransaction(txHash);
    // get receipt
    const txReceipt = await ethers.provider.getTransactionReceipt(txHash);
    // get block info
    const blockInfo = await ethers.provider.getBlock(txReceipt.blockNumber)
    // get network
    const network = await ethers.provider.getNetwork();

    // log majority of tx details
    console.log(`
        - network chain id: ${network.chainId}
        - txHash: ${txHash} 
        - status: ${txReceipt.status === 1 ? 'success' : 'reverted'}
        - block: ${txReceipt.blockNumber}
        - timestamp: ${blockInfo.timestamp} - ${new Date(blockInfo.timestamp * 1000)}
        - deployedContractAddress: ${txReceipt.contractAddress || 'none'}
        - from: ${txReceipt.from}
        - interacted with (to): ${txReceipt.to}
        - value: ${tx.value}
        - gasLimit: ${tx.gasLimit}
        - gasPrice: ${tx.gasPrice}
        - gasUsed : ${txReceipt.gasUsed}
    `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });