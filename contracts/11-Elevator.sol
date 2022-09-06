pragma solidity ^0.6.0;

// Will solve later
interface Building {
    function isLastFloor(uint256) external returns (bool);
}

contract Elevator {
    bool public top;
    uint256 public floor;

    function goTo(uint256 _floor) public {
        Building building = Building(msg.sender);

        if (!building.isLastFloor(_floor)) {
            // 0 is _floor as only !0 is true
            // If 0 isn't the last floor, which it isn't
            // the floor is 0
            // top is a bool
            floor = _floor;
            top = building.isLastFloor(floor);
        }
    }
}
