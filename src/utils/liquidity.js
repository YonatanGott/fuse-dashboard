import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);

const abiPeg = [{ "type": "event", "name": "LiquidityUpdated", "inputs": [{ "type": "uint256", "name": "amount", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "source", "internalType": "address", "indexed": true }, { "type": "address", "name": "target", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferRequested", "inputs": [{ "type": "address", "name": "from", "internalType": "address", "indexed": true }, { "type": "address", "name": "to", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "type": "address", "name": "from", "internalType": "address", "indexed": true }, { "type": "address", "name": "to", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "StuckTokensRecovered", "inputs": [{ "type": "uint256", "name": "amount", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "target", "internalType": "address", "indexed": true }], "anonymous": false }, { "type": "event", "name": "TokensSwapped", "inputs": [{ "type": "address", "name": "source", "internalType": "address", "indexed": true }, { "type": "address", "name": "target", "internalType": "address", "indexed": true }, { "type": "address", "name": "caller", "internalType": "address", "indexed": true }, { "type": "uint256", "name": "sourceAmount", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "targetAmount", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "fallback", "stateMutability": "nonpayable" }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "acceptOwnership", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "addLiquidity", "inputs": [{ "type": "uint256", "name": "amount", "internalType": "uint256" }, { "type": "address", "name": "source", "internalType": "address" }, { "type": "address", "name": "target", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "uint256", "name": "amount", "internalType": "uint256" }], "name": "getSwappableAmount", "inputs": [{ "type": "address", "name": "source", "internalType": "address" }, { "type": "address", "name": "target", "internalType": "address" }] }, { "type": "function", "stateMutability": "view", "outputs": [{ "type": "address", "name": "", "internalType": "address" }], "name": "owner", "inputs": [] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "recoverStuckTokens", "inputs": [{ "type": "uint256", "name": "amount", "internalType": "uint256" }, { "type": "address", "name": "target", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "removeLiquidity", "inputs": [{ "type": "uint256", "name": "amount", "internalType": "uint256" }, { "type": "address", "name": "source", "internalType": "address" }, { "type": "address", "name": "target", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "swap", "inputs": [{ "type": "uint256", "name": "sourceAmount", "internalType": "uint256" }, { "type": "address", "name": "source", "internalType": "address" }, { "type": "address", "name": "target", "internalType": "address" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "transferOwnership", "inputs": [{ "type": "address", "name": "_to", "internalType": "address" }] }]

const contractPeg = new web3.eth.Contract(abiPeg, '0xdfE016328E7BcD6FA06614fE3AF3877E931F7e0a')
const ethereum = window.ethereum;

const usdcAddress = '0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5';
const fusdAddress = '0x249BE57637D8B013Ad64785404b24aeBaE9B098B';

export const addLiquidity = async (token, amount) => {
    try {
        if (!ethereum.selectedAddress) {
            await ethereum.enable();
        }
        const source = ethereum.selectedAddress;
        let target = null;
        token === 'usdc' ? target = usdcAddress : target = fusdAddress;
        await contractPeg.methods.addLiquidity(amount, source, target).call()
    } catch (error) {
        console.log(error);
    }
}