// hero section moving cursor script

const hero = document.getElementById("hero");
let hideTimer;

hero.addEventListener("mousemove", e=>{
    hero.style.setProperty("--x", e.clientX+"px");
    hero.style.setProperty("--y", e.clientY+"px");
    hero.style.setProperty("--size", "180px");

    clearTimeout(hideTimer);
    hideTimer=setTimeout(()=>{
        hero.style.setProperty("--size","0px");
    },400);
});

hero.addEventListener("mouseleave", ()=>{
    hero.style.setProperty("--size","0px");
});
