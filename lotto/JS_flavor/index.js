const inputPrice = document.getElementById("input-price");
const inputButton = document.querySelector(".input-button");
const ticketNumber = document.querySelector(".ticket-number");
const ticketNumbersContainer = document.querySelector(".ticket-numbers");
const numberCheckToggle = document.getElementById("toggle-slider");
const checkResultButton = document.querySelector(".check-result-button");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal-bg");
const winningNumberElements = document.querySelectorAll(
  ".winning-number div p"
);
const bonusNumberElements = document.querySelector(".bonus-number p");
const resultUnderTwo = document.querySelector(".result-underTwo");
const resultThree = document.querySelector(".result-three");
const resultFour = document.querySelector(".result-four");
const resultFive = document.querySelector(".result-five");
const resultFiveBonus = document.querySelector(".result-five-bonus");
const resultSix = document.querySelector(".result-six");
const resultBenefit = document.querySelector(".result-benefit");

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
    ticketNumber.textContent = totalLottoTickets;

    if (balance > 0) {
      inputPrice.value = balance;
    } else {
      inputPrice.value = "";
    }

    updateTicketImages(totalLottoTickets);
  }
}

// 구매한 로또 티켓
function updateTicketImages(ticketCount) {
  // 티켓 이미지
  const neededRandomNumbers = ticketCount * 6 - existingCount * 6;
  const randomNumbers = generateRandomNumbers(neededRandomNumbers);

  console.log("randomNumbers", randomNumbers);

  for (let i = 0; i < neededRandomNumbers; i++) {
    const frontLiElement = document.createElement("li");
    frontLiElement.classList.add("ticket-front");

    const backLiElement = document.createElement("li");
    backLiElement.classList.add("ticket-back", "flipped");

    backLiElement.innerHTML = `<span>${randomNumbers[i]}</span>`;
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
  const numbers = [];
  let attempts = 0;

  while (numbers.length < count && attempts < 100000) {
    const candidateSet = new Set();

    for (let i = 0; i < count; i++) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      candidateSet.add(randomNum);
    }

    const candidateArray = Array.from(candidateSet);

    if (!isSubsetInArray(candidateArray, numbers)) {
      numbers.push(...candidateArray);
    }

    attempts++;
  }

  if (attempts >= 100000) {
    console.error("Failed to generate random numbers within 100000 attempts.");
  }

  return numbers;
}

function isSubsetInArray(subset, array) {
  return subset.every((value) => array.includes(value));
}

// 결과 확인하기 버튼
function checkResult() {
  // 모달창 띄우기
  modal.style.display = "block";
  modalBg.style.display = "block";

  // 당첨통계, 수익률 구하기
  const chunk = 6;
  const ticketNumbersArray = [];
  const winningNumbersArray = [];
  const ticketBackNumbers = document.querySelectorAll(".ticket-back span");
  const bonusNumber = document.querySelector(".bonus-number p").innerHTML;

  winningNumberElements.forEach((element) => {
    winningNumbersArray.push(element.innerHTML);
  });
  ticketBackNumbers.forEach((element) => {
    ticketNumbersArray.push(element.innerHTML);
  });

  // 구입한 로또 번호 6자리씩 나눈거
  const ticketNumberArrays = splitLotto(ticketNumbersArray, chunk);
  console.log("ticketNumberArrays", ticketNumberArrays);

  console.log(ticketNumbersArray, winningNumbersArray, bonusNumber);

  // 일치한 번호 추출하기
  const matchingCount = countMatchingNumbers(
    ticketNumberArrays,
    winningNumbersArray,
    bonusNumber
  );
  console.log("일치하는 숫자의 개수:", matchingCount);
}

// 구입티켓 6자리로 나누기
function splitLotto(arr, chunk) {
  const result = [];

  for (let i = 0; i < arr.length; i += chunk) {
    let tempArray;
    tempArray = arr.slice(i, i + chunk);
    result.push(tempArray);
  }
  return result;
}

// 중복된 숫자 개수 구하기
function countMatchingNumbers(ticket, winning, bonus) {
  const matchingCountsArray = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < ticket.length; i++) {
    let count = 0;
    let matchingBonus = 0;
    for (let j = 0; j < ticket[i].length; j++) {
      if (winning.includes(ticket[i][j])) {
        count++;
      }

      if (ticket[i].includes(bonus)) {
        matchingBonus = 1;
      }
    }

    if (count <= 2) {
      matchingCountsArray[0] += 1;
    } else if (count === 3) {
      matchingCountsArray[1] += 1;
    } else if (count === 4) {
      matchingCountsArray[2] += 1;
    } else if (count === 5 && matchingBonus === 0) {
      matchingCountsArray[3] += 1;
    } else if (count === 5 && matchingBonus === 1) {
      matchingCountsArray[4] += 1;
    } else if (count === 6) {
      matchingCountsArray[5] += 1;
    }
    console.log("count", count, "matchingBonus", matchingBonus);
  }

  // 당첨통계 출력
  resultUnderTwo.innerHTML = matchingCountsArray[0];
  resultThree.innerHTML = matchingCountsArray[1];
  resultFour.innerHTML = matchingCountsArray[2];
  resultFive.innerHTML = matchingCountsArray[3];
  resultFiveBonus.innerHTML = matchingCountsArray[4];
  resultSix.innerHTML = matchingCountsArray[5];

  // 수익률 출력
  let totalWinningPrice =
    0 * matchingCountsArray[0] +
    5000 * matchingCountsArray[1] +
    50000 * matchingCountsArray[2] +
    1500000 * matchingCountsArray[3] +
    30000000 * matchingCountsArray[4] +
    2000000000 * matchingCountsArray[5];

  let totalTicketsPrice = 1000 * ticket.length;

  let benefit =
    ((totalWinningPrice - totalTicketsPrice) / totalTicketsPrice) * 100;
  benefit = benefit.toFixed(2);

  resultBenefit.innerHTML = benefit;
  console.log("totalWinningPrice", totalWinningPrice);
  console.log("totalTicketsPrice", totalTicketsPrice);
  console.log("benefit", benefit);

  return matchingCountsArray;
}

// 당첨번호와 뽀나스번호 표시하는 함수
function displayWinningNumbers(winningNumbers, bonusNumber) {
  winningNumberElements.forEach((element, index) => {
    element.innerHTML = winningNumbers[index];
  });
  bonusNumberElements.innerHTML = bonusNumber;
}

// 당첨번호 자동입력 버튼
function numberDraw() {
  const randomNumbersDraw = generateRandomNumbers(7);
  const winningNumbers = randomNumbersDraw.slice(0, 6);
  const bonusNumber = randomNumbersDraw[6];
  displayWinningNumbers(winningNumbers, bonusNumber);
  console.log("randomNumbersDraw", randomNumbersDraw);
}

// 다시 시작하기 버튼
function restartButton() {
  totalLottoTickets = 0;
  existingCount = 0;
  modal.style.display = "none";
  modalBg.style.display = "none";
  ticketNumbersContainer.innerHTML = "";
  ticketNumber.textContent = totalLottoTickets;
  winningNumberElements.forEach((element) => {
    element.innerHTML = "";
  });
  bonusNumberElements.innerHTML = "";
}
