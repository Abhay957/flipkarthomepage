var input = document.querySelector("#input-number");
var btn = document.querySelector("#btn-check");
var output = document.querySelector("#out-div");

function automorphic(){
    var inp = input.value;
        if(inp.includes("a"))
        {
            output.innerText = "Auto";
        }
        else if(inp.includes("e"))
        {
            output.innerText = "Auto";
        }
        else if(inp.includes("i"))
        {
            output.innerText = "Auto";
        }
        else if(inp.includes("o"))
        {
            output.innerText = "Auto";
        }
        else if(inp.includes("u"))
        {
            output.innerText = "Auto";
        }
        else{
            output.innerText = "Basic";
        }
            
}




btn.addEventListener("click", automorphic)