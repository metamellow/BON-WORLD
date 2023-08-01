class IndexInterface {
    constructor() {
        /* --- CONNECT BUTTON --- */
        this.currentAccount = ''; // loaded on connectWallet
        this.JSconnectButton = document.getElementById('HTML_connect_button'); // connectWallet()
        
        /* --- DAPP DROPDOWN --- */
        this.JSdappDDValue = ''; // set via the HTML input;
        this.JSdappDDInput = document.getElementById('HTML_dropdown_input_1'); // dropdown to choose
    }

    /* --- CONNECT BUTTON --- */
    async connectWallet() {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert('Can not find web3 etherum. Please install Metamask!');
                console.log("NO ETHEREUM OBJECT");

                this.JSconnectButton.innerText = 'Install Metamask';
                this.JSconnectButton.disabled = true;

                return;
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            this.currentAccount = accounts[0]; 
            console.log('Wallet connected: ', this.currentAccount);
            this.JSconnectButton.innerText = `${
                this.currentAccount.substring(0, 6)}...${
                this.currentAccount.substring((this.currentAccount.length-4), this.currentAccount.length)
            }`;
        } catch (error) {
            alert('Can not find web3 etherum. Please install Metamask!');
                console.log("NO ETHEREUM OBJECT");

                this.JSconnectButton.innerText = 'Install Metamask';
                this.JSconnectButton.disabled = true;
        }
    }
    
    /* --- DAPP DROPDOWN --- */
    async chooseWhichLotto(){
            this.JSdappDDValue = this.JSdappDDInput.value;
            console.log(this.JSdappDDValue);

            if(this.JSdappDDValue == "multisender"){
            /*window.location.href = "./MaticLotto.html"*/;
            }
            if(this.JSdappDDValue == "nftmint"){
                /*window.location.href = "./EthLotto.html"*/;
            }
    }
}

const IndexInterface_ = new IndexInterface();
IndexInterface_.connectWallet();
