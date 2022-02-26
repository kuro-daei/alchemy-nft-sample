require('@nomiclabs/hardhat-ethers');
const config = require('config');

const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: '0.8.4',
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    rinkeby: {
      url: config['rinkeby'].provider_url,
      accounts: [config['rinkeby'].private_key],
    },
  },
};
