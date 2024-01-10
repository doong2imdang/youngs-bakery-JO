const amountInput = document.getElementById("amount-input");
const depositButton = document.querySelector(".deposit-button");
const balanceDisplay = document.querySelector(".balance");
const walletDisplay = document.querySelector(".wallet");
const returnButton = document.querySelector(".return-button");
const drinkButtons = document.querySelectorAll(".drink-item button");
const selectedDrinksContainer = document.querySelector(".selected-drinks");

let balance = 25000;

depositButton.addEventListener("click", function () {
  const depositAmount = parseInt(amountInput.value.replaceAll(",", ""));
  if (
    !isNaN(depositAmount) &&
    depositAmount > 0 &&
    balance > 0 &&
    depositAmount <= balance
  ) {
    balance -= depositAmount;
    balanceDisplay.innerText =
      (
        parseInt(balanceDisplay.innerText.replaceAll(",", "")) + depositAmount
      ).toLocaleString() + "원";
    walletDisplay.innerText = balance.toLocaleString() + "원";

    amountInput.value = "";
  } else {
    alert("유효한 입금 금액을 입력하세요!");
    amountInput.value = "";
  }
});

amountInput.addEventListener("keyup", function (e) {
  let value = e.target.value;
  value = Number(value.replaceAll(",", ""));
  const formatValue = value.toLocaleString();
  amountInput.value = formatValue;
});

returnButton.addEventListener("click", function () {
  balance += parseInt(balanceDisplay.innerText.replaceAll(",", ""));
  balanceDisplay.innerText = "0원";
  walletDisplay.innerText = balance.toLocaleString() + "원";
});

drinkButtons.forEach(function (drinkButton) {
  drinkButton.addEventListener("click", function () {
    const drinkName = drinkButton.querySelector(".drink-name").innerText;

    const existingSelectedDrink = selectedDrinksContainer.querySelector(
      `.selected-drink[data-drink="${drinkName}"]`
    );

    if (existingSelectedDrink) {
      const stockElement = existingSelectedDrink.querySelector(
        ".selected-stock strong"
      );
      let stockCount = parseInt(stockElement.innerText);
      stockElement.innerText = stockCount + 1;
    } else {
      const selectedDrinkElement = document.createElement("div");
      selectedDrinkElement.classList.add("selected-drink");
      selectedDrinkElement.setAttribute("data-drink", drinkName);

      selectedDrinkElement.innerHTML = `
        <img src="./images/${drinkName}.svg" alt="" />
        <span>${drinkName}</span>
        <div class="selected-stock">
          <strong>1</strong>
        </div>
      `;
      selectedDrinksContainer.appendChild(selectedDrinkElement);
    }
  });
});
