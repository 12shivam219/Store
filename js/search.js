
import { container } from "../app.js";
import { images } from "../object.js";

let qe = document.querySelectorAll(".img");
let ser = document.getElementById("search");
let qt;

let serchh = () => {
    ser.addEventListener("input", () => {
        qe.forEach((el) => {
            let inpval = ser.value;
            console.log(el,"el");
            console.log(inpval);
            console.log(document.getElementsByClassName("bsb")[0]);
            qt = el.getElementsByClassName("bsb")[0].innerHTML;
            if (qt.includes(inpval)) {
                el.style.display = "block";
            }
            else {
                el.style.display = "none";
            }
        })
    })
}

serchh();

let al = document.getElementsByClassName("all");
let ikea = document.getElementsByClassName("ik");
let marc = document.getElementsByClassName("mar");
let car = document.getElementsByClassName("car");
let lid = document.getElementsByClassName("lid");

let fil = images.filter((data) => {
    return (data.span == "BY IKEA");
})

let mar = images.filter((data) => {
    return (data.span == "BY MARCOS");
})

let care = images.filter((data) => {
    return (data.span == "BY CARESSA");
})

let lidd = images.filter((data) => {
    return (data.span == "BY LIDDY");
})

al[0].addEventListener("click", () => {
    container.innerHTML = images.map((data) => {
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
                <p class="tracking-wide text-base bsb">${data.title}</p>
                <span class="text-xl font-bold">'$ ${data.price}'</span>
            </div>
        </footer>
    </div>
`)
    }).join(" ");


})

ikea[0].addEventListener("click", () => {

    container.innerHTML = fil.map((data) => {
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
                <p class="tracking-wide text-base bsb">${data.title}</p>
                <span class="text-xl font-bold">'$ ${data.price}'</span>
            </div>
        </footer>
    </div>
    `)
    }).join('');
    ser.addEventListener("input", () => {
        document.querySelectorAll(".img").forEach((ele) => {
            let inpval = ser.value;
            qt = ele.getElementsByClassName("bsb")[0].innerHTML;
            if (qt.includes(inpval)) {
                ele.style.display = "block";
            }
            else {
                ele.style.display = "none";
            }
        }
        )
    })
})

marc[0].addEventListener("click", () => {

    container.innerHTML = mar.map((data) => {
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
                <p class="tracking-wide text-base bsb">${data.title}</p>
                <span class="text-xl font-bold">'$ ${data.price}'</span>
            </div>
        </footer>
    </div>
    `)
    }).join(" ");

    ser.addEventListener("input", () => {
        document.querySelectorAll(".img").forEach((ele) => {
            let inpval = ser.value;
            qt = ele.getElementsByClassName("bsb")[0].innerHTML;
            if (qt.includes(inpval)) {
                ele.style.display = "block";
            }
            else {
                ele.style.display = "none";
            }
        }
        )
    })
})

car[0].addEventListener("click", () => {

    container.innerHTML = care.map((data) => {
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
                <p class="tracking-wide text-base bsb">${data.title}</p>
                <span class="text-xl font-bold">'$ ${data.price}'</span>
            </div>
        </footer>
    </div>
    `)
    }).join('');

    ser.addEventListener("input", () => {
        document.querySelectorAll(".img").forEach((ele) => {
            let inpval = ser.value;
            qt = ele.getElementsByClassName("bsb")[0].innerHTML;
            if (qt.includes(inpval)) {
                ele.style.display = "block";
            }
            else {
                ele.style.display = "none";
            }
        }
        )
    })
})

lid[0].addEventListener("click", () => {

    container.innerHTML = lidd.map((data) => {
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
                <p class="tracking-wide text-base bsb">${data.title}</p>
                <span class="text-xl font-bold">'$ ${data.price}'</span>
            </div>
        </footer>
    </div>
    `)
    }).join('');

    ser.addEventListener("input", () => {
        document.querySelectorAll(".img").forEach((ele) => {
            let inpval = ser.value;
            qt = ele.getElementsByClassName("bsb")[0].innerHTML;
            if (qt.includes(inpval)) {
                ele.style.display = "block";
            }
            else {
                ele.style.display = "none";
            }
        }
        )
    })
})