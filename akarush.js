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
    rememberColor();
  } else if (i === 0) {
    i = 5;
  }
}

function firstPlayerMoveImageLeft() {
  if (i < 4) {
    i = i + 1;
    slideElement.src = images[i];
    rememberColor();
  } else if (i === 4) {
    i = -1;
  }
}

function rememberColor() {
  if (i === 0) {
    sessionStorage.setItem("color", "yellow");
  } else if (i === 1) {
    sessionStorage.setItem("color", "green");
  } else if (i === 2) {
    sessionStorage.setItem("color", "blue");
  } else if (i === 3) {
    sessionStorage.setItem("color", "red");
  } else {
    sessionStorage.setItem("color", "white");
  }
  return;
}

function rememberColor2() {
  if (e === 0) {
    sessionStorage.setItem("color2", "yellow");
  } else if (e === 1) {
    sessionStorage.setItem("color2", "green");
  } else if (e === 2) {
    sessionStorage.setItem("color2", "blue");
  } else if (e === 3) {
    sessionStorage.setItem("color2", "red");
  } else {
    sessionStorage.setItem("color2", "white");
  }
  return;
}

// photo carousel for the second player
let e = 0;
const secondPlayerSlideElement = document.getElementById("secondPlayerOverall");

function secondPlayerMoveImageRight() {
  if (e > 0) {
    e = e - 1;
    secondPlayerSlideElement.src = images[e];
    rememberColor2();
  } else if (e === 0) {
    e = 5;
  }
}

function secondPlayerMoveImageLeft() {
  if (e < 4) {
    e = e + 1;
    secondPlayerSlideElement.src = images[e];
    rememberColor2();
  } else if (e === 4) {
    e = -1;
  }
}

//Choose player name
//Source => https://stackoverflow.com/questions/54270979/javascript-how-to-have-the-name-of-the-players-with-queryselector

let button = document.getElementById("second_button");
let player1 = document.getElementById("firsttext");
let setName = document.getElementById("playerone");

if (sessionStorage.getItem("name")) {
  setName.innerHTML = sessionStorage.getItem("name");
}

button.addEventListener("click", function () {
  if (player1.value != "") {
    let firsttext = player1.value;
    sessionStorage.setItem("name", firsttext);
    alert(firsttext);
    setName.innerHTML = firsttext;
  } else {
    alert("Enter player's name");
  }
});

let button2 = document.getElementById("second_button2");
let setName2 = document.getElementById("playertwo");
let player2 = document.getElementById("secondtext");

if (sessionStorage.getItem("name2")) {
  setName2.innerHTML = sessionStorage.getItem("name2");
}

button2.addEventListener("click", function () {
  if (player2.value != "") {
    let secondtext = player2.value;
    sessionStorage.setItem("name2", secondtext);
    alert(secondtext);
    setName2.innerHTML = secondtext;
  } else {
    alert("Enter player's name");
  }
});
