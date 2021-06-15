// // Variables
// var randomNumber1 = Math.floor(Math.random() * 6 + 1);
// var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// // first dice roll
// function diceRoll1 (randomNumber1) {
//   if (randomNumber1 === 1) {
//     document.querySelector("img").setAttribute("src", "./images/dice1.png");
//   } else if (randomNumber1 === 2) {
//     document.querySelector("img").setAttribute("src", "./images/dice2.png");
//   } else if (randomNumber1 === 3) {
//     document.querySelector("img").setAttribute("src", "./images/dice3.png");
//   } else if (randomNumber1 === 4) {
//     document.querySelector("img").setAttribute("src", "./images/dice4.png");
//   } else if (randomNumber1 === 5) {
//     document.querySelector("img").setAttribute("src", "./images/dice5.png");
//   } else if (randomNumber1 === 6) {
//     document.querySelector("img").setAttribute("src", "./images/dice6.png");
//   } else {
//     alert("Oops! That number isn't on the dice. Try again!");
//   }

//   return diceRoll1;
// }

// // second dice roll
// function diceRoll2(randomNumber2) {
//   if (randomNumber2 === 1) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
//   } else if (randomNumber2 === 2) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
//   } else if (randomNumber2 === 3) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
//   } else if (randomNumber2 === 4) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
//   } else if (randomNumber2 === 5) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
//   } else if (randomNumber2 === 6) {
//     document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
//   } else {
//     alert("Oops! That number isn't on the dice. Try again!");
//   }

//   return diceRoll2
// }

// // Change h1 based on player who scores most

// function playerScores(){
//   if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
//   } else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
//   } else if (randomNumber1 === randomNumber2) {
//     document.querySelector("h1").textContent = "Draw!";
//   } else {
//     document.querySelector("h1").textContent = "Refresh Me";
//   }
// }

// diceRoll1(randomNumber1);

// diceRoll2(randomNumber2);

// playerScores(diceRoll1, diceRoll2);

var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}