var input = document.querySelector("#input-text");
var green = document.querySelector("#btn-green");
var blue = document.querySelector("#btn-blue");
var output = document.querySelector("#out-div");

input.addEventListener("input",() => {
    output.innerText = input.value;
})

green.addEventListener("click",() => {
    // output.style.color = "green";
    output.classList.add("green");
})

blue.addEventListener("click",() => {
    // output.style.color = "blue";
    output.classList.add("blue");
})