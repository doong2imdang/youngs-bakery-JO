let calculatingValue = document.querySelector(".calculating-value");
let inputValue = document.querySelector(".input-value");
let previousResultValue = document.querySelector(".previousResult-value");
let currentInput = "";

function clearDisplay() {
  currentInput = "";
  inputValue.innerHTML = "0";
  calculatingValue.innerHTML = "0";
  previousResultValue.innerHTML = "0";
}

function appendToDisplay(value) {
  currentInput += value;
  inputValue.innerHTML = currentInput;
  calculatingValue.innerHTML = currentInput;
}

function changeSign() {
  if (currentInput !== "" && currentInput !== "0") {
    currentInput = currentInput * -1;
    inputValue.innerHTML = currentInput;
    calculatingValue.innerHTML = currentInput;
  }
}

function calculatingPercentage() {
  if (currentInput !== "" && currentInput !== "0") {
    currentInput = currentInput / 100;
    inputValue.innerHTML = currentInput;
    calculatingValue.innerHTML = currentInput;
  }
}
