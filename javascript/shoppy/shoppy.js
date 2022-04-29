let Outline = document.getElementById("button");
let Hide = document.getElementById("menuList");
let photos = document.getElementsByClassName("image1");
let Btn1 = document.getElementsByTagName("button")[1];
let Btn2 = document.getElementsByTagName("button")[0];

let index = 0;
console.log(photos.length);
Outline.addEventListener("click",function(){
    const Block = document.getElementById("menuList");
        Block.classList.toggle("hide")
});
Hide.addEventListener("click", function(){
    const Block = document.getElementById("menuList");
    Block.classList.toggle("hide")
});
// for(let i=0; i<photos.length; i++){
//     photos[i].style.display = "none";
// }
function show() {
    for (let i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";
    //   dots[i].classList.remove("active");
    }
    // dots[index].classList.add("active");
    photos[index].style.display = "block";
  }
photos[index].style.display = "block";
Btn1.addEventListener("click", function(){
    index++;
    if(index>photos.length-1){
        // index = photos.length;
        index = 0;
    }
    show(index);
    console.log(index);
});


Btn2.addEventListener("click", function(){
    index--;
    if(index<0){
        index = photos.length-1;

    }
    show(index);
    console.log(index);
});

  
//   init();
  show();
  setInterval(function () {
    index++;
    if (index >= photos.length) {
      index = 0;
    }
    show(index);
  }, 3000);