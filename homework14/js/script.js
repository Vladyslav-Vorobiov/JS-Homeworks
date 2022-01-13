// Homework 14. Функции V1

// Нужно создать функцию которая будет возводить число в степень
// 1. Запрашиваем у пользователя число (с помощью prompt)
// 2. Запрашиваем у пользователя степень, в которую это число нужно возвести (с помощью prompt)
// 3. Создаем функцию которая принимает 2 аргумента (число, степень)
// 4. Задаем аргументу который принимает степень значение по умолчанию 1
// 5. Внутри функции нужно написать проверку, если аргументы не являются числами завершить функцию с указанием того,
//    что пользователь ввел неправильные данные, например (return ‘some error’)
// 6.Если проверка прошла успешно, то возвести число в степень (работаем с аргументами функции)
// 7. Вернуть результат выполнения функции и завершить ее
// 8. Результат вызова функции записать в переменную и вывести пользователю через alert()

let num1 = prompt("Enter a number, please:");
let num2 = prompt("Enter a power, please:");
let result = pow(num1, num2);
alert(result);

function pow(a, b = 1) {
  if (isNaN(a) || a === null || a.trim() === "" || isNaN(b) || b === null || String(b).trim() === "" ) {
    return "Something went wrong";
  } else {
    return a ** b;
  }
}