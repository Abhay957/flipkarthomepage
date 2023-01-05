var inputText = document.querySelector("#input-text");
var inputNumber = document.querySelector("#input-number");
var btn = document.querySelector("#sub-btn");
var output = document.querySelector("#out-div");

btn.addEventListener("click",() => {
    if(inputNumber.value % 2 === 0){
        for(var i=0;i<inputNumber.value;i++){
            output.innerText += inputText.value + "\n";
            output.style.color = "red";
        }
    }
    else{
        for(var i=0;i<inputNumber.value;i++){
            output.innerText += inputText.value + "\n";
            output.style.color = "blue";
        }
    }
    
}  )