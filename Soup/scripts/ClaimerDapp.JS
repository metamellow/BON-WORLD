// _______________________________________________________
// __________ ESTABLISH ALL SMART CONTRACT ABIs __________
// _______________________________________________________

// "Claimer"
const CONTRACT1_ABI = (
	{
        "contractName": "Claimer",
        "abi":

            [{"type":"constructor","inputs":[{"type":"address","name":"_tokenAddress","internalType":"address"},{"type":"uint256","name":"_claimRate","internalType":"uint256"},{"type":"uint256","name":"_claimPace","internalType":"uint256"},{"type":"uint256","name":"_claimKey","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claim","inputs":[{"type":"uint256","name":"_claimKey","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"claimKey","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"claimPace","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"claimRate","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"lastClaimTime","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"token","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalClaimed","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateClaimPace","inputs":[{"type":"uint256","name":"_claimPace","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateClaimRate","inputs":[{"type":"uint256","name":"_claimRate","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"updateTokenAddress","inputs":[{"type":"address","name":"_tokenAddress","internalType":"address"}]},{"type":"event","name":"ClaimDetails","inputs":[{"type":"uint256","name":"claimAmount","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","indexed":true},{"type":"address","name":"newOwner","indexed":true}],"anonymous":false}]    
    ,}
);

// "SoupToken"
const CONTRACT2_ABI = (
	{
        "contractName": "SoupToken",
        "abi":

        [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "burnFee",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "burnWallet",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "creatorFee",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "creatorWallet",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "treasuryFee",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "treasuryWallet",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]    
    ,}
);

class ClaimerDappInterface {
    
    // _____________________________________________________________
    // _______________ VARIABLES AND OBJECTS SECTION _______________
    // _____________________________________________________________
    
    // --- @DEV Sets up all the vars and objects used
    constructor() {
        // --- Universal web3 Variables
        this.dappChain = '0x1a0a'; //ETHEREUM-MAINNET=='0x1', POLYGON-MAINNET=='0x89', BINANCE-MAINNET=='0x38', MODULUS-TESTNET=='0x1a0a', POLYGON-MUMABI=='0x13881'
        this.chainName = 'MODULUS TESTNET';
        this.contractAddress1 = '0x26fd3e1454e6175b150341158df48ce3D5c76C4a'; // Claimer
        this.contractAddress2 = '0x98Eb886Bbb97F2B7800B3120c24F6d0627c1d8f8'; // SoupToken
        this.currentAccount = ''; // THIS IS DUPLICATED ON OTHER SCRIPTS, beware
        this.waitingForListener = false;
        this.txnCost = ''; // loaded on checkBetPrice();

        // --- Button HTML Elements ---
        this.buttonsArray = [
            (this.JSButton0 = "0"), //emptyplaceholder
            (this.JSButton1 = document.getElementById('HTML_button_1')), // C2 - balanceOf()
        ]

        // --- Input HTML Elements --- 
        this.selectedInput1 = 1; // 
        this.JSInput1 = document.getElementById('HTML_input_1'); // inputField
    }

    // _____________________________________________________________
    // __________________ SETUP PROCESSES SECTION __________________
    // _____________________________________________________________

    // --- @DEV this boots all the PRIMARY components and SECONDARY components
    async dappInitializeProcess() {
        // --- PRIMARY components
        try{await this.pullUsersWallet();} catch (error) {console.log(error);}
        try{await this.setupEventListener();} catch (error) {console.log(error);}
        try{await this.buttonManagerFunc();} catch (error) {console.log(error);}  
        
        // --- SECONDARY components
        try{await this.checkSoupBalance();} catch (error) {console.log(error);}
    }

    // --- @DEV Listeners that pick up emit events from onchain functions
    async setupEventListener() {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();

                /*
                // --- Contract 1 ---
                    // Setup
                    const connectedContract1 = new ethers.Contract(
                        this.contractAddress1,
                        CONTRACT1_ABI.abi,
                        signer
                    );
                    console.log('Contract 1 connected to listener');

                    // Event Listener 1A
                    connectedContract1.on('BetDetails', (playersCounter, counterReward) => {
                        if(this.waitingForListener == true){
                            this.waitingForListener = false;
                            console.log(playersCounter, counterReward);
                            alert(`Bet successful! Please wait 2 min for the TXNs to log on the blockchain.`);
                            window.location.reload();
                        }
                        }
                    );
                    console.log('Contract 1A listener success');
                */

            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    // _____________________________________________________________
    // ___________ UNIVERSAL CONTRACT FUNCTIONS SECTION ____________
    // _____________________________________________________________

    // --- @DEV function explanation
    async checkSoupBalance() {
        try { 
            const { ethereum } = window;
            if (ethereum) {
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                console.log(`chainId: ` + chainId);
                if((chainId == this.dappChain)){
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    try{
                        // Contract 1 functions
                        console.log(`Connecting contract2...`);
                        const connectedContract2 = new ethers.Contract(
                            this.contractAddress2,
                            CONTRACT2_ABI.abi,
                            signer
                        );
                            // @Dev this should be the effected button range
                            for (let i = 1; i < 2; i++) {
                                this.buttonsArray[i].disabled = true;
                                this.buttonsArray[i].innerText = `*loading*`;
                                console.log(`button ${i} disabled`);
                            }
                        
                            // Button 1 - balanceOf()
                            console.log(`Attempting button 1 call..`);
                            let Button1Results = await connectedContract2.balanceOf(`${this.currentAccount}`);
                            console.log('Awaiting button results...');
                            await Button1Results;
                            console.log("Analzying results...");
                            if ((Button1Results != 0) || (Button1Results != "")){
                                    let formatedResults = ethers.utils.formatEther(String(Button1Results));
                                    formatedResults = Number(formatedResults);
                                    formatedResults = formatedResults.toFixed(3);
                                    formatedResults = ethers.utils.commify(formatedResults);
                                    this.buttonsArray[1].disabled = false;
                                    this.buttonsArray[1].innerText = `${formatedResults}`;
                            } else {this.buttonsArray[1].innerText = `no results`;}
                    }catch(error){
                        // @Dev error related to the function process
                        console.log(error);
                    }
                } else {
                    // @Dev error related to network chain
                    console.log(`dappChain incorrect`);
                }
            } else {
                // @Dev error related to 'Metamask'
                console.log(`Eth object not found`);
            }
        } catch (error) {
            // @Dev this pulls the flagged error and gives to user
            console.log(error);
        }
    }

    // --- @Dev for now empty, but it can be used to approve check on ERC20's
    async clickedButton1Functions_Loader(){
        this.clickedButton1Functions(); 
    }
    
    // --- @Dev this changed the vars based on user inputs
    async onAnySelectInputs() {
        if(this.selectedInput1 != this.JSInput1.value){
            this.selectedInput1 = this.JSInput1.value;
            console.log(`New input: ${this.selectedInput1}`);
        }
    }

    // --- @Dev this logs the users account
    async pullUsersWallet(){
        try {
            const { ethereum } = window;
            if (!ethereum) {
                return;
            } else {
                const accounts = await ethereum.request({
                    method: 'eth_requestAccounts',
                });
                this.currentAccount = accounts[0];
                console.log("wllt-plld");
            }
        } catch (error) {
            console.log(error);
        }
    }

    // --- @Dev this checks the network setup and adjusts the buttons accordingly
    async buttonManagerFunc(){
        try { 
            const { ethereum } = window;
            if (ethereum) {
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                if(chainId !== this.dappChain){
                    for (let i = 1; i < this.buttonsArray.length; i++) {
                        this.buttonsArray[i].disabled = true;
                        this.buttonsArray[i].innerText = `${this.chainName} ONLY`;
                        console.log(`button ${i} disabled`);
                    }
                    alert(`Please use ${this.chainName} and REFRESH browser -- Other networks will NOT WORK!`);
                } else {
                    for (let i = 1; i < this.buttonsArray.length; i++) {
                        this.buttonsArray[i].innerText = '*loading*';
                        console.log(`button ${i}`);
                    }
                    console.log(`Connected to ${this.chainName} (${this.dappChain})`);
                }
            } else {
                for (let i = 1; i < this.buttonsArray.length; i++) {
                    this.buttonsArray[i].disabled = true;
                    this.buttonsArray[i].innerText = `GET METAMASK`;
                    console.log(`button ${i} disabled`);
                }
                alert(`Ethereum object not found!`);
            }
        }catch(error){
            console.log(error);
        }
    }

    // --- END --- //
}

const ClaimerDappInterface_ = new ClaimerDappInterface();
ClaimerDappInterface_.dappInitializeProcess();
