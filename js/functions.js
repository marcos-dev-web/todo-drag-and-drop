const getValuesModal = () => {
  return {
    title: document.querySelector(".content_modal .title").value,
    text: document.querySelector(".content_modal .text").value,
  };
};

const newCard = () => {
  modal.open = true;
  divModal.style.display = "flex";
  document.querySelector(".content_modal .title").focus();
};

const done = () => {
  const { title, text } = getValuesModal();

  if (title.length === 0 || text.length === 0) {
    alert("some field are empty");
    return;
  }
  if (title.length > 30) {
    alert("the title can't be bigger than 30!");
    return;
  }
  if (text.length > 500) {
    alert("the text can't be bigger than 500!");
    return;
  }

  if (!editing[0]) {
    let divCard = modal.createCard(title, text);
    let card = modal.renderCard(divCard);
    card.addEventListener("contextmenu", cardFunction);
  } else {
    let card = editing[1];
    let titleCard = card.querySelector('.title');
    let textCard = card.querySelector('.text');
    
    titleCard.textContent = title;
    textCard.textContent = text;
    editing = [false, undefined]
  }

  modal.close();
};