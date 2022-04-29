let buttonStart = document.getElementById('btn');
let boxclick1 = document.getElementById("box1");
let boxclick2 = document.getElementById("box2");
let boxclick3 = document.getElementById("box3");
let boxclick4 = document.getElementById("box4");
let boxclick5 = document.getElementById("box5");
let boxclick6 = document.getElementById("box6");

// let random_color1;
let a;
let random_color1;
let random_color2 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
let random_color3 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
let random_color4 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
let random_color5 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
let random_color6 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
let random_color7 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
let random_color8 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
let random_color9 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");


buttonStart.addEventListener("click", RandomColor);
function RandomColor(){
random_color1 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) +  ")");
random_color2 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
random_color3 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
random_color4 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
random_color5 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
random_color6 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
random_color7 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
random_color8 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
random_color9 = ("rgba(" + Math.floor(Math.random() * 255)
+ "," + Math.floor(Math.random() * 255) + ","
+ Math.floor(Math.random() * 255) + ")");
// let trans = ("(" +"all" + 0.6 + "ease-in-out" + ")");
document.getElementById('box1').style.backgroundColor = random_color1;
document.getElementById('box1').innerHTML = random_color1;

document.getElementById('box2').style.backgroundColor = random_color2;
document.getElementById('box2').innerHTML = random_color2;

document.getElementById('box3').style.backgroundColor = random_color3;
document.getElementById('box3').innerHTML = random_color3;

document.getElementById('box4').style.backgroundColor = random_color4;
document.getElementById('box4').innerHTML = random_color4;

document.getElementById('box5').style.backgroundColor = random_color5;
document.getElementById('box5').innerHTML = random_color5;

document.getElementById('box6').style.backgroundColor = random_color6;
document.getElementById('box6').innerHTML = random_color6;

document.getElementById('box7').style.backgroundColor = random_color7;
document.getElementById('box7').innerHTML = random_color7;

document.getElementById('box8').style.backgroundColor = random_color8;
document.getElementById('box8').innerHTML = random_color8;

document.getElementById('box9').style.backgroundColor = random_color9;
document.getElementById('box9').innerHTML = random_color9;

// document.getElementById('box1').style.transition ;
return random_color1;
}
boxclick1.addEventListener("click", clickbox1)
function clickbox1(){
    console.log(random_color1);
}
function clickbox2(){
    console.log(random_color2);
}
function clickbox3(){
    console.log(random_color3);
}
function clickbox4(){
    console.log(random_color4);
}
function clickbox5(){
    console.log(random_color5);
}


