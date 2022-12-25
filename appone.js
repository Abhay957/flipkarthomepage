const inputBox = document.querySelector("#input-text");
const h1Btn = document.querySelector("#h1");
const h2Btn = document.querySelector("#h2");
const h3btn = document.querySelector("#h3");
const outpu = document.querySelector("#output");

inputBox.addEventListener("input", () => {
    outpu.innerText = inputBox.value;
});


h1Btn.addEventListener('click', () => {
    outpu.innerHTML = `<h1>${inputBox.value}</h1>`
});

h2Btn.addEventListener('click', () => {
    outpu.innerHTML = '<h2>${inputBox.value}</h2>'
});