// import contract data
const BONxCULT1 = (
  {}
);//!!!!!!!!

//!!!!!!!!
class BONxCULT1minter {
  constructor() {
    this.CONTRACT_ADDRESS = '0x88421bc1C0734048f80639BE6EF367f634c33804'; //!!!!!!!!
    this.currentAccount = '';
    this.selectedMintQuantity = 0;
    this.selectedNFTCollection = '';

    this.nftCollectionDropdown = document.getElementById('nftCollectionDropdownHTML');
    this.mintQuantityDropdown = document.getElementById('mintQuantityDropdownHTML');
    this.connectButton = document.getElementById('connectButtonHTML');
    this.mintButton = document.getElementById('mintButtonHTML');

    this.NFTCostAmount = 20; // 20000000000000000000 //!!!!!!!!
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
      this.currentAccount = accounts[0]; // NEW
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
        const connectedContract = new ethers.Contract(
          this.CONTRACT_ADDRESS,
          BONxCULT1.abi,
          signer
        );

        // capture event when our contract throws it
        connectedContract.on('NewNFTMinted', (from, tokenId) => {
          console.log(from, tokenId.toNumber());
          alert(
            `Congrats! You've minted your NFT and sent it to your wallet! 
            It should take less than 10 min to show up on OpenSea.`
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
          this.CONTRACT_ADDRESS,
          BONxCULT1.abi,
          signer
        );

        this.mintButton.innerText = '*please wait*';
        this.mintButton.disabled = true;

        const options = {
          value: ethers.utils.parseEther(
            `${this.selectedMintQuantity * this.NFTCostAmount}`
          ),
        };
        console.log(
          `Going to try enact a transaction to mint 
          ${this.selectedMintQuantity} NFTs for a total of
          ${this.selectedMintQuantity * this.NFTCostAmount}MATIC.`
        );
        let nftTxn = await connectedContract.mintNFT(
          String(this.selectedMintQuantity),
          options
        );

        console.log('Mining...please wait.');
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://polygonscan.com/tx/${nftTxn.hash} && see NFT: https://opensea.io/assets/matic/${this.CONTRACT_ADDRESS}/${tokenId.toNumber()}`
        );
        this.mintButton.innerText = 'MINT AGAIN';
        this.mintButton.disabled = false;
      } else {
        console.log("Ethereum object doesn't exist!");
        this.mintButton.innerText = 'MINT AGAIN';
        this.mintButton.disabled = false;
      }
    } catch (error) {
      console.log(error);
      this.mintButton.innerText = '-MINT AGAIN-';
      this.mintButton.disabled = false;
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
  }//!!!!!!!!

}

const BONxCULT1minter_ = new BONxCULT1minter();//!!!!!!!!
BONxCULT1minter_.checkIfWalletIsConnected();//!!!!!!!!