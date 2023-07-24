/*
- ive checked the ABIs
- ive checked the 'betPrice' (hardcoded and also soft coded)
- ive checked the function code, and it looks fine...?
- lowered the betPrice to be the same as Mumbai
- its able to call the read info, but doesnt seem to be able to call a write funciton
*/

// _______________________________________________________
// __________ ESTABLISH ALL SMART CONTRACT ABIs __________
// _______________________________________________________

// "LottoV2"
const CONTRACT1_ABI = (
	{
        "contractName": "LottoV2",
        "abi":

            [{"inputs":[{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_dev1","type":"address"},{"internalType":"address","name":"_dev2","type":"address"},{"internalType":"uint256","name":"_betPrice","type":"uint256"},{"internalType":"address","name":"_airnodeRrp","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"playersCounter","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"counterReward","type":"uint256"}],"name":"BetDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"claimedCounter","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimedRewards","type":"uint256"}],"name":"ClaimDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"airnode","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airnodeRrp","outputs":[{"internalType":"contract IAirnodeRrpV0","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"betPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"checkLotto","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"rewards","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"claimLotto","outputs":[{"internalType":"uint256","name":"rewards","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endpointIdUint256","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"expectingRequestWithIdToBeFulfilled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"fulfillUint256","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lottoOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_lottoOpen","type":"bool"}],"name":"openLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"pastLottoAPI3CallCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoAPI3CallResult","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoResults","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player1W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player2W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_dev1","type":"address"},{"internalType":"address","name":"_dev2","type":"address"},{"internalType":"address","name":"_player1W","type":"address"},{"internalType":"address","name":"_player2W","type":"address"},{"internalType":"uint256","name":"_betPrice","type":"uint256"},{"internalType":"uint256","name":"_counter","type":"uint256"},{"internalType":"bool","name":"_lottoOpen","type":"bool"},{"internalType":"address","name":"_erc20token","type":"address"}],"name":"resetLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_airnode","type":"address"},{"internalType":"bytes32","name":"_endpointIdUint256","type":"bytes32"},{"internalType":"address","name":"_sponsorWallet","type":"address"}],"name":"setRequestParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sponsorWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
        
    ,}
);

class DappInterface {
    
    // _____________________________________________________________
    // _______________ VARIABLES AND OBJECTS SECTION _______________
    // _____________________________________________________________
    
    // --- @DEV Sets up all the vars and objects used
    constructor() {
        // --- Universal web3 Variables
        this.dappChain = '0x89'; //ETHEREUM-MAINNET=='0x1', POLYGON-MAINNET=='0x89', BINANCE-MAINNET=='0x38', MODULUS-MAINNET=='0x666', POLYGON-MUMABI=='0x13881'
        this.chainName = 'POLYGON MAINNET';
        this.contractAddress1 = '0x14d1e21657557ac43a94f2ffbd104c8dadce1b9a'; // LottoV2
        this.currentAccount = ''; // THIS IS DUPLICATED ON OTHER SCRIPTS, beware
        this.waitingForListener = false;
        this.txnCost = ''; // loaded on checkBetPrice();

        // --- Button HTML Elements ---
        this.buttonsArray = [
            (this.JSButton0 = "0"), //emptyplaceholder
            (this.JSButton1 = document.getElementById('HTML_button_1')), // bet()
            (this.JSButton2 = document.getElementById('HTML_button_2')), // counter()
            (this.JSButton3 = document.getElementById('HTML_button_3')), // player1W()
            (this.JSButton4 = document.getElementById('HTML_button_4')), // player2W()
            (this.JSButton5 = document.getElementById('HTML_button_5')), // betPrice()
            (this.JSButton6 = document.getElementById('HTML_button_6')), // rewardValue()
            (this.JSButton7 = document.getElementById('HTML_button_7')), // checkPastWinnerWallet
            (this.JSButton8 = document.getElementById('HTML_button_8')), // checkPastWinnerValue
            (this.JSButton9 = document.getElementById('HTML_button_9')), // checkPastWinnerClaimed
            (this.JSButton10 = document.getElementById('HTML_button_10')), // claim()
            (this.JSButton11 = document.getElementById('HTML_button_11')), // pastWinnerP1Wallet
            (this.JSButton12 = document.getElementById('HTML_button_12')) // pastWinnerP2Wallet
        ]

        // --- Input HTML Elements --- 
        this.selectedInput1 = 1; // 
        this.JSInput1 = document.getElementById('HTML_input_1'); // pastRounds
    }

