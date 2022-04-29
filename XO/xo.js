let playerclick = document.getElementsByClassName("boxs");
let box1 = document.getElementById("box1");
// console.log(playerclick);
let count = 0;
let point1 = 0;
let point2 = 0;
let pointSum = 0;
let pointSum2=0
let i=0;
// playerclick[0].children[0].classList.add("circle");
console.log(playerclick.length);

for (let i=0; i<playerclick.length; i++){
    playerclick[i].addEventListener("click", ()=>{
        count++;
        // add();
        console.log("index", i);
        console.log("point", point1);
        if(i==0){
            point1 = 2;
            point2 = 2;
        } else if(i==1){
            point1 = 7;
            point2 = 7;
        }else if(i==2){
            point1 = 6;
            point2 = 6;
        }else if(i==3){
            point1 = 9;
            point2 = 9; 
        }else if(i==4){
            point1 = 5;
            point2 = 5;
        }else if(i==5){
            point1 = 1;
            point2 = 1;
        }else if(i==6){
            point1 = 4;
            point2 = 4;
        }else  if(i==7){
            point1 = 3;
            point2 = 3;
        }else if(i==8){
            point1 = 8;
            point2 = 8;
        }
        if(count%2==1){
            playerclick[i].children[0].classList.add("circle");
            pointSum += point1;
            // console.log(parseInt(i+1));
            console.log("niilber", pointSum);
        }else{
            playerclick[i].children[0].classList.add("x");
            pointSum2 += point2;
        }
        cheack();
        
    });
}
function cheack(){
        if(pointSum === 15){
            console.log("Ylagch O");
            // alert("Win O");
        document.getElementById("winner").style.display = "flex";
        document.getElementById("winnerName").textContent = "O";
        document.getElementById("main").style.display = "none";

        }else if(pointSum2 === 15) {
            console.log("Ylagch X");
            // alert("Win X");
        document.getElementById("winner").style.display = "flex";
        document.getElementById("winnerName").textContent = "X";
        document.getElementById("main").style.display = "none";

        } else if(count==9){
            document.getElementById("winner").style.display = "flex";
            document.getElementById("winnerName").textContent = "Tentssen";
            document.getElementById("main").style.display = "none";
            }
       

}
// function add(){
    
// }

