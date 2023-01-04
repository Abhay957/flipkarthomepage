var input = document.querySelector("#input-text");
var btn = document.querySelector("#sub-btn");
var output = document.querySelector("#out-div");
btn.disabled = true;
input.addEventListener("input",() => {
    if(input.value.length >= 10){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
})
btn.addEventListener("click", () => {
    if(input.value.length >= 10){
        output.innerText = "Success";
    }
    else{
        output.innerText = "Error";
    }
})