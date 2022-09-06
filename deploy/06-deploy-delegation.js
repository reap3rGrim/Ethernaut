module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const delegate = await deploy("Delegate", {
        from: deployer,
        // log: true,
        args: [deployer],
    })

    log(`Deployed Delegate on ${delegate.address}`)
    log("-------------------------------------------------------------------------------")

    const delegation = await deploy("Delegation", {
        from: deployer,
        // log: true,
        args: [delegate.address],
    })

    log(`Deployed Delegation on ${delegation.address}`)
    log("-------------------------------------------------------------------------------")
}
