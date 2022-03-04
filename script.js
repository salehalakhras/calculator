const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const display = document.querySelector('.display');
const equalBtn = document.querySelector('.equal');
const digitBtn = document.querySelectorAll('.digit');
const clearBtn = document.querySelector('.reset');
var displayValue;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return Math.round(divide(num1, num2) * 100000) / 100000;
        default:
            return 'ERROR!';

    }
}
digitBtn.forEach(btn => {
    btn.addEventListener('click', digitFunction);
})

function drawToDisplay(operand) {
    display.textContent += operand;
    displayValue = display.textContent;
}




function isFullOperation(operation) {
    if (operation.split(' ').length === 3 && operation.split(' ')[2] !== "") {
        return true;
    } else
        return false;
}

function clearDisplay() {
    display.textContent = '';
}

function operatorFunction(evnt) {
    var previousOperation = displayValue;
    drawToDisplay(` ${evnt.target.innerText} `);
    if (isFullOperation(previousOperation)) {
        previousOperation = previousOperation.split(' ');
        var result = operate(previousOperation[0], previousOperation[1], previousOperation[2]);
        result += ` ${displayValue[displayValue.length -2]} `;
        clearDisplay();
        drawToDisplay(result);
    }
}

function digitFunction(evnt) {
    drawToDisplay(evnt.target.innerText)
}

const equalFunction = () => {
    if (isFullOperation(displayValue)) {
        var result = displayValue.split(' ');
        console.log(result);
        result = operate(result[0], result[1], result[2]);
        clearDisplay();
        drawToDisplay(result);
    } else {
        clearDisplay();
        drawToDisplay('ERROR!, Incomplete operation');
    }
}
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', operatorFunction);
});

equalBtn.addEventListener('click', () => {
    equalFunction();
    operators.forEach(operator => {
        operator.removeEventListener('click', operatorFunction);
    });
    digitBtn.forEach(btn => {
        btn.removeEventListener('click', digitFunction);
    })
})

clearBtn.addEventListener('click', () => {
    clearDisplay();
    displayValue = '';
    operators.forEach(operator => {
        operator.addEventListener('click', operatorFunction);
    });
    digitBtn.forEach(btn => {
        btn.addEventListener('click', digitFunction);
    })
});