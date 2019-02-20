const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

//Don't put your real metamask address there
const provider = new HDWalletProvider (
    'hunt hint toy gift weekend leisure glimpse taxi program base drink supreme',
    'https://rinkeby.infura.io/v3/727c635298344b37961bb1755114f08b'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
    .deploy({data: '0x' + evm.bytecode.object , arguments: ['Hi there!']}) // add 0x bytecode
    .send({from: accounts[0], gas: '2500000'}); // remove 'gas'


    console.log('Contract deployed to', result.options.address);
};
deploy();

//process.exit();