const hre = require('hardhat');
const { saveJson, jsons } = require('./utils');

async function main() {
  await hre.run('compile');

  const tokenFactory = await hre.ethers.getContractFactory('Token');
  const token = await tokenFactory.deploy();
  await token.deployed();
  console.log(`Token address: ${token.address}`);

  saveJson(jsons.addresses, hre.network.name, 'Token', mockToken.address);

  console.log('Done!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
