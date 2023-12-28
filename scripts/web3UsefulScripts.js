
const getMethodId = (ethers, methodNameAndArgs) => {
    return ethers.utils.id(methodNameAndArgs).substring(0, 10);
}


module.exports = {
    getMethodId
}
