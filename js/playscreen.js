// importing elements needed to build the game
import Player from "./player.js";
import Platform from "./platform.js";

// styling the body element to get rid of scroll bars and wiggling of the sreen
const documentBody = document.querySelector("body");
documentBody.style.overflow = "hidden";
documentBody.style.padding = "0px";
documentBody.style.margin = "0px";

// getting the proportions of the window
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

// setting up a canvas
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30);
}

window.setup = setup;

// listening for window resizing to addjust the canvas
window.addEventListener("resize", setup);

// first players starting possition
const player = new Player({
  x: 50,
  y: canvasHeight - 200,
});

// second players starting possition
const player2 = new Player({
  x: canvasWidth - 150,
  y: canvasHeight - 200,
});

const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

const platform = new Platform({
  x: 0,
  y: 150,
});

const platform2 = new Platform({
  x: 1300,
  y: 150,
});

function platformDraw() {
  platform.draw();
  platform2.draw();
}

/*function collision() {
  if (
    platform.position.x + platform.width >= player.position.x &&
    player.position.x + player.width >= platform.position.x &&
    platform.position.y + platform.height >= player.postion.y &&
    player.position.y + player.height >= platform.position.y
  ) {
    console.log("Game over");
  }
}*/

let name1 = sessionStorage.getItem("name");
if (name1 === null) {
  name1 = "";
}

function firstPlayer() {
  textSize(20);
  text(name1, player.position.x + 15, player.position.y - 10);

  player.update();
}

let name2 = sessionStorage.getItem("name2");
if (name2 === null) {
  name2 = "";
}

function secondPlayer() {
  textSize(20);
  text(name2, player2.position.x + 15, player2.position.y - 10);

  player2.update();
}

//creating an always repeating animation
function draw() {
  // window.requestAnimationFrame(animate);
  background(0, 0, 0);
  //rect(0, 0, canvas.width, canvas.height);
  // platformDraw();
  firstPlayer();
  secondPlayer();

  player.velocity.x = 0;
  if (keys.d.pressed === true) {
    player.velocity.x = 4;
  } else if (keys.a.pressed === true) {
    player.velocity.x = -4;
  }

  player2.velocity.x = 0;
  if (keys.ArrowRight.pressed === true) {
    player2.velocity.x = 4;
  } else if (keys.ArrowLeft.pressed === true) {
    player2.velocity.x = -4;
  }
  // collision();
  platformDraw();
}

window.draw = draw;

//player1 keys
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case "w":
      player.velocity.y = -15;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
  }
});

//player2 keys
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
    case "ArrowUp":
      player2.velocity.y = -15;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
  }
});

const lightYellow = "#fff100";
const darkYellow = "#d7c700";

const lightGreen = "#009245";
const darkGreen = "#005129";

const lightBlue = "#3F54A0";
const darkBlue = "#263169";

const lightRed = "#C1272D";
const darkRed = "#821E19";

const lightWhite = "#FFFFFF";
const darkWhite = "#BEBEBE";

function ovveColorOfFirstPlayer() {
  // overall color information
  const firtPlayerColor = sessionStorage.getItem("color");

  if (firtPlayerColor === null) {
    lightOvveColor = lightYellow;
    darkOvveColor = darkYellow;
  } else if (firtPlayerColor === "yellow") {
    lightOvveColor = lightYellow;
    darkOvveColor = darkYellow;
  } else if (firtPlayerColor === "green") {
    lightOvveColor = lightGreen;
    darkOvveColor = darkGreen;
  } else if (firtPlayerColor === "blue") {
    lightOvveColor = lightBlue;
    darkOvveColor = darkBlue;
  } else if (firtPlayerColor === "red") {
    lightOvveColor = lightRed;
    darkOvveColor = darkRed;
  } else if (firtPlayerColor === "white") {
    lightOvveColor = lightWhite;
    darkOvveColor = darkWhite;
  }

  player.color.darkColor = darkOvveColor;
  player.color.lightColor = lightOvveColor;

  player.update();
}

ovveColorOfFirstPlayer();

const secondPlayerColor = sessionStorage.getItem("color2");
