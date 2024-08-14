let userTxt = document.querySelector(".user-txt");
let btnUser = document.querySelector(".btn-user");
let mainLogo = document.querySelector(".main-logo");
let speechBubble = document.querySelector(".speech-bubble");
let goMyPage = document.querySelector(".go-mypage");
let logout = document.querySelector(".logout");
let btnShoppingCart = document.querySelector(".btn-shopping-cart");
let btnSellerCenter = document.querySelector(".btn-seller-center");

// 전역변수
token = localStorage.getItem("token");
let count = 1;
let userType = localStorage.getItem("userType");

// 유저 버튼 텍스트 업데이트 함수
function updateUserButton() {
  if (userType === "BUYER") {
    btnShoppingCart.style.display = "block";
    btnSellerCenter.style.display = "none";
    speechBubble.style.right = "260px";
  } else if (userType === "SELLER") {
    btnShoppingCart.style.display = "none";
    btnSellerCenter.style.display = "flex";
    speechBubble.style.right = "470px";
  }

  if (!token) {
    userTxt.innerHTML = "로그인";
    btnUser.addEventListener("click", () => {
      location.href = "http://127.0.0.1:5500/youngsmarket/pages/login.html";
    });
    btnShoppingCart.style.display = "block";
    btnSellerCenter.style.display = "none";
  } else {
    userTxt.innerHTML = "마이페이지";
    btnUser.addEventListener("click", () => {
      speechBubble.style.display = "block";
      count++;
      if (count % 2 === 1) {
        speechBubble.style.display = "none";
      }

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
