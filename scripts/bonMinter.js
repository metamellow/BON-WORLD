
/* import { useEffect, useState } from "react"; */
/* import { ethers } from "ethers"; */
/* import BONNFT from '../utils/BONNFT.json'; */

fetch("../utils/BONNFT.json")
.then(response => {
   return response.json();
})
.then(BONNFT => console.log(BONNFT));

const bonMinter = () => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [selectedMintQuantity, onSelectMintQuantity] = useState(0);
    const [selectedNFTCollection, onSelectNFTCollection] = useState("");

    const CONTRACT_ADDRESS = "0x88421bc1C0734048f80639BE6EF367f634c33804";

    var NFTCollectionDropdown = document.getElementById('NFT-collection-dropdown');
    var mintQuantityDropdown = document.getElementById('mintQuantityDropdown');
    var mintButton = document.getElementById('mint-button');
    const NFTCostAmount = 0.15;

    


    const connectWallet = async () => {
        try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        console.log("Connected", accounts[0]);
        setCurrentAccount(accounts[0]);

        // for connecting wallet first time
        setupEventListener() 

        } catch (error) {
        console.log(error);
        }
    }

    const setupEventListener = async () => {
        try {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, BONNFT.abi, signer);

            // capture event when our contract throws it
            connectedContract.on("NewBONNFTMinted", (from, tokenId) => {
            console.log(from, tokenId.toNumber())
            alert(`Congrats! You've minted your NFT and sent it to your wallet! It can take a max of 10 min to show up on OpenSea. Here's the link: https://opensea.io/assets/matic/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
            });

            console.log("Setup event listener!")

        } else {
            console.log("Ethereum object doesn't exist!");
        }
        } catch (error) {
        console.log(error)
        }
    }

    const askContractToMintNft = async () => {
        try {
        const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, BONNFT.abi, signer);
            
            mintButton.innerText = "*please wait*";
            mintButton.disabled = true;

            const options = {value: ethers.utils.parseEther(`${selectedMintQuantity * NFTCostAmount}`)};
            console.log(`Going to try enact a transaction to mint ${selectedMintQuantity} NFTs for a total of ${selectedMintQuantity * NFTCostAmount}MATIC.`);
            let nftTxn = await connectedContract.mintBONNFT(String(selectedMintQuantity), options);

            console.log("Mining...please wait.")
            await nftTxn.wait();
            
            console.log(`Mined, see transaction: https://polygonscan.com/tx/${nftTxn.hash}`);
            mintButton.innerText = "MINT AGAIN";
            mintButton.disabled = false;

        } else {
            console.log("Ethereum object doesn't exist!");
            mintButton.innerText = "MINT AGAIN";
            mintButton.disabled = false;
        }
        } catch (error) {
        console.log(error);
        mintButton.innerText = "(ERROR) TRY MINT AGAIN";
        mintButton.disabled = false;
        }
    }

    // Render Methods -- this will convert the button to connect if not connected
    /* const renderNotConnectedContainer = () => (
        <div align="center">
            <button
                id="mint-button"
                class="custom-button"
                style="height: 45px; width: 300px; text-align: left" 
                onclick="connectWallet();">
                    CONNECT WALLET
            </button>
        </div>
    ); */

    useEffect(() => {

        const checkIfWalletIsConnected = async () => {
            const { ethereum } = window;

            if (!ethereum) {
                console.log("Make sure you have metamask!");
                return;
            } else {
                console.log("We have the ethereum object", ethereum);
            }

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if (accounts.length !== 0) {
                const account = accounts[0];
                console.log("Found an authorized account:", account);
                setCurrentAccount(account);

                // for user comes to our site and ALREADY had their wallet connected + authorized.
                setupEventListener()
            } else {
                console.log("No authorized account found");
            }

            let chainId = await ethereum.request({ method: 'eth_chainId' });
            console.log("Connected to chain " + chainId);
            
            const polygonChainId = "137"; 
            if (chainId !== polygonChainId) {
                alert("You are NOT connected to the POLYGON NETWORK! If you mint on any other network it will NOT WORK!");
            }

        };

        checkIfWalletIsConnected();
    }, []);
};

bonMinter();