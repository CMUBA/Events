// 导入 ether.js 
import { ethers } from "ethers";

// 定义合约地址
const contractAddress = "0x65eb6490dA70F68AB2165A98155948Ecb8188a46";


const abi = [
    "function transfer(address to, uint amount) returns (bool)"
];

// Sepolia-Test in metamask
const privateKey = "0x1b9c251d318c3c8576b96beddfdc4ec2ffbff762d70325787bde31559db83a21"; 
var provider =  new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Mrv5h-o7XnBoZdD1F-JtFZeejzjrFzvK");
var signer = new ethers.Wallet(privateKey, provider);
var contract = new ethers.Contract(contractAddress, abi, signer);
// 定义转账参数
const recipientAddresses = [
  // "0x93E67dbB7B2431dE61a9F6c7E488e7F0E2eD2B3e",
  // "0xEcAACb915f7D92e9916f449F7ad42BD0408733c9",
  // "0xD16746D3A129Ff1c5Db90337eC54F0D40D0F1e9c",
  // "0xf628574A416ae540D0Bb86A597FcF2847f3EE178",
  "0xc29C8e787ecd747915834695009B410D9dB7811A",
"0x1378D0e4723703e460a2881e3aaF1DC7d2E6e519",
"0x0092Ed131F7c4f0e6e53D9ed902f7543237b33D2",
"0x2d3FFaE6c5E115Cd89131c5A2e1389ff68FFf530",
];
const amounts = [
  "50000000000000000000",
  "70000000000000000000",
  "80000000000000000000",
  "60000000000000000000",
];

for (let i = 0; i < recipientAddresses.length; i++){
  console.log(`recipientAddresses: ${recipientAddresses[i]}`);
  console.log(`amounts: ${amounts[i]}`);
  console.log(`------------------------`);
  const tx = await contract.transfer(recipientAddresses[i], amounts[i]);
  console.log(`tx: ${tx.hash}`);
}


// function transfer(address to, uint amount) returns (bool)
// const tx = await contract.transfer("0x93E67dbB7B2431dE61a9F6c7E488e7F0E2eD2B3e", "1");

 


