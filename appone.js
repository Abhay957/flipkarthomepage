var input = document.querySelector("#input-box");
var b1 = document.querySelector("#b-one");
var b2 = document.querySelector("#b-two");
var output = document.querySelector("#out");

var fontsize = 16;
b1.addEventListener("click", () => {
    fontsize = fontsize + 2;
    output.innerText = input.value;
    output.style.fontSize = fontsize + "px";
})
b2.addEventListener("click", () => {
    fontsize = fontsize - 2;
    output.innerText = input.value;
    output.style.fontSize = fontsize + "px";
})