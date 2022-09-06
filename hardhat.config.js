require("hardhat-deploy")
require("@nomiclabs/hardhat-ethers")
module.exports = {
    solidity: {
        compilers: [{ version: "0.8.9" }, { version: "0.6.6" }],
    },
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
            // chainId: 31377,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
}
