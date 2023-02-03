let nav_short = document.getElementById("nav-short");
nav_short.addEventListener("click",()=> {
    document.getElementById("toggler").classList.toggle("nav-toggler");
})

let toggle_short = document.getElementById("toggle-short");
toggle_short.addEventListener("click",()=> {
    document.getElementById("toggler").classList.remove("nav-toggler");
})

let cart=document.getElementById("nav-cart");

cart.addEventListener("click",()=> {
    document.getElementById("side").classList.toggle("side-overlay");
})

let cart_short=document.getElementById("side-short");
cart_short.addEventListener("click",()=>{
    document.getElementById("side").classList.remove("side-overlay");
})


let loader=document.querySelector(".preloader");
window.addEventListener("load",()=> {
    loader.style.display="none";
})