// Função para conectar a carteira do usuário
async function connectWallet() {
    if (window.ethereum) {
        try {
            // Solicitar ao usuário para conectar sua carteira
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            // Obter a instância do contrato do token $SOUP
            const contractAddress = '0x98Eb886Bbb97F2B7800B3120c24F6d0627c1d8f8';
            const contractAbi = []; // Coloque aqui o ABI do contrato $SOUP
            const web3 = new Web3(window.ethereum);
            const soupContract = new web3.eth.Contract(contractAbi, contractAddress);
            // Verificar o saldo do usuário após a conexão
            checkSoupBalance(soupContract);
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Web3 not available. Please install a compatible wallet like MetaMask.');
    }
  }
  
  // Função para verificar o saldo de $SOUP do usuário
  async function checkSoupBalance(soupContract) {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const userAddress = accounts[0];
        const balance = await soupContract.methods.balanceOf(userAddress).call();
        // Atualizar o valor do saldo na página
        document.getElementById('soup-balance').value = `${balance} $SOUP`;
    } catch (error) {
        console.error(error);
    }
  }
  
  // Função para reivindicar tokens $SOUP
  async function claimTokens() {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        const userAddress = accounts[0];
        // Verificar se a carteira está conectada
        if (!userAddress) {
            alert('Please connect your wallet first.');
            return;
        }
        // Obter a instância do contrato do token $SOUP
        const contractAddress = '0x98Eb886Bbb97F2B7800B3120c24F6d0627c1d8f8';
        const contractAbi = []; // Coloque aqui o ABI do contrato $SOUP
        const web3 = new Web3(window.ethereum);
        const soupContract = new web3.eth.Contract(contractAbi, contractAddress);
        // Executar a função de transferência do contrato para reivindicar os tokens
        await soupContract.methods.transfer(userAddress, 100).send({ from: userAddress });
        // Atualizar o saldo do usuário após a reivindicação
        checkSoupBalance(soupContract);
    } catch (error) {
        console.error(error);
    }
  }
  
  // Adicionar um evento de clique ao botão de conectar a carteira
  document.getElementById('connectButtonHTML').addEventListener('click', connectWallet);
  
  // Adicionar um evento de clique ao botão de reivindicar tokens
  document.getElementById('requestTokensButton').addEventListener('click', claimTokens);
  