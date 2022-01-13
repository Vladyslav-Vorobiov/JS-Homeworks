function generateArray() {
  const numbersArray = [];

  function numbersGenerator() {
    if (numbersArray.length === 100) return numbersArray;

    const randomNumber = Math.round(Math.random() * 100);

    for (let i = 0; i < 100; i++) {
      if (numbersArray.includes(randomNumber) || randomNumber === 0) {
        return numbersGenerator();
      } else {
        numbersArray.push(randomNumber);
      }
    }
    return numbersArray;
  }
  return numbersGenerator;
}

let result = generateArray();
result();
