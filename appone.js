var btn = document.querySelector("#btn-fetch");
var output = document.querySelector("#out-div");

var serverURL = "https://mock-practice.prakhar10v.repl.co/items";

btn.addEventListener("click", () => {
    fetch(serverURL)
    .then(response => response.json())
    .then(data => {
        // var array = [];
        // var name = [];
        var highestPrice = 0;
        for(var i=0;i<data.length;i++){
            if(data[i].price > highestPrice){
                var namee = data[i].item;
                highestPrice = data[i].price;
            }
        }
        output.innerText = namee + " " + highestPrice;
        
        // console.log(data.length);
        // for(var i=0;i<data.length;i++){
        //     var n = i+1;
        //     if(data[i].price > data[n].price)
        //     {
        //         output.innerText = data[i].name;
        //     }
        // }
        
    } )
})