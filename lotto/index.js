
class DappInterface {
    constructor() {
        this.selectedDropdown1 = ''; // set via the HTML input; captures the chosen token exchange
        this.JSDropdownInput1 = document.getElementById('HTML_dropdown_input_1'); // dropdown to choose tokens
    }

    async chooseWhichLotto(){
            this.selectedDropdown1 = this.JSDropdownInput1.value;
            console.log(this.selectedDropdown1);

            if(this.selectedDropdown1 == "MATIC"){
            window.location.href = "./MaticLotto.html";
            }
            if(this.selectedDropdown1 == "ETH"){
                window.location.href = "./EthLotto.html";
            }
    }
}

const DappInterface_ = new DappInterface();
