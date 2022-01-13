// Homework 13. Циклы, директивы, метки V3

// Запрашиваем число у пользователя
// Нужно найти минимальный делитель переданного числа.
// Для этого достаточно последовательно проверять делимость, начиная с двойки. Если делитель не найден, значит число простое,
// и делителем является само число.
// Если переданное число меньше единицы, то вывести в консоль  NaN. иначе вывести наименьший делитель числа

let num = +prompt("Enter a number, please:");

if (num < 1) {
  console.log(NaN);
} else if (num === 1) {
  console.log("1 is not a simple number!");
}

if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`Minimal divider of your number is ${i}`);
      break;
    } else {
      console.log(
        `Number is simple and minimal divider is inputed number ${num} and 1`
      );
      break;
    }
  }
}
