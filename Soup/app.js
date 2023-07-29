// Importar a biblioteca Web3.js
const Web3 = require('web3');

// Definir a URL do provedor da rede "moduluszk"
const web3ProviderUrl = 'https://rpc.moduluszk.io';

// Crie uma instância do objeto Web3 usando o URL do provedor
const web3 = new Web3(web3ProviderUrl);

// Endereço do contrato SOUP
const contractAddress = '0x98eb886bbb97f2b7800b3120c24f6d0627c1d8f8';

// ABI do contrato SOUP (este é um exemplo, substitua pelo ABI real)
const contractABI = [...];

// Crie uma instância do contrato SOUP
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Função para conectar a carteira
function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        // Solicite acesso à carteira do usuário (por exemplo, MetaMask)
        window.ethereum.enable()
            .then(function (accounts) {
                // Obtenha a conta conectada
                const account = accounts[0];

                // Atualize o status para "Connected" e exiba o endereço da carteira
                document.getElementById('status').innerText = 'Connected';
                document.getElementById('connectedWallet').innerText = account;
            })
            .catch(function (error) {
                console.error('Error connecting to wallet:', error);
            });
    } else {
        console.error('Web3 not found. Please install a Web3-enabled wallet like MetaMask.');
    }
}

// Função para solicitar os tokens SOUP
function requestSoupTokens() {
    if (typeof window.ethereum !== 'undefined') {
        // Verifique se a carteira está conectada
        window.ethereum.request({ method: 'eth_accounts' })
            .then(function (accounts) {
                if (accounts.length === 0) {
                    console.error('Wallet not connected. Please connect your wallet first.');
                    return;
                }

                // Envie uma transação para o contrato para solicitar os tokens SOUP
                contract.methods.sendSoupTokens().send({ from: accounts[0] })
                    .then(function (transactionReceipt) {
                        // Aqui você pode lidar com a resposta da transação
                        console.log('Transaction receipt:', transactionReceipt);
                    })
                    .catch(function (error) {
                        console.error('Error sending SOUP tokens:', error);
                    });
            })
            .catch(function (error) {
                console.error('Error getting accounts:', error);
            });
    } else {
        console.error('Web3 not found. Please install a Web3-enabled wallet like MetaMask.');
    }
}

window.addEventListener('load', async () => {
    // Verifique se a Web3 já está injetada pelo provedor (Metamask, etc.)
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable(); // Solicite permissão para acessar a carteira
        const accounts = await window.web3.eth.getAccounts();
        const userAddress = accounts[0];

        // Atualize o botão de login para mostrar o endereço da carteira conectada
        const connectWalletButton = document.getElementById('connectWalletButton');
        connectWalletButton.textContent = `Connected: ${userAddress}`;

        // Adicione o manipulador de clique para a função de reivindicação
        connectWalletButton.addEventListener('click', claimTokens);
    } else {
        alert('Web3 not detected. Please install a Web3-enabled browser extension like Metamask.');
    }
});

async function claimTokens() {
    try {
        const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Endereço do contrato SoupDistribution
        const contractABI = [YOUR_CONTRACT_ABI]; // ABI do contrato SoupDistribution

        const contact = new window.web3.eth.Contract(contractABI, contractAddress);

        // Chame a função de reivindicação no contrato
        await contract.methods.claimSoupTokens().send({ from: window.web3.eth.defaultAccount });

        // Atualize a página após a reivindicação bem-sucedida (você pode adicionar outras ações aqui)
        location.reload();
    } catch (error) {
        console.error('Error claiming tokens:', error);
        alert('Error claiming tokens. Please try again.');
    }

}

function clearDefaultText() {
    var inputElement = document.getElementById('soup-balance');
    if (inputElement.value === 'Enter your Soup Balance') {
      inputElement.value = '';
    }
  }
  
  function restoreDefaultText() {
    var inputElement = document.getElementById('soup-balance');
    if (inputElement.value === '') {
      inputElement.value = 'Enter your Soup Balance';
    }
  }
  

