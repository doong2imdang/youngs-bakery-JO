const startButtonImage = document.querySelector(".start-button-image");
const startButton = document.querySelector(".start-button");
const resetButtonImage = document.querySelector(".reset-button-image");
const resetButton = document.querySelector(".reset-button");
const inputs = document.querySelectorAll("input");
const hourInput = document.querySelector("#hour");
const minuteInput = document.querySelector("#minute");
const secondInput = document.querySelector("#second");
const startButtonText = document.querySelector(".start-button-text");
const sideBox = document.querySelector(".side-box");

let isPaused = false;
let totalSeconds = 0;
let intervalId = 0;

function handleInputFocus() {
  startButtonImage.src = "./images/start-button.svg";
  startButton.style.color = "#ffffff";
  startButton.style.background = "#3661CC";
  startButtonText.innerHTML = "START";
  resetButtonImage.src = "./images/reset-button.svg";
  resetButton.style.color = "#ffffff";
  resetButton.style.background = "#F84A34";
  startButton.removeAttribute("disabled");
  resetButton.removeAttribute("disabled");
}

inputs.forEach((input) => {
  input.addEventListener("change", handleInputFocus);

  input.addEventListener("change", function (e) {
    if (e.target.value.length === 1) {
      e.target.value = "0" + e.target.value;
    }

    if (e.target.value < 0) {
      alert("올바른 숫자를 입력해주세요!");
      e.target.value = "";
    }
  });
});

startButton.addEventListener("click", function () {
  isPaused = !isPaused;

  if (isPaused) {
    startButtonImage.src = "./images/pause-button.svg";
    startButton.style.background = "#FBF23B";
    startButtonText.innerHTML = "PAUSE";
    startButton.style.color = "#ffffff";
    sideBox.classList.add("start-active");

    if (totalSeconds === 0) {
      totalSeconds =
        hourInput.value * 3600 + minuteInput.value * 60 + secondInput.value;
    }
    startCountdown();
  } else {
    startButtonImage.src = "./images/start-button.svg";
    startButton.style.background = "#3661CC";
    startButtonText.innerHTML = "START";
    startButton.style.color = "#ffffff";
    sideBox.classList.remove("start-active");
    pauseCountdown();
  }
});

function startCountdown() {
  updateDisplay();
  intervalId = setInterval(updateDisplay, 1000);
}

function pauseCountdown() {
  clearInterval(intervalId);
}

function updateDisplay() {
  if (totalSeconds < 0) {
    clearInterval(intervalId);
    alert("시간이 종료되었습니다.");
    resetDisplay();
  } else {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hourInput.value = hours.toString().padStart(2, "0");
    minuteInput.value = minutes.toString().padStart(2, "0");
    secondInput.value = seconds.toString().padStart(2, "0");
    totalSeconds--;
  }
  console.log("총", totalSeconds);
}

function resetDisplay() {
  inputs.forEach((input) => {
    input.removeAttribute("readonly");
  });

  sideBox.classList.remove("start-active");
  totalSeconds = 0;
  hourInput.value = "";
  minuteInput.value = "";
  secondInput.value = "";
  startButtonImage.src = "./images/start-button-disabled.svg";
  startButton.style.background = "#69A13F";
  startButton.style.color = "#568037";
  startButtonText.innerHTML = "START";

  resetButtonImage.src = "./images/reset-button-disabled.svg";
  resetButton.style.background = "#69A13F";
  resetButton.style.color = "#568037";

  startButton.setAttribute("disabled", true);
  resetButton.setAttribute("disabled", true);
}

function limitInputValue(input, maxValue) {
  if (input.value >= maxValue) {
    input.value = maxValue - 1;
  }
}

hourInput.addEventListener("change", function () {
  limitInputValue(hourInput, 100);
});

minuteInput.addEventListener("change", function () {
  limitInputValue(minuteInput, 60);
});

secondInput.addEventListener("change", function () {
  limitInputValue(secondInput, 60);
});
