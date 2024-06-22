let btnPurchasing = document.querySelector(".btn-purchasing");
let btnSales = document.querySelector(".btn-sales");
let loginForm = document.querySelector(".login-form");

// 전역 변수
let loginType = "BUYER";
let username = "";
let password = "";
const URL = "https://openmarket.weniv.co.kr/";

// 입력값 변경 감지
function handleInputChange(event) {
  const { id, value } = event.target;

  if (id === "input-id") {
    username = value;
  } else if (id === "input-pw") {
    password = value;
  }
}

// 로그인 회원 유형 선택 버튼
function btnPurchasingClick() {
  loginType = "BUYER";
  ("member-check-sales");
  btnPurchasing.classList.add("member-check-btn");
  btnSales.classList.remove("member-check-btn");
  loginForm.classList.add("member-check-purchasing");
  loginForm.classList.remove("member-check-sales");
}

function btnSalesClick() {
  loginType = "SELLER";
  btnSales.classList.add("member-check-btn");
  btnPurchasing.classList.remove("member-check-btn");
  loginForm.classList.add("member-check-sales");
  loginForm.classList.remove("member-check-purchasing");
}
