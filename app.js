var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "Kaustubh"



function clickHandler() {

    outputDiv.innerText = "asasasdssd " + txtInput.value;


}

btnTranslate.addEventListener("click", clickHandler)