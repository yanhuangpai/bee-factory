
var HDWalletProvider = require("truffle-hdwallet-provider");
const priKey = 'fbec096accca8add80a7de3561556e567a6892ae09dfeb86de29d8953561b057';
module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "4020",
      gasPrice: "10000000000", //10 gwei
    }, 
    infinity: {
      host: "47.52.211.206",
      port: 8545,
      network_id: "5",
      gasPrice: "10000000000", //10 gwei
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(priKey, "https://ropsten.infura.io/YOUR_API_KEY")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },

  compilers: {
    solc: {
      version: "0.6.12",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200   // Optimize for how many times you intend to run the code
        },
        evmVersion: "istanbul"
      }
    }
  },

  db: {
    enabled: false
  }
};
