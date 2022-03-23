const sliderHeader = document.querySelector(".header__slider");
const slide = document.querySelectorAll(".header__slider-slide");
const arrowLeft = document.querySelector(".arrows__left");
const arrowRight = document.querySelector(".arrows__right");

function swipeInit() {
  let x, y, endX, endY;
  arrowLeft.addEventListener("click", swipeLeft);
  arrowRight.addEventListener("click", swipeRight);
  sliderHeader.addEventListener("mousedown", (e) => {
    e.preventDefault();
    x = e.clientX;
    y = e.clientY;
  });
  sliderHeader.addEventListener("mouseup", (e) => {
    endX = e.clientX;
    endY = e.clientY;
    handlerCarousel(x, endX);
  });
  sliderHeader.addEventListener("touchstart", (e) => {
    e.preventDefault();
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  });
  sliderHeader.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;
    handlerCarousel(x, endX);
  });
}

swipeInit();

function handlerCarousel(x, endX) {
  if (x < endX) swipeRight();
  if (x > endX) swipeLeft();
}

function swipeLeft() {
  slide.forEach((el) => {
    if (el.dataset.pos < -1) {
      el.dataset.pos = 2;
    } else {
      el.dataset.pos--;
    }
  });
}

function swipeRight() {
  slide.forEach((el) => {
    if (el.dataset.pos > 1) {
      el.dataset.pos = -2;
    } else {
      el.dataset.pos++;
    }
  });
}
