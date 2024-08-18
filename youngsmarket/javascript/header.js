let userTxt = document.querySelector(".user-txt");
let btnUser = document.querySelector(".btn-user");
let mainLogo = document.querySelector(".main-logo");
let speechBubble = document.querySelector(".speech-bubble");
let goMyPage = document.querySelector(".go-mypage");
let logout = document.querySelector(".logout");

// 전역변수
token = localStorage.getItem("token");

// 유저 버튼 텍스트 업데이트 함수
function updateUserButton() {
  if (!token) {
    userTxt.innerHTML = "로그인";
    btnUser.addEventListener("click", () => {
      location.href = "http://127.0.0.1:5500/youngsmarket/pages/login.html";
    });
  } else {
    userTxt.innerHTML = "마이페이지";
    btnUser.addEventListener("click", () => {
      speechBubble.style.display = "block";

      goMyPage.addEventListener("click", () => {
        location.href = "http://127.0.0.1:5500/youngsmarket/pages/mypage.html";
      });

      logout.addEventListener("click", () => {
        window.localStorage.removeItem("token");
        location.reload();
      });
    });
  }
}
updateUserButton();

mainLogo.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/youngsmarket/pages/main.html";
});
