var btn = document.querySelector("#btn-check");
var output = document.querySelector("#out-div");
var output2 = document.querySelector("#out-divv");

var data = [
    {
        name:"Abhayaaa",
        age:23,
        gender:"male"
    },
    {
        name:"ccmcccccca",
        age:23,
        gender:"female"
    },
    {
        name:"Abhayaaa",
        age:3,
        gender:"mddale"
    }
]

btn.addEventListener("click", () => {
    for(var i=0;i<data.length;i++){
        if(data[i].name.length > 5 && data[i].age > 18){
            if(data[i].gender === "male"){
                output.innerText += data[i].name + "\n";
                output.style.color = "red";
            }
            else{
                output.innerText += data[i].name + "\n";
                output.style.color = "blue";
            }
        }
    }
})
