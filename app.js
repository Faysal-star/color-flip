const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    // const randomNumber = Math.floor(Math.random()*3);
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let rgb = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = rgb;
    color.textContent = rgb;
    color.style.color = rgb ;

});