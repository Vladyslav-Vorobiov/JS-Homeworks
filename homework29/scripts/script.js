const calculator = {
  read(arg1, arg2) {
    if (arg1 === undefined || arg2 === undefined) {
      return "Please input two numbers";
    }

    this.num1 = Number(arg1);
    this.num2 = Number(arg2);

    if (isNaN(this.num1) || isNaN(this.num2))
      return "You may input only digits";
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read(3, 5);
alert(calculator.sum());
alert(calculator.mul());
