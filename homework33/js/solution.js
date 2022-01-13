const ulEl = document.getElementById("ulId");
console.log(ulEl.children.length);

const liArrEl = Array.from(ulEl.children);

function createArrayFromElements() {
  let innerTextArr = [];

  for (let li of liArrEl) {
    innerTextArr.push(li.innerHTML);
  }

  return innerTextArr;
}

console.log(createArrayFromElements());
