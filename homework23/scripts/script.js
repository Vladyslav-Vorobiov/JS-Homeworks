const sum = (function getSum() {
  let accum = 0;
  function sum(num) {
    return (accum += num);
  }
  return sum;
})();

const result = sum(3);
sum(7);
const thirdResult = sum(5);
console.log(thirdResult);
