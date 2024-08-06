let btnPurchasing = document.querySelector(".btn-purchasing");
let btnSales = document.querySelector(".btn-sales");
let signupForm = document.querySelector(".signup-form");
let businessNumberBox = document.querySelector(".business-number-box");
let storeNameBox = document.querySelector(".store-name-box");

// 전역변수
let signupType = "BUYER";

// 회원가입 회원 유형 선택 버튼
function btnPurchasingClick() {
  signupType = "BUYER";
  btnPurchasing.classList.add("member-check-btn");
  btnSales.classList.remove("member-check-btn");
  signupForm.classList.add("member-check-purchasing");
  signupForm.classList.remove("member-check-sales");
  businessNumberBox.style.display = "none";
  storeNameBox.style.display = "none";
}

function btnSalesClick() {
  signupType = "SELLER";
  btnSales.classList.add("member-check-btn");
  btnPurchasing.classList.remove("member-check-btn");
  signupForm.classList.add("member-check-sales");
  signupForm.classList.remove("member-check-purchasing");
  businessNumberBox.style.display = "block";
  storeNameBox.style.display = "block";
}
