document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connectWallet');
    const galleryDiv = document.getElementById('gallery');
    const contractAddress = '0x88421bc1C0734048f80639BE6EF367f634c33804';
    const contractABI = [...]; // ABI do seu contrato

    connectButton.addEventListener('click', async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.enable();
                displayNFTs();
            } catch (error) {
                console.error('Erro ao conectar à carteira:', error);
            }
        } else {
            console.error('MetaMask não encontrado');
        }
    });

    async function displayNFTs() {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        
        const userNFTs = await contract.methods.getNFTsOwnedByUser().call();

        userNFTs.forEach(async (tokenId) => {
            const metadataURL = await contract.methods.getMetadataURL(tokenId).call();
            
            const img = document.createElement('img');
            img.src = metadataURL;
            img.alt = `NFT ${tokenId}`;
            img.classList.add('nft-img');
            
            galleryDiv.appendChild(img);
        });
    }
});
