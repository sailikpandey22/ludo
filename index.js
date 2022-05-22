var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);
// console.log(randomNumber1);

var images = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
// document
//   .querySelector(".img1")
//   .setAttribute("src", "images/dice[randomNumber1].png");

document.getElementById("img1").src = images[randomNumber1];

document.getElementById("img2").src = images[randomNumber2];
