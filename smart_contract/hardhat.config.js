// https://eth-rinkeby.alchemyapi.io/v2/I-HWU8WK1ivhdJ7O_nBpN0eLpKQgQCoX
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/I-HWU8WK1ivhdJ7O_nBpN0eLpKQgQCoX",
      accounts: [
        "f69cf0682dccf48f4d835cbfcb8e9c492db55c9ddc356bd415e20a8083732604",
      ],
    },
  },
};
