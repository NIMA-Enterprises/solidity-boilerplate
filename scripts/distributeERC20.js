const hre = require('hardhat');
const { ethers } = hre;

async function main() {
  const wallets = [
    // Add wallets you want to send funds to.
  ];

  console.log('Wallets to receive: ', wallets.length);

  const amount = ethers.utils.parseEther('10'); //This assumes token is 18 decimals, meaning the value will be actually 10* 10^18

  const token = await hre.ethers.getContractAt(
    'Token',
    '' // token address
  );

  const symbol = await token.symbol();

  for (let i = 0; i < wallets.length; i++) {
    let resp = await token.transfer(wallets[i], amount);
    console.log(
      `${i + 1}: Done. Sent ${amount} ${symbol} tokens to: ${wallets[i]}`
    );
    console.log(`${i + 1}: TxHash:`, resp.hash);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
