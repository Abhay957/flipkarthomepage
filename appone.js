var p = document.querySelector("#ppp");
var bone = document.querySelector("#b-one");
var btwo = document.querySelector("#b-two")
var bthree = document.querySelector("#b-three");

bone.addEventListener("click",() => {
    p.style.fontFamily = "'Rubik Bubbles', cursive";
})

btwo.addEventListener("click", () => {
    p.style.fontFamily = "'Roboto', sans-serif";
})

bthree.addEventListener("click",() => {
    p.style.fontFamily = "'Montserrat', sans-serif";
})