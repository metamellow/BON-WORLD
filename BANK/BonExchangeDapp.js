// --- Import ABI contract data ---

// EXCHANGE
const CONTRACT1_ABI = (
	{
        "contractName": "bonExchange",
        "abi":
            [{"inputs":[{"internalType":"address","name":"_bon","type":"address"},{"internalType":"address","name":"_bank","type":"address"},{"internalType":"uint256","name":"_secondsTillEnd","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountExchanged","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBankBalance","type":"uint256"}],"name":"MigrateToBANK","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bank","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bon","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddr","type":"address"}],"name":"changeBankAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddr","type":"address"}],"name":"changeBonAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_secondsTillEnd","type":"uint256"}],"name":"changeEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeExchangePool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"end","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"exchangeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pullBONtoBurn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
	,}
);

// BANK
const CONTRACT2_ABI = (
	{
        "contractName": "bankToken",
        "abi":
        [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_stakers","type":"address"},{"internalType":"address","name":"_devs","type":"address"},{"internalType":"uint256","name":"_tax","type":"uint256"},{"internalType":"address[]","name":"_airdropAddresses","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newDevs","type":"address"}],"name":"DevsAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newStakers","type":"address"}],"name":"StakersAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"taxAmount","type":"uint256"}],"name":"TaxUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newTreasury","type":"address"}],"name":"TreasuryAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newWhitelist","type":"address"}],"name":"WhitelistAddressUpdated","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonDevs","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonStakers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonTreasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dev","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakers","type":"address"}],"name":"setStakersAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tax","type":"uint256"}],"name":"setTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_whitelist","type":"address"}],"name":"setWhitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
    ,}
);

