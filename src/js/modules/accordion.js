"use strict";

// accBody - accordion container
// accItem - accordion item-button
// accHide - hide class (default "none")
// accContent - content class
// accHideOption - true/false hide all content
// accActive - true/false acc active
// accActiveClass - active item class

class Accordion {
  constructor(accBody, accItem, accHide, accContent, accHideOption, accActive, accActiveClass) {
    this.accBody = document.querySelectorAll("." + accBody);
    this.accItem = "." + accItem;
    this.accHide = accHide;
    this.accContent = "." + accContent;
    this.accHideOption = accHideOption;
    this.accActive = accActive;
    this.accActiveClass = accActiveClass;
    this.#init();
  }
  #init() {
    this.accBody.forEach((el) => {
      el.querySelectorAll(this.accItem).forEach((el) => {
        el.addEventListener("click", (el) => {
          if (this.accHideOption) {
            document.querySelectorAll(this.accContent).forEach((el) => {
              el.classList.add(this.accHide);
            });
          }
          if (this.accActive) {
            document.querySelectorAll(this.accItem).forEach((el) => {
              el.classList.remove(this.accActiveClass);
            });
            el.target.classList.add(this.accActiveClass)
          }
          const accTarget = el.target.nextElementSibling;
          accTarget.classList.toggle(this.accHide);
        });
      });
    });
  }
}

export default Accordion;
