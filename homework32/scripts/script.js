function myBind(foo, that, ...args) {
  return function (...someArgs) {
    return foo.apply(that, [...args, ...someArgs]);
  };
}

function test() {
  console.log(this);
}

const binded = myBind(test, { name: "Vladyslav", age: 30 });
binded();
