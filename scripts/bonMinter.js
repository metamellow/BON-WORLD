// import contract data
fetch('../utils/BONNFT.json')
  .then((response) => {
    return response.json();
  })
  .then((BONNFT) => console.log(BONNFT));

class BonMinter {
  constructor() {
    this.CONTRACT_ADDRESS = '0x88421bc1C0734048f80639BE6EF367f634c33804';
    this.currentAccount = '';
    this.selectedMintQuantity = 0;
    this.selectedNFTCollection = '';

    this.nftCollectionDropdown = document.getElementById('nftCollectionDropdownHTML');
    this.mintQuantityDropdown = document.getElementById('mintQuantityDropdownHTML');
    this.connectButton = document.getElementById('connectButtonHTML');
    this.mintButton = document.getElementById('mintButtonHTML');

    this.NFTCostAmount = 0.15;
  }

  onSelectMintQuantity() {
    this.selectedMintQuantity = this.mintQuantityDropdown.value;
    console.log(this.selectedMintQuantity);
  }

  onSelectNFTCollection() {
    this.selectedNFTCollection = this.nftCollectionDropdown.value;
    console.log(this.selectedNFTCollection);
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
      currentAccount = accounts[0]; // NEW

      // for connecting wallet first time
      setupEventListener();
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
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          BONNFT.abi,
          signer
        );

        // capture event when our contract throws it
        connectedContract.on('NewBONNFTMinted', (from, tokenId) => {
          console.log(from, tokenId.toNumber());
          alert(
            `Congrats! You've minted your NFT and sent it to your wallet! 
            It can take a max of 10 min to show up on OpenSea. 
            Here's the link: https://opensea.io/assets/matic/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`
          );
        });

        console.log('Setup event listener!');
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async askContractToMintNft() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          CONTRACT_ADDRESS,
          BONNFT.abi,
          signer
        );

        mintButton.innerText = '*please wait*';
        mintButton.disabled = true;

        const options = {
          value: ethers.utils.parseEther(
            `${selectedMintQuantity * NFTCostAmount}`
          ),
        };
        console.log(
          `Going to try enact a transaction to mint 
          ${selectedMintQuantity} NFTs for a total of
          ${selectedMintQuantity * NFTCostAmount}MATIC.`
        );
        let nftTxn = await connectedContract.mintBONNFT(
          String(selectedMintQuantity),
          options
        );

        console.log('Mining...please wait.');
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://polygonscan.com/tx/${nftTxn.hash}`
        );
        mintButton.innerText = 'MINT AGAIN';
        mintButton.disabled = false;
      } else {
        console.log("Ethereum object doesn't exist!");
        mintButton.innerText = 'MINT AGAIN';
        mintButton.disabled = false;
      }
    } catch (error) {
      console.log(error);
      mintButton.innerText = '(ERROR) TRY MINT AGAIN';
      mintButton.disabled = false;
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
      currentAccount = account; // NEW

      // for user comes to our site and ALREADY had their wallet connected + authorized.
      setupEventListener();
    } else {
      console.log('No authorized account found');
    }

    let chainId = await ethereum.request({ method: 'eth_chainId' });
    console.log('Connected to chain ' + chainId);

    const polygonChainId = '137';
    if (chainId !== polygonChainId) {
      alert(
        'You are NOT connected to the POLYGON NETWORK! If you mint on any other network it will NOT WORK!'
      );
    }
  }
}

const bonMinter = new BonMinter();
