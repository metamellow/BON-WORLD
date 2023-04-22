// import ABI contract data !!!!!!!!!!!!!!!!!!!!!
const CONTRACT_ABI = (
	{
		"contractName": "BONxRVLT",
		"abi":
		[{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NewNFTMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20contract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gasPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setERC20Price","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"setErc20Contract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setGasPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_70","type":"address"},{"internalType":"address","name":"address_20","type":"address"},{"internalType":"address","name":"address_10","type":"address"}],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}]
	,}
);

const TOKENPAYMENT_ABI = (
	{
		"contractName": "RVLT",
		"abi":
			[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"taxAmount","type":"uint256"}],"name":"TaxUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newTreasury","type":"address"}],"name":"TreasuryAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"whitelistAccount","type":"address"},{"indexed":false,"internalType":"bool","name":"value","type":"bool"}],"name":"WhitelistAddressUpdated","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20VotesUpgradeable.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"initialHolder","type":"address"},{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tax","type":"uint256"}],"name":"setTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_whitelist","type":"address"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"setWhitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
	,}
);


/* 
- https://ethereum.stackexchange.com/questions/112418/is-there-a-way-to-detect-if-a-token-was-already-approved


To do: --------------------------------------------------------------------------
0) I dont think it approved bc its not showing up on the tokenApprovalChecker, so try other rvlt contract
1) integrate an 'already approved' checker (on page load?)
2) have the button actually change based on the results; could reload the page on approve?
2) test online with the fake NFT contract
3) clean up shop and tell MERP; send all test NFTs to burn wallet
4) then start MODxLIB


*/

class NFTminter {
    constructor() {
        // NOTE: vvvvv this is the TEST NFT contract address
        this.CONTRACT_ADDRESS = '0x953916d65f03dc93265858c2793d52b9a6c8eb15'; //!!!!!!!!
        this.TOKENPAYMENT_ADDRESS = '0xf0f9D895aCa5c8678f706FB8216fa22957685A13'; //!!!!!!!!
        this.NFTCostAmount = 0.001; // 1000000000000000 //!!!!!!!!
        this.currentAccount = '';
        this.selectedMintQuantity = 0;
        this.selectedNFTCollection = '';
        this.nftCollectionDropdown = document.getElementById('nftCollectionDropdownHTML');
        this.mintQuantityDropdown = document.getElementById('mintQuantityDropdownHTML');
        this.connectButton = document.getElementById('connectButtonHTML');
        this.mintButton = document.getElementById('mintButtonHTML');
    }

  

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

            console.log('Connected', accounts[0]);
            this.currentAccount = accounts[0]; 
            this.connectButton.innerText = `${
                this.currentAccount.substring(0, 6)}...${
                this.currentAccount.substring((this.currentAccount.length-4), this.currentAccount.length)
            }`;

