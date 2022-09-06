module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const telephone = await deploy("Telephone", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed Telephone on ${telephone.address}`)
    log("-------------------------------------------------------------------------------")

    const telephoneAttack = await deploy("TelephoneAttack", {
        from: deployer,
        // log: true,
        args: [telephone.address],
    })

    log(`Deployed TelephoneAttack on ${telephoneAttack.address}`)
    log("-------------------------------------------------------------------------------")
}
module.exports.tags = ["all", "telephone"]
