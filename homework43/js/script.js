"use strict";

class Human {
  constructor(firstName, lastName, yearOfBirth) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._yearOfBirth = yearOfBirth;
  }

  getAge() {
    let currentYear = 2022;
    return currentYear - this._yearOfBirth;
  }

  static getFullName(lastName) {
    if (lastName === "Ivanova") {
      return "Mariya Alfredovna Ivanova";
    } else if (lastName === "Golovkin") {
      return "Petr Klimovich Golovkin";
    } else if (lastName === "Pupkin") {
      return "Vasiliy Sergeevich Pupkin";
    } else return "Unknown human";
  }
}

class Student extends Human {
  constructor(...args) {
    super(...args);
    this._visits = new Array(10);
    this._marks = new Array(10);
  }

  #addValueToArray(arr, value) {
    if (arr[arr.length - 1] !== undefined)
      throw new Error(`Array is fulfilled. You may add only 10 values`);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        arr[i] = value;
        return arr;
      }
    }
  }

  present() {
    return this.#addValueToArray(this._visits, true);
  }

  absent() {
    return this.#addValueToArray(this._visits, false);
  }

  mark(num) {
    if (num < 0 || num > 10)
      throw new Error(`Please enter a valid mark from 1 to 10`);

    return this.#addValueToArray(this._marks, num);
  }

  #getAverage(array) {
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
  }

  summary() {
    const averageVisits = this.#getAverage(this._visits);
    const averageMark = this.#getAverage(this._marks);

    if (!averageVisits && !averageMark) {
      return `No data about ${this._firstName} to show summary yet!`;
    } else if (averageVisits < 0.9 && averageMark < 9) {
      return `${this._firstName}, you're radish!`;
    } else if (averageVisits < 0.9 || averageMark < 9) {
      return `Not bad ${this._firstName}, but you can better!`;
    } else {
      return `Wooow! Well done, ${this._firstName}!`;
    }
  }
}

const vasya = new Student("Vasya", "Pupkin", 1990);
const petya = new Student("Petya", "Golovkin", 1820);
const masha = new petya.constructor("Masha", "Ivanova", 2000);

vasya.absent();
vasya.absent();
vasya.mark(10);
vasya.mark(5);
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
