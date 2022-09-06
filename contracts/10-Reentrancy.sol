pragma solidity ^0.6.0;

import "@openzeppelin/contracts/math/SafeMath.sol";

contract Reentrance {
    using SafeMath for uint256;
    mapping(address => uint256) public balances;

    function donate(address _to) public payable {
        // balances[_to] = balances[_to].add(msg.value); Hard coded the value for ease
        balances[_to] = balances[_to].add(100);
    }

    function balanceOf(address _who) public view returns (uint256 balance) {
        return balances[_who];
    }

    function withdraw(uint256 _amount) public {
        if (balances[msg.sender] >= _amount) {
            (bool result, bytes memory data) = msg.sender.call.value(_amount)("");
            if (result) {
                _amount;
            }
            balances[msg.sender] -= _amount;
        }
    }

    fallback() external payable {}
}
