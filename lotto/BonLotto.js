// _______________________________________________________
// __________ ESTABLISH ALL SMART CONTRACT ABIs __________
// _______________________________________________________

// Contract 1 = ""
const CONTRACT1_ABI = (
	{
        "contractName": "Claimer",
        "abi":

    
    
    ,}
);

// Contract 2 = ""
const CONTRACT2_ABI = (
	{
        "contractName": "BONNFT",
        "abi":

    
    
    ,}
);

// Contract 3 = ""
const CONTRACT3_ABI = (
	{
        "contractName": "Token",
        "abi":

    
    ,}
);

class ClaimerDappInterface {
    
    // _____________________________________________________________
    // _______________ VARIABLES AND OBJECTS SECTION _______________
    // _____________________________________________________________
    
    // --- @DEV Sets up all the vars and objects used
    constructor() {
        // --- Universal web3 Variables ---
        this.dappChain = '0x89'; //ETHEREUM-MAINNET=='0x1', POLYGON-MAINNET=='0x89', BINANCE-MAINNET=='0x38', MODULUS-TESTNET=='0x6666', POLYGON-MUMABI=='0x13881'
        this.chainName = 'POLYGON-MAINNET';
        this.contractAddress1 = 'xx'; // xx
        this.contractAddress2 = 'xx'; // xx
        this.contractAddress3 = 'xx'; // xx
        this.connectedContract1; // Needed when loading the scripts
        this.connectedContract2; // Needed when loading the scripts
        this.connectedContract3; // Needed when loading the scripts
        this.currentAccount = ''; // THIS IS DUPLICATED ON OTHER SCRIPTS, beware
        this.waitingForListener = false;
        this.connectionError = false;

        // --- Button HTML Elements ---
        this.buttonsArray = [
            (this.JSButton0 = "0"), //emptyplaceholder
            (this.JSButton1 = document.getElementById('HTML_button_1')), // xxx()
        ]

        // --- Input HTML Elements --- 
        this.selectedInput1 = 1; // 
        this.JSInput1 = document.getElementById('HTML_input_1'); // inputField

        // --- Unique Div Boxes ---
        this.JSUniqueDiv1 = document.getElementById('xx'); // xx

    }

    // _____________________________________________________________
    // _____________________ NEEDED FUNCTIONS ______________________
    // _____________________________________________________________

    // --- @DEV this boots all the PRIMARY components and SECONDARY components
    async dappInitializeProcess() {
        // --- PRIMARY components
        try{await this.setupButtonsFunc();} catch (error) {console.log(error);}  
        try{await this.pullUsersWallet();} catch (error) {console.log(error);}
        try{await this.connectAllContracts();} catch (error) {console.log(error);}
        try{await this.setupEventListener();} catch (error) {console.log(error);}
        
        // --- SECONDARY components
        try{await this.xxx();} catch (error) {console.log(error);}

    }

