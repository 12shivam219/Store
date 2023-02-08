import display , {ge , container}from "../app.js";
// import { ge, } from "../app.js";
// import { container } from "../app.js";

let range = document.getElementById("range");
let range_val = document.getElementById("range-val");

let store = () => {

    let max = ge.map((data) => data.price);
    max = Math.max(...max);
    range.value = max;

    range_val.innerText = `$ ${range.value}`;
    range.addEventListener("input", () => {
        let valu = parseInt(range.value);
        range_val.innerText = `$ ${range.value}`

        let newStore = ge.filter((data) => data.price <= valu);
        display(newStore);

        if(newStore.length < 1) {
            container.innerHTML = `<h1 class="w-full flex justify-center text-center text-6xl font-extrabold">Not in range</h1>`
        }
    })
}


export default store;
