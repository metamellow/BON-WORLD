class IndexInterface {
  constructor() {
    /* --- CONNECT BUTTON --- */
    this.currentAccount = ''; // loaded on connectWallet
    this.JSconnectButton = document.getElementById('HTML_connect_button'); // connectWallet()

    /* --- NETWORK DROPDOWN --- */
    this.JSnetworkDDValue = ''; // set via the HTML input; captures the chosen token exchange
    this.JSnetworkDDInput = document.getElementById('HTML_dropdown_input_1'); // dropdown to choose tokens
  }

  /* --- CONNECT BUTTON --- */
  async connectWallet() {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert('Can not find web3 etherum. Please install Metamask!');
        console.log('NO ETHEREUM OBJECT');

        this.JSconnectButton.innerText = 'Install Metamask';
        this.JSconnectButton.disabled = true;

        return;
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      this.currentAccount = accounts[0];
      console.log('Wallet connected: ', this.currentAccount);
      this.JSconnectButton.innerText = `${this.currentAccount.substring(
        0,
        6
      )}...${this.currentAccount.substring(
        this.currentAccount.length - 4,
        this.currentAccount.length
      )}`;
    } catch (error) {
      alert('Can not find web3 etherum. Please install Metamask!');
      console.log('NO ETHEREUM OBJECT');

      this.JSconnectButton.innerText = 'Install Metamask';
      this.JSconnectButton.disabled = true;
    }
  }

  /* --- NETWORK DROPDOWN --- */
  async chooseWhichLotto() {
    this.JSnetworkDDValue = this.JSnetworkDDInput.value;
    console.log(this.JSnetworkDDValue);

    if (this.JSnetworkDDValue == 'MATIC') {
      window.location.href = './MATIC/Infinity.html';
    } else if (this.JSnetworkDDValue == 'ETH') {
      window.location.href = './ETH/Infinity.html';
    } else if (this.JSnetworkDDValue == 'BON') {
      window.location.href = './BON/Options.html';
    }
  }
}

const IndexInterface_ = new IndexInterface();
IndexInterface_.connectWallet();
