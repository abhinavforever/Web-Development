//detecting button press
var a = document.querySelectorAll(".drum").length; //this return length of array querySelectorAll
for (let i = 0; i < a; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick() {
  //'this' gives the identity of the button that was clicked. 'this.innerHTML' gives the innerHTML from the identity of the button that was clicked.
  //for eg.to change the style of the clicked button that is 'this button' do: this.style.color="white";
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}
//detecting keyboard press
// The addEventListener() is an inbuilt function in JavaScript which takes the event to listen for, and a second argument to be called whenever the described event gets fired.
//keypress is basically the event that triggered the addEventListener function
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(event) {
  switch (event) {
    case "w":
      //tom1 is an object of the Audio constructor.A constructor is a special function that creates and initializes an object instance of a class.
      //Audio has a method play() .
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttoninnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
