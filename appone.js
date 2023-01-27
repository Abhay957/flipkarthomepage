let jokes = ["What do you call a boomerang that won’t come back? A stick","What does a cloud wear under his raincoat?Thunderwear","What time is it when the clock strikes 13?Time to get a new clock","How does a cucumber become a pickle?It goes through a jarring experience","What did one toilet say to the other?You look a bit flushed"];
let random = Math.floor(Math.random()*jokes.length);
jokes = jokes[random];

setInterval(() => {
    document.getElementById("jk").innerHTML = `${jokes}`;
    document.getElementById("jk").classList.toggle("bulb-container");
},100);