var inputOne = document.querySelector("#input-one");
var inputTwo = document.querySelector("#input-two");
var btn = document.querySelector("#sub");
var paswrd = document.querySelectorAll(".password");
btn.disabled = true;

inputOne.addEventListener("input", () => {
    console.log(inputOne.value);
})


// for(var i=0;i<paswrd.length; i++){
//     paswrd[i].addEventListener("input", () => {
//        if(inputOne.value === inputTwo.value){
//         btn.disabled = false;
//        }
//        else{
//         btn.disabled = true;
//        }
//     })  
// }