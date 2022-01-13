// Homework 7. Условное ветвление V0

// 1.

let numOrStr = prompt("input number or string");

if (numOrStr === null || numOrStr.trim() === "" || isNaN(+numOrStr)) {
  console.log("Something went wrong");
} else {
  console.log("OK!");
}

// 2.

let numOrStr2 = prompt("input number or string");

switch (numOrStr2) {
  case null:
    console.log("You've cancelled");
    break;
  case "":
    console.log("Empty string");
    break;
  default: {
    if (numOrStr2.trim() === "" || isNaN(numOrStr2)) {
      console.log("It's not a number");
      break;
    }
    console.log("OK!");
  }
}
