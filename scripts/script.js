const cover = document.querySelector(".cover");
const profile = document.querySelector(".profile");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  profile.style.bottom = window.scrollY + "px";
  cover.style.backgroundPosition = `center ${-window.scrollY / 5}px`;
  nav.style.position = window.scrollY > innerHeight ? "fixed" : "unset";
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

const thank = document.querySelector(".like");
thank.addEventListener("click", () => {
  alert("Thank You! ( •̀ .̫ •́ )✧");
});

const menus = document.querySelectorAll(".nav-inner span");
menus.forEach((_, idx) => {
  menus[idx].addEventListener("click", () => {
    window.scrollTo(0, innerHeight);
    for (i = 0; i < menus.length; i++) {
      if (i === idx) {
        menus[i].classList.add("selected");
      } else {
        menus[i].classList.remove("selected");
      }
    }
  });
});
