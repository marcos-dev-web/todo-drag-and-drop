const divModal = document.querySelector(".modal");

const cardFunction = (event) => {
  let { x, y } = event;
  let divCard = event.toElement;

  if (!options.opened) {
    let opt = options.open(x, y);

    const del = opt.querySelector(".del");
    const edt = opt.querySelector(".edt");

    del.addEventListener("click", () => {
      options.close();
      card.del(divCard);
    });
    edt.addEventListener("click", () => {
      options.close();
      card.edt(divCard);
    });

    del.removeEventListener("click", {});
    edt.removeEventListener("click", {});
  }
  event.preventDefault();
};

const options = {
  opened: false,
  divOptions: document.querySelector("section.options"),
  open(x, y) {
    let { opened, divOptions } = options;
    divOptions.style = `
      display: flex;
      top: ${y}px;
      left: ${x}px;
    `;
    opened = true;
    return divOptions;
  },
  close() {
    let { divOptions, opened } = options;
    divOptions.removeAttribute("style");
    opened = false;
  },
};

const card = {
  del(cardElement) {
    cardElement.removeAttribute("style");
    for (let card of document.body.querySelectorAll(".card")) {
      if (card === cardElement) {
        cardElement.remove();
        break;
      }
    }
    cardElement.removeEventListener("contextmenu", cardFunction);
    options.close();
  },
  edt(/*cardElement*/) {
    alert("this function don't still has been implemented");
    options.close();
  },
};

var modal = {
  open: false,
  close() {
    document.querySelector(".content_modal .title").value = "";
    document.querySelector(".content_modal .text").value = "";

    divModal.style.display = "none";
    modal.open = false;
  },
  createCard(title, text) {
    const divCard = document.createElement("div");
    const titleCard = document.createElement("h1");
    const textCard = document.createElement("p");

    divCard.setAttribute("draggable", true);
    divCard.classList.add("card");
    titleCard.classList.add("title");
    textCard.classList.add("text");

    titleCard.textContent = title;
    textCard.textContent = text;

    divCard.appendChild(titleCard);
    divCard.appendChild(textCard);

    return divCard;
  },
  renderCard: (cardElement) => {
    document.body.appendChild(cardElement);
    return cardElement;
  },
};

const keyFunctions = {
  a() {
    document.body.style = `
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      max-width: 100vw;
      `;
    document.querySelectorAll(".card").forEach((card) => {
      card.removeAttribute("style");
      card.style.position = "relative";
      card.style.margin = "10px";
    });
  },
  r() {
    document.querySelectorAll(".card").forEach((card) => {
      card.style.position = "absolute";
    });
    document.body.removeAttribute("style");
  },
  n(e) {
    e.preventDefault();
    newCard();
  },
};

window.addEventListener("keydown", (event) => {
  let key = event.key;

  if (modal.open) return;

  if (keyFunctions[key]) {
    keyFunctions[key](event);
  }
});

document.querySelector("span.close").addEventListener("click", (event) => {
  options.close();
});
