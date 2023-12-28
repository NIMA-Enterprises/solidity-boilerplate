const gitBranch = require('git-branch');
const hre = require('hardhat');
const fs = require('fs');
const path = require('path');
const { getJson, jsons, relativePath } = require('./utils');

const contracts = ['Token'];
const mainTree = ['master', 'staging', 'develop'];

async function main() {
  await hre.run('compile');
  let branch = gitBranch.sync();
  if (mainTree.includes(branch)) {
    let abis = getJson(jsons.abis);
    abis[branch] = abis[branch] || {};
    for (let i = 0; i < contracts.length; i++) {
      let contract = contracts[i];
      abis[branch][contract] = (await hre.artifacts.readArtifact(contract)).abi;
    }
    fs.writeFileSync(
      path.join(__dirname, relativePath + jsons.abis),
      JSON.stringify(abis, null, '  ')
    );
    console.log('Abis updated.');
  } else console.log('Branch outside of main tree. No abis updated.');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
