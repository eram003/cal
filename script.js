let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operation = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
    if (currentInput === '003') window.location.href = 'https://youtu.be/vBdiIJ4c9L4';
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function toggleSign() {
    currentInput = -currentInput;
    display.value = currentInput;
}

function appendPercentage() {
    currentInput = currentInput / 100;
    display.value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculateResult();
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
    if (result === 911) window.location.href = 'https://youtu.be/8lifVcl1jgg';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    display.value = '';
}
