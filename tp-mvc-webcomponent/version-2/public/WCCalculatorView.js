export class CalculadoraView {
    constructor() {
        this.template = `
            <style>
                .numberButton {
                    background-color: #0033A0; 
                    color: #FFCC00;          
                    border-color: #FFCC00;
                    border-radius: 6px;
                    width: 100%;
                    font-size: 1.5em;
                }
                .operatorButton {
                    background-color: #FFCC00; 
                    color: #0033A0;       
                    border-color: #0033A0;
                    border-radius: 6px;
                    width: 100%;
                    font-size: 1.5em;
                }
                .clearButton {
                    background-color: #0033A0; 
                    color: #FFCC00;          
                    border-color: #FFCC00;
                    border-radius: 6px;
                    width: 100%;
                    font-size: 1.5em;
                }
                .calculateButton {
                    background-color: #FFCC00; 
                    color: #0033A0;           
                    border-color: #0033A0;
                    width: 100%;
                    border-radius: 6px;
                    font-size: 1.5em;
                }
                .displayResult {
                    border-radius: 6px;
                    font-size: 2em;
                    text-align: right;
                    padding: 10px;
                    width: 100%;
                }
                table {
                    width: 100%;
                    max-width: 400px;
                    margin: auto;
                }
                td {
                    padding: 5px;
                }
            </style>
            <table>
                <tr>
                    <td colspan="4"> 
                        <input class="displayResult" id="display" type="text" value="" disabled> 
                    </td>
                </tr>
                <tr>
                    <td><button id="button7" class="numberButton">7</button></td>
                    <td><button id="button8" class="numberButton">8</button></td>
                    <td><button id="button9" class="numberButton">9</button></td>
                    <td><button id="buttonPlus" class="operatorButton">+</button></td>
                </tr>
                <tr>
                    <td><button id="button4" class="numberButton">4</button></td>
                    <td><button id="button5" class="numberButton">5</button></td>
                    <td><button id="button6" class="numberButton">6</button></td>
                    <td><button id="buttonMinus" class="operatorButton">-</button></td>
                </tr>
                <tr>
                    <td><button id="button3" class="numberButton">3</button></td>
                    <td><button id="button2" class="numberButton">2</button></td>
                    <td><button id="button1" class="numberButton">1</button></td>
                    <td><button id="buttonProduct" class="operatorButton">*</button></td>
                </tr>
                <tr>
                    <td><button id="button0" class="numberButton">0</button></td>
                    <td><button id="buttonDecimalPoint" class="numberButton">.</button></td>
                    <td><button id="buttonCalculate" class="calculateButton">=</button></td>
                    <td><button id="buttonDivision" class="operatorButton">/</button></td>
                </tr>
                <tr>
                    <td colspan="4"><button id="buttonClear" class="clearButton">BORRAR</button></td>
                </tr>
            </table>
        `;
    }

    render() {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template;
        return templateElement.content.cloneNode(true);
    }
}
