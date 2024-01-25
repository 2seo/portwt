const profile = document.querySelector(".profile");

window.addEventListener("scroll", ()=>{
    profile.style.bottom = window.scrollY+"px";
})