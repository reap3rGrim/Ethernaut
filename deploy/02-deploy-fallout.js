module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const fallout = await deploy("Fallout", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed Fallout on ${fallout.address}`)
    log("-------------------------------------------------------------------------------")
}
module.exports.tags = ["all", "fallout"]
