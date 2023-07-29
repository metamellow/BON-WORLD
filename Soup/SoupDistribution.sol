// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SoupToken.sol"; // Importe o contrato do token SOUP

contract SoupDistribution {
    SoupToken public soupToken;
    address public owner;
    address public rewardWallet = 0x56cA0ee7f81b2cde03982A3a31694B302c937581;

    mapping(address => uint256) public lastClaimTime;

    uint256 public claimCooldown = 1 days; // Período de cooldown de 24 horas

    constructor(address _soupTokenAddress) {
        soupToken = SoupToken(_soupTokenAddress);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    // Função para enviar tokens aos usuários
    function claimSoupTokens() public {
        require(isConnectedWallet(msg.sender), "Connect your wallet first!");
        require(canClaimTokens(msg.sender), "You can claim tokens only once every 24 hours!");

        // Emitir 1 milhão de tokens para o endereço do remetente
        uint256 amount = 1_000_000; // 1 milhão de unidades de tokens SOUP
        soupToken.transfer(msg.sender, amount);

        // Atualizar o horário da última reivindicação para o remetente
        lastClaimTime[msg.sender] = block.timestamp;
    }

    // Função para enviar tokens da carteira de recompensa
    function sendTokensFromRewardWallet(address to, uint256 amount) public onlyOwner {
        soupToken.transfer(to, amount);
    }

    // Função para verificar se o usuário conectou sua carteira
    function isConnectedWallet(address wallet) private view returns (bool) {
        // Implemente a lógica para verificar a conexão da carteira
        // Retorne true se a carteira estiver conectada, caso contrário, retorne false
        // Exemplo: Aqui, você pode verificar se o usuário possui uma assinatura válida no contrato ou se o endereço da carteira está presente em uma lista de permissões, etc.
    }

    // Função para verificar se o usuário pode reivindicar os tokens
    function canClaimTokens(address wallet) private view returns (bool) {
        return (block.timestamp >= lastClaimTime[wallet] + claimCooldown);
    }

    // Função para definir o período de cooldown (apenas para o proprietário do contrato)
    function setClaimCooldown(uint256 cooldown) public onlyOwner {
        claimCooldown = cooldown;
    }

    // Função para definir a carteira de recompensa (apenas para o proprietário do contrato)
    function setRewardWallet(address wallet) public onlyOwner {
        rewardWallet = wallet;
    }

    import "@openzeppelin/contracts/access/Ownable.sol";

contract SoupDistribution is Ownable {
    // ...

    // Função para verificar se o usuário conectou sua carteira
    function isConnectedWallet(address wallet) private view returns (bool) {
        return wallet == owner();
    }

    // ...
}


contract SoupDistribution is Ownable {
    // ...

    // Função para verificar se o usuário pode reivindicar os tokens
    function canClaimTokens(address wallet) private view returns (bool) {
        return (block.timestamp >= lastClaimTime[wallet] + claimCooldown);
    }

    // ...
}



}
