/* NOTES:
- 
- 
*/

// _____________________________________________________________
// _____________ ESTABLISH ALL SMART CONTRACT ABIs _____________
// _____________________________________________________________

// "LottoV2"
const CONTRACT1_ABI = (
	{
        "contractName": "LottoV2",
        "abi":

        [{"inputs":[{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"uint256","name":"_betPrice","type":"uint256"},{"internalType":"address","name":"_airnodeRrp","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"playersCounter","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"counterReward","type":"uint256"}],"name":"BetDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"airnode","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airnodeRrp","outputs":[{"internalType":"contract IAirnodeRrpV0","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bet","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"betPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"checkLotto","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"rewards","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"claimLotto","outputs":[{"internalType":"uint256","name":"rewards","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endpointIdUint256","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"expectingRequestWithIdToBeFulfilled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"fulfillUint256","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lottoOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_lottoOpen","type":"bool"}],"name":"openLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"pastLottoAPI3CallCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoResults","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player1W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player2W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_player1W","type":"address"},{"internalType":"address","name":"_player2W","type":"address"},{"internalType":"uint256","name":"_betPrice","type":"uint256"},{"internalType":"uint256","name":"_counter","type":"uint256"},{"internalType":"bool","name":"_lottoOpen","type":"bool"},{"internalType":"address","name":"_erc20token","type":"address"}],"name":"resetLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_airnode","type":"address"},{"internalType":"bytes32","name":"_endpointIdUint256","type":"bytes32"},{"internalType":"address","name":"_sponsorWallet","type":"address"}],"name":"setRequestParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sponsorWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]	
    
    ,}
);

class DappInterface {
    
    // _____________________________________________________________
    // _______________ VARIABLES AND OBJECTS SECTION _______________
    // _____________________________________________________________

    constructor() {
        // --- Universal web3 Variables
        this.dappChain = '0x89'; //Ethereum=='0x1', Polygon=='0x89', Binance=='0x38', Modulus=='0x666', Mumbai=='0x13881'
        this.contractAddress1 = '0x1dc47d2ec5fad3e9d744d437ee5eb2f2a8a0f498'; // LottoV2
        this.currentAccount = ''; // loaded on connectWallet
        this.waitingForListener = false;

        // --- Universal HTML Elements --- 
        this.JSconnectButton = document.getElementById('HTML_connect_button'); // connectWallet()

        // --- Button HTML Elements --- 
        this.JSButton1 = document.getElementById('HTML_button_1'); // xxx()

        // --- Input HTML Elements --- 
        this.selectedInput1 = 0; // 
        this.JSInput1 = document.getElementById('HTML_input_1'); // xxx()
    }


    // _____________________________________________________________
    // ________________ SETUP PROCESSES SECTION (A) ________________
    // _____________________________________________________________

