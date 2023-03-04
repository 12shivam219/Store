import { ge } from "../app.js";
let main = document.getElementById("m");
let con = document.getElementsByClassName("m-in")

let search = document.querySelectorAll(".search-btn");

for (let se of search) {
    se.addEventListener("click", function (e) {
        let ev = e.target;
        con[0].style.display="none";
        let div = document.createElement("div");
        div.setAttribute("class", "des")
        let ne = ge.filter((data) => data.id == ev.id)
        div.innerHTML = ne.map((data) => {
            return (`
    <div class="des-Img">
    <img src=${data.image} alt="">
    </div>
    <div class="des-Img">
    <div class="des-h1">
        <h1 class="text-4xl font-mono">${data.title}</h1>
        <span class="text-xl text-pink-200">${data.span}</span>
    </div>
    <div class="pr my-4">
        <span class="text-2xl">${data.price}</span>
    </div>
    <div class="dots block w-full h-full">
        <span class="bg-orange-500"></span>
        <span class="bg-blue-400"></span>
    </div>
    <div class="des-para my-6">
    <p class="w-3/4">${data.desc}</p></div>
    <div class="add-btn">
        <button class='addd'>ADD TO CART</button>
    </div>
    </div>`);
        })
        main.appendChild(div);
    })
}

