const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
var music = new Audio();

playBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    music.play(`${playBtn.parentElement}`);
    pauseBtn.classList.remove("hide");
    playBtn.classList.add("hide");
});

pauseBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    //var music = new Audio("music1.mp3");
    music.pause();
    pauseBtn.classList.add("hide");
    playBtn.classList.remove("hide");
});


alert("Hello")