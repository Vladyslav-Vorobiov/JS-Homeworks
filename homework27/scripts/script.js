function getSum() {
  let accum = 0;
  return function sum(num) {
    return (accum += num);
  };
}

let result = getSum();
