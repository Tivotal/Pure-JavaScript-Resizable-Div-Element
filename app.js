/* Created by Tivotal */

let div = document.querySelector(".div");
let handler = document.querySelector(".handler");

let x, y, w, h;

handler.addEventListener("mousedown", (e) => {
  e.preventDefault();
  x = e.clientX;
  y = e.clientY;

  w = div.clientWidth;
  h = div.clientHeight;

  handler.addEventListener("mousemove", resizeDiv);
  handler.addEventListener("mouseup", () => {
    handler.removeEventListener("mousemove", resizeDiv);
  });
  handler.addEventListener("mouseleave", () => {
    handler.removeEventListener("mousemove", resizeDiv);
  });
});

function resizeDiv(e) {
  let dx = e.clientX;
  let dy = e.clientY;

  div.style.width = dx - x + w + "px";
  div.style.height = dy - y + h + "px";
}

handler.addEventListener("touchstart", (e) => {
  e.preventDefault();
  x = e.touches[0].clientX;
  y = e.touches[0].clientY;

  w = div.clientWidth;
  h = div.clientHeight;

  handler.addEventListener("touchmove", resizeTouchDiv);
  handler.addEventListener("touchend", () => {
    handler.removeEventListener("touchmove", resizeTouchDiv);
  });
  handler.addEventListener("touchcancel", () => {
    handler.removeEventListener("touchmove", resizeTouchDiv);
  });
});

function resizeTouchDiv(e) {
  let dx = e.touches[0].clientX;
  let dy = e.touches[0].clientY;

  div.style.width = dx - x + w + "px";
  div.style.height = dy - y + h + "px";
}
