const path = require('path');
const fs = require('fs');
const solc = require('solc');
//console.log(fs.readFileSync("contracts/inbox.sol") );
var input = {
	language: 'Solidity',
	sources: {
		'inbox.sol': {
			content:  fs.readFileSync("contracts/inbox.sol",'utf-8')
		}
	},
	settings: {
		outputSelection: {
			'*': {
				'*': [ '*' ]
			}
		}
	}
}

var output = JSON.parse(solc.compile(JSON.stringify(input)));
//console.log(output);
// `output` here contains the JSON output as specified in the documentation
/*for (var contractName in output.contracts['inbox.sol']) {
	console.log(contractName + ': ' + output.contracts['inbox.sol'][contractName].evm.bytecode.object)
}*/

//console.log(output.contracts);

module.exports = output.contracts["inbox.sol"].Inbox;