            // for connecting wallet first time
            this.setupEventListener();
        } catch (error) {
            console.log(error);            
        }
    }

    async setupEventListener() {
        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();

                const connectedContract1 = new ethers.Contract(
                    this.CONTRACT_ADDRESS,
                    CONTRACT_ABI.abi,
                    signer
                );

                connectedContract1.on('NewNFTMinted', (from, tokenId) => {
                    console.log(from, tokenId.toNumber());
                    alert(
                        `Congrats! You've minted your NFT and sent it to your wallet! 
                        It should take less than 10 min to show up on OpenSea.`
                    );
                    }
                );

                console.log('Setup event listener!');
            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    


    async askContractToMintNft() {
        if(this.selectedMintQuantity < 1){
            alert(
            `Please select a mint quantity from the dropdown list.`
            );
        }
        if(this.selectedMintQuantity >= 1){
            try { const { ethereum } = window;
                if (ethereum) {
                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    try{
                        // --- ALLOWANCE STUFF ---
                        const connectedContract1 = new ethers.Contract(
                            this.TOKENPAYMENT_ADDRESS,
                            TOKENPAYMENT_ABI.abi,
                            signer
                        );
                        this.mintButton.innerText = '*please wait*';
                        this.mintButton.disabled = true;
                        /*const options = {
                            value: ethers.utils.parseEther(`0`),
                        };*/
                        console.log(`Checking token allowance`);
                        let tknAllwnc = await connectedContract1.allowance(
                            signer,
                            this.TOKENPAYMENT_ADDRESS
                        );
                        let allowanceResult = tknAllwnc.toString().wait();
                        if(allowanceResult > 0){
                            try {
                                // --- MINT STUFF ---
                                const connectedContract2 = new ethers.Contract(
                                    this.CONTRACT_ADDRESS,
                                    CONTRACT_ABI.abi,
                                    signer
                                );
                                this.mintButton.innerText = '*minting*';
                                this.mintButton.disabled = true;
                                const options = {
                                    value: ethers.utils.parseEther(
                                    `${this.selectedMintQuantity * this.NFTCostAmount}`
                                    ),
                                };
                                console.log(
                                    `Going to try enact a transaction to mint ${this.selectedMintQuantity} NFTs for a total added gas of ${this.selectedMintQuantity * this.NFTCostAmount}.`
                                );
                                let nftTxn = await connectedContract2.mint(
                                    String(this.selectedMintQuantity),
                                    options
                                );
                                console.log('Mining...please wait.');
                                await nftTxn.wait();
                                console.log(
                                    `Minted! TXN: https://polygonscan.com/tx/${nftTxn.hash} && see NFT: https://opensea.io/assets/matic/${this.CONTRACT_ADDRESS}/${tokenId.toNumber()}`
                                );
                                alert(
                                    `Minted! TXN: https://polygonscan.com/tx/${nftTxn.hash} && NFT: https://opensea.io/assets/matic/${this.CONTRACT_ADDRESS}/${tokenId.toNumber()}`
                                );
                                this.mintButton.innerText = 'MINT MORE!';
                                this.mintButton.disabled = false;
                            } catch (error) {
                                console.log(error);
                                this.mintButton.innerText = '-TRY MINT AGAIN-';
                                this.mintButton.disabled = false;
                            }
                        } else {
                            try{
                                // --- APPROVAL STUFF ---
                                const connectedContract1 = new ethers.Contract(
                                    this.TOKENPAYMENT_ADDRESS,
                                    TOKENPAYMENT_ABI.abi,
                                    signer
                                );
                                this.mintButton.innerText = '*approving*';
                                this.mintButton.disabled = true;
                                /*const options = {
                                    value: ethers.utils.parseEther(`0`),
                                };*/
                                console.log(`Trying to approve token spending`);
                                let tknApprv = await connectedContract1.approve(
                                    this.CONTRACT_ADDRESS,
                                    '115792089237316195423570985008687907853269984665640564039457584007913129639935'
                                );
                                console.log('Approving...please wait.');
                                await tknApprv.wait();
                                console.log(`Approved!`);
                                alert(
                                    `Approved! You can now mint NFTs!`
                                );
                            } catch (error) {
                                console.log(error);
                                this.mintButton.innerText = '-TRY APPROVAL AGAIN-';
                                this.mintButton.disabled = false;
                            }
                        }
                    } catch (error) {
                    console.log(error);
                    console.log("Major error in allowance check -- contact administrator");
                    this.mintButton.innerText = '-ERROR-';
                    //this.mintButton.disabled = false;
                    }
                } /*else {
                    console.log("Ethereum object doesn't exist!");
                    this.mintButton.innerText = '-GET METAMASK-';
                    //this.mintButton.disabled = false;
                }*/
            } catch (error) {
                console.log("Ethereum object doesn't exist!");
                this.mintButton.innerText = '-GET METAMASK-';
                //this.mintButton.disabled = false;
            }
        }
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
      console.log('Found an authorized account:', account);
      this.currentAccount = account; // NEW
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

const NFTminter_ = new NFTminter();
NFTminter_.checkIfWalletIsConnected();