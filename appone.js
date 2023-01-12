var input = document.querySelector("#input-text");
var btn = document.querySelector("#btn-sub");
var output = document.querySelector("#out-div");

btn.addEventListener("click",() => {
    output.innerHTML = `<p><strong style="color:blue" >${input.value}</strong>${" " + input.value.length}</p>`;
})