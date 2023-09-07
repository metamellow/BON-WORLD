// _______________________________________________________
// __________ ESTABLISH ALL SMART CONTRACT ABIs __________
// _______________________________________________________

// Contract 1 = "LottoV3"
const CONTRACT1_ABI = (
	{
        "contractName": "LottoV3",
        "abi":

            [{"inputs":[{"internalType":"address","name":"_erc20Token","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_staking","type":"address"},{"internalType":"address","name":"_dev1","type":"address"},{"internalType":"address","name":"_dev2","type":"address"},{"internalType":"uint256","name":"_betBase","type":"uint256"},{"internalType":"uint256","name":"_restartDuration","type":"uint256"},{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"address","name":"_airnodeRrp","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"bd_counter","type":"uint256"},{"indexed":false,"internalType":"address","name":"bd_wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"bd_reward","type":"uint256"}],"name":"BetDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cd_counter","type":"uint256"},{"indexed":false,"internalType":"address","name":"cd_wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"cd_rewards","type":"uint256"}],"name":"ClaimDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"wd_counter","type":"uint256"},{"indexed":false,"internalType":"address","name":"wd_playerOne","type":"address"},{"indexed":false,"internalType":"address","name":"wd_playerTwo","type":"address"},{"indexed":false,"internalType":"address","name":"wd_winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"wd_winAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wd_qrng","type":"uint256"}],"name":"WinnerDetails","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"airnode","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airnodeRrp","outputs":[{"internalType":"contract IAirnodeRrpV0","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"betBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"betPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"claim","outputs":[{"internalType":"uint256","name":"rewards","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endpointIdUint256","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"expectingRequestWithIdToBeFulfilled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"fulfillUint256","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lottoOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"pastLottoAPI3CallCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player1W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player2W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_player1W","type":"address"},{"internalType":"address","name":"_player2W","type":"address"},{"internalType":"uint256","name":"_betPrice","type":"uint256"},{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"resetGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_lottoOpen","type":"bool"},{"internalType":"address","name":"_erc20token","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_staking","type":"address"},{"internalType":"address","name":"_dev1","type":"address"},{"internalType":"address","name":"_dev2","type":"address"},{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"bool","name":"_taxSwitch","type":"bool"},{"internalType":"bool","name":"_resetFunds","type":"bool"}],"name":"resetLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"restartDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"restartTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_airnode","type":"address"},{"internalType":"bytes32","name":"_endpointIdUint256","type":"bytes32"},{"internalType":"address","name":"_sponsorWallet","type":"address"}],"name":"setRequestParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sponsorWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxSwitch","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

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
        this.dappChain = '0x89'; //ETHEREUM-MAINNET=='0x1', POLYGON-MAINNET=='0x89', BINANCE-MAINNET=='0x38', MODULUS-TESTNET=='0x6666', POLYGON-MUMABI=='0x13881'
        this.chainName = 'POLYGON-MAINNET';
        this.contractAddress1 = '0x0055fad55c4820133334cfc8238613f79fe160b0'; // LottoV3
        this.contractAddress2 = '0x47e53f0ddf71210f2c45dc832732aa188f78aa4f'; // Token
        this.contractAddress3 = 'xx'; // xx
        this.tokenSymbol = `BON`;
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
            (this.JSButton9 = document.getElementById('HTML_button_9')), // Rewards_NFTBalance
            (this.JSButton10 = document.getElementById('HTML_button_10')), // Rewards_LoadNFTs
            (this.JSButton10 = document.getElementById('HTML_button_11')) // CurrentLotto_balOfERC20

        ];

        // --- Input HTML Elements --- 
        this.selectedInput1 = 1; // 
        this.JSInput1 = document.getElementById('HTML_input_1'); // manual claim

        // --- Unique Div Boxes ---
        this.JSUniqueDiv1 = document.getElementById('xx'); // xx

    }

    // _____________________________________________________________
    // _____________________ PRIMARY FUNCTIONS _____________________
    // _____________________________________________________________

    // --- @DEV this boots all the PRIMARY components and SECONDARY components
    async dappInitializeProcess() {
        // --- PRIMARY components
        try{await this.setupButtonsFunc();} catch (error) {console.log(error);}  
        try{await this.pullUsersWallet();} catch (error) {console.log(error);}
        try{await this.connectAllContracts();} catch (error) {console.log(error);}
        try{await this.setupEventListener();} catch (error) {console.log(error);}
        
        // --- SECONDARY components
        try{await this.CurrentLotto_allowance();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_balOfERC20();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_counter();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_betPrice();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_rewardValue();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_playerOne();} catch (error) {console.log(error);}
        try{await this.CurrentLotto_playerTwo();} catch (error) {console.log(error);}


        try{await this.Rewards_balanceOf();} catch (e) {console.log(e);}

        try{await this.History_PullAPIData();} catch (e) {console.log(e);}

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
            this.connectedContract1.on('BetDetails', (bd_counter, bd_wallet, counterRewards) => {
                if(this.waitingForListener == true){
                    console.log(bd_counter, bd_wallet, `${counterRewards}`);
                    let wllt = bd_wallet.toLowerCase();

                    if(this.currentAccount == wllt){
                        this.waitingForListener = false;

                        alert(`Bet successful! [R.${bd_counter}] [W.${bd_wallet}]`);
                        window.location.reload();
                    }
                }
            });
            console.log('Contract 1A listener success');

            // Contract 1B
            this.connectedContract1.on('ClaimDetails', (cd_counter, cd_wallet, cd_rewards) => {
                if(this.waitingForListener == true){
                    console.log(cd_counter, cd_wallet, `${cd_rewards}`)
                    let wllt = cd_wallet.toLowerCase();

                    if(this.currentAccount == wllt){
                        this.waitingForListener = false;
    
                        let _claimedRewards = `${cd_rewards}`;
                        _claimedRewards = ethers.utils.formatEther(_claimedRewards);
                        let rwd = Number(_claimedRewards);
                        rwd = rwd.toFixed(3);
                        let id = Number(cd_counter);
                        this._Rewards_heardClaimEmit(id, cd_wallet, rwd);
                    } 
                }
            });
            console.log('Contract 1B listener success');

            // Contract 2A
            this.connectedContract2.on('Approval', (owner, spender, value) => {
                if(this.waitingForListener == true){
                    console.log(owner, spender, `${value}`);
                    let wllt = owner.toLowerCase();

                    if(this.currentAccount == wllt){
                        this.waitingForListener = false;
                        let _owner = `${
                            owner.substring(0, 6)}...${
                                owner.substring((owner.length-4), owner.length)
                        }`;
                        alert(`Approved! [${_owner}]`);
                        window.location.reload();
                    }
                }
            });
            console.log('Contract 2A listener success');

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
    // ____________________ SECONDARY FUNCTIONS ____________________
    // _____________________________________________________________

    //  --- --- --- --- --- --- Current Lotto Functions --- --- --- --- --- ---

    // Approve -- buttons [1] & [2]
    async CurrentLotto_approve(){
        this.startButtonFunction(1,2);

        try {
            console.log(`approve call..`);
            let results = await this.connectedContract2.approve(this.contractAddress1, 
                    `115792089237316195423570985008687907853269984665640564039457584007913129639935`);
            this.waitingForListener = true;
            this.buttonsArray[1].disabled = true;
            this.buttonsArray[1].innerText = `...`;
            this.buttonsArray[2].disabled = true;
            this.buttonsArray[2].innerText = `*waiting for metamask*`;
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
        } catch (e) {
            console.log(e);
            window.location.reload();
        }
    }

    // Bet -- button [2]
    async CurrentLotto_bet() {
        this.startButtonFunction(2,2);

        try {
            console.log(`results 1 call..`);
            const options = {value: ethers.utils.parseEther(`0`),};
            let results1 = await this.connectedContract1.bet(options);

            /* THIS IS FOR NON ERC20 BETS */ /*
            const options = {value: ethers.utils.parseEther(`${this.txnCost}`),};
            let results1 = await connectedContract1.bet(options);
            */

            console.log('Awaiting function results...');
            await results1;
            console.log("Analzying results...");
            if (results1 == 0){
                console.log(`Approval needed`);
                alert(`Your token allowance is too low, please allow a higher amount!`);
                this.buttonsArray[1].disabled = false;
                this.buttonsArray[1].innerText = `APPROVE`;
                this.buttonsArray[2].disabled = true;
                this.buttonsArray[2].innerText = `...`;
                this.approveTxn();
            } else {
                this.waitingForListener = true;
                this.buttonsArray[1].disabled = true;
                this.buttonsArray[2].disabled = true;
                this.buttonsArray[1].innerText = `*waiting for metamask*`;
                this.buttonsArray[2].innerText = `*waiting for metamask*`;
            }
        } catch (e) {
            console.log(e);
            window.location.reload();
        }
    }

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
                this.buttonsArray[5].innerText = `${buttonText} ${this.tokenSymbol}`;
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
                this.buttonsArray[6].innerText = `${reward} ${this.tokenSymbol}`;
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
                this.buttonsArray[7].innerText = `...`;
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
                this.buttonsArray[8].innerText = `...`;
                return results;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // ERC20 Balance -- button [11]
    async CurrentLotto_balOfERC20(){

        this.startButtonFunction(11,11);

        try {
            console.log(`erc bal call..`);
            let results = await this.connectedContract2.balanceOf(this.currentAccount);
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results > `0`){
                results = `${results}`;
                results = ethers.utils.formatEther(results);
                let buttonText = Number(results);
                buttonText = buttonText.toFixed(3);
                this.buttonsArray[11].innerText = `${buttonText} ${this.tokenSymbol}`;
                this.buttonsArray[11].disabled = false;
            } else {
                this.buttonsArray[11].innerText = `0 ${this.tokenSymbol}`;
                this.buttonsArray[11].disabled = false;
            }
        } catch (error) {
            console.log(error);
        }

    }

    // --- --- --- --- --- --- Rewards Function --- --- --- --- --- ---

    // NFT Balance -- button [9]
    async Rewards_balanceOf(){
        this.startButtonFunction(9,9);

        try {
            console.log(`nft balOf call..`);
            let results = await this.connectedContract1.balanceOf(`${this.currentAccount}`);
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results > 0){
                console.log(`${results}`);
                this.buttonsArray[9].disabled = false;
                this.buttonsArray[9].innerText = `${results}`;
                return results;
            } else {
                console.log(`Results not found`);
                this.buttonsArray[9].disabled = false;
                this.buttonsArray[9].innerText = `0`;
                this.buttonsArray[10].disabled = true;
                this.buttonsArray[10].innerText = `No Rewards NFTs Found.`;
                return results;
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Load NFTs -- button [10]
    async Rewards_LoadNFTs(){
        if (this.connectionError == true) {return;}

        this.startButtonFunction(10,10);
        this._Rewards_callForNFTAPI();
    }

    async _Rewards_callForNFTAPI() {

        /* --- BLOCKSPAN --- */
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'lezEOBRZiEKd9xjFKR43eBXBZA50nELn',
        },
        };

        fetch(
        `https://api.blockspan.com/v1/nfts/owner/${this.currentAccount}?chain=poly-main&contract_addresses=${this.contractAddress1}&include_nft_details=true&page_size=50`,
        options
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this._Rewards_displayNewNFTData(data);
        })
        .catch((err) => {
            console.log(err);
            //window.location.reload();
            return;
        });
    }

    async _Rewards_goToWallet(id) {
        let buttonEl = document.querySelector(`#claim-nft-${id}`);
        buttonEl.disabled = true;
        buttonEl.innerText = '*waiting for metamask*';
        this.selectedInput1 = id;
        try {
            console.log(`claim call..`);
            let results = await this.connectedContract1.claim(`${this.selectedInput1}`);
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            this.waitingForListener = true;

        } catch (error) {
            console.log(error);
            window.location.reload();
        }
    }

    async _Rewards_heardClaimEmit(id, cd_wallet, rwd) {
        console.log(`Rewards heard. #${id}`)
        let buttonEl = document.querySelector(`#claim-nft-${id}`);
        buttonEl.disabled = true;
        buttonEl.innerText = `[Claimed: ${rwd}]`;
    }

    _Rewards_createNFTElement(item) {
        return `
                <div class="nftContainer">
                    <div class="nftContainerItem">
                        <div class="label-id">id: ${item.id}</div>
                        <img src='${item.nft_details.cached_images.small_250_250}' class="nft-img" />
                        <a href="https://opensea.io/collection/bon-lotto-winner" target="_blank">
                        <button  >you won!</button></a>
                    </div>
                </div>
            `;
    }

    

    _Rewards_createDefaultElement() {
        return `
                <div class="nftContainer">
                    <div class="nftContainerItem">
                        <img src="../images/lens.png" class="default-img" />
                        <a href="https://opensea.io/collection/bon-lotto-winner" target="_blank">
                        <button  >bet now to win!</button></a>
                    
                    </div>
                </div>
            `;
    }

    _Rewards_displayNewNFTData(data) {
        const resultsArray = data.results;

        let nftsUserCollectionElements = resultsArray
        .map(this._Rewards_createNFTElement)
        .concat(
            Array(5 - resultsArray.length)
            .fill(0)
            .map(() => this._Rewards_createDefaultElement())
        )
        .join('');

        document.querySelector('#nft-user-collection').innerHTML =
        nftsUserCollectionElements;

        document.querySelectorAll('.claimButton').forEach((button) => {
            button.addEventListener('click', async (event) => {
                const id = event.currentTarget.getAttribute('data-id');
                await this._Rewards_goToWallet(id);
            });
        });
    }

    // --- --- --- --- --- --- History Function --- --- --- --- --- ---

    async History_PullAPIData(){
        /* --- POLYGONSCAN --- */
        const apiKey = 'QCZ2EZM72TBTPBSY7AY9NSTRHVZYR5SMWV';
        const address = `${this.contractAddress1}`;
        const eventTopic = '0x7e4415a4a675fe91ff4659cea8ca354347e4c73e474662620b8e0a1544bb5e19'; //"WinnerDetails"

        const url = `https://api.polygonscan.com/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=${address}&topic0=${eventTopic}&apikey=${apiKey}`;


        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.result.length > 0) {
                console.log(data);

                let numb = this.selectedInput1 - 1;
                const transactionHash = data.result[numb].transactionHash;
                const resultsString = data.result[numb].data;

                this.History_formatDataAndPopulateTable(data);
            } else {
                console.log('No items found in the array.');
            }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    async History_formatDataAndPopulateTable(data) {
        const tableBody = document.getElementById("table-body");
      
        // Clear the table body
        tableBody.innerHTML = "";
      
        if (data.result.length > 0) {
          for (let i = 0; i < data.result.length; i++) {
            let txnHash = data.result[i].transactionHash;
            const resultsString = data.result[i].data;
      
            const formattedData = await this.History_parseData(resultsString);
      
            const row = document.createElement("tr");
      
            const roundCell = document.createElement("td");
            roundCell.innerHTML = `${formattedData.round}`;
      
            // --- Formatting ---
            const txnHashCell = document.createElement("td");
            let _txnHash_ = `${
                txnHash.substring(0, 6)}...${
                txnHash.substring((txnHash.length-4), txnHash.length)
            }`;
            txnHashCell.innerHTML = `<a href="https://polygonscan.com/tx/${txnHash}" target="_blank">${_txnHash_}</a>`;
      
            const player1Cell = document.createElement("td");
            let _player1_ = `${
                formattedData.player1.substring(0, 6)}...${
                formattedData.player1.substring((formattedData.player1.length-4), formattedData.player1.length)
            }`;
            player1Cell.innerHTML = `<a href="https://polygonscan.com/address/${formattedData.player1}" target="_blank">${_player1_}</a>`;
      
            const player2Cell = document.createElement("td");
            let _player2_ = `${
                formattedData.player2.substring(0, 6)}...${
                formattedData.player2.substring((formattedData.player2.length-4), formattedData.player2.length)
            }`;
            player2Cell.innerHTML = `<a href="https://polygonscan.com/address/${formattedData.player2}" target="_blank">${_player2_}</a>`;
      
            const winnerCell = document.createElement("td");
            let _winner_ = `${
                formattedData.winner.substring(0, 6)}...${
                formattedData.winner.substring((formattedData.winner.length-4), formattedData.winner.length)
            }`;
            winnerCell.innerHTML = `<a href="https://polygonscan.com/address/${formattedData.winner}" target="_blank">${_winner_}</a>`;
      
            const amountCell = document.createElement("td");
            amountCell.innerHTML = `${formattedData.reward} ${this.tokenSymbol}`;
      
            row.appendChild(roundCell);
            row.appendChild(txnHashCell);
            row.appendChild(player1Cell);
            row.appendChild(player2Cell);
            row.appendChild(winnerCell);
            row.appendChild(amountCell);
      
            tableBody.appendChild(row);
          }
        } else {
          console.log("No items found in the array.");
        }
      }
      
    async History_parseData(resultsString) {
        let data = resultsString;
        data = data.slice(2);
      
        const chunkSize = 64;
        const chunks = [];
        for (let i = 0; i < data.length; i += chunkSize) {
          chunks.push(data.slice(i, i + chunkSize));
        }
      
        let round = parseInt(chunks[0], 16);
        let player1 = chunks[1];
        player1 = "0x" + player1.slice(24);
        let player2 = chunks[2];
        player2 = "0x" + player2.slice(24);
        let winner = chunks[3];
        winner = "0x" + winner.slice(24);
        let reward = parseInt(chunks[4], 16);
        reward = `${reward}`;
        reward = ethers.utils.formatEther(reward);
        reward = Number(reward).toFixed(3);
      
        return {
          round: round,
          player1: player1,
          player2: player2,
          winner: winner,
          reward: reward,
        };
    }

    // --- END --- //
}

const DappInterface_ = new DappInterface();
DappInterface_.dappInitializeProcess();