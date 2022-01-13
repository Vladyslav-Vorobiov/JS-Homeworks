function makeCounter(result = 0) {
  function value() {
    return result;
  }

  function increase(num) {
    return (result += num);
  }

  function decrease(num) {
    return (result -= num);
  }

  return { value, increase, decrease };
}

const simpleCounter = makeCounter();
