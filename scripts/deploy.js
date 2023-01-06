const hre = require("hardhat");
const ethers = hre.ethers

async function main() {
  const [signer]=await hre.ethers.getSigners()
  const Transfers = await ethers.getContractFactory('Transfers', signer)
  const transfers = await Transfers.deploy(3)
  await transfers.deployed()
console.log(transfers.address)


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
