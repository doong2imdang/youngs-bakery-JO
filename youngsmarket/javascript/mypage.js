let iconMyPage = document.querySelector(".btn-user img");
let txtMyPage = document.querySelector(".btn-user p");
let username = document.querySelector(".username");

// 전역변수
let localUsername = localStorage.getItem("username");

// 마이 페이지일 경우
iconMyPage.src = "../images/icon-user-2.svg";
txtMyPage.style.color = "var(--color-orange)";
username.innerHTML = localUsername + "님";
