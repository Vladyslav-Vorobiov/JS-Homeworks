// Homework 8. Условное ветвление V1. Тернарный оператор, switch.

// 1. Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt("Enter number '0'");
a === 0 ? alert("Accept") : alert("Decline");

// 2. Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt("Enter some number > '0'");
a > 0 ? alert("Accept") : alert("Decline");

// 3. Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt("Enter some number < '0'");
a < 0 ? alert("Accept") : alert("Decline");

// 4. Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt("Enter some number >= '0'");
a >= 0 ? alert("Accept") : alert("Decline");

// 5. Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt("Enter some number <= '0'");
a <= 0 ? alert("Accept") : alert("Decline");

// 6. Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt("Enter some number except '0'");
a !== 0 ? alert("Accept") : alert("Decline");

// 7. Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = prompt("Enter 'test'");
a === "test" ? alert("Accept") : alert("Decline");

// 8. Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt("Enter number '1'");
a === 1 && typeof a === "number" ? alert("Accept") : alert("Decline");

// 9. Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.

const a = +prompt("Enter a number more than '0' and less than '5'");
a > 0 && a < 5 ? alert("Accept") : alert("Decline");

// 10. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран.

const a = +prompt("Enter a number");
switch (a) {
  case 0:
  case 2:
    alert(a + 7);
    break;
  default:
    alert(a / 10);
}

// a === 0 || a === 2 ? alert(a + 7) : alert(a / 10); - вариант через тернарный оператор

// 11. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

const a = +prompt("Enter first number");
const b = +prompt("Enter second number");

switch (true) {
  case a <= 1 && b >= 3:
    alert(a + b);
    break;
  default:
    alert(a - b);
}

// a <= 1 && b >= 3 ? alert(a + b) : alert(a - b); - вариант через тернарный оператор

// 12. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите ‘Верно’, в противном случае выведите ‘Неверно’.

const a = +prompt("Enter first number");
const b = +prompt("Enter second number");

switch (true) {
  case (a > 2 && a < 11) || (b > 6 && b < 14):
    alert("Accept");
    break;
  default:
    alert("Decline");
}

// (a > 2 && a < 11) || (b > 6 && b < 14) ? alert("Accept") : alert("Decline"); - вариант через тернарный оператор

// 13. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’,
//     то в переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case

const type = +prompt("Enter a number from 1 to 4");
let result = null;

switch (type) {
  case 1:
    result = "Winter";
    console.log(result);
    break;
  case 2:
    result = "Spring";
    console.log(result);
    break;
  case 3:
    result = "Summer";
    console.log(result);
    break;
  case 4:
    result = "Autumn";
    console.log(result);
    break;
  default:
    alert("That's wrong number!");
}

//   вариант через функцию

// function getSeason() {
//   const num = +prompt("Enter a number from 1 to 4");
//   if (num === 1) {
//     console.log("Winter");
//   } else if (num === 2) {
//     console.log("Spring");
//   } else if (num === 3) {
//     console.log("Summer");
//   } else if (num === 4) {
//     console.log("Autumn");
//   } else {
//     alert("That's a wrong number! Be attentive!");
//     getSeason();
//   }
// }

// getSeason();
