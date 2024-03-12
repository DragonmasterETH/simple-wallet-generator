const { Wallet, utils } = require('ethers');

function generateWallet() {
  const randomMnemonic = Wallet.createRandom().mnemonic.phrase;
    console.log('Mnemonic:', randomMnemonic);

const wallet = Wallet.fromPhrase(randomMnemonic);
console.log('wallet.address:', wallet.address)
console.log('wallet.privateKey:', wallet.privateKey)
}

generateWallet();