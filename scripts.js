class Calculator {
    constructor() {
        console.log("Calculator created");
        this.currentNumber = "0";
        this.ans = "0";
        this.operator = "";
    }

    refreshHUD() {
        document.getElementById('result').innerHTML = this.currentNumber;
        document.getElementById('ans').innerHTML = this.ans;
        if (this.operator != "") {
            document.getElementById('current-operator').innerHTML = this.operator;
        }
    }

    showPol() {
        if (document.getElementById('imageText').style.display == "block") {
            document.getElementById('imageText').style.display = "none";
            return;
        }
        document.getElementById('imageText').style.display = "block";
    }

    appendNumber(number) {
        this.currentNumber = document.getElementById('result').innerHTML;
        if (this.currentNumber == "0") {
            this.currentNumber = number;
        } else {
            this.currentNumber += number;
        }
        this.refreshHUD();
    }

    deleteAll() {
        this.currentNumber = 0;
        this.ans = 0;
        this.refreshHUD();
    }

    operate(operator) {
        this.operator = operator;
        if (document.getElementById('result').innerHTML != "0") {
            this.ans = parseInt(document.getElementById('ans').innerHTML, 10);
            this.currentNumber = parseInt(document.getElementById('result').innerHTML, 10);
            switch (operator) {
                case '+':
                    this.ans = this.ans + this.currentNumber;
                    this.defaultColorOnOperators();
                    document.getElementById('but_plus').style.backgroundColor = "green";
                    break;
                case '-':
                    this.ans = this.ans - this.currentNumber;
                    this.defaultColorOnOperators();
                    document.getElementById('but_minus').style.backgroundColor = "green";
                    break;
                case 'x':
                    this.ans = this.ans * this.currentNumber;
                    this.defaultColorOnOperators();
                    document.getElementById('but_times').style.backgroundColor = "green";
                    break;
                case '/':
                    this.ans = this.ans / this.currentNumber;
                    this.defaultColorOnOperators();
                    document.getElementById('but_divide').style.backgroundColor = "green";
                    break;
            }
            this.currentNumber = 0;
            this.refreshHUD();
        }
    }

    defaultColorOnOperators() {
        document.getElementById('but_plus').style.backgroundColor = "lightgrey";
        document.getElementById('but_minus').style.backgroundColor = "lightgrey";
        document.getElementById('but_times').style.backgroundColor = "lightgrey";
        document.getElementById('but_divide').style.backgroundColor = "lightgrey";
    }

    calculate() {
        var currentNumber = parseInt(this.currentNumber,10);
        var ans = parseInt(this.ans,10);
        switch (this.operator) {
            case '+':
                this.ans = ans + currentNumber;
                this.currentNumber = 0;
                break;
            case '-':
                this.ans = ans - currentNumber;
                this.currentNumber = 0;
                break;
            case 'x':
                this.ans = ans * currentNumber;
                this.currentNumber = 0;
                break;
            case '/':
                this.ans = ans / currentNumber;
                this.currentNumber = 0;
                break;
        }
        this.refreshHUD();
    }
}