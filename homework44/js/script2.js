const listUrl = "https://jsonplaceholder.typicode.com/albums";

class List {
  async loadList(link) {
    const response = await fetch(link);
    const data = await response.json();
    const containerEl = document.querySelector(".container");
    const albumsListEl = document.createElement("ol");

    for (let i = 0; i < data.length; i++) {
      let elem = data[i];
      let title = elem.title;
      let id = elem.id;
      const listItem = new ListItem(title, id).createItem();
      albumsListEl.append(listItem);
    }
    containerEl.append(albumsListEl);
    albumsListEl.addEventListener("click", this.handleClick);
  }

  async handleClick(e) {
    if (e.target.hasAttribute("data-listener")) {
      e.stopPropagation();
      const newWindow = window.open();
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "space-around";
      wrapper.style.flexWrap = "wrap";

      const heading = document.createElement("h1");
      heading.innerHTML = `Album # ${e.target.id}`;
      heading.style.margin = "30px auto";
      heading.style.textAlign = "center";
      heading.style.textTransform = "uppercase";

      newWindow.document.body.append(heading);
      newWindow.document.body.append(wrapper);

      const currentAlbumUrl =
        "https://jsonplaceholder.typicode.com/photos?albumId=" + e.target.id;

      const response = await fetch(currentAlbumUrl);
      const currentAlbum = await response.json();

      for (let i = 0; i < currentAlbum.length; i++) {
        let img = new Image();
        img.src = currentAlbum[i]["url"];
        img.style.margin = "14px";
        wrapper.append(img);
      }
    }
  }
}

class ListItem {
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  createItem() {
    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add(
      "mb-3",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "border-bottom"
    );

    const titleEl = document.createElement("li");
    titleEl.textContent = this.title;
    titleEl.classList.add("h5", "m-0", "text-capitalize");

    const btnEl = document.createElement("button");
    btnEl.id = this.id;
    btnEl.classList.add("btn", "btn-info");
    btnEl.setAttribute("data-listener", "true");
    btnEl.textContent = "Show album";

    wrapperEl.append(titleEl);
    wrapperEl.append(btnEl);
    return wrapperEl;
  }
}

const albumsList = new List();
albumsList.loadList(listUrl);
