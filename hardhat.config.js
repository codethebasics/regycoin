require('@nomiclabs/hardhat-waffle')
// const deployWallet = "d5eeaee094b21851bb08487bd07ea292a4e18478e24a67ef58d661cb0ae0e5d0";

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      // accounts: [deployWallet],
    }
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts'
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
