let hour = 00;
let min = 00;
let sec = 00;
let OutputHour = document.getElementById('hour');
let OutputMin = document.getElementById('min');
let OutputSec = document.getElementById('sec');
let buttonStart = document.getElementById('btnStart');
let buttonStop = document.getElementById('btnStop');
let buttonReset = document.getElementById('btnReset');
let Interval;
console.log(OutputHour);
console.log(OutputMin);

buttonStart.addEventListener("click", ()=> {
    clearInterval(Interval);
    Interval = setInterval(startTime, 1000)
});
buttonStop.addEventListener("click", ()=> {
    clearInterval(Interval);
    
});
buttonReset.addEventListener("click", ()=> {
    clearInterval(Interval);
    hour = "00";
    min = "00";
    sec = "00";
    OutputHour.innerHTML = hour;
    OutputMin.innerHTML = min;
    OutputSec.innerHTML = sec;
});

function startTime(){
    sec++;
    if(sec <= 9){
        OutputSec.innerHTML = "0" + sec;
       
    }else {document.getElementById("sec").innerHTML = sec;} 
    if(sec>59){
        min++;
        OutputMin.innerHTML = "0" + min;
        sec = "0";
    }          
}