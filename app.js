export let container = document.getElementById("img-container");
import { images } from "./object";

export let ge = localStorage.getItem("store");
localStorage.setItem("store", JSON.stringify(images));

if (ge == null) {
    ge = []
}
else {
    ge = JSON.parse(ge);
}


let display = (ge) => {
    container.innerHTML = ge.map((data) => {
        return (`<div class="img">
        <img src=${data.image} alt="">
        <div class="btns">
            <div class="btns-in"> 
                <div class="search-btn">
                <i class="fas fa-search" id=${data.id}></i>
                </div>
                <div class="cart-btn">
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
        <footer>
            <div class="block mt-4 text-center">
                <p class="tracking-wide text-base">${data.title}</p>
                <span class="text-xl font-bold">'$ ${data.price}'</span>
            </div>
        </footer>
    </div>
`)
    }).join('');
}

export default display;