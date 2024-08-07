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
let isDoubleChecked = false;
let isChecked = false;
let isPhoneNumber = false;
let isUsername = false;

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
  const inputIdValue = document.getElementById("input-id").value;

  // 정규 표현식을 사용하여 유효성 검사
  const idPattern = /^[a-zA-Z0-9]{1,20}$/;

  if (idPattern.test(inputIdValue)) {
    idError.style.display = "none";
    isUsername = true;
  } else {
    idError.innerHTML =
      "ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.";
    idError.style.display = "block";
    isUsername = false;
  }

  if (inputIdValue.length == 0) {
    idError.style.display = "none";
    isUsername = false;
  }

  console.log(isUsername);
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
        isDoubleChecked = false;
      } else {
        idError.innerHTML = data.Success;
        idError.style.display = "block";
        isDoubleChecked = true;
      }
      console.log(isDoubleChecked);
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

// 비밀번호 check
function onInputPw2() {
  const inputPwValue = document.getElementById("input-pw").value;
  const inputPwCheckValue = document.getElementById("input-pw-check").value;
  const pw2Error = document.querySelector(".pw2-error");

  console.log(inputPwValue, inputPwCheckValue, pw2Error);

  if (inputPwValue === inputPwCheckValue) {
    pw2Error.style.display = "block";
    pw2Error.innerHTML = "비밀번호가 일치합니다.";
  } else {
    pw2Error.style.display = "block";
    pw2Error.innerHTML = "비밀번호가 일치하지 않습니다.";
  }

  if (inputPwCheckValue.length <= 0) {
    pw2Error.style.display = "none";
  }
}

// 이름
function onInputName() {
  const inputNameValue = document.getElementById("input-name").value;
  const nameError = document.querySelector(".name-error");

  if (inputNameValue.length > 0) {
    nameError.style.display = "none";
  }
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

// 휴대폰 번호 숫자만 가능
function validateInput(event) {
  const phoneNumberValues = document.querySelectorAll("#input-phone-number");
  const input = event.target;
  input.value = input.value.replace(/[^0-9]/g, "");
  const phoneNumberError = document.querySelector(".phone-number-error");

  const secondNum = phoneNumberValues[0].value.length;
  const thirdNum = phoneNumberValues[1].value.length;
  console.log(secondNum + thirdNum);

  if (secondNum + thirdNum < 7 && secondNum + thirdNum > 0) {
    phoneNumberError.innerText =
      "핸드폰번호는 01*으로 시작해야 하는 10~11자리 숫자여야 합니다.";
    phoneNumberError.style.display = "block";
    isPhoneNumber = false;
  } else {
    phoneNumberError.style.display = "none";
    isPhoneNumber = true;
  }

  console.log(isPhoneNumber);
}

// 체크 박스
function handleCheckBoxBtn() {
  const btnAgreeImage = document.querySelector(".btn-agree img");

  if (isChecked) {
    btnAgreeImage.src = "../images/icon-check-box.svg";
  } else {
    btnAgreeImage.src = "../images/icon-check-fill-box.svg";
  }
  isChecked = !isChecked;
}

// 가입하기 버튼
function handleSignup(event) {
  event.preventDefault();

  // 입력 데이터
  const username = document.getElementById("input-id").value;
  const password = document.getElementById("input-pw").value;
  const confirmPassword = document.getElementById("input-pw-check").value;
  const name = document.getElementById("input-name").value;
  const phoneNumberFirst = document.querySelector(".selected-value").innerText;
  const phoneNumber = document.querySelectorAll("#input-phone-number");
  const email = document.querySelectorAll("#input-email");

  // 휴대폰, 이메일
  const phone = `${phoneNumberFirst}${phoneNumber[0].value}${phoneNumber[1].value}`;
  const emailComplete = `${email[0].value}@${email[1].value}}`;

  // 에러
  const idError = document.querySelector(".id-error");
  const pwError = document.querySelector(".pw-error");
  const pwCheckError = document.querySelector(".pw2-error");
  const nameError = document.querySelector(".name-error");
  const phoneNumberError = document.querySelector(".phone-number-error");

  // 입력 데이터 객체 생성
  const signupData = {
    username: username,
    password: password,
    password2: confirmPassword,
    phone_number: phone,
    name: name,
  };

  if (isDoubleChecked && isChecked && isPhoneNumber && isUsername) {
    fetch(URL + "accounts/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.username) {
          idError.innerText = data.username[0];
          idError.style.display = "block";
        }

        if (data.password) {
          pwError.innerText = data.password[0];
          pwError.style.display = "block";
        }

        if (data.password2) {
          pwCheckError.innerText = data.password2[0];
          pwCheckError.style.display = "block";
        }

        if (data.name) {
          nameError.innerText = data.name[0];
          nameError.style.display = "block";
        }

        if (data.phone_number) {
          phoneNumberError.innerText = data.phone_number[0];
          phoneNumberError.style.display = "block";
        }
      });
  }
}
