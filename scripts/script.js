const cover = document.querySelector(".cover");
const profile = document.querySelector(".profile");

window.addEventListener("scroll", ()=>{
    profile.style.bottom = window.scrollY+"px";
    cover.style.backgroundPosition = `center ${-window.scrollY*0.7}px`;
})