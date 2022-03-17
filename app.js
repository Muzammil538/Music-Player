const Ur_Name = document.querySelector("#name");
const nme_is = prompt("What is your name ");
localStorage.setItem("MAM_Name", nme_is);
Ur_Name.innerHTML = localStorage.getItem("MAM_Name");