var inputTxt = document.querySelector('#txt-input');
var btnTrans = document.querySelector('#btn-translate');
var outputTxt = document.querySelector('#txt-output');


var URL = "https://api.funtranslations.com/translate/minion.json";

function getURL(txt){
    return URL + "?text=" + txt;
}

function errorHandler(error){
    alert("Sorry for inconvinience, there's some problem in fetching API")
    console.log("hey there")
}

function emptyText(){
    alert("Kindly input some text to translate");
}


function clickHandler(){
    var txt = inputTxt.value;

    if(txt.length == 0){
        emptyText();
    }
    else{
        fetch(getURL(txt))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputTxt.innerText = translatedTxt;
        })
        .catch(errorHandler)
    }
}

btnTrans.addEventListener("click", clickHandler);