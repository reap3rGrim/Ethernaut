module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const gatekeeperOne = await deploy("GatekeeperOne", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed GatekeeperOne on ${gatekeeperOne.address}`)
    log("-------------------------------------------------------------------------------")

    const gatekeeperOneAttack = await deploy("GatekeeperOneAttack", {
        from: deployer,
        // log: true,
        args: [gatekeeperOne.address],
    })
    log(`Deployed GatekeeperOneAttack on ${gatekeeperOneAttack.address}`)
    log("-------------------------------------------------------------------------------")
}
