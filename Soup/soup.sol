// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SoupToken {
    // Token variables
    string public name = "SOUP";
    string public symbol = "SOUP";
    uint8 public decimals = 18;
    uint256 public totalSupply = 150000000000 * 10**uint256(decimals);
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    // Fees
    uint256 public constant burnFee = 2; // 0.2%
    uint256 public constant creatorFee = 2; // 0.02%
    uint256 public constant treasuryFee = 18; // 0.18%

    address public constant burnWallet = 0x56cA0ee7f81b2cde03982A3a31694B302c937581; // Burn wallet address
    address public constant creatorWallet = 0x2B5fF8Cba8ED3A6E7813CD5e55ecd95B87791cee; // Creator's wallet address
    address public constant treasuryWallet = 0x56cA0ee7f81b2cde03982A3a31694B302c937581; // Treasury wallet address

    // Events
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    // Contract constructor
    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }

    // Transfer function
    function transfer(address _to, uint256 _value) external returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");

        uint256 burnAmount = (_value * burnFee) / 1000;
        uint256 creatorAmount = (_value * creatorFee) / 1000;
        uint256 treasuryAmount = (_value * treasuryFee) / 1000;
        uint256 transferAmount = _value - (burnAmount + creatorAmount + treasuryAmount);

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += transferAmount;
        balanceOf[burnWallet] += burnAmount;
        balanceOf[creatorWallet] += creatorAmount;
        balanceOf[treasuryWallet] += treasuryAmount;

        emit Transfer(msg.sender, _to, transferAmount);
        emit Transfer(msg.sender, burnWallet, burnAmount);
        emit Transfer(msg.sender, creatorWallet, creatorAmount);
        emit Transfer(msg.sender, treasuryWallet, treasuryAmount);

        return true;
    }

    // Approve spending function (allow another account to spend tokens on behalf of the owner)
    function approve(address _spender, uint256 _value) external returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    // Transfer approved function (used by contracts or other approved accounts)
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success) {
        require(balanceOf[_from] >= _value, "Insufficient balance");
        require(allowance[_from][msg.sender] >= _value, "Permission not granted");

        uint256 burnAmount = (_value * burnFee) / 1000;
        uint256 creatorAmount = (_value * creatorFee) / 1000;
        uint256 treasuryAmount = (_value * treasuryFee) / 1000;
        uint256 transferAmount = _value - (burnAmount + creatorAmount + treasuryAmount);

        balanceOf[_from] -= _value;
        balanceOf[_to] += transferAmount;
        balanceOf[burnWallet] += burnAmount;
        balanceOf[creatorWallet] += creatorAmount;
        balanceOf[treasuryWallet] += treasuryAmount;

        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, transferAmount);
        emit Transfer(_from, burnWallet, burnAmount);
        emit Transfer(_from, creatorWallet, creatorAmount);
        emit Transfer(_from, treasuryWallet, treasuryAmount);

        return true;
    }
}
