// Import ABI contract data
const CONTRACT1_ABI = (
	{
        "contractName": "BONxRVLT",
        "abi":
            [{}]
	,}
);

const CONTRACT2_ABI = (
	{
        "contractName": "RVLT",
        "abi":
        [{}]
    ,}
);

class DappInterface {
    
    // --- VARIABLES ---
    constructor() {
        this.contractAddress1 = ''; // the dapp
        this.contractAddress2 = ''; // outside contracts like erc20s
        this.txnCost = 0.0001; // converted to '100000000000000'
        this.currentAccount = ''; // loaded on connectWallet
        this.selectedQuantity1 = 0; // set via the HTML dropdown

        // All HTML Elements
        this.JSconnectButton1 = document.getElementById('HTML_connect_button');
        this.JSfunctionButton1 = document.getElementById('HTML_function_button_1');
        this.JSfunctionButton2 = document.getElementById('HTML_function_button_2');
        this.JSquantityDropdown1 = document.getElementById('HTML_quantity_dropdown_1');
    }

    // --- SETUP PROCESSES --

    // Generic web3 wallet connect process
    async connectWallet() {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert('Get MetaMask!');
                return;
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            this.currentAccount = accounts[0]; 
            console.log('Connected: ', this.connectedUsersAddress);
            this.JSconnectButton1.innerText = `${
                this.currentAccount.substring(0, 6)}...${
                this.currentAccount.substring((this.currentAccount.length-4), this.currentAccount.length)
            }`;
            this.setupEventListener();
        } catch (error) {
            console.log(error);            
        }
    }

    // Listeners that pick up emit events from onchain functions
    async setupEventListener() {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();

                // --- Contract 1 ---
                    const connectedContract1 = new ethers.Contract(
                        this.contractAddress1,
                        CONTRACT1_ABI.abi,
                        signer
                    );
                    console.log('Contract 1 connected to listener');

                    // Event listener 1A
                    connectedContract1.on('eventNamexxx', (xxx, yyy) => {
                        console.log(xxx, yyy);
                        alert(`xxxyyy`);
                        }
                    );
                    console.log('Contract 1A listener success');

                // --- Contract 2 ---
                    const connectedContract2 = new ethers.Contract(
                        this.contractAddress2,
                        CONTRACT2_ABI.abi,
                        signer
                    );
                    console.log('Contract 2 connected to listener');
                    
                    // Event listener 2A
                    connectedContract2.on('eventNamexxx', (xxx, yyy) => {
                        console.log(xxx, yyy);
                        alert(`xxxyyy`);
                        }
                    );
                    console.log('Contract 2A listener success');

            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    

    // --- CONTRACT FUNCTIONS ---
    
    // Functions that require erc20 approve() first
    async approveThen_Xxx() {
        // vvvv these tags can be commented out if not needed 
        if(this.selectedQuantity1 < 1){alert(`Please select a quantity from the dropdown list.`);}
        if(this.selectedQuantity1 >= 1){
        // ^^^^
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 2 Allowance check
                    this.JSfunctionButton1.innerText = '*please wait*';
                    this.JSfunctionButton1.disabled = true;
                    
                    console.log(`Connecting contract2...`);
                    const connectedContract2 = new ethers.Contract(
                        this.contractAddress2,
                        CONTRACT2_ABI.abi,
                        signer
                    );
                    
                    console.log(`Attempting allowance call...`);
                    let tknAllwnc = await connectedContract2.allowance(
                        this.currentAccount,
                        this.connectedContract1
                    );

                    console.log('Awaiting allowance result...');
                    await tknAllwnc;
                    console.log('Analyzing allowance result...');
                    
                    if(tknAllwnc > 0){
                        console.log('Allowance accepted!');
                        try {
                            // Contract 1 function
                            console.log(`Connecting contract1...`);
                            const connectedContract1 = new ethers.Contract(
                                this.contractAddress1,
                                CONTRACT1_ABI.abi,
                                signer
                            );

                            console.log(`Attempting function - Q:${this.selectedQuantity1}, G:${this.txnCost}`);
                            
                            /////////////////////////////////////////////////////////////////////////////////////////////////////////
                            
                            const options = {
                                value: ethers.utils.parseEther(
                                `${this.txnCost}`
                                ),
                            };

                            let nftTxn = await connectedContract2.mint(
                                String(this.selectedQuantity1),
                                options
                            );
                            console.log('Mining...please wait.');
                            await nftTxn.wait();
                            // Emit event should trigger the listener on success
                            this.mintButton.innerText = 'MINT MORE!';
                            this.mintButton.disabled = false;
                        } catch (error) {
                            console.log(error);
                            this.mintButton.innerText = '[-MINT AGAIN-]';
                            this.mintButton.disabled = false;
                        }
                        
                    } else {
                        console.log('Allowance failed; starting approval');
                        try{
                            // --- APPROVAL STUFF ---
                            const connectedContract1 = new ethers.Contract(
                                this.PUBLICTOKEN_ADDRESS,
                                PROXYTOKEN_ABI.abi,
                                signer
                            );
                            this.mintButton.innerText = '*approving*';
                            this.mintButton.disabled = true;
                            console.log(`Attemting approve() call`);
                            let tknApprv = await connectedContract1.approve(
                                this.CONTRACT_ADDRESS,
                                '115792089237316195423570985008687907853269984665640564039457584007913129639935'
                            );
                            console.log('Awaiting approve() results');
                            await tknApprv.wait();
                            // Emit event should trigger the listener on success
                            // that trigger should relabel mint button and reenable
                        } catch (error) {
                            console.log(error);
                            this.mintButton.innerText = '[-APPROVE AGAIN-]';
                            this.mintButton.disabled = false;
                        }
                        
                    }
                } catch (error) {
                console.log(error);
                console.log("Major error -- contact administrator");
                this.mintButton.innerText = '-ERROR-';
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.mintButton.innerText = '-GET METAMASK-';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.mintButton.innerText = '-GET METAMASK-';
        }
        } // << quantity tag ender
    }

  async checkIfWalletIsConnected() {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
        const account = accounts[0];
        this.currentAccount = account;
        this.connectedUsersAddress = accounts[0]; // NEWWW!
        console.log('Connected: ', this.connectedUsersAddress);
        this.connectButton.innerText = `${
        this.currentAccount.substring(0, 6)}...${
            this.currentAccount.substring((this.currentAccount.length-4), this.currentAccount.length)
      }`;

      // for user comes to our site and ALREADY had their wallet connected + authorized.
      this.setupEventListener();

    } else {
      console.log('No authorized account found');
    }

    let chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log('Connected to chain ' + chainId);

    const polygonChainId = '0x89'; // 137 in hex
    if (chainId !== polygonChainId) {
      alert(
        'You are NOT connected to the POLYGON MAINNET! If you mint on any other network it will NOT WORK!'
      );
    }
  }

  // basic html to js fuctions ------

  onSelectMintQuantity() {
    this.selectedMintQuantity = this.mintQuantityDropdown.value;
    console.log(this.selectedMintQuantity);
  }

  onSelectNFTCollection() {
    this.selectedNFTCollection = this.nftCollectionDropdown.value;
    console.log(this.selectedNFTCollection);

    if(this.selectedNFTCollection == "BONNFT1"){
      window.location.href = "../nftcollection/BONNFT1.html";
    }
    if(this.selectedNFTCollection == "BONxCULT1"){
      window.location.href = "../nftcollection/BONxCULT1.html";
    }
	if(this.selectedNFTCollection == "BONxRVLT"){
		window.location.href = "../nftcollection/BONxRVLT.html";
	}
	if(this.selectedNFTCollection == "BONxLIB"){
		window.location.href = "../nftcollection/BONxLIB.html";
	}
  }//!!!!!!!!

}

const DappInterface_ = new DappInterface();
DappInterface_.checkIfWalletIsConnected();