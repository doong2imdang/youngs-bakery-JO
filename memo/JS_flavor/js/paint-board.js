const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const drawModeBtn = document.querySelector(".draw-mode-btn");
const eraseBtn = document.querySelector(".erase-btn");
const saveBtn = document.querySelector(".save-btn");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 290;
canvas.height = 290;

let isPainting = false;
let isFilling = false;

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

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
}

function onLineWidth(e) {
  ctx.lineWidth = e.target.value;
}

function onColorChange(e) {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
}

function onColorClick(e) {
  color.value = e.target.dataset.color;
  ctx.strokeStyle = e.target.dataset.color;
  ctx.fillStyle = e.target.dataset.color;
}

function onDrawModeBtn() {
  if (isFilling) {
    isFilling = false;
    drawModeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    drawModeBtn.innerText = "Paint";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, 290, 290);
  }
}

function onErase() {
  ctx.strokeStyle = "white";
  isFilling = false;
  drawModeBtn.innerText = "Fill";
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawingBoard.png";
  a.click();
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidth);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

drawModeBtn.addEventListener("click", onDrawModeBtn);
canvas.addEventListener("click", onCanvasClick);
eraseBtn.addEventListener("click", onErase);
saveBtn.addEventListener("click", onSaveClick);
