let btnPurchasing = document.querySelector(".btn-purchasing");
let btnSales = document.querySelector(".btn-sales");
let loginForm = document.querySelector(".login-form");
let inputId = document.getElementById("input-id");
let inputPw = document.getElementById("input-pw");
let errorMessage = document.querySelector(".login-error");

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

// 로그인 post 요청
function handleSubmit(event) {
  event.preventDefault();

  fetch(URL + "accounts/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      login_type: loginType,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
      if (data.token) {
        inputId.value = "";
        inputPw.value = "";
        location.href = "http://127.0.0.1:5500/youngsmarket/pages/main.html";
      } else {
        errorMessage.innerHTML = `<p>아이디 또는 비밀번호가 일치하지 않습니다.</p>`;
      }
    })
    .catch((error) => console.error("Error:", error));
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
