// *********image1********

function myFunction(){
let number1 = Math.floor((Math.random()*6)+1);
let dice1 = "dice" + number1 +".png";
let image1 = "images/" + dice1;
let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src" , image1);



let number2 = Math.floor((Math.random()*6)+1);
let dice2 = "dice" + number2 +".png";
let image2 = "images/" + dice2;
let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src" , image2);


if (number1>number2){
    document.querySelector("h1").innerHTML="🚩 player 1 won" ;
}
else if(number2>number1){
        document.querySelector("h1").innerHTML="🚩 player 2 won" ;
}
else{
    document.querySelector("h1").innerHTML="match draw" ;
 }

};