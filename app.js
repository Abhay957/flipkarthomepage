var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/yoda.json";

function constructUrl(text){
    return url + "?" + "text=" + text;
}

function callHeader(){
    var input = inputText.value;

    fetch(constructUrl(input))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
}

btnTranslate.addEventListener("click", callHeader);
