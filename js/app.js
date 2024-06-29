const footerTitle = document.querySelectorAll(".footer__title");
const footerList = document.querySelectorAll(".footer__list");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu__list");
const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuShadow = document.querySelector(".menu--close");
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
for (let i = 0; i < footerTitle.length; i++) {
  footerTitle[i].addEventListener("click", () => {
    footerList[i].classList.toggle("footer__list-open");
  });
}

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--open");
});
burger.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
  body.classList.toggle("menu--open");
});

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--open");
  body.classList.toggle("menu--open");
  menuShadow.classList.toggle("menu--open");
});
menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__list--open");
  body.classList.toggle("menu--open");
  menuShadow.classList.remove("menu--open");
});
