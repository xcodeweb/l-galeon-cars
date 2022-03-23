window.addEventListener("resize", createSliderC);

function createSliderC() {
  let slidesCount = adaptSlides();
  let slidesPadding = adaptPadding();
  function adaptSlides() {
    if (window.innerWidth < 900) {
      return 1;
    } else {
      return 3;
    }
  }

  function adaptPadding() {
    if (window.innerWidth < 900) {
      return 0;
    } else {
      return 15;
    }
  }
  const swiperC = new Swiper(".catalog .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".catalog .swiper-pagination",
      type: "progressbar"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".catalog .arrows__right",
      prevEl: ".catalog .arrows__left"
    },
    slidesPerView: slidesCount,
    spaceBetween: slidesPadding
  });
}

createSliderC()

const swiperR = new Swiper(".reviews .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".reviews .swiper-pagination",
    type: "progressbar"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".reviews .arrows__right",
    prevEl: ".reviews .arrows__left"
  },
  slidesPerView: 1,
  spaceBetween: 15
});

function catalogProgressBar() {
  const bar = document.querySelector(".catalog .swiper-pagination-progressbar-fill");
  let barX = bar.getAttribute("style");
  const pseudoBar = document.querySelector(".catalog .arrow__bar");
  pseudoBar.setAttribute("style", barX);
  progressBar(bar, barX, pseudoBar);
}

function reviewsProgressBar() {
  const bar = document.querySelector(".reviews .swiper-pagination-progressbar-fill");
  let barX = bar.getAttribute("style");
  const pseudoBar = document.querySelector(".reviews .arrow__bar");
  pseudoBar.setAttribute("style", barX);
  progressBar(bar, barX, pseudoBar);
}

function progressBar(bar, barX, pseudoBar) {
  bar.addEventListener("transitionstart", () => {
    barX = bar.getAttribute("style");
    pseudoBar.setAttribute("style", barX);
  });
}

function reviewsSwitchInit() {
  const config = {
    attributes: true
  };
  const mut = new MutationObserver(reviewsSwitch);
  const slides = document.querySelector(".reviews .swiper-slide");
  mut.observe(slides, config);

  const active = document.querySelector(".reviews .swiper-slide-active");
  const activeLabel = +active.getAttribute("aria-label")[0] - 1;
  const review = document.querySelectorAll(".reviews__clients-item");
  review[activeLabel].querySelector(".reviews__clients-content").classList.add("reviews__clients-content--active");
}

function reviewsSwitch() {
  const active = document.querySelector(".reviews .swiper-slide-active");
  const review = document.querySelectorAll(".reviews__clients-item");
  const activeLabel = +active.getAttribute("aria-label")[0] - 1;
  review.forEach((el) => {
    el.querySelector(".reviews__clients-content").classList.remove("reviews__clients-content--active");
  });
  review[activeLabel].querySelector(".reviews__clients-content").classList.add("reviews__clients-content--active");
}

function progressBarInit() {
  catalogProgressBar();
  reviewsProgressBar();
}

progressBarInit();
reviewsSwitchInit();
