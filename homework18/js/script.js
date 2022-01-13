// Homework 18. Callbacks

// Запросить у пользователя 2 числа (число, степень) после чего вывести ему результат во всплывающем окне
// Основная функция mainFunction
// 1. Пишем функцию, которая принимает в качестве параметра callback.
// 2. В теле функции вам нужно написать код, который будет запрашивать у юзера 2 числа — эти числа должны храниться в разных переменных.
// 3. Также в теле функции нужно вызвать callback, который вы передаете в качестве аргумента.
// 4. При вызове callback в него нужно передать аргументами те 2 числа, которые вы запрашивали у пользователя ранее.
// Callback функция exponentiation
// Эта функция будет передаваться в mainFunction в качестве аргумента
// 1. Функция должна принимать 2 параметра: те числа, которые мы ей передаем в основной функции в пункте 4 «Основной функции».
// 2. В теле функции нам нужно возвести число в степень и записать результат этой операции в переменную.
// 3. Также в теле функции нужно написать код, который будет выводить пользователю результат во всплывающем окне.
// После написания этих функций необходимо вызвать «Основную функцию»  и ей в качестве аргумента передать callback функцию (по имени — не вызывая)

mainFunction(exponentiation);

function mainFunction(callback) {
  const int1 = +prompt("Enter first number, please:");
  const int2 = +prompt("Enter second number, please:");

  return callback(int1, int2);
}

function exponentiation(firstValue, secondValue) {
  const result = firstValue ** secondValue;

  if (!firstValue || !secondValue || isNaN(firstValue) || isNaN(secondValue)) {
    alert("Something went wrong");
  } else {
    alert(result);
  }
}

function multiply(firstValue, secondValue) {
  const result = firstValue * secondValue;

  if (!firstValue || !secondValue || isNaN(firstValue) || isNaN(secondValue)) {
    alert("Something went wrong");
  } else {
    alert(result);
  }
}

function division(firstValue, secondValue) {
  const result = firstValue / secondValue;

  if (!firstValue || !secondValue || isNaN(firstValue) || isNaN(secondValue)) {
    alert("Something went wrong");
  } else {
    alert(result);
  }
}

function modulo(firstValue, secondValue) {
  const result = firstValue % secondValue;

  if (!firstValue || !secondValue || isNaN(firstValue) || isNaN(secondValue)) {
    alert("Something went wrong");
  } else {
    alert(result);
  }
}
