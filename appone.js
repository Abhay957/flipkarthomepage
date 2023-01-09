var bone = document.querySelector("#one");
var btwo = document.querySelector("#two");
var bthree = document.querySelector("#three");
var para = document.querySelector("#para");

bone.addEventListener("click",() => {
    para.style.fontFamily = 'Roboto', "sans-serif";
})

btwo.addEventListener("click",() => {
    para.style.fontFamily = 'Seymour One', "sans-serif";
})

bthree.addEventListener("click", () => {
    para.style.fontFamily = 'East Sea Dokdo', "cursive";
})