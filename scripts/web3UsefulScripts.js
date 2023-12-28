/**
 *
 * @param ethers instance of ethers
 * @param methodNameAndArgs should be an example "transfer(address,uint256)"
 * @returns {string}
 */
const getMethodId = (ethers, methodNameAndArgs) => {
  return ethers.utils.id(methodNameAndArgs).substring(0, 10);
};

module.exports = {
  getMethodId,
};
