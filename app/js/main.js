const menuBtn = document.querySelector(".header__toggle");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("animate");
  overlay.classList.toggle("open");
});
