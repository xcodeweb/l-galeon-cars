document.addEventListener("DOMContentLoaded", () => {
  burger.init();
});

const burger = {
  menu: document.querySelector(".header__menu-top"),
  openBtn: document.querySelector(".burger"),
  closeBtn: document.querySelector(".header__menu-top-close"),
  menuClass: ".header__menu-top",
  burgerClass: ".burger",
  openClass: "header__menu-top--open",
  init() {
    const burgerButtons = [this.openBtn, this.closeBtn];
    burgerButtons.forEach((el) => {
      el.addEventListener("click", burger.burgerAction);
    });
    document.addEventListener("click", burger.burgerClose);
  },
  burgerAction() {
    burger.menu.classList.toggle(burger.openClass);
  },
  burgerClose(el) {
    if (!el.target.closest(burger.menuClass) && !el.target.closest(burger.burgerClass)) {
      burger.menu.classList.remove(burger.openClass);
    }
  }
};

export default burger;
