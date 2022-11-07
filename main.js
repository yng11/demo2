const header = document.querySelector("header");
const menuBtn = document.querySelector("input");
const navMo = document.querySelector(".nav-mo");

menuBtn.addEventListener("click", function () {
  navMo.classList.toggle("active");
  header.classList.toggle("active");
});
