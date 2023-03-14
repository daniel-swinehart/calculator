function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
};

function subtract(num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
};

function multiply(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;
};

function divide(num1, num2) {
    console.log(num1 / num2);
    return num1 / num2;
};

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);    
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
};

function display(value) {
    displayValue = displayValue + value;
    calcScreen.textContent = displayValue;
};

function clearEntry() {
    displayValue = "";
    calcScreen.textContent = "0";
};

function clearEverything() {
    clearEntry();
    firstValue = "";
    secondValue = "";
    operationSelected = "";
    isFirstEval = true;
    hasOperator = false;
};

function evaluate() {
    if (isFirstEval) {
        secondValue = displayValue;
    }
    clearEntry();
    display(operate(operationSelected, parseFloat(firstValue), parseFloat(secondValue)));
    firstValue = displayValue.toString();
    isFirstEval = false;

};

const calcScreen = document.querySelector(".calc-screen");
calcScreen.textContent = "0";
let displayValue = "";
let firstValue = "";
let secondValue = "";
let operationSelected = "";
let isFirstEval = true;
let hasOperator = false;

const btn1 = document.querySelector('#one');
btn1.addEventListener('click', function(){
    display("1");
});

const btn2 = document.querySelector('#two');
btn2.addEventListener('click', function(){
    display("2");
});

const btn3 = document.querySelector('#three');
btn3.addEventListener('click', function(){
    display("3");
});

const btn4 = document.querySelector('#four');
btn4.addEventListener('click', function(){
    display("4");
});

const btn5 = document.querySelector('#five');
btn5.addEventListener('click', function(){
    display("5");
});

const btn6 = document.querySelector('#six');
btn6.addEventListener('click', function(){
    display("6");
});

const btn7 = document.querySelector('#seven');
btn7.addEventListener('click', function(){
    display("7");
});

const btn8 = document.querySelector('#eight');
btn8.addEventListener('click', function(){
    display("8");
});

const btn9 = document.querySelector('#nine');
btn9.addEventListener('click', function(){
    display("9");
});

const btn0 = document.querySelector('#zero');
btn0.addEventListener('click', function(){
    display("0");
});

const btnEqual = document.querySelector('#equal');
btnEqual.addEventListener('click', function(){
    evaluate();
});

const btnPlus = document.querySelector('#plus');
btnPlus.addEventListener('click', function(){
    if (hasOperator) {
        evaluate();
    }
    firstValue = displayValue;
    displayValue = "";
    operationSelected = "+";
    isFirstEval = true;
    hasOperator = true;
});

const btnMinus = document.querySelector('#minus');
btnMinus.addEventListener('click', function(){
    firstValue = displayValue;
    displayValue = "";
    operationSelected = "-";
    isFirstEval = true;
    
});

const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', function(){
    firstValue = displayValue;
    displayValue = "";
    operationSelected = "*";
    isFirstEval = true;
});

const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', function(){
    firstValue = displayValue;
    displayValue = "";
    operationSelected = "/";
    isFirstEval = true;
});

const btnClearEntry = document.querySelector('#clearEntry');
btnClearEntry.addEventListener('click', function(){
    clearEntry();
});

const btnNeg = document.querySelector('#neg');
btnNeg.addEventListener('click', function(){
    display(1);
});

const btnDecimal = document.querySelector('#decimal');
btnDecimal.addEventListener('click', function(){
    display(1);
});