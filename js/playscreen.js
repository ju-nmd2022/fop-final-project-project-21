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

//creating an always repeating animation
function draw() {
  // window.requestAnimationFrame(animate);
  background(0, 0, 0);
  //rect(0, 0, canvas.width, canvas.height);
  // platformDraw();

  player.update();
  player2.update();

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
