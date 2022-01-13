// Homework 12. Циклы, директивы, метки - V2

// Запросить у пользователя число, если число является простым то выводим в консоль true иначе false
// Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя.
// Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.
// Используйте цикл for.

// Примеры:
// 1; // false
// 7; // true
// 10; // false

let num = +prompt("Enter a simple number, please:");
let numIsSimple = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    numIsSimple = false;
    break;
  } else {
    numIsSimple = true;
  }
}

console.log(numIsSimple);
