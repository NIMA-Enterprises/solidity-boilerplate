/**
 *
 * @param ethers instance of ethers
 * @param methodNameAndArgs should be an example "transfer(address,uint256)"
 * @returns {string}
 */
const getMethodId = (ethers, methodNameAndArgs) => {
  return ethers.utils.id(methodNameAndArgs).substring(0, 10);
};

/**
 * Default value would be the latest block
 * @param ethers
 * @param blockNumber number of the requested block
 * @returns {*}
 */
const getBlock = async (ethers, blockNumber) => {
  return await ethers.provider.getBlock(blockNumber || 'latest');
};

/**
 * Get transactions in block, by default will return from the last one.
 * @param ethers
 * @param blockNumber
 * @returns {Promise<*>}
 */
const getTransactionsInBlock = async (ethers, blockNumber) => {
  const block = getBlock(ethers, blockNumber);
  return block.transactions;
};

module.exports = {
  getMethodId,
  getBlock,
  getTransactionsInBlock,
};
