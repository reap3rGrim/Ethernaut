module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    args = ["RCV", deployer, 1000000000]

    const recovery = await deploy("Recovery", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed Recovery on ${recovery.address}`)
    log("-------------------------------------------------------------------------------")

    const simpleToken = await deploy("SimpleToken", {
        from: deployer,
        // log: true,
        args: args,
    })

    log(`Deployed SimpleToken on ${simpleToken.address}`)
    log("-------------------------------------------------------------------------------")
}
