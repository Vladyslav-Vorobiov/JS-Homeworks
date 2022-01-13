// Homework 10. Conditionals v3

// 1.
// Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их и если x больше, чем y, то выведите фразу: "x больше, чем y", 
// иначе выведите фразу: "x не больше, чем y".

let x = 10, y =7

x > y ? alert("x more than y") : alert("x less than y")

// 2. 
// Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: 
// «Введите число».Если посетитель вводит четное число, то выводить «"Число " + num + " четное"», если нечетное: "Число " + num + " нечетное

let num = +prompt("Enter a number, please:")

if (num % 2 === 0 ) {
    alert("Number " + num + " is even" )
} else {
    alert("Number " + num + " is odd" )
}

// 3.
// Напишите код, который предлагает пользователю ввести целое число. Нужно вывести на экран сколько в этом числе цифр, 
// а также положительное оно или отрицательное. Например, "Число " + num + " однозначное положительное". 
// Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.
// Чтобы узнать длину строки которую ввел юзер в prompt нужно использовать let a = 'string'; console.log(a.length)

let integer = prompt("Enter an integer, please:")

if (integer.length === 1 && integer > 0) {
    alert("Number " + integer + " is a single-digit positive")
} else if (integer.length === 2 && integer > 0) {
    alert("Number " + integer + " is a double-digit positive")
} else if (integer.length >= 3 && integer > 0) {
    alert("Number " + integer + " is positive and more than a double-digit")
} else if (integer.length === 2 && integer.includes("-") && integer < 0) {
    alert("Number " + integer + " is a single-digit negative")
} else if (integer.length === 3 && integer.includes("-") && integer < 0) {
    alert("Number " + integer + " is a double-digit negative")
} else if (integer.length >= 4 && integer.includes("-") && integer < 0) {
    alert("Number " + integer + " is negative and more than a double-digit")
} else {
    alert(`${integer} is a wrong number or not a number`)
}

// 4.
// Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.Пользователь вводит поочерёдно через prompt числа. 
// Используя конструкцию if..else, напишите код, который должен определять, какое из введенных чисел является наибольшим.

let firstNum = +prompt("Enter first number, please:")
let secondNum = +prompt("Enter second number, please:")
let thirdNum = +prompt("Enter third number, please:")

if (firstNum > secondNum && firstNum > thirdNum ) {
    alert(firstNum)
} else if (secondNum > firstNum && secondNum > thirdNum) {
    alert(secondNum)
} else {
    alert(thirdNum)
}

// 5.
// У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто <лягут> на третью и треугольника не получится.
// Пользователь вводит поочерёдно через prompt длины трех сторон. Используя конструкцию if..else, напишите код, который должен определять, 
// может ли существовать треугольник при таких длинах. Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной. 
// Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.

let lengthOfA = +prompt("Enter length of side A, please:")
let lengthOfB = +prompt("Enter length of side B, please:")
let lengthOfC = +prompt("Enter length of side C, please:")

if (lengthOfA + lengthOfB > lengthOfC) {
    alert("Such triangle can exist")
} else {
    alert("You can't built such triangle")
}