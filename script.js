const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const display = document.querySelector('.display');
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
    display.textContent += operand;
    displayValue = display.textContent;
}

const digitBtn = document.querySelectorAll('.digit');
digitBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        drawToDisplay(e.target.innerText)
    });
})

const isFullOperation = (operation) => {
    if (operation.split(' ').length === 3) {
        return true;
    } else
        return false;
}

const clearDisplay = () => {
    display.textContent = '';
}
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', e => {
        var previousOperation = displayValue;
        drawToDisplay(` ${e.target.innerText} `);
        if (isFullOperation(previousOperation)) {
            previousOperation = previousOperation.split(' ');
            var result = operate(previousOperation[0], previousOperation[1], previousOperation[2]);
            console.log(typeof(previousOperation));
            result += ` ${displayValue[displayValue.length -2]} `;
            clearDisplay();
            drawToDisplay(result);
        }
    })
})