const hre = require("hardhat");
const ethers = hre.ethers
const TransfersArtifact = require('../artifacts/contracts/Transfers.sol/Transfers.json')

//for main
//const network = 'https://l2rpc.a1.taiko.xyz'
//const provider = new ethers.providers.getDefaultProvider(network);
//const privateKey = 'privkey'
//const acc2 = new ethers.Wallet(privateKey, provider);
//.for main

//console.log(acc2);

async function currentBalance(address, msg = ''){
  const rawBalance = await ethers.provider.getBalance(address)
  console.log(msg, ethers.utils.formatEther(rawBalance))
}


async function main() {
//for local
const [acc1, acc2] = await ethers.getSigners()
const contractAddr = '0xe7f1725e7734ce288f8367e1bb143e90bb3f0512'
//.forlocal

//for main
//  const [acc1] = await ethers.getSigners()
//  const contractAddr = '0xf27958d4393e8944485412Fe3c71E5CCcdd220b6'
//.for main
  const transfersContract = new ethers.Contract(
  contractAddr,
  TransfersArtifact.abi,
  acc1
  )
  const tx = {
  to: contractAddr,
  value: ethers.utils.parseEther('0.5')
  }
await currentBalance(contractAddr, 'Contract balance: ')

// отправить
//  const txSend = await acc2.sendTransaction(tx)
//  await txSend.wait()
//  await currentBalance(acc2.address, 'Acc2  balance: ')
//  await currentBalance(contractAddr, 'Contract balance: ')
//  const result = await transfersContract.getTransfer(0)
const result = await transfersContract.withdrawTo(acc2.address)
//  console.log(ethers.utils.formatEther(result['amount']), result['sender'])
//console.log(result)
await currentBalance(acc2.address, 'Acc2  balance: ')
await currentBalance(contractAddr, 'Contract balance: ')
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
