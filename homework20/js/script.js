// Homework 20. Методы массивов V2

// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.

// const arr = ["a", "b", "c", "d"];
// console.log(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`);

// или так:

// const arr = ["a", "b", "c", "d"];
// let str = arr.join();
// console.log(`${str[0]} + ${str[2]}, ${str[4]} + ${str[6]}`);

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

// const arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// console.log(result);

// или так:

// const arr = [2, 5, 3, 9];

// function doMath(array) {
//   let result = array[0] * array[1] + array[2] * array[3];
//   return result;
// }

// let result = doMath(arr);
// console.log(result);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr[1][0]);

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

// const obj = {
//   js: ["jQuery", "Angular"],
//   php: "hello",
//   css: "world",
// };
// console.log(obj.js[0]);

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.

// function foo() {
//   const arr = [];
//   const someVal = "x";
//   let str = "";

//   for (let i = 0; i < 5; i++) {
//     str = str + someVal;
//     arr.push(str);
//   }
//   return arr;
// }

// console.log(foo());

// или так:

// const arr = [];
// arr[0] = "x";
// arr[1] = "xx";
// arr[2] = "xxx";
// console.log(arr)

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

// const arr = [];

// for (let i = 1; i < 5; i++) {
//   let value = "";

//   for (let k = 0; k < i; k++) {
//     value += i;
//   }
//   arr.push(value);
// }

// console.log(arr);

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение,
// которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
// Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

// const arr = []

// function arrayFill (value, qty) {
//     while (arr.length < qty) {
//         arr.push(value)
//     }
// }

// arrayFill("x", 5)
// console.log(arr)

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const arr = [1, 2, 3, 4, 5, 6];

// function getAmount(array) {
//   let summ = 0;
//   let newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     summ = summ + array[i];
//     newArr.push(array[i]);
//     if (summ > 10) {
//       break;
//     }
//   }
//   return newArr.length;
// }

// console.log(getAmount(arr));

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = [1, 2, 3, 4, 5, 6];

// function myReverse(array) {
//   let newArr = [];
//   while (array.length) {
//     newArr.push(array.pop());
//   }
//   return newArr;
// }
// console.log(myReverse(arr));

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.

// const arr = [[1, 2, 3], [4, 5], [6]];

// function summ(array) {
//   let arr2 = array.flat().reduce(function (summ, elem) {
//     return summ + elem;
//   }, 0);
//   return arr2;
// }

// console.log(summ(arr));

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.

// const arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];

// function summ(array) {
//   let arr2 = array.flat(Infinity).reduce(function (summ, elem) {
//     return summ + elem;
//   }, 0);
//   return arr2;
// }

// console.log(summ(arr));
