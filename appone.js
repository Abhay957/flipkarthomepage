var input = document.querySelector("#input-box");
var bone = document.querySelector("#b-one");
var btwo = document.querySelector("#b-two");
var bthree = document.querySelector("#b-three");
var output = document.querySelector("#out");

bone.addEventListener("click", () => {
    output.innerText = input.value;
    output.style.color = "green";
})

btwo.addEventListener("click", () => {
    output.innerText = input.value;
    output.style.color = "red";
})

bthree.addEventListener("click", () => {
    output.innerText = input.value;
    output.style.color = "blue";
})