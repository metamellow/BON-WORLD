// _______________________________________________________
// __________ ESTABLISH ALL SMART CONTRACT ABIs __________
// _______________________________________________________

// Contract 1 = "LottoV3"
const CONTRACT1_ABI = (
	{
        "contractName": "LottoV3",
        "abi":

            [{"inputs":[{"internalType":"address","name":"_erc20Token","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_staking","type":"address"},{"internalType":"address","name":"_dev1","type":"address"},{"internalType":"address","name":"_dev2","type":"address"},{"internalType":"uint256","name":"_betBase","type":"uint256"},{"internalType":"uint256","name":"_restartDuration","type":"uint256"},{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"address","name":"_airnodeRrp","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"playersCounter","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"counterReward","type":"uint256"}],"name":"BetDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"claimedCounter","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claimedRewards","type":"uint256"}],"name":"ClaimDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"counterNumber","type":"uint256"},{"indexed":false,"internalType":"address","name":"winnerWallet","type":"address"}],"name":"WinnerResults","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"airnode","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airnodeRrp","outputs":[{"internalType":"contract IAirnodeRrpV0","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bet","outputs":[{"internalType":"uint8","name":"betData","type":"uint8"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"betBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"betPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"claim","outputs":[{"internalType":"uint256","name":"rewards","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endpointIdUint256","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"expectingRequestWithIdToBeFulfilled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"fulfillUint256","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lottoOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"pastLottoAPI3CallCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoAPI3CallResult","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player1W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player2W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_player1W","type":"address"},{"internalType":"address","name":"_player2W","type":"address"},{"internalType":"uint256","name":"_betPrice","type":"uint256"},{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"resetGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_lottoOpen","type":"bool"},{"internalType":"address","name":"_erc20token","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_staking","type":"address"},{"internalType":"address","name":"_dev1","type":"address"},{"internalType":"address","name":"_dev2","type":"address"},{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"bool","name":"_taxSwitch","type":"bool"},{"internalType":"bool","name":"_resetFunds","type":"bool"}],"name":"resetLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"restartDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"restartTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_airnode","type":"address"},{"internalType":"bytes32","name":"_endpointIdUint256","type":"bytes32"},{"internalType":"address","name":"_sponsorWallet","type":"address"}],"name":"setRequestParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sponsorWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxSwitch","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

    ,}
);

