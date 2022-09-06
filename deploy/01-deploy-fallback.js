module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    console.log("Deploying Fallback...")
    const fallback = await deploy("Fallback", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed Fallback on ${fallback.address}`)
    log("-------------------------------------------------------------------------------")
}

module.exports.tags = ["all", "fallback"]
