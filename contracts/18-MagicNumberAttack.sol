pragma solidity ^0.6.0;

import "./18-MagicNumber.sol";

contract MagicNumberAttack {
    MagicNumber public magicNumberContract;

    constructor(address magicNumberAddress) public {
        magicNumberContract = MagicNumber(magicNumberAddress);
    }

    function attack() public {
        bytes memory bytecode = hex"600a600c600039600a6000f3602a60005260206000f3";
        bytes32 salt = 0;
        address solver;

        assembly {
            solver := create2(0, add(bytecode, 0x20), mload(bytecode), salt)
        }

        magicNumberContract.setSolver(solver);
    }
}
