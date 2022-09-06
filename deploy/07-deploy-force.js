module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const force = await deploy("Force", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed Force on ${force.address}`)
    log("-------------------------------------------------------------------------------")

    const forceAttack = await deploy("ForceAttack", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed ForceAttack on ${forceAttack.address}`)
    log("-------------------------------------------------------------------------------")
}
