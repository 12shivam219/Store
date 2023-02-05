let ne_arr = [];
let cart_main = document.getElementById("cart-main");


let all = document.querySelectorAll(".add");
for (let f of all) {
    f.addEventListener("click", (e) => {
        cart_main.innerHTML += `
        <div class="flex justify-evenly items-center py-3">
        <div class="w-20 h-16">
            <img src="./img/1.jpg" alt="" class="w-full h-full rounded-lg">
        </div>
        <div class="leading-3">
            <h1 class="text-lg">High-Back Bench</h1>
            <span class="block mt-1.5">9.99</span>
            <button class="my-2">remove</button>
        </div>
        <div class="flex flex-col justify-between h-16">
            <div class="text-xl">
                <i class="fas fa-chevron-up"></i>
            </div>
            <p></p>
            <div class="text-xl">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    </div>`
    })
}


