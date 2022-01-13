// Homework 5. Objects

// Task #1

let user = {
   name: "John",
   surname: "Smith",
 };

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);

// Task #2

const user = {
    name: "John",
 };

user.name = "Pete";
console.log(user.name); // работает. Объект изменять можно. const защищает саму переменную от перезаписи

// Task #3

let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130,
 };

function summSalaries() {
   let summ = 0;
   for (let key in salaries) {
     summ += salaries[key];
   }
   return summ;
 }
 console.log("Summ of salaries = " + summSalaries());