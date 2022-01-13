const array = [1, 2, [1, 3, [4, 5, 8, 10, 7], 8], [1, 5, 6, 7], [1, 3, 9], 5];
const simpleArray = [1, 3, 5, 632, 24, 325];

function flatArray(arr) {
  let finalArr = [];

  if (arguments.length > 1) {
    throw new Error(
      "Function accepts only 1 argument, too much arguments provided"
    );
  } else if (!arr.some(Array.isArray)) {
    return (simple = [...arr]);
  }

  function getFlattedArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        getFlattedArray(arr[i]);
      } else {
        finalArr.push(arr[i]);
      }
    }
  }
  getFlattedArray(arr);

  return finalArr;
}

flatArray(array);
flatArray(simpleArray);
