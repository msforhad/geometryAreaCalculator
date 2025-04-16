// document.getElementsByClassName('.caclculate-1').addEventListener('click', function(){
//     const triangleInputValue1 = getIdFromInputText ('triangle-input1');
//     const triangleInputValue2 = getIdFromInputText ('triangle-input2');

//     const triangleAreaValue = 0.5*triangleInputValue1*triangleInputValue2;

//     const addText = document.getElementById('add-text');
//     addText.innerText = '1.Triangle';
//     const addTriangleAreaValue = document.getElementById('add-triangle-area-value');
//     addTriangleAreaValue.innerText = triangleAreaValue;

//     const addCm = document.getElementById('add-cm');
//     addCm.innerText = "\u33a0"
//     alert("forhad")

    // const addBtn = document.getElementById('add-btn');
    // addBtn = 'convert m^2'


     
    // const addPTag = document.createElement('p');
    // const addBtnTag = document.createElement('button');
    // addBtnTag.innerText = 'convert "\u33A1"'
    //  addPTag.innerText= '1. Triangle , triangleAreaValue,"\u33A0" , addBtnTag' ;

    //  const areaPlaceId = getIdFromText('calculate-area');
    
    // calculate-area.appendChild(addPTag);
    
// })

function areaCalculate(id1,in1,in2,text){
    const triangleInputValue1 = getIdFromInputText (in1);
    const triangleInputValue2 = getIdFromInputText (in2);
    if(id1==='tr'){
        const triangleAreaValue = 0.5*triangleInputValue1*triangleInputValue2;
        addDisplay(triangleAreaValue,text)
    }else if(id1==='re'){
        const triangleAreaValue = triangleInputValue1*triangleInputValue2;
        addDisplay(triangleAreaValue,text)
    }else if(id1==='pa'){
        const triangleAreaValue =triangleInputValue1*triangleInputValue2;
        addDisplay(triangleAreaValue,text)
    }else if(id1==='rh'){
        const triangleAreaValue =0.5*triangleInputValue1*triangleInputValue2;
        addDisplay(triangleAreaValue,text)
    }else if(id1==='pe'){
        const triangleAreaValue =0.5*triangleInputValue1*triangleInputValue2;
        addDisplay(triangleAreaValue,text)
    }else if(id1==='el'){
        const triangleAreaValue =3.1416*triangleInputValue1*triangleInputValue2;
        addDisplay(triangleAreaValue,text)
    }

}
   
function addDisplay(val1,val2){
    // const addText = document.getElementById('p1');
    // addText.innerText = '1.Triangle';
    // const addTriangleAreaValue = document.getElementById('p1');
    // addTriangleAreaValue.innerText = val;

    // const addCm = document.getElementById('add-cm');
    // addCm.innerText = "\u33a0"

    // const addBtn = document.getElementById('add-btn');
    // addBtn = 'convert m^2'


    const element = document.getElementById('div1');
    const child = document.getElementById('p1');
    const areaName = document.getElementById(val2);
    const areaText = areaName.innerText;

    const addPTag = document.createElement('p');
    const addNode = document.createTextNode(areaText + val1 + "\u33a0")
    addPTag.appendChild(addNode);

    
    
    element.insertBefore(addPTag,child);
    // const addBtnTag = document.createElement('button');
    // addBtnTag.innerText = 'convert "\u33A1"'
    //  addPTag.innerText= '1. Triangle , val,"\u33A0" , addBtnTag' ;

    //  const areaPlaceId = getIdFromText('calculate-area');
    
    // calculate-area.appendChild(addPTag);
}