// BON
const CONTRACT3_ABI = (
	{
        "contractName": "bonToken",
        "abi":
        [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"_supply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
    ,}
);

class DappInterface {
    
    // --- VARIABLES ---
    constructor() {
        this.dappChain = '0x13881'; //Ethereum=='0x1', Polygon=='0x89', Binance=='0x38', Modulus=='0x666', Mumbai=='0x13881'
        this.contractAddress1 = '0x1c056a00a402185004795a2e97c1834ac08deaf5'; // the dapp; exchange
        this.contractAddress2 = '0x8cf86efbc5b5155377de65df6ef0db4c96611487'; // bank
        this.contractAddress3 = '0xc33560d150e9b8222ce8038cb05322f16f7172f8'; // bon
        this.txnCost = 0.0001; // converted to '100000000000000'
        this.currentAccount = ''; // loaded on connectWallet
        this.selectedQuantity1 = 0; // set via the HTML dropdown
        this.selectedInput1 = 0; // set via the HTML input


        // All HTML Elements
        this.JSconnectButton1 = document.getElementById('HTML_connect_button'); //connectWallet
        this.JSfunctionButton1 = document.getElementById('HTML_function_button_1'); // approveThenFunction
        this.JSfunctionButton2 = document.getElementById('HTML_function_button_2'); // checkExchangeBANKBalance()
        this.JSquantityDropdown1 = document.getElementById('HTML_quantity_dropdown_1');
        this.JSquantityInput1 = document.getElementById('HTML_quantity_input_1');
    }

    // --- SETUP PROCESSES --

    // Generic web3 wallet connect process
    async connectWallet() {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert('Can not find web3 etherum. Please install Metamask!');
                console.log("NO ETHEREUM OBJECT");
                this.JSconnectButton1.innerText = '[sorry]';
                this.JSfunctionButton1.innerText = '[sorry]';
                this.JSfunctionButton2.innerText = '[sorry]';
                this.JSconnectButton1.disabled = true;
                this.JSfunctionButton1.disabled = true;
                this.JSfunctionButton2.disabled = true;
                return;
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            this.currentAccount = accounts[0]; 
            console.log('Wallet connected: ', this.currentAccount);
            this.JSconnectButton1.innerText = `${
                this.currentAccount.substring(0, 6)}...${
                this.currentAccount.substring((this.currentAccount.length-4), this.currentAccount.length)
            }`;
            this.setupEventListener();
        } catch (error) {
            alert('Can not find web3 etherum. Please install Metamask!');
                console.log("NO ETHEREUM OBJECT");
                this.JSconnectButton1.innerText = '[sorry]';
                this.JSfunctionButton1.innerText = '[sorry]';
                this.JSfunctionButton2.innerText = '[sorry]';
                this.JSconnectButton1.disabled = true;
                this.JSfunctionButton1.disabled = true;
                this.JSfunctionButton2.disabled = true;           
        }
    }

    // Listeners that pick up emit events from onchain functions
    async setupEventListener() {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();

                // --- Contract 1 --- (usually the dapp)
                    const connectedContract1 = new ethers.Contract(
                        this.contractAddress1,
                        CONTRACT1_ABI.abi,
                        signer
                    );
                    console.log('Contract 1 connected to listener');

                    // Event listener 1A
                    connectedContract1.on('MigrateToBANK', (user, amountExchanged, newBankBalance) => {
                        console.log(user, amountExchanged.toNumber(), newBankBalance.toNumber());
                        alert(`BON<>BANK Exchange Success - amount exchanged: ${this.amountExchanged}, new BANK bal:${this.newBankBalance}`);
                        //this.JSfunctionButton1.innerText = 'SEND FUNCTIONxxx AGAIN';
                        //this.JSfunctionButton1.disabled = false;
                        }
                    );

                    console.log('Contract 1A listener success');

                // --- Contract 2 --- (usually erc20 token)
                    const connectedContract2 = new ethers.Contract(
                        this.contractAddress2,
                        CONTRACT2_ABI.abi,
                        signer
                    );
                    console.log('Contract 2 connected to listener');
                    
                    // Event listener 2A
                    connectedContract2.on('Approval', (owner, spender, value) => {
                        console.log(owner, spender, value);
                        alert(`BANK approved! Please continue...`);
                        //this.JSfunctionButton1.innerText = 'CONTINUE';
                        //this.JSfunctionButton1.disabled = false;
                        }
                    );
                    console.log('Contract 2A listener success');

                // --- Contract 3 --- (usually erc20 token)
                    const connectedContract3 = new ethers.Contract(
                        this.contractAddress3,
                        CONTRACT3_ABI.abi,
                        signer
                    );
                    console.log('Contract 3 connected to listener');
                    
                    // Event listener 3A
                    connectedContract3.on('Approval', (owner, spender, value) => {
                        console.log(owner, spender, value);
                        alert(`BON approved! Please continue...`);
                        //this.JSfunctionButton1.innerText = 'CONTINUE WITH FUNCTIONxxx';
                        //this.JSfunctionButton1.disabled = false;
                        }
                    );
                    console.log('Contract 3A listener success');

            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    

    // --- CONTRACT FUNCTIONS ---
    

    // make the approveThen a modular chunk that autoplays the intended function on completion, maybe by putting the func into a var and then awaitingg

    /*
    // Functions that require erc20 approve() first
    async approveThen_Xxx() {
        // vvvv these tags can be commented out if not needed 
        if(this.selectedQuantity1 < 1){alert(`Please select a quantity from the dropdown list.`);}
        if(this.selectedQuantity1 >= 1){
        // ^^^^

        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 2 Allowance check
                    this.JSfunctionButton1.innerText = '*please wait*';
                    this.JSfunctionButton1.disabled = true;
                    
                    console.log(`Connecting contract2...`);
                    const connectedContract2 = new ethers.Contract(
                        this.contractAddress2,
                        CONTRACT2_ABI.abi,
                        signer
                    );
                    
                    console.log(`Attempting allowance call...`);
                    let tknAllwnc = await connectedContract2.allowance(
                        this.currentAccount,
                        this.connectedContract1
                    );

                    console.log('Awaiting allowance result...');
                    await tknAllwnc;
                    console.log('Analyzing allowance result...');
                    
                    if(tknAllwnc > 0){
                        console.log('Allowance accepted!');
                        try {
                            // Contract 1 function
                            this.mintButton.innerText = '*sending txn*';
                            
                            console.log(`Connecting contract1...`);
                            const connectedContract1 = new ethers.Contract(
                                this.contractAddress1,
                                CONTRACT1_ABI.abi,
                                signer
                            );

                            console.log(`Attempting function call - Q:${this.selectedQuantity1}, G:${this.txnCost}`);
                            const options = {
                                value: ethers.utils.parseEther(
                                `${this.txnCost}`
                                ),
                            }; // options may be 0 depending on the smart contract setup, payable or not
                            let nftTxn = await connectedContract1.functionXxx(
                                String(this.selectedQuantity1),
                                options
                            );

                            console.log('Awaiting function results...');
                            await nftTxn.wait();
                            // Emit event should trigger the listener on success

                        } catch (error) {
                            console.log(error);
                            console.log('Allowance success, function failed.');
                            this.mintButton.innerText = '[TRY-TXN-AGAIN]';
                            this.mintButton.disabled = false;
                        }
                        
                    } else {
                        console.log('Allowance failed; starting approval');

                        try{
                            // --- APPROVAL STUFF ---
                            this.mintButton.innerText = '*approving wallet*';
                            
                            console.log(`Connecting contract2...`);
                            const connectedContract2 = new ethers.Contract(
                                this.contractAddress2,
                                CONTRACT2_ABI.abi,
                                signer
                            );

                            console.log(`Attempting approve call...`);
                            let tknApprv = await connectedContract2.approve(
                                this.contractAddress1,
                                '115792089237316195423570985008687907853269984665640564039457584007913129639935'
                                // ^^ max possible token value
                            );

                            console.log('Awaiting approve results...');
                            await tknApprv.wait();
                            // Emit event should trigger the listener on success

                        } catch (error) {
                            console.log(error);
                            console.log('Allowance success, function failed.');
                            this.mintButton.innerText = '[TRY-APPROVE-AGAIN]';
                            this.mintButton.disabled = false;
                        }   
                    }
                } catch (error) {
                console.log(error);
                console.log("ERROR - CONTACT ADMIN");
                this.mintButton.innerText = '[-ERROR-]';
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.mintButton.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.mintButton.innerText = '[GET-METAMASK]';
        }
        } // << quantity tag ender
    }

    */



    // ^^^^^^^^^^^^^^^^^^ here


















    // Functions that without approval
    async checkExchangeBANKBalance() {
        /*
        // vvvv these tags can be commented out if not needed 
        if(this.selectedInput1 < 1){alert(`Please enter the input amount`);}
        if(this.selectedInput1 >= 1){
        // ^^^^
        */

        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 1 function
                    this.JSfunctionButton2.disabled = true;
                    this.JSfunctionButton2.innerText = '*sending txn*';
                    
                    console.log(`Connecting contract2...`);
                    const connectedContract2 = new ethers.Contract(
                        this.contractAddress2,
                        CONTRACT2_ABI.abi,
                        signer
                    );

                    console.log(`Attempting balanceOf() call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    let balOf = await connectedContract2.balanceOf(
                        String(this.contractAddress1),
                        options
                    );

                    console.log('Awaiting function results...');
                    await balOf;
                    
                    console.log("Analzying results...");
                    if (balOf >= 1){
                        //alert(`The BON<>BANK exchange currently holds: ${balOf}`);
                        console.log(`The BON<>BANK exchange currently holds: ${balOf}`)
                        this.JSfunctionButton2.disabled = false;
                        this.JSfunctionButton2.innerText = `${ethers.utils.parseEther(String(balOf))}`;
                    ;
                    } else {
                        //alert(`The BON<>BANK exchange is CLOSED.`);
                        console.log(`The BON<>BANK exchange is CLOSED.`);
                        this.JSfunctionButton2.disabled = false;
                        this.JSfunctionButton2.innerText = '[EXCHANGE-CLOSED]';
                    }

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.mintButton.innerText = '[TRY-TXN-AGAIN]';
                    this.mintButton.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.mintButton.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.mintButton.innerText = '[GET-METAMASK]';
        }
        /*
        } // << quantity tag ender
        */
    }

    // This will run
    async customConstructorFunctions(){
        try{
            await this.checkExchangeBANKBalance();
            //await this.XXX();
        } catch (error) {
            console.log(error); 
        }
    }
    
    async dappInitializeProcess() {
        try{
            await this.connectWallet();
            

            let chainId = await ethereum.request({ method: 'eth_chainId' });
            if(chainId !== this.dappChain){
                if( this.dappChain == "0x89"    || 
                    this.dappChain == "0x1"     || 
                    this.dappChain == "0x38"    || 
                    this.dappChain == "0x666"   ||
                    this.dappChain == "0x13881"
                    ){
                    if(this.dappChain == "0x89"){
                        this.JSconnectButton1.innerText = '[POLYGON-ONLY]';
                        this.JSfunctionButton1.innerText = '[POLYGON-ONLY]';
                        this.JSfunctionButton2.innerText = '[POLYGON-ONLY]';
                        this.JSconnectButton1.disabled = true;
                        this.JSfunctionButton1.disabled = true;
                        this.JSfunctionButton2.disabled = true;
                        alert('Please use POLYGON MAINNET and REFRESH browser -- Other networks will NOT WORK!');
                    }
                    if(this.dappChain == "0x1"){
                        this.JSconnectButton1.innerText = '[ETHEREUM-ONLY]';
                        this.JSfunctionButton1.innerText = '[ETHERUM-ONLY]';
                        this.JSfunctionButton2.innerText = '[ETHERUM-ONLY]';
                        this.JSconnectButton1.disabled = true;
                        this.JSfunctionButton1.disabled = true;
                        this.JSfunctionButton2.disabled = true;
                        alert('Please use ETHEREUM MAINNET and REFRESH browser -- Other networks will NOT WORK!');
                    }
                    if(this.dappChain == "0x38"){
                        this.JSconnectButton1.innerText = '[BINANCE-ONLY]';
                        this.JSfunctionButton1.innerText = '[BINANCE-ONLY]';
                        this.JSfunctionButton2.innerText = '[BINANCE-ONLY]';
                        this.JSconnectButton1.disabled = true;
                        this.JSfunctionButton1.disabled = true;
                        this.JSfunctionButton2.disabled = true;
                        alert('Please use BINANCE MAINNET and REFRESH browser -- Other networks will NOT WORK!');
                    }
                    if(this.dappChain == "0x666"){
                        this.JSconnectButton1.innerText = '[MODULUS-ONLY]';
                        this.JSfunctionButton1.innerText = '[MODULUS-ONLY]';
                        this.JSfunctionButton2.innerText = '[MODULUS-ONLY]';
                        this.JSconnectButton1.disabled = true;
                        this.JSfunctionButton1.disabled = true;
                        this.JSfunctionButton2.disabled = true;
                        alert('Please use MODULUS MAINNET and REFRESH browser -- Other networks will NOT WORK!');
                    }
                    if(this.dappChain == "0x13881"){
                        this.JSconnectButton1.innerText = '[MUMBAI-ONLY]';
                        this.JSfunctionButton1.innerText = '[MUMBAI-ONLY]';
                        this.JSfunctionButton2.innerText = '[MUMBAI-ONLY]';
                        this.JSconnectButton1.disabled = true;
                        this.JSfunctionButton1.disabled = true;
                        this.JSfunctionButton2.disabled = true;
                        alert('Please use MUMBAI TESTNET and REFRESH browser -- Other networks will NOT WORK!');
                    }
                } else {
                    alert('ERROR - PLEASE CONTACT ADMIN');
                }
            } else {
                if(chainId == "0x89"){
                    console.log('Connected to POLYGON CHAIN (' + chainId + ')');
                }
                if(chainId == "0x1"){
                    console.log('Connected to ETHEREUM CHAIN (' + chainId + ')');
                }
                if(chainId == "0x38"){
                    console.log('Connected to BINANCE CHAIN (' + chainId + ')');
                }
                if(chainId == "0x666"){
                    console.log('Connected to MODULUS CHAIN (' + chainId + ')');
                }
                if(chainId == "0x13881"){
                    console.log('Connected to MUMBAI TESTNET (' + chainId + ')');
                }
            }
        } catch (error) {
            console.log(error); 
        }
        try{
            await this.customConstructorFunctions();
        } catch (error) {
            console.log(error); 
        }
    }

  // basic html to js fuctions ------

  onSelectQuantity1() {
    this.selectedQuantity1 = this.JSquantityDropdown1.value;
    console.log(`New dropdown: ${this.selectedQuantity1}`);
  }

  onSelectInput1() {
    this.selectedInput1 = this.JSquantityInput1.value;
    console.log(`New input: ${this.selectedInput1}`);
  }

  /*
  The following code would work to auto direct through website pages --
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
    }
  */

}

const DappInterface_ = new DappInterface();
DappInterface_.dappInitializeProcess();
