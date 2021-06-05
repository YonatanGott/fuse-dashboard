import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);


export const getCurrentAccount = async () => {
    const ethereum = window.ethereum;
    try {
        if (!ethereum.selectedAddress) {
            await ethereum.enable();
        }
        const account = ethereum.selectedAddress;
        let balance = web3.eth.getBalance(account);
        return balance;

    } catch (error) {
        console.log(error);
        let err = "Could not retrieve fUSD balance"
        return err
    }
}