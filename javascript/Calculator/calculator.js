let OutOne = document.getElementById("one");
let OutResult = document.getElementById("result");
let Numbers = document.getElementsByClassName("number");
let Operators = document.getElementsByClassName("operator");
let Equal = document.getElementById("equal");
let Clear = document.getElementById("clear");
let sum;
let operand1 =0;
let operand2 =0;
let displayNumber ='';
let result = '';
let lastOperation = '';
// console.log(OutOne);

for(let i=0; i<Numbers.length; i++){
    Numbers[i].addEventListener("click", function(event){
        if(OutResult.innerHTML==0){
            OutResult.innerHTML=null;
        }
        if(Numbers[i].innerHTML===event.target.innerHTML){
            displayNumber +=event.target.innerHTML;
            OutResult.innerHTML = displayNumber;
            // console.log(OutResult);
        }
    });
}
// sum = parseInt(OutResult.innerHTML);
            
for(let i=0; i<Operators.length; i++){
    Operators[i].addEventListener("click", function(event){
        let operationName = event.target.innerHTML;
            // console.log(event.target.innerHTML);
            // displayNumber=result;
            if(displayNumber && lastOperation){
                matOperation();
            } else {
                result =parseInt(displayNumber);
                console.log(result);
            }
            clearVar(operationName);
            lastOperation = operationName;
            OutResult.innerHTML = result;

    });
}

function clearVar(name){
    OutResult.innerHTML='';
    displayNumber='';
}
function matOperation(){
    if(lastOperation === '+'){
        result = parseInt(result) + parseInt(displayNumber);
        console.log(result);

    }else if(lastOperation === '-'){
        result = parseInt(result) - parseInt(displayNumber);
    }
    if(lastOperation === '*'){
        result = parseInt(result) * parseInt(displayNumber);
        console.log(result);

    }
    if(lastOperation === '/'){
        result = parseInt(result) / parseInt(displayNumber);
    }
    if(lastOperation === '%'){
        result = parseInt(result) % parseInt(displayNumber);
    }
}
Equal.addEventListener("click", function(){
    matOperation();
    clearVar();
    OutResult.innerHTML = result;
    console.log(result);
    
});
Clear.addEventListener("click", function(){
    OutResult.innerHTML = '0';
    result= '';
    displayNumber = '';
    lastOperation ='';
    operationName='';
});