// 2. Strange calculator

let op1 = +prompt("Enter first operand");
let op2 = +prompt("Enter second operand");

function summ() {
    let result = op1 + op2;
    console.log(`Result: ${op1} + ${op2} = ${result}`)
}
summ();

function subtract() {
    let result = op1 - op2;
    console.log(`Result: ${op1} - ${op2} = ${result}`)
}
subtract();

function multiply() {
    let result = op1 * op2;
    console.log(`Result: ${op1} * ${op2} = ${result}`)
}
multiply();

function divide() {
    let result = op1 / op2;
    console.log(`Result: ${op1} / ${op2} = ${result}`)
}
divide();