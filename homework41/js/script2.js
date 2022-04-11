// код имеет отличия от первого скрипта (методы addValueToArray и getAverage),
// т.к. в разных скриптах массив на 10 элементов создан по-разному.

"use strict";

function Student(firstName, lastName, yearOfBirth) {
  this.visits = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  this.marks = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
}

Student.prototype = {
  constructor: Student,

  getAge: function () {
    let currentYear = 2022;
    return currentYear - this.yearOfBirth;
  },

  addValueToArray: function (array, value) {
    if (!array.includes(undefined)) {
      throw new Error(`You can't add more than 10 values`);
    }
    let emptyPosition = array.indexOf(undefined);
    array.splice(emptyPosition, 1, value);
    return array;
  },

  present: function () {
    return this.addValueToArray(this.visits, true);
  },

  absent: function () {
    return this.addValueToArray(this.visits, false);
  },

  mark: function (num) {
    if (num < 0 || num > 10)
      throw new Error(`Please enter a valid mark from 1 to 10`);

    return this.addValueToArray(this.marks, num);
  },

  getAverage: function (arr) {
    let counter = 0;
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== undefined) {
        counter++;
        result += arr[i];
      }
    }
    return result / counter;
  },

  summary: function () {
    const averageVisits = this.getAverage(this.visits);
    const averageMark = this.getAverage(this.marks);

    if (!averageVisits && !averageMark) {
      console.log(`No data about ${this.firstName} to show summary yet!`);
    } else if (averageVisits < 0.9 && averageMark < 9) {
      console.log(`${this.firstName}, you're radish!`);
    } else if (averageVisits < 0.9 || averageMark < 9) {
      console.log(`Not bad ${this.firstName}, but you can better!`);
    } else {
      console.log(`Wooow! Well done, ${this.firstName}!`);
    }
  },
};

const vasya = new Student("Vasya", "Pupkin", 1990);
const petya = new Student("Petya", "Golovkin", 1820);
const masha = new petya.constructor("Masha", "Ivanova", 2000);

vasya.absent();
vasya.absent();
vasya.mark(5);
vasya.mark(10);
vasya.summary();

petya.present();
petya.present();
petya.mark(8);
petya.mark(9);
petya.summary();

masha.present();
masha.present();
masha.mark(10);
masha.mark(10);
masha.summary();
