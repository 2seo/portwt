const cover = document.querySelector(".cover");
const profile = document.querySelector(".profile");
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  profile.style.bottom = window.scrollY + "px";
  cover.style.backgroundPosition = `center ${-window.scrollY /5}px`;
  nav.style.display = window.scrollY>innerHeight ? "block" : "none";
});

const toggle = document.querySelector(".menu-toggle");
let isOff = false;
toggle.addEventListener("click", () => {
  isOff = !isOff;
  document.documentElement.setAttribute(
    "color-theme",
    isOff ? "light" : "dark"
  );
});

const thank = document.querySelector(".like")
thank.addEventListener('click', () => {
    alert("Thank You! ( •̀ .̫ •́ )✧");
})

