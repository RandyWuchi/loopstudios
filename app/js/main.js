const menuBtn = document.querySelector(".header__toggle");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("animate");
  overlay.classList.toggle("open");
  body.classList.toggle("no-scroll");
  if (overlay.classList.contains("open")) {
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  } else {
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  }
});
