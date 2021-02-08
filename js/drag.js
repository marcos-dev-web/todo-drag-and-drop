var dragged;

const eventListener = (nameEvent, func, bool = false) => {
  document.addEventListener(
    nameEvent,
    (event) => {
      func(event);
    },
    bool
  );
};

eventListener("drag", (event) => {
  event.preventDefault();
});

eventListener("dragstart", (event) => {
  dragged = event.target;
  dragged.style.margin = "";
  dragged.style.position = "absolute";
  event.target.style.opacity = 0;
});

eventListener("dragend", (event) => {
  event.target.style.opacity = "";
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

  event.preventDefault();
  dragged.style.top = `${y}px`;
  dragged.style.left = `${x}px`;
});
