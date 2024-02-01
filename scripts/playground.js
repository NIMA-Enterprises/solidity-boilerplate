const hre = require('hardhat');
const { getBlock } = require('./web3UsefulScripts');
const { ethers } = hre;

async function main() {
  const block = await getBlock(ethers);
  console.log(block);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
