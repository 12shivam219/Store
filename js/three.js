import { ge } from "../app";

let n = document.getElementById("foot-imgs");
let f = document.getElementById("ff");
let f_i = document.getElementsByClassName("foot");

let r = ge.filter((data) => {
    return (data.id === 1 || data.id === 2 || data.id === 3)
})
n.innerHTML = r.map((data) => {
    return (`<div class="img">
    <img src=${data.image} alt="" class="f-img">
    <div class="btns">
        <div class="btns-in">
            <div class="search-btn">
           <i class="imgg fas fa-search"id=${data.id}></i>
            </div>
            <div class="cart-btn">  
                <i class="fas fa-shopping-cart add"></i>
            </div>
        </div>
    </div>
    <footer>
        <div class="block mt-4 text-center">
            <p class="tracking-wide text-base">${data.title}</p>
            <span class="text-xl font-bold">'$ ${data.price}'</span>
        </div>
    </footer>
</div>`)
}).join('') ;

let imge = document.querySelectorAll(".imgg");
for (let jk of imge) {
    jk.addEventListener("click", function (eve) {
        let evs = eve.target;
        f_i[0].style.display = "none";
        let new_div = document.createElement("div");
        new_div.setAttribute("class", "des flex w-4/5 h-full m-auto pt-12 relative")
        let e = ge.filter((data) => data.id == evs.id)
        new_div.innerHTML = e.map((data) => {
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
                        <button><a href="#">ADD TO CART</a></button>
                    </div>
                    </div>
                    <div class="can absolute right-0 top-12">
                    <span ><a href="index.html"><i class="fas fa-times text-4xl text-orange-800"  ></i></a> </span>
                </div>`);
        })
        f.appendChild(new_div);

    })
}
