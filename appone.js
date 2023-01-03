
var buyPrice = document.querySelector("#buying-price");
var Name = document.querySelector("#stock-name");
var output = document.querySelector("#out");
var btn = document.querySelector("#fetch");

 var serverURL = "https://stock-api.desaihetav.repl.co/current-price/";

 function constructURL(stoc){
    return serverURL + stoc;
 }

 btn.addEventListener("click", () => {
    var stockname = Name.value;
    stockname = stockname.toUpperCase();
    fetch(constructURL(stockname))
    .then(Response => Response.json())
    .then(json => {
        var crntPrice = json.current_price;
        var price =  Number(buyPrice.value);
        if(crntPrice > price){
            var rsult = crntPrice - price;
            output.innerText = "You are currently in profit of " + rsult;
        }
        else{
            rsult = price - crntPrice;
            output.innerText = "You are currently in loss of " + rsult;
        }
    })
    .catch(erroe => output.innerText = "Error!")
 })