let calculatingValue = document.querySelector(".calculating-value");
let inputValue = document.querySelector(".input-value");
let previousResultValue = document.querySelector(".previousResult-value");
let btnReset = document.querySelector(".btn-reset");
let currentInput = "";

function clearDisplay() {
  currentInput = "";
  inputValue.innerHTML = "0";
  calculatingValue.innerHTML = "0";
  previousResultValue.innerHTML = "0";
  btnReset.innerHTML = "AC";
}

function appendToDisplay(value) {
  currentInput += value;
  inputValue.innerHTML = currentInput;
  calculatingValue.innerHTML = currentInput;
  btnReset.innerHTML = "C";
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

function calculateResult() {
  if (currentInput !== "" && currentInput !== "0") {
    currentInput = currentInput.replace(/x/g, "*").replace(/÷/g, "/");
    const tokens = currentInput
      .split(/([+\-*/])/)
      .map((token) => (token === "" ? "0" : token));

    let result = parseFloat(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);

      result = performOperation(result, operator, operand);
    }

    inputValue.innerHTML = result;
    calculatingValue.innerHTML = result;
    previousResultValue.innerHTML = result;
    currentInput = result;
  }
}

function performOperation(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "오류";
      }
      return a / b;
    default:
      throw new Error("Error");
  }
}
