import "../sass/style.scss";

const mainNav = document.querySelector(".main-nav");
const mainNavToggle = document.querySelector(".header__toggle");

mainNav.classList.remove("main-nav--nojs");

mainNavToggle.addEventListener('click', () => {
  const isClosed = mainNav.classList.contains("main-nav--closed");

  if (isClosed) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }
})
