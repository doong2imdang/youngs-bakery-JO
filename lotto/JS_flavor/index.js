const inputPrice = document.getElementById("input-price");
const inputButton = document.querySelector(".input-button");
const ticketNumber = document.querySelector(".ticket-number");
const ticketNumbersContainer = document.querySelector(".ticket-numbers");
const numberCheckToggle = document.getElementById("toggle-slider");

let totalLottoTickets = 0;
let existingCount = 0;

// 금액 태그 클릭
function setPrice(amount) {
  inputPrice.value = amount;
  numberCheckToggle.checked = false;
  const frontLiElements = document.querySelectorAll(".ticket-front");
  const backLiElements = document.querySelectorAll(".ticket-back");
  frontLiElements.forEach((frontLiElement) => {
    frontLiElement.classList.remove("flipped");
  });
  backLiElements.forEach((backLiElement) => {
    backLiElement.classList.add("flipped");
  });
}

inputPrice.addEventListener("input", function () {
  numberCheckToggle.checked = false;
  const frontLiElements = document.querySelectorAll(".ticket-front");
  const backLiElements = document.querySelectorAll(".ticket-back");
  frontLiElements.forEach((frontLiElement) => {
    frontLiElement.classList.remove("flipped");
  });
  backLiElements.forEach((backLiElement) => {
    backLiElement.classList.add("flipped");
  });
});

// 입력 버튼
function purchasePrice() {
  let lottoTickets = 0;
  let balance = 0;

  if (inputPrice.value === 0 || inputPrice.value === "") {
    alert("올바른 값을 입력하세요");
    inputPrice.value = "";
  } else {
    lottoTickets = Math.floor(inputPrice.value / 1000);
    balance = inputPrice.value % 1000;

    totalLottoTickets += lottoTickets;

    alert(`총 ${lottoTickets}장 구매되었으며 잔액은 ${balance}원입니다.`);
    inputPrice.value = balance;
    ticketNumber.textContent = totalLottoTickets;

    inputPrice.value = "";
    updateTicketImages(totalLottoTickets);
  }
}

// 구매한 로또 티켓
function updateTicketImages(ticketCount) {
  // 티켓 이미지
  for (let i = 0; i < ticketCount * 6 - existingCount * 6; i++) {
    const frontLiElement = document.createElement("li");
    frontLiElement.classList.add("ticket-front");

    const backLiElement = document.createElement("li");
    backLiElement.classList.add("ticket-back", "flipped");

    const randomNumber = generateRandomNumbers(1)[0];
    backLiElement.innerHTML = `<span>${randomNumber}</span>`;
    frontLiElement.innerHTML = "<span>복</span>";

    ticketNumbersContainer.appendChild(frontLiElement);
    ticketNumbersContainer.appendChild(backLiElement);
  }
  existingCount = ticketCount;
}

// 번호확인 토글 버튼
numberCheckToggle.addEventListener("change", function () {
  const frontLiElements = document.querySelectorAll(".ticket-front");
  const backLiElements = document.querySelectorAll(".ticket-back");
  if (numberCheckToggle.checked === false) {
    frontLiElements.forEach((frontLiElement) => {
      frontLiElement.classList.remove("flipped");
    });
    backLiElements.forEach((backLiElement) => {
      backLiElement.classList.add("flipped");
    });
  } else {
    frontLiElements.forEach((frontLiElement) => {
      frontLiElement.classList.add("flipped");
    });
    backLiElements.forEach((backLiElement) => {
      backLiElement.classList.remove("flipped");
    });
  }
});

// 랜덤한 로또 번호 생성
function generateRandomNumbers(count) {
  const numbers = new Set();
  while (numbers.size < count) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }

  return Array.from(numbers);
}
