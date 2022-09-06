module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments
    const privacy = await deploy("Privacy", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed Privacy Contract on ${privacy.address}`)
    log("-------------------------------------------------------------------------------")
}
