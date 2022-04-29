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
let operationName = '';
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
            
for(let operator of Operators){
    operator.addEventListener(function(event){
        operationName = event.target.textContent;
        console.log(operationName);
        operand1 = OutResult.textContent;
        OutResult.textContent = "0";

    });
}

Equal.addEventListener('click', function(){
    operand2 = OutResult.textContent;
});