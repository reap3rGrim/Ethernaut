module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const library = await deploy("LibraryContract", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed the Library for Preservation Contract on ${library.address}`)
    log("-------------------------------------------------------------------------------")

    const preservation = await deploy("Preservation", {
        from: deployer,
        // log: true,
        args: [library.address, library.address],
    })
    log(`Deployed the Preservation Contract on ${preservation.address}`)
    log("-------------------------------------------------------------------------------")

    const preservationAttackLibrary = await deploy("PreservationAttackLibrary", {
        from: deployer,
        // log: true,
        args: [],
    })
    log(
        `Deployed the Malicious Library for Preservation Contract on ${preservationAttackLibrary.address}`
    )
    log("-------------------------------------------------------------------------------")

    const preservationAttack = await deploy(`PreservationAttack`, {
        from: deployer,
        // log: true,
        args: [preservation.address],
    })
    log(`Deployed the Preservation Attack Contract on ${preservationAttack.address}`)
    log("-------------------------------------------------------------------------------")
}
