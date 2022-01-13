let operand1 = +prompt("Please enter first number")
let operator = prompt("Please choose and enter available operator (add, sub, mult, div)");
let operand2 = +prompt("Please enter second number")


function add () {
    let result = operand1 + operand2;
    return result
}

function sub () {
    let result = operand1 - operand2;
    return result
}

function mult () {
    let result = operand1 * operand2;
    return result
}

function div () {
    let result = operand1 / operand2;
    return result
}

let math = {
    add: `${operand1} + ${operand2} = ${add()}`,
    sub: `${operand1} - ${operand2} = ${sub()}`,
    mult: `${operand1} * ${operand2} = ${mult()}`,
    div: `${operand1} / ${operand2} = ${div()}`,
  };


  console.log(math[operator])