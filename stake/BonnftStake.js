// _______________________________________________________
// __________ ESTABLISH ALL SMART CONTRACT ABIs __________
// _______________________________________________________

// "Claimer"
const CONTRACT1_ABI = (
	{
        "contractName": "Claimer",
        "abi":

            [{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_nftsAddress","type":"address"},{"internalType":"address","name":"_devWallet","type":"address"},{"internalType":"address","name":"_burnWallet","type":"address"},{"internalType":"uint256","name":"_devRate","type":"uint256"},{"internalType":"uint256","name":"_burnRate","type":"uint256"},{"internalType":"uint256","name":"_claimPace","type":"uint256"},{"internalType":"uint256","name":"_claimRate","type":"uint256"},{"internalType":"bool","name":"_taxOn","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"claimAmount","type":"uint256"}],"name":"ClaimDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"burnRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenID","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimPace","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastClaimTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nfts","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"taxOn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_claimRate","type":"uint256"},{"internalType":"uint256","name":"_claimPace","type":"uint256"}],"name":"updateClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devWallet","type":"address"},{"internalType":"address","name":"_burnWallet","type":"address"},{"internalType":"uint256","name":"_devRate","type":"uint256"},{"internalType":"uint256","name":"_burnRate","type":"uint256"},{"internalType":"bool","name":"_trueFalse","type":"bool"}],"name":"updateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"withdrawBalances","outputs":[],"stateMutability":"nonpayable","type":"function"}]    
    
    
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

