let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendDecimal() {
    if (currentInput.indexOf('.') === -1) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    display.value = currentInput;
}

function appendPercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    display.value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result;
    display.value = result;
    operation = '';
    previousInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    display.value = '';
}
