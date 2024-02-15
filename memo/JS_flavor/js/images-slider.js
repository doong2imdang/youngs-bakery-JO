const sliderMain = document.querySelector(".slider-main");
const sliderImages = document.querySelector(".slider-images");
const sliderLis = sliderImages.querySelectorAll("li");
const controlBtns = document.querySelector(".control-btns");
const bulletContainer = document.querySelector(".bullet-container");
const bullets = document.querySelectorAll(".bullet");

const liWidth = sliderLis[0].clientWidth;
const sliderWidth = liWidth * sliderLis.length;

let currentIdx = 0;
let translate = 0;

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    currentIdx = index;
    translate = -liWidth * currentIdx;
    updateSlider();
  });
});

const onControlBtnClick = (e) => {
  if (e.target.className === "next-btn") {
    if (currentIdx < sliderLis.length - 1) {
      currentIdx++;
      translate -= liWidth;
    }
  } else if (e.target.className === "previous-btn") {
    if (currentIdx > 0) {
      currentIdx--;
      translate += liWidth;
    }
  }
  updateSlider();
};

const updateSlider = () => {
  sliderImages.style.transform = `translateX(${translate}px)`;
  bullets.forEach((bullet, index) => {
    if (index === currentIdx) {
      bullet.classList.add("active");
    } else {
      bullet.classList.remove("active");
    }
  });
};

controlBtns.addEventListener("click", onControlBtnClick);