    // Generic web3 wallet connect process
    async connectWallet() {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert('Can not find web3 etherum. Please install Metamask!');
                console.log("NO ETHEREUM OBJECT");

                this.JSconnectButton.innerText = 'Install Metamask';
                this.JSButton1.innerText = '...';

                this.JSconnectButton.disabled = true;
                this.JSButton1.disabled = true;

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
            this.setupEventListener();
        } catch (error) {
            alert('Can not find web3 etherum. Please install Metamask!');
                console.log("NO ETHEREUM OBJECT");

                this.JSconnectButton.innerText = 'Install Metamask';
                this.JSButton1.innerText = '...';

                this.JSconnectButton.disabled = true;
                this.JSButton1.disabled = true;      
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
                    // Setup
                    const connectedContract1 = new ethers.Contract(
                        this.contractAddress1,
                        CONTRACT1_ABI.abi,
                        signer
                    );
                    console.log('Contract 1 connected to listener');

                    // Event Listener 1A
                    connectedContract2.on('DepositEmit', (user, amountDeposited, userBalance) => {
                        if(this.waitingForListener == true){
                            this.waitingForListener = false;
                            console.log(user, amountDeposited, userBalance);
                            alert(`Staking successful!`);
                            window.location.reload();
                        }
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


    // _____________________________________________________________
    // ___________ UNIVERSAL CONTRACT FUNCTIONS SECTION ____________
    // _____________________________________________________________

    // -------------------------- turn this into a past lotto bet check function
    async CheckPastLotto() {
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 3 function
                    this.JSfunctionButton1.disabled = true;
                    this.JSfunctionButton1.innerText = '*loading*';
                    
                    console.log(`Connecting contract1...`);
                    const connectedContract1 = new ethers.Contract(
                        this.contractAddress1,
                        CONTRACT1_ABI.abi,
                        signer
                    );

                    console.log(`Attempting balanceOf() call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    let balOf = await connectedContract1.balanceOf(
                        String(this.currentAccount),
                        options
                    );

                    console.log('Awaiting function results...');
                    await balOf;
                    
                    console.log("Analzying results...");
                    if (balOf >= 1){
                        console.log(`Current account holds: ${ethers.utils.formatEther(balOf)}`)
                        this.JSfunctionButton1.disabled = false;
                        this.JSfunctionButton1.innerText = `${
                            ethers.utils.commify(Math.trunc(parseInt(ethers.utils.formatEther(String(balOf)))))
                        }`;
                    ;
                    } else {
                        console.log(`Current account holds: 0`);
                        this.JSfunctionButton1.disabled = false;
                        this.JSfunctionButton1.innerText = '0 (so sad)';
                    }

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton1.innerText = '-try again-';
                    this.JSfunctionButton1.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton1.innerText = 'error: metamask missing';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton1.innerText = 'error: metamask missing';
        }
    }

    // -------------------------- turn this into a current lotto bet check function
    async CheckCurrentLotto() {
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 3 function
                    this.JSfunctionButton1.disabled = true;
                    this.JSfunctionButton1.innerText = '*loading*';
                    
                    console.log(`Connecting contract1...`);
                    const connectedContract1 = new ethers.Contract(
                        this.contractAddress1,
                        CONTRACT1_ABI.abi,
                        signer
                    );

                    console.log(`Attempting balanceOf() call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    let balOf = await connectedContract1.balanceOf(
                        String(this.currentAccount),
                        options
                    );

                    console.log('Awaiting function results...');
                    await balOf;
                    
                    console.log("Analzying results...");
                    if (balOf >= 1){
                        console.log(`Current account holds: ${ethers.utils.formatEther(balOf)}`)
                        this.JSfunctionButton1.disabled = false;
                        this.JSfunctionButton1.innerText = `${
                            ethers.utils.commify(Math.trunc(parseInt(ethers.utils.formatEther(String(balOf)))))
                        }`;
                    ;
                    } else {
                        console.log(`Current account holds: 0`);
                        this.JSfunctionButton1.disabled = false;
                        this.JSfunctionButton1.innerText = '0 (so sad)';
                    }

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton1.innerText = '-try again-';
                    this.JSfunctionButton1.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton1.innerText = 'error: metamask missing';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton1.innerText = 'error: metamask missing';
        }
    }

    // _____________________________________________________________
    // ______________________ BETTING SECTION ______________________
    // _____________________________________________________________

    // -------------------------- turn this into the lotto bet submit function
    async StakeToken1(){
        if(this.selectedInput1 > 0){
            try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                
                try{
                    // Contract 2 function
                    this.JSfunctionButton3.disabled = true;
                    this.JSfunctionButton3.innerText = '*please wait*';
                    
                    console.log(`Connecting contract2...`);
                    const connectedContract2 = new ethers.Contract(
                        this.contractAddress2,
                        CONTRACT2_ABI.abi,
                        signer
                    );

                    console.log(`Attempting depositToStaking() call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    
                    let functionResult = await connectedContract2.depositToStaking(
                        String(ethers.utils.parseEther(String(this.selectedInput1))),
                        /*ethers.utils.parseUnits(String(this.selectedInput1), 18),*/
                        options
                    );

                    this.waitingForListener = true;

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton3.innerText = '-try stake again-';
                    this.JSfunctionButton3.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton3.innerText = 'error: metamask missing';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton3.innerText = 'error: metamask missing';
        }
        } else {
            alert("Staking amount must be > 0")
        }
        
    }

    async StakeToken1_Loader(){
        console.log("Loader starting ApprovalCheck");
        this.JSfunctionButton3.innerText = '*waiting for approval*';
        let approvalCheck = await this.contract1AllowanceCheck();

        console.log('Loader ApprovalCheck results...');
        await approvalCheck;

        if (approvalCheck == true){ 
            console.log('Approval check -- TRUE');
            if(this.selectedInput1 >= 1){
                this.JSfunctionButton3.innerText = '*approval successful!*';
                this.StakeToken1(); 
            } else {
                alert(`Please input amount.`);
                this.JSfunctionButton3.innerText = '-try again-';
            }

        } else {
            console.log('Approval check -- FALSE');
            this.JSfunctionButton3.innerText = '-try again-'
        }
    }
    
    // _____________________________________________________________
    // ________________ SETUP PROCESSES SECTION (B) ________________
    // _____________________________________________________________

    // (2) This will run after dappInitializeProcess() and boot up custom funcs
    async customConstructorFunctions(){

        if ( 1==1 /*document.URL.includes("keyword")*/) {

            // Custom Per Page Auto Run Functions
            try{await this.CheckPastLotto();} catch (error) {console.log(error);}
            try{await this.CheckCurrentLotto();} catch (error) {console.log(error);}
        }
    }
    
    // (1) This will check and set the correct web3 chain
    async dappInitializeProcess() {
        try{
            await this.connectWallet();
            
            let chainId = await ethereum.request({ method: 'eth_chainId' });
            if(chainId !== this.dappChain){
                if( this.dappChain == "0x89"    || 
                    this.dappChain == "0x1"     || 
                    this.dappChain == "0x38"    || 
                    this.dappChain == "0x666"   ||
                    this.dappChain == "0x13881"
                    ){
                    if(this.dappChain == "0x89"){
                        this.JSconnectButton.innerText = 'POLYGON MAINNET ONLY';
                        this.JSButton1.innerText = '...';

                        this.JSconnectButton.disabled = true;
                        this.JSButton1.disabled = true;

                        alert('Please use POLYGON MAINNET and REFRESH browser -- Other networks will NOT WORK!');
                    }
                    if(this.dappChain == "0x1"){
                        this.JSconnectButton.innerText = 'ETHEREUM MAINNET ONLY';
                        this.JSButton1.innerText = '...';

                        this.JSconnectButton.disabled = true;
                        this.JSButton1.disabled = true;

                        alert('Please use ETHEREUM MAINNET and REFRESH browser -- Other networks will NOT WORK!');
                    }
                    if(this.dappChain == "0x38"){
                        this.JSconnectButton.innerText = 'BINANCE MAINNET ONLY';
                        this.JSButton1.innerText = '...';

                        this.JSconnectButton.disabled = true;
                        this.JSButton1.disabled = true;

                        alert('Please use BINANCE MAINNET and REFRESH browser -- Other networks will NOT WORK!');
                    }
                    if(this.dappChain == "0x666"){
                        this.JSconnectButton.innerText = 'MODULUS MAINNET ONLY';
                        this.JSButton1.innerText = '...';

                        this.JSconnectButton.disabled = true;
                        this.JSButton1.disabled = true;

                        alert('Please use MODULUS MAINNET and REFRESH browser -- Other networks will NOT WORK!');
                    }
                    if(this.dappChain == "0x13881"){
                        this.JSconnectButton.innerText = 'POLYGON MUMBAI ONLY';
                        this.JSButton1.innerText = '...';

                        this.JSconnectButton.disabled = true;
                        this.JSButton1.disabled = true;

                        alert('Please use POLYGON MUMBAI and REFRESH browser -- Other networks will NOT WORK!');
                    }
                } else {
                    alert('ERROR - PLEASE CONTACT ADMIN');
                }
            } else {
                if(chainId == "0x89"){
                    console.log('Connected to POLYGON CHAIN (' + chainId + ')');
                }
                if(chainId == "0x1"){
                    console.log('Connected to ETHEREUM CHAIN (' + chainId + ')');
                }
                if(chainId == "0x38"){
                    console.log('Connected to BINANCE CHAIN (' + chainId + ')');
                }
                if(chainId == "0x666"){
                    console.log('Connected to MODULUS CHAIN (' + chainId + ')');
                }
                if(chainId == "0x13881"){
                    console.log('Connected to MUMBAI TESTNET (' + chainId + ')');
                }
            }
        } catch (error) {
            console.log(error); 
        }
        try{
            await this.customConstructorFunctions();
        } catch (error) {
            console.log(error); 
        }
    }
}

const DappInterface_ = new DappInterface();
DappInterface_.dappInitializeProcess();



