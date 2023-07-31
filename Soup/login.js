// Função para conectar a carteira do usuário
async function connectWallet() {
  if (window.ethereum) {
      try {
          // Solicitar ao usuário para conectar sua carteira
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const userAddress = accounts[0];
          // Atualizar o texto do botão com o endereço da carteira
          document.getElementById('connectButtonHTML').innerText = userAddress;
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
