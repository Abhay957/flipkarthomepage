var inp = document.querySelector("#input");
var h1 = document.querySelector("#h1");
var output = document.querySelector("#out");
var h2 = document.querySelector("#h2");
var h3 = document.querySelector("#h3");


h1.addEventListener("click", () => {
    output.innerText = inp.value;
    output.style.fontSize = "32px";
})

h2.addEventListener("click", () => {
    output.innerText = inp.value;
    output.style.fontSize = "24px";
})

h3.addEventListener("click", ()=> {
    output.innerText = inp.value;
    output.style.fontSize = "18.72px";
})