const cover = document.querySelector(".cover");
const profile = document.querySelector(".profile");
const toggle = document.querySelector("button");

window.addEventListener("scroll", () => {
  profile.style.bottom = window.scrollY + "px";
  cover.style.backgroundPosition = `center ${-window.scrollY * 0.7}px`;
});

let isOff = false;
toggle.addEventListener("click", () => {
  isOff = !isOff;
  document.documentElement.setAttribute(
    "color-theme",
    isOff ? "light" : "dark"
  );
});
