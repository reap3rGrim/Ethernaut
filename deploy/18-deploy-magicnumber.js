module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const magicNumber = await deploy("MagicNumber", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed MagicNumber on ${magicNumber.address}`)
    log("-------------------------------------------------------------------------------")

    const magicNumberAttack = await deploy("MagicNumberAttack", {
        from: deployer,
        // log: true,
        args: [magicNumber.address],
    })

    log(`Deployed MagicNumberAttack on ${magicNumberAttack.address}`)
    log("-------------------------------------------------------------------------------")
}
