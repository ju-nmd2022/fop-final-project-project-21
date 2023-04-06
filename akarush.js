// photo carousel for the first player
let i = 0;
const slideElement = document.getElementById("firstPlayerOverall");

let images = [];
images[0] = "images/ovve-colours/ovve-colours-01.png";
images[1] = "images/ovve-colours/ovve-colours-02.png";
images[2] = "images/ovve-colours/ovve-colours-03.png";
images[3] = "images/ovve-colours/ovve-colours-04.png";
images[4] = "images/ovve-colours/ovve-colours-05.png";

function firstPlayerMoveImageRight() {
  if (i > 0) {
    i = i - 1;
    slideElement.src = images[i];
    console.log(i);
  } else if (i === 0) {
    i = 5;
  }
}

function firstPlayerMoveImageLeft() {
  if (i < 4) {
    i = i + 1;
    slideElement.src = images[i];
    console.log(i);
  } else if (i === 4) {
    i = -1;
  }
}

// photo carousel for the second player
let e = 0;
const secondPlayerSlideElement = document.getElementById("secondPlayerOverall");

function secondPlayerMoveImageRight() {
  if (e > 0) {
    e = e - 1;
    secondPlayerSlideElement.src = images[e];
    console.log(e);
  } else if (e === 0) {
    e = 5;
  }
}

function secondPlayerMoveImageLeft() {
  if (e < 4) {
    e = e + 1;
    secondPlayerSlideElement.src = images[e];
    console.log(e);
  } else if (e === 4) {
    e = -1;
  }
}

//Choose player name
//Source => https://stackoverflow.com/questions/54270979/javascript-how-to-have-the-name-of-the-players-with-queryselector

let button = document.getElementById("second_button");
let firsttext;
console.log(button);

button.addEventListener("click", function () {
  let player1 = document.getElementById("firsttext");

  if (player1.value != "") {
    firsttext = player1.value;
    alert(firsttext);
    return firsttext;
  } else {
    alert("Enter player's name");
  }
});

let button2 = document.getElementById("second_button2");
let secondtext;
console.log(button2);

button2.addEventListener("click", function () {
  let player2 = document.getElementById("secondtext");

  if (player2.value != "") {
    secondtext = player2.value;
    alert(secondtext);
    return firsttext;
  } else {
    alert("Enter player's name");
  }
});
