const amountInput = document.getElementById("amount-input");
const depositButton = document.querySelector(".deposit-button");
const balanceDisplay = document.querySelector(".balance");
const walletDisplay = document.querySelector(".wallet");

let balance = 25000;

depositButton.addEventListener("click", function () {
  const depositAmount = parseInt(amountInput.value);
  if (!isNaN(depositAmount) && depositAmount > 0) {
    balance -= depositAmount;
    balanceDisplay.innerText =
      (parseInt(balanceDisplay.innerText) + depositAmount).toLocaleString() +
      "원";
    walletDisplay.innerText = balance.toLocaleString() + "원";

    amountInput.value = "";
  } else {
    alert("유효한 입금 금액을 입력하세요!");
    amountInput.value = "";
  }
});
