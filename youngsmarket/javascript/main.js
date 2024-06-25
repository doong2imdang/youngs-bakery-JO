let btnLeftSwiper = document.querySelector(".btn-left-swiper");
let btnRightSwiper = document.querySelector(".btn-right-swiper");
let imagesBox = document.querySelector(".images-box");
let images = document.querySelectorAll(".image-slider img");

// 전역변수
let outerWidth = document.body.offsetWidth;
let totalWidth = 0;
let click = 0;

window.addEventListener("resize", function () {
  outerWidth = document.body.offsetWidth;
});

// 이미지슬라이더 다음버튼
function moveToNextImage() {
  click = (click + 1) % images.length;
  totalWidth = click * outerWidth;
  imagesBox.style.transform = `translateX(-${totalWidth}px)`;
}

// 이미지슬라이더 이전버튼
function moveToPreviousImage() {
  if (click > 0) {
    click--;
  } else {
    click = 4;
  }
  totalWidth = click * outerWidth;
  imagesBox.style.transform = `translateX(-${totalWidth}px)`;
}
