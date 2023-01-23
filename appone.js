let random = Math.floor(Math.random()*3);
let cg = ["s","w","g"];
cg = cg[random];
let ug = prompt("Enter your guesss");
const match = (cg,ug) => {
    if(cg == ug){
        return "tie";
    }
    else if(cg == "s" && ug == "w"){
        return "Computer wins";
    }
    else if(cg == "s" && ug == "g"){
        return "User wins";
    }
    else if(cg == "w" && ug == "s"){
        return "User wins";
    }
    else if(cg == "w" && ug == "g"){
        return "Computer wins";
    }
    else if(cg == "g" && ug == "s"){
        return "Computer wins";
    }
    else if(cg == "g" && ug == "w"){
        return "User wins";
    }
}
let result = match(cg,ug);
document.write(`Result is ${result}`);































// let random = Math.floor(Math.random()*3);
// let cg = ["s","w","g"];
// cg = cg[random];
// let ug = prompt("Enter either snake water or gun");

// const match = (cg,ug) => {
//     if(cg == ug){
//         return "tie";
//     }
//     else if(cg == "s" && ug == "w"){
//         return "Computer wins!";
//     }
//     else if(cg == "s" && ug == "g"){
//         return "User wins";
//     }
//     else if(cg == "w" && ug == "s"){
//         return "User wins";
//     }
//     else if(cg == "w" && ug == "g"){
//         return "Computer wins";
//     }
//     else if(cg == "g" && ug == "s"){
//         return "Computer wins";
//     }
//     else if(cg == "g" && ug == "w"){
//         return "User wins";
//     }
// }
// let result = match(cg,ug);
// document.write(`Computer played: ${cg} \n user played: ${ug}\n Hence ${result} the match`);