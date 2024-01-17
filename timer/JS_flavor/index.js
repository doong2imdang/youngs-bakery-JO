const startButtonImage = document.querySelector(".start-button-image");
const startButton = document.querySelector(".start-button");
const resetButtonImage = document.querySelector(".reset-button-image");
const resetButton = document.querySelector(".reset-button");
const inputs = document.querySelectorAll("input");
const hourInput = document.querySelector("#hour");
const minuteInput = document.querySelector("#minute");
const secondInput = document.querySelector("#second");

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    startButtonImage.src = "./images/start-button.svg";
    startButton.style.color = "#ffffff";
    startButton.style.background = "#3661CC";
    resetButtonImage.src = "./images/reset-button.svg";
    resetButton.style.color = "#ffffff";
    resetButton.style.background = "#F84A34";
  });

  input.addEventListener("change", function (e) {
    if (e.target.value < 0) {
      alert("양수를 입력해주세요!");
      e.target.value = "";
    }
  });
});

hourInput.addEventListener("change", function (e) {
  if (e.target.value >= 100) {
    e.target.value = 99;
  }
});

minuteInput.addEventListener("change", function (e) {
  if (e.target.value >= 60) {
    e.target.value = 59;
  }
});

secondInput.addEventListener("change", function (e) {
  if (e.target.value >= 60) {
    e.target.value = 59;
  }
});
