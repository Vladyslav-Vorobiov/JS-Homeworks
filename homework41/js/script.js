"use strict";

function Student(firstName, lastName, yearOfBirth) {
  const visits = new Array(10);
  const marks = new Array(10);

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;

  this.getAge = function () {
    let currentYear = 2022;
    return currentYear - this.yearOfBirth;
  };

  this.addValueToArray = function (arr, value) {
    if (arr[arr.length - 1] !== undefined)
      throw new Error(`Array is fulfilled. You may add only 10 values`);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        arr[i] = value;
        return arr;
      }
    }
  };

  this.present = function () {
    return this.addValueToArray(visits, true);
  };

  this.absent = function () {
    return this.addValueToArray(visits, false);
  };

  this.mark = function (num) {
    if (num < 0 || num > 10)
      throw new Error(`Please enter a valid mark from 1 to 10`);

    return this.addValueToArray(marks, num);
  };

  this.getAverage = function (array) {
    const averageValue = array.reduce(
      function (acc, current, index, arr) {
        if (arr[index] !== undefined) {
          acc.counter++;
          acc.sum += current;
        }
        return acc;
      },
      { counter: 0, sum: 0 }
    );

    return averageValue.sum / averageValue.counter;
  };

  this.summary = function () {
    const averageVisits = this.getAverage(visits);
    const averageMark = this.getAverage(marks);

    if (!averageVisits && !averageMark) {
      console.log(`No data about ${this.firstName} to show summary yet!`);
    } else if (averageVisits < 0.9 && averageMark < 9) {
      console.log(`${this.firstName}, you're radish!`);
    } else if (averageVisits < 0.9 || averageMark < 9) {
      console.log(`Not bad ${this.firstName}, but you can better!`);
    } else {
      console.log(`Wooow! Well done, ${this.firstName}!`);
    }
  };
}

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
