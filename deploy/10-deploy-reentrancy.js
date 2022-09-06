module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const reentrance = await deploy("Reentrance", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed Reentrancy Contract on ${reentrance.address}`)
    log("-------------------------------------------------------------------------------")

    const reentrancyAttack = await deploy("ReentrancyAttack", {
        from: deployer,
        // log: true,
        args: [reentrance.address],
    })

    log(`Deployed ReentrancyAttack on ${reentrancyAttack.address}`)
    log("-------------------------------------------------------------------------------")
}
