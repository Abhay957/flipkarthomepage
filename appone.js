var btn = document.querySelector("#btn-click");
var output = document.querySelector("#out-div");
var output2 = document.querySelector("#out-divv");
var data = [
    {
        name:"Abhgay",
        age:23,
        gender:"male"
    },
    {
        name:"ramdevi",
        age:136,
        gender:"male"
    },
    {
        name:"ANNANANAnnn",
        age:34,
        gender:"female"
    }
];
btn.addEventListener("click",() => {
    for(var i=0;i<data.length;i++){
        if(data[i].name.length > 5 && data[i].age > 18 ){
             
            if(data[i].gender === "male"){
                output.innerText += data[i].name + "\n";
                output.style.color = "red";

            }
            else{
                output2.innerText += data[i].name + "\n";
                output2.style.color = "blue";
            }
        } 
    }
})