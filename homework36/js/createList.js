function createDataList() {
  const divEl = document.getElementById("wrapper");
  if (localStorage.formData) {
    const restoredData = JSON.parse(localStorage.getItem("formData"));

    const pEl = document.createElement("p");
    pEl.style.marginTop = "20px";
    pEl.style.fontWeight = 700;
    pEl.textContent = "List of saved data in local storage:";

    const ulEl = document.createElement("ul");
    ulEl.style.marginTop = "20px";

    for (let item in restoredData) {
      const liEl = document.createElement("li");
      liEl.innerHTML = `${item}: ${restoredData[item]}`;
      ulEl.append(liEl);
    }

    divEl.append(pEl);
    divEl.append(ulEl);
  } else {
    const pEl = document.createElement("p");
    pEl.style.marginTop = "20px";
    pEl.style.color = "red";
    pEl.textContent =
      "There is no saved data in local storage to render yet. Fill in some data into form, click submit and refresh the page";
    divEl.append(pEl);
  }
}

createDataList();
