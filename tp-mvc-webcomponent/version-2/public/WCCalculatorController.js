import { CalculadoraView } from './WCCalculatorView.js';

class CalculadoraController extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.view = new CalculadoraView();
        this.shadowRoot.appendChild(this.view.render());

        this.display = this.shadowRoot.getElementById('display');
        this.buttonClear = this.shadowRoot.getElementById('buttonClear');
        this.buttonCalculate = this.shadowRoot.getElementById('buttonCalculate');
        this.numberButtons = this.shadowRoot.querySelectorAll('.numberButton');
        this.operatorButtons = this.shadowRoot.querySelectorAll('.operatorButton');
        this.decimalButton = this.shadowRoot.getElementById('buttonDecimalPoint');

        this.initEventListeners();
    }

    initEventListeners() {
        this.numberButtons.forEach(button => {
            button.addEventListener('click', () => this.handleNumberButtonClick(button.innerText));
        });
        this.operatorButtons.forEach(button => {
            button.addEventListener('click', () => this.handleOperatorButtonClick(button.innerText));
        });
        this.decimalButton.addEventListener('click', () => this.handleDecimalButtonClick());
        this.buttonClear.addEventListener('click', () => this.handleClearButtonClick());
        this.buttonCalculate.addEventListener('click', () => this.handleCalculateButtonClick());
    }

    handleNumberButtonClick(number) {
        this.updateDisplay(this.display.value + number);
    }

    handleOperatorButtonClick(operator) {
        this.updateDisplay(this.display.value + operator);
    }

    handleDecimalButtonClick() {
        this.updateDisplay(this.display.value + '.');
    }

    handleClearButtonClick() {
        this.updateDisplay('');
    }

    handleCalculateButtonClick() {
        const expression = this.display.value;
        fetch('http://localhost:3000/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ expression })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                this.updateDisplay('Error');
            } else {
                this.updateDisplay(data.result);
            }
        })
        .catch(() => this.updateDisplay('Error'));
    }

    updateDisplay(value) {
        this.display.value = value;
    }
}

customElements.define('calculadora-component', CalculadoraController);
