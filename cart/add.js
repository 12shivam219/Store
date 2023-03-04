let cart_main = document.getElementById("cart-main");
let parent, child1, child2, child3, gett, del, d;

let all = document.querySelectorAll(".add");
console.log(all);

let sh=document.getElementById("sh");

let count=0;

for (let f of all) {
    f.addEventListener("click", (e) => {
        count++;
        sh.textContent=count;
        gett = localStorage.getItem('cart');
        if (gett == null) {
            gett = [];
        }
        else {
            gett = JSON.parse(gett);
        }

        parent = e.target.parentElement.parentElement.parentElement.parentElement;
        child1 = parent.children[0].src;
        child2 = parent.children[2].children[0].firstElementChild.innerText;
        child3 = parent.children[2].children[0].lastElementChild.innerText;

        if (gett.some(function (x) {
            return x.Image == child1;
        })) {
            alert("Duplicate");
        }
        else {
            gett.push({
                Image: child1,
                title: child2,
                price: child3
            })
        }
        localStorage.setItem("cart", JSON.stringify(gett))
        add_cart();
    })
}

let add_cart = () => {
    gett = localStorage.getItem('cart');
    if (gett == null) {
        gett = [];
    }
    else {
        gett = JSON.parse(gett);
    }
    if (gett.length != 0) {

        cart_main.innerHTML = gett.map((element, index) => {
            return (`
            <div class="flex justify-evenly items-center py-3">
            <div class="w-20 h-16">
                <img src=${element.Image} alt="" class="w-full h-full rounded-lg">
            </div>
            <div class="leading-3">
                <h1 class="text-lg">${element.title}</h1>
                <span class="block mt-1.5">${element.price}</span>
                <button class="my-2 remov" id="${index}">remove</button>
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
        </div>`);
        }).join(' ');
    }

    else {
        cart_main.innerHTML = "Nothing to show !";
    }
}

add_cart();

del = document.querySelectorAll(".remov");

for (let btn of del) {
    btn.addEventListener("click", (e) => {
        count--;
        sh.textContent=count;
        let index = Array.from(e.target.closest(".flex").parentElement.children).indexOf(e.target.closest(".flex"));
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        add_cart();
    });
}


