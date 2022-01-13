// 1.

const ulEl = document.body.querySelector("#ulId");
const ulElAttributes = ulEl.attributes;
const firstLiEl = ulEl.firstElementChild;
const lastLiEl = ulEl.lastElementChild;

getAttrValues(ulElAttributes);
getAttrNames(ulElAttributes);

function getAttrValues(attrList) {
  const attrValues = [];
  for (let attr of attrList) {
    attrValues.push(attr.value);
  }
  console.log("Attributes values", attrValues);
  return attrValues;
}

function getAttrNames(attrList) {
  const attrNames = [];
  for (let attr of attrList) {
    attrNames.push(attr);
  }
  console.log("Attributes names", attrNames);
  return attrNames;
}

lastLiEl.textContent = "Hello, my name is Vladyslav!";
firstLiEl.setAttribute("data-my-name", "Vladyslav");
ulEl.removeAttribute("data-dog-tail");

// 2.

const array = [1, 2, [1.1, 1.2, 1.3], 3, 4, 5];
const bodyEl = document.querySelector("body");

function generateList(arr, listWrapper) {
  function createList(arr) {
    const ulEl = document.createElement("ul");

    for (let i = 0; i < arr.length; i++) {
      const liEl = document.createElement("li");

      if (Array.isArray(arr[i])) {
        liEl.append(createList(arr[i]));
      } else {
        liEl.innerHTML = arr[i];
      }

      ulEl.append(liEl);
    }

    return ulEl;
  }

  listWrapper.append(createList(arr));
}

generateList(array, bodyEl);

// 3.

function renderTable() {
  const tableEl = document.createElement("table");
  tableEl.style.border = "1px solid black";
  tableEl.style.borderCollapse = "collapse";

  for (let td = 1; td <= 100; td++) {
    if ((td - 1) % 10 === 0) {
      const trEl = document.createElement("tr");
      tableEl.append(trEl);
    }

    const tdEl = document.createElement("td");
    tdEl.style.border = "1px solid black";
    tdEl.style.padding = "10px 10px";
    tdEl.textContent = td;
    tableEl.append(tdEl);
  }

  document.body.append(tableEl);
}

renderTable();
