let userTxt = document.querySelector(".user-txt");
let btnUser = document.querySelector(".btn-user");

// 전역변수
token = localStorage.getItem("token");

// 유저 버튼 텍스트 업데이트 함수
function updateUserButton() {
  if (!token) {
    btnUser.addEventListener("click", () => {
      location.href = "http://127.0.0.1:5500/youngsmarket/pages/login.html";
    });
  } else {
    userTxt.innerHTML = "마이페이지";
    btnUser.addEventListener("click", () => {
      location.href = "http://127.0.0.1:5500/youngsmarket/pages/mypage.html";
    });
  }
}
updateUserButton();
