// get input feild id //
function getIdFromInputText (getId){
    const inputId = document.getElementById(getId);
    console.log(inputId);
    const inputValueString = inputId.value;
    const inputValue = parseFloat(inputValueString);
    inputId.value = '';
    return inputValue;
}

// get text id //

function getIdFromText(getId){
    const textId = document.getElementById(getId); 
    const textValueString = inputId.value;
    const textValue = parseFloat(inputValueString);
    textId.innerText = '';
    return textValue;
}

// set the area value in are calculate place //

function setAreaResult (elementId){
    
}