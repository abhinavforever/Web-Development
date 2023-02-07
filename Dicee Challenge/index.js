var randomnumber = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").classList.add("r");
if (randomnumber == 1) {
  document.querySelector(".r").setAttribute("src", "images/dice1.png");
} else if (randomnumber == 2) {
  document.querySelector(".r").setAttribute("src", "images/dice2.png");
} else if (randomnumber == 3) {
  document.querySelector(".r").setAttribute("src", "images/dice3.png");
} else if (randomnumber == 4) {
  document.querySelector(".r").setAttribute("src", "images/dice4.png");
} else if (randomnumber == 5) {
  document.querySelector(".r").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".r").setAttribute("src", "images/dice6.png");
}

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").classList.add("r2");
if (randomnumber2 == 1) {
  document.querySelector(".r2").setAttribute("src", "images/dice1.png");
} else if (randomnumber2 == 2) {
  document.querySelector(".r2").setAttribute("src", "images/dice2.png");
} else if (randomnumber2 == 3) {
  document.querySelector(".r2").setAttribute("src", "images/dice3.png");
} else if (randomnumber2 == 4) {
  document.querySelector(".r2").setAttribute("src", "images/dice4.png");
} else if (randomnumber2 == 5) {
  document.querySelector(".r2").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".r2").setAttribute("src", "images/dice6.png");
}

if (randomnumber>randomnumber2){
  document.querySelector("h1").textContent="Player 1 wins";
}
else if(randomnumber2>randomnumber){
  document.querySelector("h1").textContent="Player 2 wins";
}
else{
  document.querySelector("h1").textContent="Draw";

}