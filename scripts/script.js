const cover = document.querySelector(".cover");
const profile = document.querySelector(".profile");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");

window.addEventListener("scroll", () => {
  profile.style.bottom = window.scrollY + "px";
  cover.style.backgroundPosition = `center ${-window.scrollY / 5}px`;
  nav.style.position = window.scrollY > innerHeight ? "fixed" : "unset";
  main.style.paddingTop = window.scrollY > innerHeight ? "50px" : 0;
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
    window.scroll({
      top: innerHeight*(idx+1),
      left: 0,
      behavior: "smooth",
    });
    for (i = 0; i < menus.length; i++) {
      if (i === idx) {
        menus[i].classList.add("selected");
      } else {
        menus[i].classList.remove("selected");
      }
    }
  });
});
