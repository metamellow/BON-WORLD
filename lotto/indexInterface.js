class IndexInterface {
  constructor() {
    /* --- CONNECT BUTTON --- */
    this.currentAccount = ''; // loaded on connectWallet
    this.JSconnectButton = document.getElementById('HTML_connect_button'); // connectWallet()

    /* --- NETWORK DROPDOWN --- */
    this.JSnetworkDDValue = ''; // set via the HTML input;
    this.JSnetworkDDInput = document.getElementById('HTML_dropdown_input_1');
    this.JSmodeDDValue = ''; // set via the HTML input; 
    this.JSmodeDDInput = document.getElementById('HTML_dropdown_input_2');
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
      window.location.href = '../../lotto/MATIC/Infinity.html';
    } else if (this.JSnetworkDDValue == 'ETH') {
      window.location.href = '../../lotto/ETH/Infinity.html';
    } else if (this.JSnetworkDDValue == 'BON') {
      window.location.href = '../../lotto/BON/Options.html';
    }
  }

  async chooseWhichMode() {
    this.JSmodeDDValue = this.JSmodeDDInput.value;
    console.log(this.JSmodeDDValue);

    if (this.JSmodeDDValue == 'Infinity') {
      window.location.href = './Infinity.html';
    } else if (this.JSmodeDDValue == 'Low') {
      window.location.href = './Low.html';
    } else if (this.JSmodeDDValue == 'Medium') {
      window.location.href = './Medium.html';
    } else if (this.JSmodeDDValue == 'High') {
      window.location.href = './High.html';
    }
  }
}

const IndexInterface_ = new IndexInterface();
IndexInterface_.connectWallet();
