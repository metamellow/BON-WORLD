class IndexInterface {
    constructor() {
        /* --- CONNECT BUTTON --- */
        this.currentAccount = ''; // loaded on connectWallet
        this.JSconnectButton = document.getElementById('HTML_connect_button'); // connectWallet()
        
        /* --- NETWORK DROPDOWN --- */
        this.JSInputValue1 = ''; // set via the HTML_input
        this.JSInputElmnt1 = document.getElementById('HTML_dropdown_input_1'); // dropdown
    }

    /* --- CONNECT BUTTON --- */
    async connectWallet() {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                //alert('Can not find web3 etherum. Please install Metamask!');
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
            //alert('Can not find web3 etherum. Please install Metamask!');
                console.log("NO ETHEREUM OBJECT");

                this.JSconnectButton.innerText = 'Install Metamask';
                this.JSconnectButton.disabled = true;
        }
    }
    
    /* --- NETWORK DROPDOWN --- */
    async chooseWhichStake(){
        this.JSInputValue1 = this.JSInputElmnt1.value;
        console.log(this.JSInputValue1);

        if(this.JSInputValue1 == "BONNFT"){
            window.location.href = "../Stake/BonnftStake.html";
        }
    }
}

const IndexInterface_ = new IndexInterface();
IndexInterface_.connectWallet();