    // _____________________________________________________________
    // __________________ SETUP PROCESSES SECTION __________________
    // _____________________________________________________________

    async dappInitializeProcess() {
        // --- @DEV this boots all the PRIMARY components
        try{await this.pullUsersWallet();} catch (error) {console.log(error);}
        try{await this.setupEventListener();} catch (error) {console.log(error);}
        try{await this.buttonManagerFunc();} catch (error) {console.log(error);}              
        
        // --- @DEV this boots all the SECONDARY components
        try{await this.CheckCurrentLotto();} catch (error) {console.log(error);}
    }

    // --- @DEV Listeners that pick up emit events from onchain functions
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

                    // Event Listener 1B
                    connectedContract1.on('ClaimDetails', (claimedCounter, claimedReward) => {
                        if(this.waitingForListener == true){
                            this.waitingForListener = false;
                            console.log(claimedCounter, claimedReward);
                            alert(`Claim successful! Please wait 2 min for the TXNs to log on the blockchain.`);
                            window.location.reload();
                        }
                        }
                    );
                    console.log('Contract 1B listener success');

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

    // --- @DEV this is called anytime the inputValue is changed (ie on checkCurrent, changed input manually, etc)
    async CheckPastLotto() {
        try { 
            const { ethereum } = window;
            if (ethereum) {
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                if((chainId == this.dappChain)){
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    try{
                        // Contract 1 functions
                        console.log(`Connecting contract1...`);
                        const connectedContract1 = new ethers.Contract(
                            this.contractAddress1,
                            CONTRACT1_ABI.abi,
                            signer
                        );

                            // Reset all changed vars
                            for (let i = 7; i < 13; i++) {
                                this.buttonsArray[i].disabled = true;
                                this.buttonsArray[i].innerText = `*loading*`;
                                console.log(`button ${i} disabled`);
                            }
                        
                            // Function 7 - checkResults
                            console.log(`Attempting function 7 call..`);
                            let Function7Results = await connectedContract1.checkLotto(`${this.selectedInput1}`);
                            console.log('Awaiting function results...');
                            await Function7Results;
                            console.log("Analzying results...");
                            if ((Function7Results != 0) || (Function7Results != "")){
                                Function7Results = `${Function7Results}`;
                                const [check_winner, check_rewards, check_claimed] = Function7Results.split(',');
                                console.log(`Function call result: ${check_winner} // ${check_rewards} // ${check_claimed}`)

                                if(check_winner != '0x0000000000000000000000000000000000000000'){
                                    this.buttonsArray[7].innerText = `${
                                            check_winner.substring(0, 6)
                                        }...${
                                            check_winner.substring((check_winner.length-4), check_winner.length)
                                        }
                                    `;
                                    this.buttonsArray[7].disabled = false;
                                } else {this.buttonsArray[7].innerText = `no winner yet`;}

                                if(check_rewards != '...'){
                                    let reward_ = ethers.utils.formatEther(check_rewards);
                                    /*reward_ = parseInt(reward_).toFixed(4);*/
                                    this.buttonsArray[8].innerText = `${reward_}`;
                                    this.buttonsArray[8].disabled = false;
                                } else {this.buttonsArray[8].innerText = `...`;}

                                if(check_claimed != '...'){
                                    this.buttonsArray[9].innerText = `${check_claimed}`;
                                    this.buttonsArray[9].disabled = false;
                                } else {this.buttonsArray[9].innerText = `...`;}

                                // Function 8 - Past Player 1
                                    console.log(`Attempting function 8 call..`);
                                    let Function8Results = await connectedContract1.pastLottoPlayer1(`${this.selectedInput1}`);
                                    console.log('Awaiting function results...');
                                    await Function8Results;
                                    console.log("Analzying results...");
                                    if(Function8Results != '0x0000000000000000000000000000000000000000'){
                                        this.buttonsArray[11].innerText = `${
                                        Function8Results.substring(0, 6)}...${
                                        Function8Results.substring((Function8Results.length-4), Function8Results.length)}`;
                                    } else {this.buttonsArray[11].innerText = `...`;}

                                // Function 9 - Past Player 2
                                console.log(`Attempting function 8 call..`);
                                let Function9Results = await connectedContract1.pastLottoPlayer2(`${this.selectedInput1}`);
                                console.log('Awaiting function results...');
                                await Function9Results;
                                console.log("Analzying results...");
                                if(Function9Results != '0x0000000000000000000000000000000000000000'){
                                    this.buttonsArray[12].innerText = `${
                                    Function9Results.substring(0, 6)}...${
                                    Function9Results.substring((Function9Results.length-4), Function9Results.length)}`;
                                } else {this.buttonsArray[12].innerText = `...`;}

                                // Button Ready
                                console.log('CLAIM button ready');
                                this.buttonsArray[10].disabled = false;
                                this.buttonsArray[10].innerText = '-CLAIM-';

                            } else {
                                console.log(`Error: (FunctionResults == 0 || "")`);
                                for (let i = 7; i < 13; i++) {
                                    this.buttonsArray[i].disabled = false;
                                    this.buttonsArray[i].innerText = `-try again-`;
                                }
                            }

                    }catch(error){
                        console.log(error);
                    }
                } else {
                    console.log(`dappChain incorrect`);
                }
            } else {
                console.log(`Eth object not found`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // --- @DEV this pulls all the CURRENT lotto info
    async CheckCurrentLotto() {
        try {
            const { ethereum } = window;
            if (ethereum) {
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                if((chainId == this.dappChain)){
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    try{
                        // Contract 1 functions
                        console.log(`Connecting contract1...`);
                        const connectedContract1 = new ethers.Contract(
                            this.contractAddress1,
                            CONTRACT1_ABI.abi,
                            signer
                        );
                            // reset all changed vars
                            for (let i = 1; i < 7; i++) {
                                this.buttonsArray[i].disabled = true;
                                this.buttonsArray[i].innerText = `*loading*`;
                                console.log(`button ${i} disabled`);
                            }

                            // Function 3 - player1W    
                            console.log(`Attempting function 3 call..`);
                            const options3 = {value: ethers.utils.parseEther(`0`),};
                            let Function3Results = await connectedContract1.player1W(options3);
                            console.log('Awaiting function results...');
                            await Function3Results;
                            console.log("Analzying results...");
                            if ((Function3Results != 0) || (Function3Results != "")){
                                console.log(`Function call result: ${Function3Results}`)
                                Function3Results = `${Function3Results}`;
                                if(Function3Results != '0x0000000000000000000000000000000000000000'){
                                    this.buttonsArray[3].innerText = `${
                                    Function3Results.substring(0, 6)}...${
                                    Function3Results.substring((Function3Results.length-4), Function3Results.length)}`;
                                } else {this.buttonsArray[3].innerText = `...`;}
                                this.buttonsArray[3].disabled = false;
                            ;
                            } else {
                                console.log(`Error: (FunctionResults == 0 || "")`);
                                this.buttonsArray[3].disabled = false;
                                this.buttonsArray[3].innerText = 'error';
                            }

                            // Function 4 - player2W
                            console.log(`Attempting function 4 call..`);
                            const options4 = {value: ethers.utils.parseEther(`0`),};
                            let Function4Results = await connectedContract1.player2W(options4);
                            console.log('Awaiting function results...');
                            await Function4Results;
                            console.log("Analzying results...");
                            if ((Function4Results != 0) || (Function4Results != "")){
                                console.log(`Function call result: ${Function4Results}`)
                                Function4Results = `${Function4Results}`;
                                if(Function4Results != '0x0000000000000000000000000000000000000000'){
                                    this.buttonsArray[4].innerText = `${
                                    Function4Results.substring(0, 6)}...${
                                    Function4Results.substring((Function4Results.length-4), Function4Results.length)}`;
                                } else {this.buttonsArray[4].innerText = `...`;}
                                this.buttonsArray[4].disabled = false;
                            } else {
                                console.log(`Error: (FunctionResults == 0 || "")`);
                                this.buttonsArray[4].disabled = false;
                                this.buttonsArray[4].innerText = 'error';
                            }

                            // Function 2 - counter
                            console.log(`Attempting function 2 call..`);
                            const options2 = {value: ethers.utils.parseEther(`0`),};
                            let Function2Results = await connectedContract1.counter(options2);
                            console.log('Awaiting function results...');
                            await Function2Results;
                            console.log("Analzying results...");
                            if ((Function2Results != 0) || (Function2Results != "")){
                                if(Function3Results == '0x0000000000000000000000000000000000000000'){
                                    console.log(`Function call result: ${Number(Function2Results) + 1}`)
                                    this.buttonsArray[2].innerText = `${Number(Function2Results) + 1}`;
                                    if(this.selectedInput1 != `${(Number(Function2Results) + 1)-1}`){
                                        try {
                                        this.selectedInput1 = `${(Number(Function2Results) + 1)-1}`;
                                        this.JSInput1.value = this.selectedInput1;
                                        this.CheckPastLotto();
                                        } catch (error) {};
                                    }
                                    this.buttonsArray[2].disabled = false;
                                } else if (Function3Results != '0x0000000000000000000000000000000000000000'){
                                    console.log(`Function call result: ${Function2Results}`)
                                    this.buttonsArray[2].innerText = `${Number(Function2Results)}`;
                                    if(this.selectedInput1 != `${(Number(Function2Results))-1}`){
                                        try {
                                            this.selectedInput1 = `${(Number(Function2Results))-1}`;
                                            this.JSInput1.value = this.selectedInput1;
                                            this.CheckPastLotto();
                                        } catch (error) {};
                                    }
                                    this.buttonsArray[2].disabled = false;
                                } else {
                                    console.log(`Error: player1W info`);
                                    this.buttonsArray[2].disabled = false;
                                    this.buttonsArray[2].innerText = 'error';
                                }
                            } else {
                                console.log(`Error: (FunctionResults == 0 || "")`);
                                this.buttonsArray[2].disabled = false;
                                this.buttonsArray[2].innerText = 'error';
                            }

                            // Function 5 - betPrice
                            console.log(`Attempting function 5 call..`);
                            const options5 = {value: ethers.utils.parseEther(`0`),};
                            let Function5Results = await connectedContract1.betPrice(options5);
                            console.log('Awaiting function results...');
                            await Function5Results;
                            console.log("Analzying results...");
                            if ((Function5Results != 0) || (Function5Results != "")){
                                console.log(`Function call result: ${Function5Results}`)
                                Function5Results = `${Function5Results}`;
                                this.txnCost = ethers.utils.formatEther(Function5Results);
                                this.buttonsArray[5].innerText = `${ethers.utils.formatEther(Function5Results)}`;
                                this.buttonsArray[5].disabled = false;
                            ;
                            } else {
                                console.log(`Error: (FunctionResults == 0 || "")`);
                                this.buttonsArray[5].disabled = false;
                                this.buttonsArray[5].innerText = 'error';
                            }

                            // Function 6 - REWARDVALUE
                            let Function6Results = this.txnCost* 2 * 0.9;
                            Function6Results = Function6Results.toFixed(4);
                            console.log(`Function call result: ${Function6Results}`)
                            this.buttonsArray[6].innerText = `${Function6Results}`;
                            this.buttonsArray[6].disabled = false;

                            // Button ready
                            console.log("BET button ready");
                            this.buttonsArray[1].innerText = "-BET-";
                            this.buttonsArray[1].disabled = false;

                    } catch (error) {
                        console.log(error);
                        for (let i = 1; i < 7; i++) {
                            this.buttonsArray[i].disabled = false;
                            this.buttonsArray[i].innerText = `-try again-`;
                        }
                    }
                } else {
                    console.log(`dappChain incorrect`);
                }
            } else {
                console.log(`Eth object not found`);
            }
        } catch (error) {
            console.log(error);
        }

    }

    // --- @DEV this submits the bet
    async Bet(){
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                
                try{
                    // Contract 1 function
                    this.buttonsArray[1].disabled = true;
                    this.buttonsArray[1].innerText = '*please wait*';
                    
                    console.log(`Connecting contract1...`);
                    const connectedContract1 = new ethers.Contract(
                        this.contractAddress1,
                        CONTRACT1_ABI.abi,
                        signer
                    );

                    console.log(`Attempting function call (${this.txnCost} msg.value)...`);
                    const options = {
                        value: ethers.utils.parseEther(`${this.txnCost}` /*`0`*/),
                    };

                    let functionResult = await connectedContract1.bet(options);

                    this.waitingForListener = true;
                    this.buttonsArray[1].innerText = '*waiting for metamask*';

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.buttonsArray[1].innerText = '-try bet again-';
                    this.buttonsArray[1].disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.buttonsArray[1].innerText = 'error: metamask missing';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.buttonsArray[1].innerText = 'error: metamask missing';
        }
    }

    // --- @DEV for now empty, but it will be used to approve check on ERC20's
    async Bet_Loader(){
        this.Bet(); 
    }

    // --- @DEV for now empty, but it will be used to approve check on ERC20's
    async Claim_Loader(){
        this.Claim(); 
    }
    
    // --- @DEV this submits the claim
    async Claim(){
        try { const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            
            try{
                // Contract 10 function
                this.buttonsArray[10].disabled = true;
                this.buttonsArray[10].innerText = '*please wait*';
                
                console.log(`Connecting contract1...`);
                const connectedContract1 = new ethers.Contract(
                    this.contractAddress1,
                    CONTRACT1_ABI.abi,
                    signer
                );

                let selectedInput1_ = `${this.selectedInput1}`;
                console.log(`Attempting function call (${selectedInput1_} lotto round)...`);
                let function10Results = await connectedContract1.claimLotto(selectedInput1_);

                this.waitingForListener = true;
                this.buttonsArray[10].innerText = '*waiting for metamask*';

            } catch (error) {
                console.log(error);
                console.log('function call failed');
                this.buttonsArray[10].innerText = `-CLAIM AGAIN-`;
                /* this.buttonsArray[10].innerText = `ERROR: Wallet must = '${this.buttonsArray[7].innerText}' and Claimed must  = 'false`;*/
                this.buttonsArray[10].disabled = false;
                // -------------------------------------------------------------------------- move this to be a broswer alert
            }
        } else {
            console.log("Ethereum object doesn't exist!");
            this.buttonsArray[10].innerText = 'error: metamask missing';
        }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.buttonsArray[10].innerText = 'error: metamask missing';
        }
    }
    
    // --- @DEV this changed the vars based on user inputs
    async onAnySelectInputs() {
        if(this.selectedInput1 != this.JSInput1.value){
            this.selectedInput1 = this.JSInput1.value;
            console.log(`New input: ${this.selectedInput1}`);
        }
    }

    // --- @DEV this logs the users account
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

const DappInterface_ = new DappInterface();
DappInterface_.dappInitializeProcess();