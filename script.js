const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
var displayValue;
const operate = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'ERROR!';

    }
}

const drawToDisplay = (operand) => {
    const display = document.querySelector('.display');
    display.textContent += operand;
    displayValue = display.textContent;
}

const digitBtn = document.querySelectorAll('.digit');
digitBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        drawToDisplay(e.target.innerText)
    });
})

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', e => {

    })
})