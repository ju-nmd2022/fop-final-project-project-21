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

// getting the information on what color ovve the player has chosen
const firtPlayerColor = sessionStorage.getItem("color");
const secondPlayerColor = sessionStorage.getItem("color2");

// all the color options
const colorOptions = {
  yellow: { light: "#fff100", dark: "#d7c700" },
  green: { light: "#009245", dark: "#005129" },
  blue: { light: "#3F54A0", dark: "#263169" },
  red: { light: "#C1272D", dark: "#821E19" },
  white: { light: "#FFFFFF", dark: "#BEBEBE" },
};

// variables that need to be changes to change the color
let firstPlayerLightColor;
let firstPlayerDarkColor;
let secondPlayerDarkColor;
let secondPlayerLightColor;

// function asking what the first person chose and applying the corresponding color
if (firtPlayerColor === null) {
  firstPlayerLightColor = colorOptions.yellow.light;
  firstPlayerDarkColor = colorOptions.yellow.dark;
} else if (firtPlayerColor === "yellow") {
  firstPlayerLightColor = colorOptions.yellow.light;
  firstPlayerDarkColor = colorOptions.yellow.dark;
} else if (firtPlayerColor === "green") {
  firstPlayerLightColor = colorOptions.green.light;
  firstPlayerDarkColor = colorOptions.green.dark;
} else if (firtPlayerColor === "blue") {
  firstPlayerLightColor = colorOptions.blue.light;
  firstPlayerDarkColor = colorOptions.blue.dark;
} else if (firtPlayerColor === "red") {
  firstPlayerLightColor = colorOptions.red.light;
  firstPlayerDarkColor = colorOptions.red.dark;
} else if (firtPlayerColor === "white") {
  firstPlayerLightColor = colorOptions.white.light;
  firstPlayerDarkColor = colorOptions.white.dark;
}

// function asking what the first person chose and applying the corresponding color
if (secondPlayerColor === null) {
  secondPlayerLightColor = colorOptions.yellow.light;
  secondPlayerDarkColor = colorOptions.yellow.dark;
} else if (secondPlayerColor === "yellow") {
  secondPlayerLightColor = colorOptions.yellow.light;
  secondPlayerDarkColor = colorOptions.yellow.dark;
} else if (secondPlayerColor === "green") {
  secondPlayerLightColor = colorOptions.green.light;
  secondPlayerDarkColor = colorOptions.green.dark;
} else if (secondPlayerColor === "blue") {
  secondPlayerLightColor = colorOptions.blue.light;
  secondPlayerDarkColor = colorOptions.blue.dark;
} else if (secondPlayerColor === "red") {
  secondPlayerLightColor = colorOptions.red.light;
  secondPlayerDarkColor = colorOptions.red.dark;
} else if (secondPlayerColor === "white") {
  secondPlayerLightColor = colorOptions.white.light;
  secondPlayerDarkColor = colorOptions.white.dark;
}

// first players starting possition, and color
const player = new Player(
  {
    x: 50,
    y: canvasHeight - 200,
  },
  firstPlayerDarkColor,
  firstPlayerLightColor
);

// second players starting possition, and color
const player2 = new Player(
  {
    x: canvasWidth - 150,
    y: canvasHeight - 200,
  },
  secondPlayerDarkColor,
  secondPlayerLightColor
);

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
  x: 300,
  y: 500,
});

const platform2 = new Platform({
  x: 800,
  y: 550,
});

function platformDraw() {
  platform.draw();
  platform2.draw();
}

let platformArray = [platform, platform2];

function collision() {
  for (let i = 0; i < platformArray.length; i++) {
    const platform = platformArray[i];

    if (
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width &&
      player.position.y + player.height >= platform.position.y &&
      player.position.y <= platform.position.y + platform.height
    ) {
      if (
        player.position.y + player.height <=
        platform.position.y + player.velocity.y
      ) {
        player.position.y = platform.position.y - player.height;
        player.velocity.y = 0;
      } else {
        player.position.y = platform.position.y + platform.height;
      }
    }

    if (
      player2.position.x + player2.width >= platform.position.x &&
      player2.position.x <= platform.position.x + platform.width &&
      player2.position.y + player2.height >= platform.position.y &&
      player2.position.y <= platform.position.y + platform.height
    ) {
      if (
        player2.position.y + player2.height <=
        platform.position.y + player2.velocity.y
      ) {
        player2.position.y = platform.position.y - player2.height;
        player2.velocity.y = 0;
      } else {
        player2.position.y = platform.position.y + platform.height;
      }
    }
  }
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
  collision();
  platformDraw();
}

window.draw = draw;
let isWKeyPressed = false;
let isUpKeyPressed = false;

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
      if (player.velocity.y === 0 && !isWKeyPressed) {
        player.velocity.y = -30;
        isWKeyPressed = true;
      }
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
    case "w":
      if (event.key === "w") {
        isWKeyPressed = false;
      }
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
      if (player2.velocity.y === 0 && !isUpKeyPressed) {
        player2.velocity.y = -30;
        isUpKeyPressed = true;
      }
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
    case "ArrowUp":
      if (event.key === "ArrowUp") {
        isUpKeyPressed = false;
      }
  }
});
