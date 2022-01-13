// Homework 21. Методы массивов V3
// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex, includes, every и some,
// которые работают так же, как одноименные методы массивов.

// =============== indexOf() ===============

// const someArr = [2, 5, 9, 7, 6, -3, 4];
//
// function myIndexOf(searchEl, fromIndex = 0, array) {
//   if (fromIndex >= array.length || isNaN(fromIndex)) {
//     return -1;
//   }
//
//   if (fromIndex < 0)
//     for (let i = array.length + fromIndex; i < array.length; i++)
//       if (array[i] === searchEl) {
//         return i;
//       }
//
//   if (fromIndex >= 0)
//     for (let i = fromIndex; i < array.length; i++)
//       if (array[i] === searchEl) {
//         return i;
//       }
//
//   return -1;
// }
//
// console.log(myIndexOf(9, 2, someArr)); // 2
// console.log(myIndexOf(4, 6, someArr)); // 6
// console.log(myIndexOf(6, -4, someArr)); // 4
// console.log(myIndexOf(5, 1, [])); // -1
// console.log(myIndexOf(7, "", someArr)); // 3
// console.log(myIndexOf(5, "sr", someArr)); // -1

// =============== lastIndexOf () ===============

// простая версия:

// const someArr = [2, 5, 3, 9, 7, 3, 3, 6, 9, 7, 5, -3, 4, 5];

// function myLastIndex(arr, char) {
//   for (let i = arr.length; i > 0; i--) {
//     if (arr[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(myLastIndex(someArr, 3)); // 6
// console.log(myLastIndex(someArr, 12)); // -1

// версия поинтереснее:

// const someArr = [2, 5, 3, 9, 7, 3, 3, 6, 9, 7, 5, -3, 4, 5];

// function myLastIndexOf(searchEl, fromIndex = arr.length, arr) {
//   if (fromIndex >= arr.length || !fromIndex) {
//     for (let i = arr.length; i >= 0; i--) {
//       if (arr[i] === searchEl) {
//         return i;
//       }
//     }
//   }

//   if (fromIndex < arr.length && fromIndex >= 0) {
//     for (let i = fromIndex; i >= 0; i--) {
//       if (arr[i] === searchEl) {
//         return i;
//       }
//     }
//   }

//   if ((fromIndex < 0 && Math.abs(fromIndex) > arr.length) || isNaN(fromIndex)) {
//     return -1;
//   }

//   if (fromIndex < 0) {
//     for (let i = arr.length + fromIndex - 1; i >= 0; i--) {
//       if (arr[i] === searchEl) {
//         return i;
//       }
//     }
//   }

//   return -1;
// }

// console.log(myLastIndexOf(2, "", someArr)); // 0
// console.log(myLastIndexOf(3, 30, someArr)); // 6
// console.log(myLastIndexOf(15, "", someArr)); // -1
// console.log(myLastIndexOf(7, 2, someArr)); // -1
// console.log(myLastIndexOf(7, 5, someArr)); // 4
// console.log(myLastIndexOf(5, -20, someArr)); // -1
// console.log(myLastIndexOf(5, "qe", someArr)); // -1
// console.log(myLastIndexOf(9, -2, someArr)); // 8
// console.log(myLastIndexOf(9, -7, someArr)); // 3
// console.log(myLastIndexOf(9, -12, someArr)); // -1
// console.log(myLastIndexOf(5, -1, someArr)); // 10

// =============== find () ===============

// простая версия:

// const someArr = ["asf", 3, 7, 9, "", null, 7, 5, "a", "b"];

// function mainFind(callback) {
//   return callback;
// }

// function cbFind(array, char) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === char) {
//       return char;
//     }
//   }
//   return undefined;
// }

// console.log(mainFind(cbFind(someArr, "a"))); // a
// console.log(mainFind(cbFind(someArr, 37))); // undefined

// версия поинтереснее:

// const someArr = ["asf", 3, 7, 9, "", null, 7, 5, "a", "b"];

// function myFind(callback) {
//   return callback;
// }

// function myFindCb(el, index, arr) {
//   if (el && !index) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === el) {
//         return el;
//       }
//     }
//   }

//   if (!el && index <= arr.length) {
//     return arr[index];
//   }

//   return undefined;
// }

// console.log(myFind(myFindCb("b", "", someArr))); // b
// console.log(myFind(myFindCb("c", "", someArr))); // undefined
// console.log(myFind(myFindCb("", 1, someArr))); // asf
// console.log(myFind(myFindCb("", 7, someArr))); // 5

