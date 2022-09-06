module.exports = async function main({ getNamedAccounts, deployments }) {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments

    const elevator = await deploy("Elevator", {
        from: deployer,
        // log: true,
        args: [],
    })

    log(`Deployed Elevator Contract on ${elevator.address}`)
    log("-------------------------------------------------------------------------------")

    const elevatorAttack = await deploy("ElevatorAttack", {
        from: deployer,
        // log: true,
        args: [elevator.address],
    })

    log(`Deployed ElevatorAttack on ${elevatorAttack.address}`)
    log("-------------------------------------------------------------------------------")
}
