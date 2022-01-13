// Homework 6. Преобразование типов и операторы

// Task #1

let a = Boolean(Number("10") + 1); // true
let b = "sub" + Number(false); // sub0
let c = 16 * "    91   "; // 1456
let d = true - 70; // -69
let e = Number(1 + String("1")) + 1; // 12

// Task #2

let secondsInHour = 3600;
let amountOfHours = +prompt("Enter amount of hours, please");
let result = amountOfHours * secondsInHour;

alert(`There are ${result} seconds in ${amountOfHours} hours`);

// Task #3

let num = 1;

num += 12
num -= 14;
num *= 5;
num /= 7;
num = ++num;
num = --num;

alert(num);

