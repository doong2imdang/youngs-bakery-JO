let btnPurchasing = document.querySelector(".btn-purchasing");
let btnSales = document.querySelector(".btn-sales");
let signupForm = document.querySelector(".signup-form");
let businessNumberBox = document.querySelector(".business-number-box");
let storeNameBox = document.querySelector(".store-name-box");
let selectBoxUl = document.querySelector(".select-box ul");
let btnArrow = document.querySelector(".btn-arrow");

// 전역변수
let signupType = "BUYER";
let URL = "https://openmarket.weniv.co.kr/";

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

// 아이디 input
function onInputId() {
  const idError = document.querySelector(".id-error");
  idError.style.display = "none";
}

// 아이디 중복 확인
function handleUsernameDoubleCheckClick() {
  const inputId = document.getElementById("input-id").value;
  const idError = document.querySelector(".id-error");

  fetch(URL + "accounts/signup/valid/username/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: inputId,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.FAIL_Message) {
        idError.innerHTML = data.FAIL_Message;
        idError.style.display = "block";
      } else {
        idError.innerHTML = data.Success;
        idError.style.display = "block";
      }
    });

  console.log(inputId, idError);
}

// 비밀번호
function onInputPw() {
  const inputPwValue = document.getElementById("input-pw").value;
  const pwError = document.querySelector(".pw-error");

  if (inputPwValue.length < 8 && inputPwValue.length > 0) {
    pwError.style.display = "block";
    pwError.innerHTML = "비밀번호는 8자 이상, 영소문자를 포함해야 합니다.";
  } else {
    pwError.style.display = "none";
  }
  console.log(inputPwValue);
}

// 휴대폰 시작하는 번호
function handleFirstPhoneNumberBtnClick() {
  if (selectBoxUl.style.display === "block") {
    selectBoxUl.style.display = "none";
    btnArrow.classList.remove("btn-arrow-active");
  } else {
    selectBoxUl.style.display = "block";
    btnArrow.classList.add("btn-arrow-active");
  }
}

// 휴대폰 옵션 선택
function handleOptionClick(event) {
  const selectedValue = event.target.innerText;
  document.querySelector(".selected-value").innerText = selectedValue;
  selectBoxUl.style.display = "none";
  btnArrow.classList.remove("btn-arrow-btn");
}
