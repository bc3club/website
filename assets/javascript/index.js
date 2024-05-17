// hide header on scroll
const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.style.top = "-100px";
  } else {
    header.style.top = "0px";
  }
  lastScrollY = window.scrollY;
});
