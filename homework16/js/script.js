// Дан массив с числами const arr = [1, 2, 3, -1, -2, -3];

// Необходимо написать функцию которая вернет новый массив содержащий только положиельные числа. Для этого:
// — Создаем функцию с произвольным именем
// — Функция принимает массив в качестве параметра
// — В теле функции создаем пустой массив (пример: const exampleArr = [])
// — Если массив переданный в параметр функции пустой, то возвращаем сообщение об этом
//  Перебираем циклом массив, который передан в качестве параметра (использовать цикл for)
//  В теле цикла проверям является ли текущий элемент положительным числом или отрицательным (if)
//  Если число положительное, то добавлем его в ранее созданный массив с помощь функции push (пример exampleArr.push(currentPositiveNumber))
//  После выполнения цикла проверям массив, который наполняли только положиельными значениями
//  Если он не пустой, то возвращаем этот массив
//  Если пустой, возвращаем null

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// P.S. Можно написать вспомогательную функцию для проверки данных (по желанию)

const arr = [1, 2, 3, -1, -2, -3];

const onlyNumbersArr = arr.filter((item) => typeof item === "number"); // Проверка. Отфильтровал, чтобы были только числа в массиве.

function getPositive(array) {
  const newArr = [];

  if (array === null || array === undefined || array.length === 0) {
    return "Array can't be empty!";
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArr.push(array[i]);
    }
  }

  if (newArr.length > 0) {
    return newArr;
  } else {
    return null;
  }
}

const onlyPositive = getPositive(onlyNumbersArr);
console.log(onlyPositive);