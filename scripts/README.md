**Level 8: Vault**
- Level 8 was skipped as one can simply query the blockchain to look at the private value.
- On the browser ethernaut, look at the contract address, go to etherscan and look at the constructor function and the transaction associated with it. You can decode online in etherscan and you will get the password directly from there. 

**Level 9: King**
- Main strategy requires to create another function that always resolves a transaction regardless of what is send, just make a fallback function that reverts on any interaction with the contract as in the KingAttack.sol

**Level 11: Elevator**
- Call the attack function in ElevatorAttack.sol

**Level 12**