// Contract 2 = "Token"
const CONTRACT2_ABI = (
	{
        "contractName": "Token",
        "abi":

            [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"_supply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]


    ,}
);

/*
// Contract 3 = ""
const CONTRACT3_ABI = (
	{
        "contractName": "Token",
        "abi":
        
        
        []

    
    ,}
);
*/

class DappInterface {
    
    // _____________________________________________________________
    // _______________ VARIABLES AND OBJECTS SECTION _______________
    // _____________________________________________________________
    
    // --- @DEV Sets up all the vars and objects used
    constructor() {
        // --- Universal web3 Variables ---
        this.dappChain = '0x13881'; //ETHEREUM-MAINNET=='0x1', POLYGON-MAINNET=='0x89', BINANCE-MAINNET=='0x38', MODULUS-TESTNET=='0x6666', POLYGON-MUMABI=='0x13881'
        this.chainName = 'POLYGON-MUMABI';
        this.contractAddress1 = '0x2a5816582b998D517363AA83F1EBa61B1c372Ece'; // LottoV3
        this.contractAddress2 = '0xF647981f9417EEAf70cb92Ae14978fDf489a11B8'; // Token
        this.contractAddress3 = 'xx'; // xx
        this.connectedContract1; // Needed when loading the scripts
        this.connectedContract2; // Needed when loading the scripts
        this.connectedContract3; // Needed when loading the scripts
        this.currentAccount = ''; // THIS IS DUPLICATED ON OTHER SCRIPTS, beware
        this.waitingForListener = false;
        this.connectionError = false;
        this.txnCost = ''; // loaded on betPrice();

        // --- Button HTML Elements ---
        this.buttonsArray = [
            (this.JSButton0 = "0"), //emptyplaceholder
            (this.JSButton1 = document.getElementById('HTML_button_1')), // CurrentLotto_approve
            (this.JSButton2 = document.getElementById('HTML_button_2')), // CurrentLotto_bet
            (this.JSButton3 = document.getElementById('HTML_button_3')), // CurrentLotto_claim
            (this.JSButton4 = document.getElementById('HTML_button_4')), // CurrentLotto_counter
            (this.JSButton5 = document.getElementById('HTML_button_5')), // CurrentLotto_betPrice
            (this.JSButton6 = document.getElementById('HTML_button_6')), // CurrentLotto_rewardValue
            (this.JSButton7 = document.getElementById('HTML_button_7')), // CurrentLotto_playerOne
            (this.JSButton8 = document.getElementById('HTML_button_8')), // CurrentLotto_playerTwo
            (this.JSButton9 = document.getElementById('HTML_button_9')), // xxx()
            (this.JSButton10 = document.getElementById('HTML_button_10')) // xxx()
        ];

        // --- Input HTML Elements --- 
        this.selectedInput1 = 1; // 
        this.JSInput1 = document.getElementById('HTML_input_1'); // manual claim

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
        //try{await this.setupEventListener();} catch (error) {console.log(error);}
        
        // --- SECONDARY components
        try{await this.CurrentLotto_allowance();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_counter();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_betPrice();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_rewardValue();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_playerOne();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_playerTwo();} catch (error) {console.log(error);}
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

                        /*
                        console.log(`Connecting contract3...`);
                        this.connectedContract3 = new ethers.Contract(
                            this.contractAddress3,
                            CONTRACT3_ABI.abi,
                            signer
                        );
                        */

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
            this.connectedContract1.on('ClaimDetails', (claimedCounter, claimedRewards) => {
                if(this.waitingForListener == true){
                    this.waitingForListener = false;
                    let amount = ethers.utils.formatEther(String(claimedRewards));
                    amount = Number(amount);
                    amount = amount.toFixed(3);
                    amount = ethers.utils.commify(amount);
                    console.log(amount);
                    alert(`Success! Claimed [${claimedCounter}]: ${amount} BON`);
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

    // -- @DEV this just cleans up the page before doing any fuction
    async startButtonFunction(from, to){
        if(this.connectionError == true){return;}
        let buttonsFrom = from; let buttonsTo = to;
        this.disableButtons(buttonsFrom, buttonsTo);
    }


    // _____________________________________________________________
    // _____________________ CUSTOM FUNCTIONS ______________________
    // _____________________________________________________________

    // --- Current Lotto Write Functions ---

    // Approve -- buttons [1] & [2]
    async CurrentLotto_approve(){
        this.startButtonFunction(1,2);

        try {
            console.log(`approve call..`);
            let results = await this.connectedContract2.approve(this.contractAddress1, 
                `115792089237316195423570985008687907853269984665640564039457584007913129639935`);
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results == true){
                console.log(`Approval success`);
                this.buttonsArray[1].disabled = true;
                this.buttonsArray[1].innerText = `...`;
                this.buttonsArray[2].disabled = false;
                this.buttonsArray[2].innerText = `BET`;
                alert(`Token allowance success! Have fun betting!`);
                return results;
            } else {
                console.log(`Approval failed`);
                this.buttonsArray[1].disabled = false;
                this.buttonsArray[1].innerText = `APPROVE`;
                this.buttonsArray[2].disabled = true;
                this.buttonsArray[2].innerText = `...`;
                alert(`You must approve tokens before betting!`);
                return results;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Bet -- button [2]
    async CurrentLotto_bet() {
        this.startButtonFunction(2,2);

        try {
            console.log(`results 1 call..`);
            let results1 = await this.connectedContract1.bet();

            /* THIS IS FOR NON ERC20 BETS */ /*
            const options = {value: ethers.utils.parseEther(`${this.txnCost}`),};
            let results1 = await connectedContract1.bet(options);
            */

            console.log('Awaiting function results...');
            await results1;
            console.log("Analzying results...");
            if (results1 == 0){
                console.log(`0: Approval needed`);
                alert(`Your token allowance is too low, please allow a higher amount!`);
                this.buttonsArray[1].disabled = false;
                this.buttonsArray[1].innerText = `APPROVE`;
                this.buttonsArray[2].disabled = true;
                this.buttonsArray[2].innerText = `...`;
                this.approveTxn();
            } else if (results1 == 1){
                console.log(`1: Player 1 bet complete`);
                alert(`Congrats! Your bet has been placed. You must wait for a Player 2. If you are the winner, the WINNERS VOUCHER nft will auto mint to your wallet!`);
                this.buttonsArray[2].innerText = `P1 Bet Success`;
            } else if (results1 == 2){
                console.log(`2: Player 2 bet complete`);
                alert(`Congrats! Your bet has been placed. If you are the winner, the WINNERS VOUCHER nft will auto mint to your wallet!`);
                this.buttonsArray[2].innerText = `P2 Bet Success`;
            } else {
                this.buttonsArray[2].innerText = `ERROR`;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Claim -- button [3]
    async CurrentLotto_claim() {
        this.startButtonFunction(3,3);

        try {
            console.log(`claim call..`);
            let results = await this.connectedContract1.claim(`1`);
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results != ""){
                console.log(`NFT Balance: ${results}`)
                this.buttonsArray[3].disabled = false;
                this.buttonsArray[3].innerText = `${results}`;
            } else {this.buttonsArray[3].innerText = `no results`;}
        } catch (error) {
            // @Dev this pulls the flagged error and gives to user
            console.log(error);
        }
    }

    // --- Current Lotto Read Functions ---

    // Allowance -- buttons [1] & [2]
    async CurrentLotto_allowance(){
        this.startButtonFunction(1,2);

        try {
            console.log(`allowance call..`);
            let results = await this.connectedContract2.allowance(this.currentAccount, this.contractAddress1);
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results > 0){
                console.log(`Allowance found`);
                this.buttonsArray[1].disabled = true;
                this.buttonsArray[1].innerText = `...`;
                this.buttonsArray[2].disabled = false;
                this.buttonsArray[2].innerText = `BET`;
                return results;
            } else {
                console.log(`Allowance not found`);
                this.buttonsArray[1].disabled = false;
                this.buttonsArray[1].innerText = `APPROVE`;
                this.buttonsArray[2].disabled = true;
                this.buttonsArray[2].innerText = `...`;
                return results;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Counter -- button [4]
    async CurrentLotto_counter(){
        this.startButtonFunction(4,4);

        try {
            console.log(`counter call..`);
            let results = await this.connectedContract1.counter();
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results > 0){
                console.log(`${results}`);
                this.buttonsArray[4].disabled = false;
                this.buttonsArray[4].innerText = `${results}`;
                return results;
            } else {
                console.log(`Results not found`);
                this.buttonsArray[4].disabled = false;
                this.buttonsArray[4].innerText = `Error`;
                return results;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Bet Price -- button [5]
    async CurrentLotto_betPrice(){
        this.startButtonFunction(5,5);

        try {
            console.log(`bet price call..`);
            let results = await this.connectedContract1.betPrice();
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results > 0){
                console.log(`${results}`);
                results = `${results}`;
                this.txnCost = ethers.utils.formatEther(results);
                let buttonText = Number(this.txnCost);
                buttonText = buttonText.toFixed(3);
                this.buttonsArray[5].innerText = `${buttonText}`;
                this.buttonsArray[5].disabled = false;
                return results;
            } else {
                console.log(`Results not found`);
                this.buttonsArray[5].innerText = `Error`;
                this.buttonsArray[5].disabled = false;
                return results;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Reward Value -- button [6]
    async CurrentLotto_rewardValue(){
        this.startButtonFunction(6,6);

        try {
            if(this.txnCost <= 0){
                console.log(`txnCost needed before rewardValue`);
                return error;
            }

            console.log(`reward value call..`);
            let results = await this.connectedContract1.taxRate();
            console.log('Awaiting function results...');
            await results;
            results = results / 1000;
            console.log(`${results}`);
            console.log(`${this.txnCost}`);


            let taxAmount = ((this.txnCost * 2) * results)
            let reward = ((this.txnCost * 2) - taxAmount);
            reward = reward.toFixed(3);
            
            console.log("Analzying results...");
            if (reward != null){
                console.log(`${reward}`);
                this.buttonsArray[6].disabled = false;
                this.buttonsArray[6].innerText = `${reward}`;
                return reward;
            } else {
                console.log(`Results not found`);
                this.buttonsArray[6].disabled = false;
                this.buttonsArray[6].innerText = `Error`;
                return reward;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Player 1 -- button [7]
    async CurrentLotto_playerOne(){
        this.startButtonFunction(7,7);

        try {
            console.log(`Player 1 call..`);
            let results = await this.connectedContract1.player1W();
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results != `0x0000000000000000000000000000000000000000`){
                console.log(`${results}`);
                this.buttonsArray[7].innerText = `${
                    results.substring(0, 6)}...${
                    results.substring((results.length-4), results.length)
                }`;
                this.buttonsArray[7].disabled = false;
                return results;
            } else {
                console.log(`Results not found`);
                this.buttonsArray[7].disabled = false;
                this.buttonsArray[7].innerText = `(Waiting for Player 1)`;
                return results;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Player 2 -- button [8]
    async CurrentLotto_playerTwo(){
        this.startButtonFunction(8,8);

        try {
            console.log(`Player 2 call..`);
            let results = await this.connectedContract1.player2W();
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results != `0x0000000000000000000000000000000000000000`){
                console.log(`${results}`);
                this.buttonsArray[8].innerText = `${
                    results.substring(0, 6)}...${
                    results.substring((results.length-4), results.length)
                }`;
                this.buttonsArray[8].disabled = false;
                return results;
            } else {
                console.log(`Results not found`);
                this.buttonsArray[8].disabled = false;
                this.buttonsArray[8].innerText = `(Waiting for Player 2)`;
                return results;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // --- END --- //
}

const DappInterface_ = new DappInterface();
DappInterface_.dappInitializeProcess();