module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const coinFlip = await deploy("CoinFlip", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed CoinFlip on ${coinFlip.address}`)
    log("-------------------------------------------------------------------------------")

    const coinFlipAttack = await deploy("CoinFlipAttack", {
        from: deployer,
        // log: true,
        args: [coinFlip.address],
    })

    log(`Deployed CoinFlipAttack on ${coinFlipAttack.address}`)
    log("-------------------------------------------------------------------------------")
}
module.exports.tags = ["all", "coinflip"]
