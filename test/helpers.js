const { ethers, web3 } = require('hardhat');

const currentTimestamp = async () => {
  return (await ethers.provider.getBlock('latest')).timestamp;
};

const timeTravel = async (t) => {
  await ethers.provider.send('evm_increaseTime', [t]);
};

const mineBlock = async (n) => {
  await ethers.provider.send('evm_mine', [n]);
};

function getParamFromTxEvent(
  transaction,
  paramName,
  contractFactory,
  eventName
) {
  assert.isObject(transaction);
  let logs = transaction.logs;
  if (eventName != null) {
    logs = logs.filter((l) => l.event === eventName);
  }
  assert.equal(logs.length, 1, 'too many logs found!');
  let param = logs[0].args[paramName];
  if (contractFactory != null) {
    let contract = contractFactory.at(param);
    assert.isObject(contract, `getting ${paramName} failed for ${param}`);
    return contract;
  } else {
    return param;
  }
}

function balanceOf(account) {
  return new Promise((resolve, reject) =>
    web3.eth.getBalance(account, (e, balance) =>
      e ? reject(e) : resolve(balance)
    )
  );
}

module.exports = {
  currentTimestamp,
  timeTravel,
  mineBlock,
  getParamFromTxEvent,
  balanceOf,
};