    // --- @Dev this checks the network setup and adjusts the buttons accordingly
    async setupButtonsFunc(){
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
                    this.connectionError = true;
                    alert(`Please use ${this.chainName} and REFRESH browser -- Other networks will NOT WORK!`);
                } else {
                    console.log(`Connected to ${this.chainName} (${this.dappChain})`);
                }
            } else {
                for (let i = 1; i < this.buttonsArray.length; i++) {
                    this.buttonsArray[i].disabled = true;
                    this.buttonsArray[i].innerText = `GET METAMASK`;
                    console.log(`button ${i} disabled`);
                }
                this.connectionError = true;
                alert(`Ethereum object not found!`);
            }
        }catch(error){
            console.log(error);
        }
    }

    // --- @Dev this disables buttons on function call; FROM/TO inputs
    async disableButtons(from, to){
        for (let i = from; i <= to; i++) {
            this.buttonsArray[i].disabled = true;
            this.buttonsArray[i].innerText = `*loading*`;
            console.log(`button ${i} disabled`);
        }
    }

    // --- @Dev this logs the users account
    async pullUsersWallet(){
        if(this.connectionError == true){return;}
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
            this.connectionError = true;
            console.log(error);
        }
    }

    // --- @DEV this connects the JS script to all the smart contracts
    async connectAllContracts(){
        try { 
            const { ethereum } = window;
            if (ethereum) {
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                console.log(`chainId: ` + chainId);
                if((chainId == this.dappChain)){
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    try{

                        console.log(`Connecting contract1...`);
                        this.connectedContract1 = new ethers.Contract(
                            this.contractAddress1,
                            CONTRACT1_ABI.abi,
                            signer
                        );

                        console.log(`Connecting contract2...`);
                        this.connectedContract2 = new ethers.Contract(
                            this.contractAddress2,
                            CONTRACT2_ABI.abi,
                            signer
                        );

                        console.log(`Connecting contract3...`);
                        this.connectedContract3 = new ethers.Contract(
                            this.contractAddress3,
                            CONTRACT3_ABI.abi,
                            signer
                        );

                    }catch(error){
                        this.connectionError = true;
                        console.log(error);
                        console.log(`error connecting contracts`);
                    }
                } else {
                    this.connectionError = true;
                    console.log(`dappChain incorrect`);
                }
            } else {
                this.connectionError = true;
                console.log(`Eth object not found`);
            }
        } catch (error) {
        }
    }

    // --- @DEV Listeners that pick up emit events from onchain functions
    async setupEventListener() {
        if(this.connectionError == true){return;}
        
        try { 
            // Contract 1A
            this.connectedContract1.on('ClaimDetails', (claimAmount) => {
                if(this.waitingForListener == true){
                    this.waitingForListener = false;
                    let amount = ethers.utils.formatEther(String(claimAmount));
                    amount = Number(amount);
                    amount = amount.toFixed(3);
                    amount = ethers.utils.commify(amount);
                    console.log(amount);
                    alert(`Success! Claimed: ${amount} BON`);
                    window.location.reload();
                }
                }
            );
            console.log('Contract 1A listener success');
            
            /*
            // Contract 2A
            this.connectedContract2.on('BetDetails', (playersCounter, counterReward) => {
                if(this.waitingForListener == true){
                    this.waitingForListener = false;
                    console.log(playersCounter, counterReward);
                    alert(`Bet successful! Please wait 2 min for the TXNs to log on the blockchain.`);
                    window.location.reload();
                }
                }
            );
            console.log('Contract 2A listener success');
            */

        } catch (error) {
            console.log(error);
        }
    }

    // --- @Dev this changed the vars based on user inputs
    async onAnySelectInputs() {
        if(this.selectedInput1 != this.JSInput1.value){
            this.selectedInput1 = this.JSInput1.value;
            console.log(`New input: ${this.selectedInput1}`);
        }
    }


    // _____________________________________________________________
    // _____________________ CUSTOM FUNCTIONS ______________________
    // _____________________________________________________________

    // --- @DEV xxxx [BUTTON 1]
    async functionXxxx() {
        if(this.connectionError == true){return;}
        let buttonsFrom = 1;
        let buttonsTo = 1;
        disableButtons(buttonsFrom, buttonsTo);

        try {
            console.log(`results 1 call..`);
            let results1 = await this.connectedContract1.balanceOf(`${this.currentAccount}`);
            console.log('Awaiting function results...');
            await results1;
            console.log("Analzying results...");
            if (results1 != ""){
                console.log(`NFT Balance: ${results1}`)
                this.buttonsArray[1].disabled = false;
                this.buttonsArray[1].innerText = `${results1}`;
            } else {this.buttonsArray[1].innerText = `no results`;}
        } catch (error) {
            // @Dev this pulls the flagged error and gives to user
            console.log(error);
        }
    }

    // --- END --- //
}

const ClaimerDappInterface_ = new ClaimerDappInterface();
ClaimerDappInterface_.dappInitializeProcess();