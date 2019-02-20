const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

//ganache network port 8545
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


const { abi, evm } = require('../compile');

let accounts;
let lottery;

console.log(abi);

beforeEach( async () => {
    //Get a list of all accounts
        accounts = await web3.eth.getAccounts();
    
    //Use one of those accounts to deploy 
    //the contract
        lottery = await new web3.eth.Contract(abi)
            .deploy(   {data:  evm.bytecode.object })
            .send({ from: accounts[0], gas: '1000000' })
    });


    describe('Lottery Contract', () => {
        it('deploys a contract', () => {
            assert.ok(lottery.options.address);
        });
    } );