module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const token = await deploy("Token", {
        from: deployer,
        // log: true,
        args: [1000000000],
    })

    log(`Deployed Token on ${token.address}`)
    log("-------------------------------------------------------------------------------")
}
