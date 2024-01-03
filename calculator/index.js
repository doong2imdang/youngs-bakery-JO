let calculatingValue = document.querySelector(".calculating-value");
let inputValue = document.querySelector(".input-value");
let previousResultValue = document.querySelector(".previousResult-value");
let currentInput = "";

function clearDisplay() {
  currentInput = "";
  inputValue.innerHTML = "0";
  calculatingValue.innerHTML = "0";
}

function appendToDisplay(value) {
  currentInput += value;
  inputValue.innerHTML = currentInput;
  calculatingValue.innerHTML = currentInput;
}
