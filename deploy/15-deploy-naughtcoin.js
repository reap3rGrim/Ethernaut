module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const naughtCoin = await deploy("NaughtCoin", {
        from: deployer,
        // log: true,
        args: [deployer],
    })

    log(`Deployed NaughtCoin on ${naughtCoin.address}`)
    log("-------------------------------------------------------------------------------")
}
