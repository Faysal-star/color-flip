const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    // const randomNumber = Math.floor(Math.random()*3);
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let hexc = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    document.body.style.backgroundColor = hexc;
    color.textContent = hexc;
    color.style.color = hexc;

});