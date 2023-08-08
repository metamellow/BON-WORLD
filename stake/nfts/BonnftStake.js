// https://eye.moduluszk.io/address/0x26fd3e1454e6175b150341158df48ce3D5c76C4a/contracts

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

// "BONNFT"
const CONTRACT2_ABI = (
	{
        "contractName": "BONNFT",
        "abi":

            [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NewBONNFTMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_MINT_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOKENS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numTokens","type":"uint256"}],"name":"mintBONNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}]    
    
    ,}
);

class ClaimerDappInterface {
    
    // _____________________________________________________________
    // _______________ VARIABLES AND OBJECTS SECTION _______________
    // _____________________________________________________________
    
    // --- @DEV Sets up all the vars and objects used
    constructor() {
        // --- Universal web3 Variables
        this.dappChain = '0x89'; //ETHEREUM-MAINNET=='0x1', POLYGON-MAINNET=='0x89', BINANCE-MAINNET=='0x38', MODULUS-TESTNET=='0x6666', POLYGON-MUMABI=='0x13881'
        this.chainName = 'POLYGON-MAINNET';
        this.contractAddress1 = ''; // Claimer
        this.contractAddress2 = '0x88421bc1C0734048f80639BE6EF367f634c33804'; // NFT contract
        this.currentAccount = ''; // THIS IS DUPLICATED ON OTHER SCRIPTS, beware
        this.waitingForListener = false;
        this.txnCost = ''; // loaded on checkBetPrice();

        // --- Button HTML Elements ---
        this.buttonsArray = [
            (this.JSButton0 = "0"), //emptyplaceholder
            (this.JSButton1 = document.getElementById('HTML_button_1')), // findUserNFTs()
            (this.JSButton2 = document.getElementById('HTML_button_2')), // claimRewards()
        ]

        // --- Input HTML Elements --- 
        this.selectedInput1 = 1; // 
        this.JSInput1 = document.getElementById('HTML_input_1'); // inputField

        // --- Unique Div Boxes ---
        this.JSUniqueDiv1 = document.getElementById('nftCardContainer'); // div field

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
        try{await this.findUserNFTs();} catch (error) {console.log(error);}
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

                /*
                // Event Listener 1A
                connectedContract1.on('ClaimDetails', (claimAmount) => {
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
                */
                
                
                // --- Contract 2 ---
                    // Setup
                    const connectedContract2 = new ethers.Contract(
                        this.contractAddress2,
                        CONTRACT2_ABI.abi,
                        signer
                    );
                    console.log('Contract 2 connected to listener');

                    /*
                    // Event Listener 2A
                    connectedContract2.on('BetDetails', (playersCounter, counterReward) => {
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

    // --- @DEV pulls the users NFT information
    async findUserNFTs() {
        try { 
            const { ethereum } = window;
            if (ethereum) {
                let chainId = await ethereum.request({ method: 'eth_chainId' });
                if((chainId == this.dappChain)){
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    try{
                        // Contract 2 functions
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
                            
                            // Function 1 Button - functionName
                            console.log(`Attempting function 1 call..`);
                            let Function1Results = await connectedContract2.balanceOf(`${this.currentAccount}`);
                            console.log('Awaiting function results...');
                            await Function1Results;
                            console.log("Analzying results...");
                            if (Function1Results != ""){
                                console.log(`NFT Balance: ${Function1Results}`)
                                this.buttonsArray[1].disabled = false;
                                this.buttonsArray[1].innerText = `Your NFT Balance: ${Function1Results}`;
                            } else {this.buttonsArray[1].innerText = `no results`;}

                            /*
                            // Function 2 Button - functionName
                            console.log(`Attempting function 2 call..`);
                            const filter = connectedContract2.filters.Transfer(null, this.currentAccount);
                            const transferEvents = await connectedContract2.queryFilter(filter);

                            console.log('Awaiting function results...');
                            const ownedNFTs = [];
                            for (const event of transferEvents) {
                              const tokenId = event.args.tokenId.toString();
                              ownedNFTs.push(tokenId);
                            }

                            console.log("Analzying results...");
                            if ((ownedNFTs != 0) || (ownedNFTs != "") || ownedNFTs != null){
                                    // Do something
                                    for (const tokenId of ownedNFTs) {
                                        let div = document.createElement('div');
                                        div.textContent = `NFT ID: ${tokenId}`;
                                        // Add any additional styling or content to the div as needed
                                        
                                        let divBox = createDivBox(tokenId);
                                        this.JSUniqueDiv1.appendChild(divBox);
                                    }

                                    this.buttonsArray[1].disabled = false;
                                    this.buttonsArray[1].innerText = `-refresh-`;

                            } else {this.buttonsArray[1].innerText = `no results`;}
                            */
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

    // --- @DEV calls the claim function with the tokenID currently in the entry field
    async claimRewards() {
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
                        console.log(`Connecting contract1...`);
                        const connectedContract1 = new ethers.Contract(
                            this.contractAddress1,
                            CONTRACT1_ABI.abi,
                            signer
                        );
                            // @Dev this should be the effected button range
                            for (let i = 2; i < 3; i++) {
                                this.buttonsArray[i].disabled = true;
                                this.buttonsArray[i].innerText = `*loading*`;
                                console.log(`button ${i} disabled`);
                            }
                        
                            // Button 2 -  claim()
                            console.log(`Attempting button 2 call..`);
                            let Button2Results = await connectedContract1.claim(`${this.selectedInput1}`);
                            console.log('Awaiting button results...');
                            await Button2Results;
                            console.log("Analzying results...");

                            this.waitingForListener = true;
                            this.buttonsArray[2].innerText = '*waiting for metamask*';

                    }catch(error){
                        // @Dev error related to the function process
                        console.log(error);
                        this.buttonsArray[2].disabled = false;
                        this.buttonsArray[2].innerText = `Try Claim Again`;
                    }
                } else {
                    // @Dev error related to network chain
                    console.log(`dappChain incorrect`);
                    this.buttonsArray[2].disabled = false;
                    this.buttonsArray[2].innerText = `Try Claim Again`;
                }
            } else {
                // @Dev error related to 'Metamask'
                console.log(`Eth object not found`);
                this.buttonsArray[2].disabled = false;
                this.buttonsArray[2].innerText = `Try Claim Again`;
            }
        } catch (error) {
            // @Dev this pulls the flagged error and gives to user
            console.log(error);
            this.buttonsArray[2].disabled = false;
            this.buttonsArray[2].innerText = `Try Claim Again`;
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








/*
nfts.forEach(function(nft) {
  // Create a new div element for the nft card
  var nftCard = document.createElement('div');
  nftCard.classList.add('nft-card');

  // Set the content of the nft card
  nftCard.innerHTML = `
    <img src="${nft.image}" alt="${nft.name}">
    <h3>${nft.name}</h3>
    <p>${nft.description}</p>
  `;

  // Append the ntf card to the container
  var nftCardContainer = document.getElementById('nftCardContainer');
  nftCardContainer.appendChild(nftCard);
});
*/
