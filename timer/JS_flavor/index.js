const startButtonImage = document.querySelector(".start-button-image");
const startButton = document.querySelector(".start-button");
const resetButtonImage = document.querySelector(".reset-button-image");
const resetButton = document.querySelector(".reset-button");
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    startButtonImage.src = "./images/start-button.svg";
    startButton.style.color = "#ffffff";
    startButton.style.background = "#3661CC";
    resetButtonImage.src = "./images/reset-button.svg";
    resetButton.style.color = "#ffffff";
    resetButton.style.background = "#F84A34";
  });
});
