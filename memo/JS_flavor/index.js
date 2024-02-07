const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;

let isPainting = false;

ctx.lineWidth = lineWidth.value;

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function onMouseDown() {
  isPainting = true;
}

function onMouseUp() {
  isPainting = false;
}

function onLineWidth(e) {
  ctx.lineWidth = e.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);

lineWidth.addEventListener("change", onLineWidth);
