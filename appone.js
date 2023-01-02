var input = document.querySelector("#input-box");
var btn = document.querySelector("#sub");
var output = document.querySelector("#out");
btn.disabled = true;

input.addEventListener("input", () => {
    if(input.value.length >= "10"){
    btn.disabled = false;
    input.style.backgroundColor = "red";
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


