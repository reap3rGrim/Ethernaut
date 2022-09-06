module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const gatekeeperTwo = await deploy("GatekeeperTwo", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed GatekeeperTwo on ${gatekeeperTwo.address}`)
    log("-------------------------------------------------------------------------------")

    const gatekeeperTwoAttack = await deploy("GatekeeperTwoAttack", {
        from: deployer,
        // log: true,
        args: [gatekeeperTwo.address],
    })
    log(`Deployed GatekeeperTwoAttack on ${gatekeeperTwoAttack.address}`)
    log("-------------------------------------------------------------------------------")
}
module.exports.tags = ["all", "gatekeepertwo"]
