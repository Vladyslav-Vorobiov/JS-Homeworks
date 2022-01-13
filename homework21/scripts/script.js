// =============== indexOf() ===============

const someArr1 = [2, 5, 9, 7, 6, -3, 4];

function myIndexOf(searchEl, fromIndex, array) {
  if (fromIndex === undefined) {
    fromIndex = 0;
  }

  if (fromIndex < 0) {
    for (let i = array.length + fromIndex; i < array.length; i++) {
      if (array[i] === searchEl) {
        return i;
      }
    }
  }

  if (fromIndex >= 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === searchEl) {
        return i;
      }
    }
  }

  return -1;
}

// =============== lastIndexOf () ===============

const someArr2 = [2, 5, 3, 9, 7, 3, 3, 6, 9, 7, 5, -3, 4, 5];

function myLastIndexOf(searchEl, fromIndex, arr) {
  if (fromIndex === undefined) {
    fromIndex = arr.length;
  }

  if (fromIndex >= arr.length) {
    for (let i = arr.length; i >= 0; i--) {
      if (arr[i] === searchEl) {
        return i;
      }
    }
  }

  if (fromIndex < arr.length && fromIndex >= 0) {
    for (let i = fromIndex; i >= 0; i--) {
      if (arr[i] === searchEl) {
        return i;
      }
    }
  }

  if (fromIndex < 0) {
    for (let i = arr.length + fromIndex - 1; i >= 0; i--) {
      if (arr[i] === searchEl) {
        return i;
      }
    }
  }

  return -1;
}

// =============== find () ===============

const someArr3 = [3, 7, 15, 24, 53, 62, 81];

function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}

// =============== findIndex () ===============

const someArr4 = [3, 7, 15, 24, 53, 62, 81];

function myFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

// =============== includes () ===============

const someArr5 = ["asf", 3, 7, 9, 8, "", 0, 7, 5, "a", "b"];

function myIncludes(array, searchEl, fromIndex = 0) {
  if (
    fromIndex &&
    fromIndex > 0 &&
    fromIndex < array.length &&
    fromIndex !== NaN
  ) {
    for (let i = fromIndex; i <= array.length; i++) {
      if (array[i] === searchEl) {
        return true;
      }
    }
    return false;
  }

  if (fromIndex === 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchEl) {
        return true;
      }
    }
    return false;
  }

  if (fromIndex < 0) {
    for (let i = array.length + fromIndex; i < array.length; i++) {
      if (array[i] === searchEl) {
        return true;
      }
    }
    return false;
  }

  if (fromIndex > array.length || Number.isNaN(fromIndex)) {
    return undefined;
  }
}

// =============== every () ===============

const someArr6 = [3, 7, 4, 9, 8, 7, 5];
const emptyArr1 = [];

function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

// =============== some () ===============

const someArr7 = [3, 7, 4, 9, 8, 7, 5];
const emptyArr2 = [];

function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
