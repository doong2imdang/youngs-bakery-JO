let btnPurchasing = document.querySelector(".btn-purchasing");
let btnSales = document.querySelector(".btn-sales");
let loginForm = document.querySelector(".login-form");

// 로그인 회원 유형 선택 버튼
btnPurchasing.addEventListener("click", () => {
  btnPurchasing.classList.add("member-check-btn");
  btnSales.classList.remove("member-check-btn");
  loginForm.classList.add("member-check-purchasing");
  loginForm.classList.remove("member-check-sales");
});

btnSales.addEventListener("click", () => {
  btnSales.classList.add("member-check-btn");
  btnPurchasing.classList.remove("member-check-btn");
  loginForm.classList.add("member-check-sales");
  loginForm.classList.remove("member-check-purchasing");
});
