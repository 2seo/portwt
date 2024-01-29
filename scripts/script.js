const cover = document.querySelector(".cover");
const profile = document.querySelector(".profile");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");
const section = main.querySelectorAll(".container section");

window.addEventListener("scroll", () => {
  profile.style.bottom = window.scrollY + "px";
  cover.style.backgroundPosition = `center ${-window.scrollY / 5}px`;
  nav.style.position = window.scrollY > innerHeight ? "fixed" : "unset";
  main.style.paddingTop = window.scrollY > innerHeight ? "50px" : 0;
  if (scrollY === 0) {
    movePercents(false);
  } else if (scrollY >innerHeight*0.5) {
    movePercents(true);
  }
  if (scrollY<innerHeight+section[0].scrollHeight) {
    selectMenu(0);
  } else if(scrollY<innerHeight+section[0].scrollHeight+section[1].scrollHeight){
    selectMenu(1);
  } else {
    selectMenu(2);
  }
});

const toggle = document.querySelector(".menu-toggle");
let isOff = true;
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
      top: innerHeight * (idx + 1),
      left: 0,
      behavior: "smooth",
    });
    selectMenu(idx);
    if (idx === 0) {
      movePercents(true);
    } else {
      movePercents(false);
    }
  });
});

const selectMenu = (idx) => {
  for (i = 0; i < menus.length; i++) {
    if (i === idx) {
      menus[i].classList.add("selected");
    } else {
      menus[i].classList.remove("selected");
    }
  }
}

const percents = document.querySelectorAll(".skill-bar span");
const movePercents = (isMove) => {
  if (isMove) {
    percents.forEach((p) => {
      p.style.width = p.innerHTML;
      p.style.backgroundColor = p.classList;
    });
  } else {
    percents.forEach((p) => {
      p.style.width = 0;
      p.style.backgroundColor = "inherit";
    });
  }
};
