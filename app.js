const playBtn = document.querySelector("#play");
const progressBoll = document.querySelector(".progress-boll");
const pauseBtn = document.querySelector("#pause");
const music = new Audio("music1.mp3");
const Img = document.querySelector("img");
playBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    progressBoll.classList.add("move");
    Img.classList.add("rotate");
    music.play();
    pauseBtn.classList.remove("hide");
    playBtn.classList.add("hide");
});

pauseBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    progressBoll.classList.remove("move");
    //var music = new Audio("music1.mp3");
    Img.classList.remove("rotate");
    music.pause();
    pauseBtn.classList.add("hide");
    playBtn.classList.remove("hide");
});