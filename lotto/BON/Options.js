// Contract 1 = "LottoV3"
const CONTRACT1_ABI = (
	{
        "contractName": "LottoV3",
        "abi":

            [{"inputs":[{"internalType":"address","name":"_erc20Token","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_staking","type":"address"},{"internalType":"address","name":"_dev1","type":"address"},{"internalType":"address","name":"_dev2","type":"address"},{"internalType":"uint256","name":"_betBase","type":"uint256"},{"internalType":"uint256","name":"_restartDuration","type":"uint256"},{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"address","name":"_airnodeRrp","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"bd_counter","type":"uint256"},{"indexed":false,"internalType":"address","name":"bd_wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"bd_reward","type":"uint256"}],"name":"BetDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"cd_counter","type":"uint256"},{"indexed":false,"internalType":"address","name":"cd_wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"cd_rewards","type":"uint256"}],"name":"ClaimDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"wd_counter","type":"uint256"},{"indexed":false,"internalType":"address","name":"wd_playerOne","type":"address"},{"indexed":false,"internalType":"address","name":"wd_playerTwo","type":"address"},{"indexed":false,"internalType":"address","name":"wd_winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"wd_winAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"wd_qrng","type":"uint256"}],"name":"WinnerDetails","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"airnode","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"airnodeRrp","outputs":[{"internalType":"contract IAirnodeRrpV0","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"betBase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"betPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"claim","outputs":[{"internalType":"uint256","name":"rewards","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"counter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endpointIdUint256","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"expectingRequestWithIdToBeFulfilled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"fulfillUint256","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lottoOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"pastLottoAPI3CallCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoPlayer2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastLottoRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player1W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"player2W","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_player1W","type":"address"},{"internalType":"address","name":"_player2W","type":"address"},{"internalType":"uint256","name":"_betPrice","type":"uint256"},{"internalType":"uint256","name":"_counter","type":"uint256"}],"name":"resetGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_lottoOpen","type":"bool"},{"internalType":"address","name":"_erc20token","type":"address"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_staking","type":"address"},{"internalType":"address","name":"_dev1","type":"address"},{"internalType":"address","name":"_dev2","type":"address"},{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"bool","name":"_taxSwitch","type":"bool"},{"internalType":"bool","name":"_resetFunds","type":"bool"}],"name":"resetLotto","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"restartDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"restartTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_airnode","type":"address"},{"internalType":"bytes32","name":"_endpointIdUint256","type":"bytes32"},{"internalType":"address","name":"_sponsorWallet","type":"address"}],"name":"setRequestParameters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sponsorWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxSwitch","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

    ,}
);

class LottoOptions {
    constructor() {
        /* --- CONTRACTS --- */
        this.dappChain = '0x89'; //ETHEREUM-MAINNET=='0x1', POLYGON-MAINNET=='0x89', POLYGON-MUMABI=='0x13881'
        this.contractAddress1 = '0x61332ac332c859a0c2360fbe44d888cddda53676'; // LottoV3
        this.connectedContract1; // Needed when loading the scripts

        /* --- VARIABLES --- */
        this.currentAccount; // beware bc this is duplicated on other scripts

        /* --- BUTTONS --- */
        this.currentAccount = ''; // loaded on connectWallet
        this.JSButton1 = document.getElementById('HTML_button_1'); // inifinty price
    }
  
    async dappInitializeProcess() {
        // --- PRIMARY components
        try{await this.pullUsersWallet();} catch (error) {console.log(error);}
        try{await this.connectAllContracts();} catch (error) {console.log(error);}  

        // --- SECONDARY components
        try{await this.pullInifinityPrice();} catch (error) {console.log(error);}
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

                    }catch(error){
                        console.log(error);
                        console.log(`error connecting contracts`);
                    }
                } else {
                    console.log(`dappChain incorrect`);
                }
            } else {
                console.log(`Eth object not found`);
            }
        } catch (error) {
        }
    }

    // buttons [2]
    async pullInifinityPrice(){
        try {
            console.log(`bet price call..`);
            let results = await this.connectedContract1.betPrice();
            console.log('Awaiting function results...');
            await results;
            console.log("Analzying results...");
            if (results > 0){
                console.log(`${results}`);
                results = `${results}`;
                results = ethers.utils.formatEther(results);
                let buttonText = Number(results);
                buttonText = buttonText.toFixed(3);
                this.JSButton1.innerText = `${buttonText} BON`;
                this.JSButton1.disabled = false;
                return results;
            } else {
                console.log(`Results not found`);
                this.JSButton1.innerText = `Error`;
                this.JSButton1.disabled = false;
                return results;
            }
        } catch (error) {
            console.log(error);
        }
    }

  }
  
  const LottoOptions_ = new LottoOptions();
  LottoOptions_.dappInitializeProcess();
  