// "Token"
const CONTRACT3_ABI = (
	{
        "contractName": "Token",
        "abi":

            [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"_supply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]    
    
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
        this.contractAddress1 = '0x0e240af1c99f903670372ce37fff6aa88597d347'; // ClaimerV105
        this.contractAddress2 = '0x88421bc1C0734048f80639BE6EF367f634c33804'; // NFT contract
        this.contractAddress3 = '0x47E53f0Ddf71210F2C45dc832732aA188F78AA4f'; // Token contract
        this.connectedContract1; // Needed when loading the scripts
        this.connectedContract2; // Needed when loading the scripts
        this.connectedContract3; // Needed when loading the scripts
        this.currentAccount = ''; // THIS IS DUPLICATED ON OTHER SCRIPTS, beware
        this.waitingForListener = false;
        this.connectionError = false;
        this.NFTResultsHolder = {};

        // --- Button HTML Elements ---
        this.buttonsArray = [
            (this.JSButton0 = "0"), //emptyplaceholder
            (this.JSButton1 = document.getElementById('HTML_button_1')), // findUserNFTs()
            (this.JSButton2 = document.getElementById('HTML_button_2')), // claimRewards()
            (this.JSButton3 = document.getElementById('HTML_button_3')), // estimatedReward()
            (this.JSButton4 = document.getElementById('HTML_button_4')), // NFT API call()

        ]

        // --- Input HTML Elements --- 
        this.selectedInput1 = 1; // 
        this.JSInput1 = document.getElementById('HTML_input_1'); // inputField

        // --- Unique Div Boxes ---
        this.JSUniqueDiv1 = document.getElementById('nftCardContainer'); // div field

    }

    // _____________________________________________________________
    // _____________________ NEEDED FUNCTIONS ______________________
    // _____________________________________________________________

    // --- @DEV this boots all the PRIMARY components and SECONDARY components
    async dappInitializeProcess() {
        // --- PRIMARY components
        try{await this.buttonManagerFunc();} catch (error) {console.log(error);}  
        try{await this.pullUsersWallet();} catch (error) {console.log(error);}
        try{await this.connectAllContracts();} catch (error) {console.log(error);}
        try{await this.setupEventListener();} catch (error) {console.log(error);}
        
        // --- SECONDARY components
        try{await this.findUserNFTs();} catch (error) {console.log(error);}
        try{await this.estimateRewards();} catch (error) {console.log(error);}
        //try{await this.callForNFTAPI();} catch (error) {console.log(error);}

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

    // --- @DEV pulls the users NFT information [BUTTON 1]
    async findUserNFTs() {
        if(this.connectionError == true){return;}
        try {
            // @Dev this should be the effected button range
            for (let i = 1; i < 2; i++) {
                this.buttonsArray[i].disabled = true;
                this.buttonsArray[i].innerText = `*loading*`;
                console.log(`button ${i} disabled`);
            }
            
            // Function 1 Button - functionName
            console.log(`Attempting function 1 call..`);
            let Function1Results = await this.connectedContract2.balanceOf(`${this.currentAccount}`);
            console.log('Awaiting function results...');
            await Function1Results;
            console.log("Analzying results...");
            if (Function1Results != ""){
                console.log(`NFT Balance: ${Function1Results}`)
                this.buttonsArray[1].disabled = false;
                this.buttonsArray[1].innerText = `Your NFT Balance: ${Function1Results}`;
            } else {this.buttonsArray[1].innerText = `no results`;}
        } catch (error) {
            // @Dev this pulls the flagged error and gives to user
            console.log(error);
        }
    }

    // --- @DEV calls the claim function with the tokenID currently in the entry field [BUTTON 2]
    async claimRewards() {
        if(this.connectionError == true){return;}
        try{
            // @Dev this should be the effected button range
            for (let i = 2; i < 3; i++) {
                this.buttonsArray[i].disabled = true;
                this.buttonsArray[i].innerText = `*loading*`;
                console.log(`button ${i} disabled`);
            }
        
            // Button 2 -  claim()
            console.log(`Attempting button 2 call..`);
            let Button2Results = await this.connectedContract1.claim(`${this.selectedInput1}`);
            console.log('Awaiting button results...');
            await Button2Results;
            console.log("Analzying results...");

            this.waitingForListener = true;
            this.buttonsArray[2].innerText = '*waiting for metamask*';

        } catch(error){
            // @Dev error related to the function process
            console.log(error);
            this.buttonsArray[2].disabled = false;
            this.buttonsArray[2].innerText = `-Try Claim Again-`;
        }
    }

    // --- @DEV calls the claim function with the tokenID currently in the entry field [BUTTON 3]
    async estimateRewards() {
        if(this.connectionError == true){return;}
        try{
            // @Dev this should be the effected button range
            for (let i = 3; i < 4; i++) {
                this.buttonsArray[i].disabled = true;
                this.buttonsArray[i].innerText = `*loading*`;
                console.log(`button ${i} disabled`);
            }
        
            // Button 4 -  estimate Rewards
            console.log(`Attempting button 3 call A..`);
            let availableTokens = await this.connectedContract3.balanceOf(`${this.contractAddress1}`);
            console.log(`Results: ${availableTokens}`);
            console.log(`Attempting button 3 call B..`);
            let claimRate = await this.connectedContract1.claimRate();
            console.log(`Results: ${claimRate}`);

            let Button3Results = availableTokens * claimRate / 1000;
            console.log(`Analzying results... ${Button3Results}`);
            if (Button3Results != ""){
                let amount = ethers.utils.formatEther(String(Button3Results));
                amount = Number(amount);
                amount = amount.toFixed(3);
                amount = ethers.utils.commify(amount);
                console.log(`Estimated Rewards: ${amount} BON`)
                this.buttonsArray[3].disabled = false;
                this.buttonsArray[3].innerText = `Estimated Rewards: ${amount} BON`;
            } else {this.buttonsArray[3].innerText = `no results`;}

        }catch(error){
            console.log(error);
            this.buttonsArray[3].disabled = false;
            this.buttonsArray[3].innerText = `-try estimate again-`;
        }
    }

    // --- @DEV calls the API and gets the NFTs held by the user [BUTTON 4]
    async callForNFTAPI() {
        // @Dev this should be the affected button range
        for (let i = 4; i < 5; i++) {
          this.buttonsArray[i].disabled = true;
          this.buttonsArray[i].innerText = `*loading*`;
          console.log(`button ${i} disabled`);
        }
      
        /* --- BLOCKSPAN --- */
        const options = {
          method: 'GET',
          headers: { accept: 'application/json', 'X-API-KEY': 'lezEOBRZiEKd9xjFKR43eBXBZA50nELn' }
        };
      
        fetch(`https://api.blockspan.com/v1/nfts/owner/${this.currentAccount}?chain=poly-main&contract_addresses=${this.contractAddress2}&include_nft_details=true&page_size=50`, options)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.displayNFTData(data);
          })
          .catch(err => {
            console.error(err);
          });
      }
      
      async displayNFTData(data) {
        const resultsArray = data.results;
      
        const divContainer = this.JSUniqueDiv1;
      
        resultsArray.forEach(item => {
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('card');
      
          const image = document.createElement('img');
          image.src = item.nft_details.cached_images.tiny_100_100;
          image.style.width = '100px';
          image.style.height = '100px';
      
      
          const idNumber = document.createElement('p');
          idNumber.textContent = `ID: ${item.id}`;
          idNumber.style.marginTop = '5px'; // Adjust the top margin to reduce space
      
          cardDiv.appendChild(image);
          cardDiv.appendChild(idNumber);
      
          divContainer.appendChild(cardDiv);
        });
      
        for (let i = 4; i < 5; i++) {
          this.buttonsArray[i].disabled = true;
          this.buttonsArray[i].innerText = `[RELOAD]`;
          console.log(`button ${i} disabled`);
        }
      }
    
    // --- END --- //
}

const ClaimerDappInterface_ = new ClaimerDappInterface();
ClaimerDappInterface_.dappInitializeProcess();