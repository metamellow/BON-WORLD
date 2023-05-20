    // ________________ ESTABLISH ALL SMART CONTRACT ABIs ________________
// "bonExchange"
const CONTRACT1_ABI = (
	{
        "contractName": "bonExchange",
        "abi":
            [{"inputs":[{"internalType":"address","name":"_bon","type":"address"},{"internalType":"address","name":"_bank","type":"address"},{"internalType":"uint256","name":"_secondsTillEnd","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountExchanged","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBankBalance","type":"uint256"}],"name":"MigrateToBANK","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bank","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bon","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddr","type":"address"}],"name":"changeBankAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddr","type":"address"}],"name":"changeBonAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_secondsTillEnd","type":"uint256"}],"name":"changeEndTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeExchangePool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"end","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"exchangeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pullBONtoBurn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
	,}
);

// "bankToken"
const CONTRACT2_ABI = (
	{
        "contractName": "bankToken",
        "abi":
        [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"address","name":"_stakers","type":"address"},{"internalType":"address","name":"_devs","type":"address"},{"internalType":"uint256","name":"_tax","type":"uint256"},{"internalType":"address[]","name":"_airdropAddresses","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newDevs","type":"address"}],"name":"DevsAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newStakers","type":"address"}],"name":"StakersAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"taxAmount","type":"uint256"}],"name":"TaxUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newTreasury","type":"address"}],"name":"TreasuryAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newWhitelist","type":"address"}],"name":"WhitelistAddressUpdated","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonDevs","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonStakers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonTreasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dev","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakers","type":"address"}],"name":"setStakersAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tax","type":"uint256"}],"name":"setTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasury","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_whitelist","type":"address"}],"name":"setWhitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
    ,}
);

