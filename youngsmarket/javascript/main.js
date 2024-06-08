let btnLeftSwiper = document.querySelector(".btn-left-swiper");
let btnRightSwiper = document.querySelector(".btn-right-swiper");
let imagesBox = document.querySelector(".images-box");
let images = document.querySelectorAll(".image-slider img");
let dots = document.querySelectorAll(".dot");

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
  updateDots();
}

// 이미지슬라이더 이전버튼
function moveToPreviousImage() {
  if (click > 0) {
    click--;
  } else {
    click = images.length - 1;
  }
  totalWidth = click * outerWidth;
  imagesBox.style.transform = `translateX(-${totalWidth}px)`;
  updateDots();
}

//이미지슬라이더 자동 넘기기
let autoSlide = setInterval(moveToNextImage, 3000);

// 이미지슬라이더 마우스이벤트
imagesBox.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

imagesBox.addEventListener("mouseleave", () => {
  autoSlide = setInterval(moveToNextImage, 3000);
});

// 이미지에 맞는 dot active
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.remove("dot-active");
    if (index === click) {
      console.log(index, click);
      dot.classList.add("dot-active");
    }
  });
}

// dot클릭으로 이미지 선택
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    click = index;
    totalWidth = click * outerWidth;
    imagesBox.style.transform = `translateX(-${totalWidth}px)`;
    updateDots();
  });
});
