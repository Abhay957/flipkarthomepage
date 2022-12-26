var inputValue = document.querySelector("#input-text");
var btn  = document.querySelector("#but");
var output = document.querySelector("#out");

var serverUrl = "https://nftbaazarapi.rawheatg.repl.co/product";

function constructURL(text){
    return serverUrl + "?" + "text=" + text;
}

function clickHandler(){
    var value = inputValue.value;
    fetch(serverUrl)
    .then(response => response.json())
    .then(data => {
        for(var i=0; i<data.data.length; i=i+1){
            if(Number(data.data[i].price) > 500){
                
                data.data[i].price.style.color = "red";
            }
        }
    })
}





btn.addEventListener("click", clickHandler);