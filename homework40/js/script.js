"use strict";

function cacheAbility() {
  let cache = new Map();

  return (func) => {
    if (cache.size >= 10) {
      const cacheArr = Array.from(cache);
      cacheArr.splice(0, 1);
      cache = new Map(cacheArr);
    }

    if (cache.has(func))
      return `${cache.get(func)} - value is taken from cache`;

    cache.set(func, func);
    return cache.get(func);
  };
}

function sum(num1, num2) {
  return num1 + num2;
}

const cachedData = cacheAbility();