// "bonToken"
const CONTRACT3_ABI = (
	{
        "contractName": "bonToken",
        "abi":
        [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"_supply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
    ,}
);

// "bankTokenStaking"
const CONTRACT4_ABI = (
	{
        "contractName": "bankTokenStaking",
        "abi":
        [{"inputs":[{"internalType":"address","name":"_bankTokenAddress","type":"address"},{"internalType":"uint256","name":"_timerDuration","type":"uint256"},{"internalType":"uint256","name":"_rwdRate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountDeposited","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"userBalance","type":"uint256"}],"name":"DepositEmit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"userBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"userReward","type":"uint256"}],"name":"RewardsEmit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"userBalance","type":"uint256"}],"name":"WithdrawEmit","type":"event"},{"inputs":[],"name":"bankTokenAddress","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"calculateRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"calculateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closeRewardsPool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositToStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isStaked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rwdRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rwdRate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_trueOrFalse","type":"bool"}],"name":"setStakingOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"setTimer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newTokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakedPoolBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakedPoolSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timerDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"withdrawTimer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
    ,}
);


class DappInterface {
    
    // ________________ VARIABLES AND OBJECTS SECTION ________________

    constructor() {
        // --- Universal web3 Variables
        this.dappChain = '0x13881'; //Ethereum=='0x1', Polygon=='0x89', Binance=='0x38', Modulus=='0x666', Mumbai=='0x13881'
        this.contractAddress1 = '0x1c056a00a402185004795a2e97c1834ac08deaf5'; // bon2bank exchange
        this.contractAddress2 = '0x8cf86efbc5b5155377de65df6ef0db4c96611487'; // bank token
        this.contractAddress3 = '0xf647981f9417eeaf70cb92ae14978fdf489a11b8'; // bon token
        this.contractAddress4 = '0x4d76c0c07d32f6b5860e9a612d76c88367df2361'; // bank staking
        this.currentAccount = ''; // loaded on connectWallet

        // --- Universal HTML Elements --- 
        this.JSconnectButton1 = document.getElementById('HTML_connect_button'); //connectWallet
        this.JSfunctionButton4 = document.getElementById('HTML_function_button_4'); // checkBONbalance()
        this.JSfunctionButton5 = document.getElementById('HTML_function_button_5'); // checkBANKbalance()
        this.JSfunctionButton1 = document.getElementById('HTML_function_button_1'); // approveThenFunction

        // --- Exchange HTML Elements ---        
        // - dropdown redirect -
        this.selectedDropdown1 = ''; // set via the HTML input; captures the chosen token exchange
        this.JSDropdownInput1 = document.getElementById('HTML_dropdown_input_1'); // dropdown to choose tokens
        // - bon to bank -
        this.JSfunctionButton2 = document.getElementById('HTML_function_button_2'); // checkExchangeBANKBalance()
        this.JSfunctionButton3 = document.getElementById('HTML_function_button_3'); // exchangeBONforBANK()
        this.selectedInput2 = 0; // set via the HTML input; holds input BON2BANK amount
        this.JSquantityInput2 = document.getElementById('HTML_quantity_input_2'); // input BON2BANK amount
        // - bank to bon


        // --- Staking HTML Elements --- 
        this.JSfunctionButton6 = document.getElementById('HTML_function_button_6'); // checkBANKstakingBal()
        this.JSfunctionButton7 = document.getElementById('HTML_function_button_7'); // checkBANKstakingTime()
        this.JSfunctionButton8 = document.getElementById('HTML_function_button_8'); // checkBANKstakingReward()
        this.JSfunctionButton9 = document.getElementById('HTML_function_button_9'); // checkBANKstakingTime()
        this.JSfunctionButton10 = document.getElementById('HTML_function_button_10'); // ClaimStakingRewards()
        this.JSfunctionButton11 = document.getElementById('HTML_function_button_11'); // WithdawStakedTokens()
        this.selectedInput3 = 0; // set via the HTML input; holds BANKStaking amount
        this.JSquantityInput3 = document.getElementById('HTML_quantity_input_3'); // input BANKStaking amount

    }

    // ________________ FIRST SETUP PROCESSES SECTION ________________

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
    // Needs to be consistently updated everytime a new contract is added
    async setupEventListener() {
        try {
            const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();

                // --- Contract 1 ---
                    const connectedContract1 = new ethers.Contract(
                        this.contractAddress1,
                        CONTRACT1_ABI.abi,
                        signer
                    );
                    console.log('Contract 1 connected to listener');

                    // Event listener 1A
                    connectedContract1.on('MigrateToBANK', (user, amountExchanged, newBankBalance) => {
                        console.log(user, ethers.utils.formatEther(amountExchanged), ethers.utils.formatEther(newBankBalance));
                        alert(`BON<>BANK Exchange Success!`);
                        this.JSfunctionButton3.disabled = false;
                        this.JSfunctionButton3.innerText = '[EXCHANGE-MORE]';
                    });

                    console.log('Contract 1A listener success');

                // --- Contract 2 ---
                    const connectedContract2 = new ethers.Contract(
                        this.contractAddress2,
                        CONTRACT2_ABI.abi,
                        signer
                    );
                    console.log('Contract 2 connected to listener');
                    
                    // Event listener 2A
                    connectedContract2.on('Approval', (owner, spender, value) => {
                        console.log(owner, spender, value);
                        //alert(`BANK approved! Please continue...`);
                        }
                    );
                    console.log('Contract 2A listener success');

                // --- Contract 3 ---
                    const connectedContract3 = new ethers.Contract(
                        this.contractAddress3,
                        CONTRACT3_ABI.abi,
                        signer
                    );
                    console.log('Contract 3 connected to listener');
                    
                    // Event listener 3A
                    connectedContract3.on('Approval', (owner, spender, value) => {
                        console.log(owner, spender, value);
                        //alert(`BON approved! Please continue...`);
                        }
                    );
                    console.log('Contract 3A listener success');

                // --- Contract 4 ---
                    const connectedContract4 = new ethers.Contract(
                        this.contractAddress4,
                        CONTRACT4_ABI.abi,
                        signer
                    );
                    console.log('Contract 4 connected to listener');

                    // Event listener 4A
                    connectedContract4.on('DepositEmit', (user, amountStaked, stakedBalance) => {
                        console.log(user, ethers.utils.formatEther(amountStaked), ethers.utils.formatEther(stakedBalance));
                        alert(`BANK staking success!`);
                        this.JSfunctionButton9.disabled = false;
                        this.JSfunctionButton9.innerText = '[STAKE-MORE]';
                    });
                    console.log('Contract 4A listener success');

                    // Event listener 4B
                    connectedContract4.on('RewardsEmit', (user, userBalance, userRewards) => {
                        console.log(user, ethers.utils.formatEther(userBalance), ethers.utils.formatEther(userRewards));
                        alert(`BANK rewards success!`);
                        this.JSfunctionButton10.disabled = false;
                        this.JSfunctionButton10.innerText = 'Have a nice day!';
                    });
                    console.log('Contract 4B listener success');

                    // Event listener 4C
                    connectedContract4.on('WithdrawEmit', (user, userBalance) => {
                        console.log(user, ethers.utils.formatEther(userBalance));
                        alert(`BANK tokens withdrawn!`);
                        this.JSfunctionButton11.disabled = false;
                        this.JSfunctionButton11.innerText = 'So sad! See you again!';
                    });
                    console.log('Contract 4C listener success');

            } else {
                console.log("Ethereum object doesn't exist!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    // ________________ UNIVERSAL CONTRACT FUNCTIONS SECTION ________________
    
    // BANK allowance check andor approve process for dapp contract then return true/false
    async contract2AllowanceCheck() {
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 2 Allowance check
                    console.log(`Connecting contract3...`);
                    const connectedContract2 = new ethers.Contract(
                        this.contractAddress2,
                        CONTRACT2_ABI.abi,
                        signer
                    );
                    
                    console.log(`Attempting allowance call...`);
                    let tknAllwnc = await connectedContract2.allowance(
                        this.currentAccount,
                        this.contractAddress1
                    );

                    console.log('Awaiting allowance result...');
                    await tknAllwnc;

                    console.log('Analyzing allowance result...');
                    if(tknAllwnc > 0){
                        console.log('Allowance accepted!');
                        return true;
                        // this should trigger the next function
                    } else {
                        console.log('Allowance failed; starting approval');

                        try{
                            // --- APPROVAL STUFF ---
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

                            return true;
                            // really there should be some check fo the results here before return true
                            // this should trigger the next function

                        } catch (error) {
                            console.log(error);
                            console.log('Allowance success, function failed.');
                            return false;
                        }   
                    }
                } catch (error) {
                console.log(error);
                console.log("ERROR - CONTACT ADMIN");
                return false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                return false;
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            return false;
        }
    }

    // BON allowance check andor approve process for dapp contract then return true/false
    async contract3AllowanceCheck() {
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 3 Allowance check
                    console.log(`Connecting contract3...`);
                    const connectedContract3 = new ethers.Contract(
                        this.contractAddress3,
                        CONTRACT3_ABI.abi,
                        signer
                    );
                    
                    console.log(`Attempting allowance call...`);
                    let tknAllwnc = await connectedContract3.allowance(
                        this.currentAccount,
                        this.contractAddress1
                    );

                    console.log('Awaiting allowance result...');
                    await tknAllwnc;

                    console.log('Analyzing allowance result...');
                    if(tknAllwnc > 0){
                        console.log('Allowance accepted!');
                        return true;
                        // this should trigger the next function
                    } else {
                        console.log('Allowance failed; starting approval');

                        try{
                            // --- APPROVAL STUFF ---
                            console.log(`Connecting contract3...`);
                            const connectedContract3 = new ethers.Contract(
                                this.contractAddress3,
                                CONTRACT3_ABI.abi,
                                signer
                            );

                            console.log(`Attempting approve call...`);
                            let tknApprv = await connectedContract3.approve(
                                this.contractAddress1,
                                '115792089237316195423570985008687907853269984665640564039457584007913129639935'
                                // ^^ max possible token value
                            );

                            console.log('Awaiting approve results...');
                            await tknApprv.wait();
                            // Emit event should trigger the listener on success

                            return true;
                            // this should trigger the next function

                        } catch (error) {
                            console.log(error);
                            console.log('Allowance success, function failed.');
                            return false;
                        }   
                    }
                } catch (error) {
                console.log(error);
                console.log("ERROR - CONTACT ADMIN");
                return false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                return false;
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            return false;
        }
    }

    // Checks the erc20 balance and then updates the onscreen button to show
    async checkBONbalance() {
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 3 function
                    this.JSfunctionButton4.disabled = true;
                    this.JSfunctionButton4.innerText = '*loading*';
                    
                    console.log(`Connecting contract3...`);
                    const connectedContract3 = new ethers.Contract(
                        this.contractAddress3,
                        CONTRACT3_ABI.abi,
                        signer
                    );

                    console.log(`Attempting balanceOf() call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    let balOf = await connectedContract3.balanceOf(
                        String(this.currentAccount),
                        options
                    );

                    console.log('Awaiting function results...');
                    await balOf;
                    
                    console.log("Analzying results...");
                    if (balOf >= 1){
                        console.log(`Current account holds: ${ethers.utils.formatEther(balOf)} BON`)
                        this.JSfunctionButton4.disabled = false;
                        this.JSfunctionButton4.innerText = `${
                            ethers.utils.commify(Math.trunc(parseInt(ethers.utils.formatEther(String(balOf)))))
                        }`;
                    ;
                    } else {
                        console.log(`Current account holds: 0 BON`);
                        this.JSfunctionButton4.disabled = false;
                        this.JSfunctionButton4.innerText = '0 (so sad)';
                    }

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton4.innerText = '[TRY-TXN-AGAIN]';
                    this.JSfunctionButton4.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton4.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton4.innerText = '[GET-METAMASK]';
        }
    }

    // Checks the erc20 balance and then updates the onscreen button to show
    async checkBANKbalance() {
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 2 function
                    this.JSfunctionButton5.disabled = true;
                    this.JSfunctionButton5.innerText = '*loading*';
                    
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
                        String(this.currentAccount),
                        options
                    );

                    console.log('Awaiting function results...');
                    await balOf;
                    
                    console.log("Analzying results...");
                    if (balOf >= 1){
                        console.log(`Current account holds: ${ethers.utils.formatEther(balOf)} BANK`)
                        this.JSfunctionButton5.disabled = false;
                        this.JSfunctionButton5.innerText = `${
                            ethers.utils.commify(Math.trunc(parseInt(ethers.utils.formatEther(String(balOf)))))
                        }`;
                    ;
                    } else {
                        console.log(`Current account holds: 0 BANK`);
                        this.JSfunctionButton5.disabled = false;
                        this.JSfunctionButton5.innerText = '0 (so sad)';
                    }

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton5.innerText = '[TRY-TXN-AGAIN]';
                    this.JSfunctionButton5.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton5.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton5.innerText = '[GET-METAMASK]';
        }
    }

    // nifty seconds to time converter; returns string
    async timeConverter(secs) {
        let seconds = Number(secs);
        var d = Math.floor(seconds / (3600*24));
        var h = Math.floor(seconds % (3600*24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        
        var dDisplay = d > 0 ? d + (d == 1 ? "d, " : "d, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? "h, " : "h, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? "m, " : "m, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
    }

    // ________________ BON<>BANK EXCHANGE FUNCTIONS SECTION ________________

    async chooseWhichExchange(){
        this.selectedDropdown1 = this.JSDropdownInput1.value;
        console.log(this.selectedDropdown1);

        if(this.selectedDropdown1 == "BON2BANK"){
        window.location.href = "./bon2bank.html";
        }
        if(this.selectedDropdown1 == "BANK2BON"){
        window.location.href = "./bank2bon.html";
        }
    }

    // bon2bank
    async checkExchangeBANKBalance() {
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 2 function
                    this.JSfunctionButton2.disabled = true;
                    this.JSfunctionButton2.innerText = '*please wait*';
                    
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
                        console.log(`The BON<>BANK exchange currently holds: ${ethers.utils.formatEther(balOf)}`)
                        this.JSfunctionButton2.disabled = false;
                        this.JSfunctionButton2.innerText = `${
                            ethers.utils.commify(Math.trunc(parseInt(ethers.utils.formatEther(String(balOf)))))
                        }`;
                    ;
                    } else {
                        console.log(`The BON<>BANK exchange is CLOSED.`);
                        this.JSfunctionButton2.disabled = false;
                        this.JSfunctionButton2.innerText = '[EXCHANGE-CLOSED]';
                    }

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton2.innerText = '[TRY-TXN-AGAIN]';
                    this.JSfunctionButton2.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton2.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton2.innerText = '[GET-METAMASK]';
        }
    }

    async exchangeBONforBANK() {
        if(this.selectedInput2 < 1){alert(`Please input amount.`);}else{
        
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                
                try{
                    // Contract 1 function
                    this.JSfunctionButton3.disabled = true;
                    this.JSfunctionButton3.innerText = '*please wait*';
                    
                    console.log(`Connecting contract1...`);
                    const connectedContract1 = new ethers.Contract(
                        this.contractAddress1,
                        CONTRACT1_ABI.abi,
                        signer
                    );

                    console.log(`Attempting exchangeToken call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    let functionResult = await connectedContract1.exchangeToken(
                        ethers.utils.parseEther(String(this.selectedInput2)),
                        options
                    );

                    console.log('Awaiting function results...');
                    await functionResult; // this may want the dotwaitfunc like the other above
                    
                    console.log("Awaing the emit event...");

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton3.innerText = '[TRY-TXN-AGAIN]';
                    this.JSfunctionButton3.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton3.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton3.innerText = '[GET-METAMASK]';
        }

        } // << quantity tag ender
    }

    async exchangeBONforBANK_Loader(){
        console.log("Loader starting ApprovalCheck");
        this.JSfunctionButton3.innerText = '*waiting for approval*';
        let approvalCheck = await this.contract3AllowanceCheck();

        console.log('Loader ApprovalCheck results...');
        await approvalCheck;

        if (approvalCheck == true){ 
            console.log('Approval check -- TRUE');
            this.JSfunctionButton3.innerText = '*approval successful!*';
            this.exchangeBONforBANK(); 
        } else {
            console.log('Approval check -- FALSE');
        }
    }

    async onSelectInput2() {
        this.selectedInput2 = this.JSquantityInput2.value;
        console.log(`New input: ${this.selectedInput2}`);
    }
    // bank2bon
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // ________________ BANK STAKING SECTION ________________

    async checkBANKstakingBal(){
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 2 function
                    this.JSfunctionButton6.disabled = true;
                    this.JSfunctionButton6.innerText = '*please wait*';
                    
                    console.log(`Connecting contract4...`);
                    const connectedContract4 = new ethers.Contract(
                        this.contractAddress4,
                        CONTRACT4_ABI.abi,
                        signer
                    );

                    console.log(`Attempting stakedPoolBalances() call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    let balOf = await connectedContract4.stakedPoolBalances(
                        String(this.currentAccount),
                        options
                    );

                    console.log('Awaiting function results...');
                    await balOf;
                    
                    console.log("Analzying results...");
                    if (balOf >= 1){
                        console.log(`Amount of BANK staked: ${ethers.utils.formatEther(balOf)}`)
                        this.JSfunctionButton6.disabled = false;
                        this.JSfunctionButton6.innerText = `${
                            ethers.utils.commify(Math.trunc(parseInt(ethers.utils.formatEther(String(balOf)))))
                        }`;
                    ;
                    } else {
                        console.log(`Amount of BANK staked: 0 (so sad)`);
                        this.JSfunctionButton6.disabled = false;
                        this.JSfunctionButton6.innerText = '[NOT-STAKED]';
                    }

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton6.innerText = '[TRY-TXN-AGAIN]';
                    this.JSfunctionButton6.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton6.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton6.innerText = '[GET-METAMASK]';
        }
    }

    async checkBANKstakingTime(){
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 2 function
                    this.JSfunctionButton7.disabled = true;
                    this.JSfunctionButton7.innerText = '*please wait*';
                    
                    console.log(`Connecting contract4...`);
                    const connectedContract4 = new ethers.Contract(
                        this.contractAddress4,
                        CONTRACT4_ABI.abi,
                        signer
                    );

                    console.log(`Attempting calculateTime() call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    let balOf = await connectedContract4.calculateTime(
                        String(this.currentAccount),
                        options
                    );

                    console.log('Awaiting function results...');
                    await balOf;
                    
                    console.log("Analzying results...");
                    await this.formatBANKStakingTimeProgressBar(balOf);
                    /*
                    if (balOf >= 1){
                        
                        let convertedTime = await this.timeConverter(balOf);
                        await convertedTime;
                        console.log(`Time passed: ${convertedTime}`)
                        this.JSfunctionButton7.disabled = false;
                        this.JSfunctionButton7.innerText = `${convertedTime}`;
                    ;
                    } else {
                        console.log(`User is not staked.`);
                        this.JSfunctionButton7.disabled = false;
                        this.JSfunctionButton7.innerText = '[NOT-STAKED]';
                    }
                    */

                } catch (error) {
                    console.log(error);
                    console.log(`Error catch: User is not staked`);
                    this.JSfunctionButton7.innerText = '[NOT-STAKED]';
                    this.JSfunctionButton7.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton7.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton7.innerText = '[GET-METAMASK]';
        }
    }

    async formatBANKStakingTimeProgressBar(secs){
        if (secs >= 1){        
            let convertedTime = await this.timeConverter(secs);
            console.log(`Time passed: ${convertedTime}`)

            var progressBar = document.getElementById("HTML_custom_div_1b");
            var progress = document.getElementById("HTML_custom_div_1c");
            
            var percentage;
            if (secs < 604800){var percentage = (secs/604800)*100;
            } else {var percentage = 99;}

            percentage += 1;
            progressBar.style.width = percentage + "%";
            progress.style.width = percentage + "%";

            this.JSfunctionButton7.disabled = false;
            this.JSfunctionButton7.innerText = `${await this.timeConverter(secs)}`;
            //this.JSfunctionButton7.style.color = "white";
            //this.JSfunctionButton7.style.textShadow = "2px 2px 3px rgba(0, 0, 0, 0.4)";
        } else {
            console.log(`no staked tokens`);
            this.JSfunctionButton7.disabled = false;
            this.JSfunctionButton7.innerText = 'no staked tokens';
        }
    }

    async checkBANKstakingReward(){
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                try{
                    // Contract 2 function
                    this.JSfunctionButton8.disabled = true;
                    this.JSfunctionButton8.innerText = '*please wait*';
                    
                    console.log(`Connecting contract4...`);
                    const connectedContract4 = new ethers.Contract(
                        this.contractAddress4,
                        CONTRACT4_ABI.abi,
                        signer
                    );

                    console.log(`Attempting calculateRewards() call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    let balOf = await connectedContract4.calculateRewards(
                        String(this.currentAccount),
                        options
                    );

                    console.log('Awaiting function results...');
                    await balOf;
                    
                    console.log("Analzying results...");
                    if (balOf >= 1){
                        console.log(`Possible rewards: ${balOf}`)
                        this.JSfunctionButton8.disabled = false;
                        this.JSfunctionButton8.innerText = `${
                            ethers.utils.commify(Math.trunc(parseInt(ethers.utils.formatEther(String(balOf)))))
                        }`;
                    ;
                    } else {
                        console.log(`User is not staked.`);
                        this.JSfunctionButton8.disabled = false;
                        this.JSfunctionButton8.innerText = '[NOT-STAKED]';
                    }

                } catch (error) {
                    console.log(error);
                    console.log(`Error catch: User is not staked`);
                    this.JSfunctionButton8.innerText = '[NOT-STAKED]';
                    this.JSfunctionButton8.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton8.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton8.innerText = '[GET-METAMASK]';
        }
    }

    async stakeBankTokens(){
        if(this.selectedInput3 < 1){alert(`Please input amount.`);}else{
        
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                
                try{
                    // Contract 4 function
                    this.JSfunctionButton9.disabled = true;
                    this.JSfunctionButton9.innerText = '*please wait*';
                    
                    console.log(`Connecting contract4...`);
                    const connectedContract4 = new ethers.Contract(
                        this.contractAddress4,
                        CONTRACT4_ABI.abi,
                        signer
                    );

                    console.log(`Attempting depositToStaking() call..`);
                    const options = {
                        value: ethers.utils.parseEther(
                        /*`${this.txnCost}`*/ `0`
                        ),
                    };
                    let functionResult = await connectedContract4.depositToStaking(
                        ethers.utils.parseEther(String(this.selectedInput3)),
                        options
                    );

                    console.log('Awaiting function results...');
                    await functionResult;
                    
                    console.log("Awaing the emit event...");

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton9.innerText = '[TRY-TXN-AGAIN]';
                    this.JSfunctionButton9.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton9.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton9.innerText = '[GET-METAMASK]';
        }

        } // << quantity tag ender
    }

    async claimStakingRewards(){
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                
                try{
                    // Contract 4 function
                    this.JSfunctionButton10.disabled = true;
                    this.JSfunctionButton10.innerText = '*please wait*';
                    
                    console.log(`Connecting contract4...`);
                    const connectedContract4 = new ethers.Contract(
                        this.contractAddress4,
                        CONTRACT4_ABI.abi,
                        signer
                    );

                    console.log(`Attempting withdrawRewards() call..`);
                    let functionResult = await connectedContract4.withdrawRewards();

                    console.log('Awaiting function results...');
                    await functionResult;
                    
                    console.log("Awaing the emit event...");

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton10.innerText = 'Check timer - must be +7 days';
                    this.JSfunctionButton10.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton10.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton10.innerText = '[GET-METAMASK]';
        }
    }

    async withdawStakedTokens(){
        alert(`NOTE: Must claim any pending rewards FIRST, before withdrawing.`);
        try { const { ethereum } = window;
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                
                try{
                    // Contract 4 function
                    this.JSfunctionButton11.disabled = true;
                    this.JSfunctionButton11.innerText = '*please wait*';
                    
                    console.log(`Connecting contract4...`);
                    const connectedContract4 = new ethers.Contract(
                        this.contractAddress4,
                        CONTRACT4_ABI.abi,
                        signer
                    );

                    console.log(`Attempting withdrawAll() call..`);
                    let functionResult = await connectedContract4.withdrawAll();

                    console.log('Awaiting function results...');
                    await functionResult;
                    
                    console.log("Awaing the emit event...");

                } catch (error) {
                    console.log(error);
                    console.log('function call failed');
                    this.JSfunctionButton11.innerText = 'Unable to withdraw.';
                    this.JSfunctionButton11.disabled = false;
                }
            } else {
                console.log("Ethereum object doesn't exist!");
                this.JSfunctionButton11.innerText = '[GET-METAMASK]';
            }
        } catch (error) {
            console.log("Ethereum object doesn't exist!");
            this.JSfunctionButton11.innerText = '[GET-METAMASK]';
        }
    }

    async stakeBankTokens_Loader(){
        console.log("Loader starting ApprovalCheck");
        this.JSfunctionButton9.innerText = '*waiting for approval*';
        let approvalCheck = await this.contract2AllowanceCheck();

        console.log('Loader ApprovalCheck results...');
        await approvalCheck;

        if (approvalCheck == true){ 
            console.log('Approval check -- TRUE');
            this.JSfunctionButton9.innerText = '*approval successful!*';
            this.stakeBankTokens(); 
        } else {
            console.log('Approval check -- FALSE');
        }
    }

    async onSelectInput3() {
        this.selectedInput3 = this.JSquantityInput3.value;
        console.log(`New input: ${this.selectedInput3}`);
    }

    // ________________ SECOND SETUP PROCESSES SECTION ________________

    // (2) This will run after dappInitializeProcess() and boot up custom funcs
    // --- these will all have to be updated on mainnet launch
    async customConstructorFunctions(){

        if (document.URL.includes("exchange")) {
            this.dappChain = '0x13881'; //Ethereum=='0x1', Polygon=='0x89', Binance=='0x38', Modulus=='0x666', Mumbai=='0x13881'
            
            // universals
            try{await this.checkBONbalance();} catch (error) {console.log(error);}
            try{await this.checkBANKbalance();} catch (error) {console.log(error);}

            // customs

        }

        if (document.URL.includes("stake")) {
            this.dappChain = '0x13881'; //Ethereum=='0x1', Polygon=='0x89', Binance=='0x38', Modulus=='0x666', Mumbai=='0x13881'

            // universals
            try{await this.checkBONbalance();} catch (error) {console.log(error);}
            try{await this.checkBANKbalance();} catch (error) {console.log(error);}
            // customs
            try{await this.checkBANKstakingBal();} catch (error) {console.log(error);}
            try{await this.checkBANKstakingTime();} catch (error) {console.log(error);}
            try{await this.checkBANKstakingReward();} catch (error) {console.log(error);}
        }

        if (document.URL.includes("whitepaper")) {
            this.dappChain = '0x13881'; //Ethereum=='0x1', Polygon=='0x89', Binance=='0x38', Modulus=='0x666', Mumbai=='0x13881'
            // universals

            // customs
            
        }

        if (document.URL.includes("bon2bank")) {
            this.dappChain = '0x13881'; //Ethereum=='0x1', Polygon=='0x89', Binance=='0x38', Modulus=='0x666', Mumbai=='0x13881'

            // universals
            try{await this.checkBONbalance();} catch (error) {console.log(error);}
            try{await this.checkBANKbalance();} catch (error) {console.log(error);}

            // customs
            try{await this.checkExchangeBANKBalance();} catch (error) {console.log(error);}
            
        }

        if (document.URL.includes("bank2bon")) {
            this.dappChain = '0x13881'; //Ethereum=='0x1', Polygon=='0x89', Binance=='0x38', Modulus=='0x666', Mumbai=='0x13881'

            // universals
            try{await this.checkBONbalance();} catch (error) {console.log(error);} // these wont work on Polygon
            try{await this.checkBANKbalance();} catch (error) {console.log(error);}

            // customs
            // need one of these but to check wbank try{await this.checkExchangeBANKBalance();} catch (error) {console.log(error);}
            
        }
    }
    
    // (1) This will check and set the correct web3 chain
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
}

const DappInterface_ = new DappInterface();
DappInterface_.dappInitializeProcess();



