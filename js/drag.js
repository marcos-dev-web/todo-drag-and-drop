var dragged;

const eventListener = (nameEvent, func, bool = false) => {
  document.addEventListener(
    nameEvent,
    (event) => {
      func(event);
    },
    bool
  );
}

eventListener("drag", (event) => {
  event.preventDefault();
});

eventListener("dragstart", (event) => {
  dragged = event.target;
  dragged.style.margin = "";
  dragged.style.position = "absolute";
  dragged.style.opacity = 0;
});

eventListener("dragover", (event) => {
  event.preventDefault();
});

eventListener("dragenter", (event) => {
  event.preventDefault();
});

eventListener("dragleave", (event) => {
  event.preventDefault();
});

eventListener("drop", (event) => {
  const x = event.x;
  const y = event.y;

  dragged.style.top = `${y}px`;
  dragged.style.left = `${x}px`;
  event.preventDefault();
});

eventListener("dragend", (event) => {
  event.target.style.opacity = "";
});