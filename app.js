const playBtn = document.querySelector("#play");
const progressBoll = document.querySelector(".progress-boll");
const pauseBtn = document.querySelector("#pause");
var music = new Audio("music1.mp3");
const Img = document.querySelector("img");
const List = document.querySelector("#list");
const lost_sky = document.querySelector("#lost_sky");

List.addEventListener("click", ()=> {
    var list_item = document.querySelector("#list-icon");
    list_item.classList.toggle("active");
    PlayNew();
})

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

function PlayNew(){
    lost_sky.addEventListener("click", ()=>{
        music = new Audio("LostSky.mp3");
        music.play();
        pauseBtn.classList.remove("hide");
    playBtn.classList.add("hide");
    })
}