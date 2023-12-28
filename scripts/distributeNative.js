const hre = require('hardhat');
const { ethers } = hre;

async function main() {
  const wallets = [
    //... add array of wallets for distribution
  ];
  const amountSEI = '1'; // Add amount of SEI you'd like to distribute

  console.log('Number of wallets to receive SEI =', wallets.length);

  for (let i = 0; i < wallets.length; i++) {
    const signer = await ethers.provider.getSigner();

    const tx = await signer.sendTransaction({
      to: ethers.provider._getAddress(wallets[i]),
      value: ethers.utils.parseEther(amountSEI),
    });

    console.log(`${i + 1}. TxHash: ${tx.hash}`);
    console.log(`${i + 1}. Receiver: ${wallets[i]}`);
    console.log(
      '--------------------------------------------------------------------------------'
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