// =============== findIndex () ===============

// простая версия:

// const arr = ["asf", 3, 7, 9, "", null, 7, 5, "a", "b"];

// function mainFindIndex(callback) {
//   return callback;
// }

// function cbForFindIndex(array, char) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(mainFindIndex(cbForFindIndex(arr, "a"))); // 8
// console.log(mainFindIndex(cbForFindIndex(arr, 18))); // -1

// версия поинтереснее:

// const someArr = ["asf", 3, 7, 9, "", null, 7, 5, "a", "b"];

// function myFindIndex(callback) {
//   return callback;
// }

// function myFindIndexCb(el, index, arr) {
//   if (el && !index) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === el) {
//         return i;
//       }
//     }
//   }

//   if (!el && index <= arr.length) {
//     return index;
//   }

//   if (!el && index > arr.length) {
//     return -1;
//   }

//   return -1;
// }

// console.log(myFindIndex(myFindIndexCb(7, "", someArr))); // 2
// console.log(myFindIndex(myFindIndexCb("a", "", someArr))); // 8
// console.log(myFindIndex(myFindIndexCb("wert", "", someArr))); // -1
// console.log(myFindIndex(myFindIndexCb("", 3, someArr))); // 3
// console.log(myFindIndex(myFindIndexCb("", 20, someArr))); // -1

// =============== includes () ===============

// const arr = ["asf", 3, 7, 9, 8, "", 0, 7, 5, "a", "b"];

// function myIncludes(array, searchEl, fromIndex = 0) {
//   if (
//     fromIndex &&
//     fromIndex > 0 &&
//     fromIndex < array.length &&
//     fromIndex !== NaN
//   ) {
//     for (let i = fromIndex; i <= array.length; i++) {
//       if (array[i] === searchEl) {
//         return true;
//       }
//     }
//     return false;
//   }

//   if (fromIndex === 0) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === searchEl) {
//         return true;
//       }
//     }
//     return false;
//   }

//   if (fromIndex > array.length || Number.isNaN(fromIndex)) {
//     return undefined;
//   }
// }

// console.log(myIncludes(arr, "a", 3)); // true
// console.log(myIncludes(arr, 3, 2)); // false
// console.log(myIncludes(arr, 9, 3)); // true
// console.log(myIncludes(arr, 5, 13)); // undefined
// console.log(myIncludes(arr, 8, "sdf")); // undefined
// console.log(myIncludes(arr, 8)); // true
// console.log(myIncludes(arr, "b")); // true

// =============== every () ===============

// const arr = [3, 7, 4, 9, 8, 7, 5];

// function myEvery(callback) {
//   return callback;
// }

// function myEveryCb(element, index = 0, array) {
//   if (array.length === 0) {
//     return true;
//   }

//   if (array)
//     for (let value of array) {
//       if (value > 2) {
//         continue;
//       } else {
//         return false;
//       }
//     }
//   return true;
// }

// console.log(myEvery(myEveryCb("", "", arr))); // true

// или так:

// const arr = [3, 7, 4, 9, 8, 7, 5];

// function myEvery(callback) {
//   return callback;
// }

// function myEveryCb(element, index = 0, array) {
//   if (array.length === 0) {
//     return true;
//   }

//   if (array.length > 0)
//     for (let i = 0; i < array.length; i++) {
//       if (element < array[i]) {
//         continue;
//       } else {
//         return false;
//       }
//     }
//   return true;
// }

// console.log(myEvery(myEveryCb(1, "", arr))); // true
// console.log(myEvery(myEveryCb(3, "", arr))); // false

// =============== some () ===============

// const arr = [3, 7, 4, 9, 8, 7, 5];
// const emptyArr = [];

// function mySome(callback) {
//   return callback;
// }

// function mySomeCb(element, index = 0, array) {
//   if (element && array && !index)
//     for (let i = 0; i < array.length; i++) {
//       if (element % 3 === 0) {
//         return true;
//       }
//       return false;
//     }

//   if (!element && array && index)
//     for (let i = 0; i < array.length; i++) {
//       if (array[index] % 3 === 0) {
//         return true;
//       }
//       return false;
//     }

//   if (array.length === 0) {
//     return false;
//   }
// }

// console.log(mySome(mySomeCb(3, "", arr))); // true
// console.log(mySome(mySomeCb(5, "", arr))); // false
// console.log(mySome(mySomeCb("", 2, arr))); // false
// console.log(mySome(mySomeCb("", 3, arr))); // true
// console.log(mySome(mySomeCb(2, 2, emptyArr))); // false
