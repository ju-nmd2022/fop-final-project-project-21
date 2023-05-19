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

// creating container for the images of the stars
const starsContainer = document.getElementById("stars");

// defining the number of the images and the source
const starsCount = 3;
const imageSources = [
  "images/star-filling.png",
  "images/star-filling.png",
  "images/star-filling.png",
];

// creating an array to store the star object and a counter for the number of stars collected
const stars = [];
let starsCollected = 0;

// a loop to create the stars and to display them on random positions
for (let i = 0; i < starsCount; i++) {
  const star = document.createElement("img");
  star.src = imageSources[i];

  const randomX = Math.floor(Math.random() * (canvasWidth - 100) + 100);
  const randomY = Math.floor(Math.random() * (canvasHeight - 100) + 100);

  star.style.position = "absolute";
  star.style.left = randomX + "px";
  star.style.top = randomY + "px";
  star.style.width = "30px";
  star.style.height = "30px";

  //dataset - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
  star.dataset.x = randomX;
  star.dataset.y = randomY;

  starsContainer.appendChild(star);

  // store the star object in the array
  stars.push(star);
}

// creating a function to detect collision between the player and the star object
// removing a star from the array if the player collects the star
// updating the starsCollected counter
// saving the information to sessionStorage
function collectStars() {
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    if (
      star.dataset.x < player.position.x + player.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player.position.x &&
      star.dataset.y < player.position.y + player.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) > player.position.y
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollected++;
      sessionStorage.setItem("starsCollected", starsCollected);
      i--;
    } else if (
      star.dataset.x < player2.position.x + player2.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player2.position.x &&
      star.dataset.y < player2.position.y + player2.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) >
        player2.position.y
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollected++;
      sessionStorage.setItem("starsCollected", starsCollected);
      i--;
    }
  }
}

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

//  seting values for the platforms
const platform = new Platform(
  {
    x: 0,
    y: canvasHeight - 15,
  },
  canvasWidth,
  15
);

const platform2 = new Platform(
  {
    x: 0,
    y: 0,
  },
  15,
  canvasHeight
);

const platform3 = new Platform(
  {
    x: canvasWidth - 15,
    y: 0,
  },
  15,
  canvasHeight
);

const platform4 = new Platform(
  {
    x: 120,
    y: 650,
  },
  200,
  15
);

const platform5 = new Platform(
  {
    x: 120,
    y: 300,
  },
  400,
  15
);

const platform6 = new Platform(
  {
    x: 500,
    y: 700,
  },
  700,
  15
);

const platform7 = new Platform(
  {
    x: 20,
    y: 100,
  },
  400,
  15
);

//drawing the platforms
/*function platformDraw() {
  platform.draw();
  platform2.draw();
  platform3.draw();
  platform4.draw();
  platform5.draw();
  platform6.draw();
  platform7.draw();
}*/

// creating arrays for the platforms

// level1
let platformArray = [platform, platform2, platform3, platform4, platform5];
// level2
let platformArrayLevel2 = [
  platform,
  platform2,
  platform3,
  platform6,
  platform7,
];

function displayArray() {
  let array = sessionStorage.getItem("platformArray");
  if (array === "platformArray") {
    platform.draw();
    platform2.draw();
    platform3.draw();
    platform4.draw();
    platform5.draw();
    platformArray = [platform, platform2, platform3, platform4, platform5];
  } else if (array === "platformArrayLevel2") {
    platform.draw();
    platform2.draw();
    platform3.draw();
    platform6.draw();
    platform7.draw();
    platformArray = platformArrayLevel2;
  }
}

// creating a function to check for collision between the players and the platforms
function collision() {
  const currentPlatformArray =
    sessionStorage.getItem("platformArray") === "platformArray"
      ? platformArray
      : platformArrayLevel2;
  for (let i = 0; i < currentPlatformArray.length; i++) {
    const platform = currentPlatformArray[i];

    // check collision for player1
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
        // player1 is colliding from the top
        player.position.y = platform.position.y - player.height;
        player.velocity.y = 0;
      } else if (
        player.position.y >=
        platform.position.y + platform.height + player.velocity.y
      ) {
        // player1 is colliding from the bottom
        player.position.y = platform.position.y + platform.height;
        player.velocity.y = 0;
      } else if (
        player.position.x + player.width <=
        platform.position.x + player.velocity.x
      ) {
        // player1 is colliding from the left
        player.position.x = platform.position.x - player.width;
        player.velocity.x = 0;
      } else if (
        player.position.x >=
        platform.position.x + platform.width + player.velocity.x
      ) {
        // player1 is colliding from the right
        player.position.x = platform.position.x + platform.width;
        player.velocity.x = 0;
      }
    }

    // checking collision for player2
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
        //player2 is colliding from the top
        player2.position.y = platform.position.y - player2.height;
        player2.velocity.y = 0;
      } else if (
        player2.position.y >=
        platform.position.y + platform.height + player2.velocity.y
      ) {
        //player2 is colliding from the bottom
        player2.position.y = platform.position.y + platform.height;
        player2.velocity.y = 0;
      } else if (
        player2.position.x + player2.width <=
        platform.position.x + player2.velocity.x
      ) {
        // player2 is colliding from the left
        player2.position.x = platform.position.x - player2.width;
        player2.velocity.x = 0;
      } else if (
        player2.position.x >=
        platform.position.x + platform.width + player2.velocity.x
      ) {
        //player2 is colliding from the right
        player2.position.x = platform.position.x + platform.width;
        player2.velocity.x = 0;
      }
    }
  }
}

// getting the names for the player from the sessionStorage
let name1 = sessionStorage.getItem("name");
if (name1 === null) {
  name1 = "";
}

let name2 = sessionStorage.getItem("name2");
if (name2 === null) {
  name2 = "";
}

// creating a function for the first player (drawing the character and the name)
function firstPlayer() {
  textSize(20);
  text(name1, player.position.x + 15, player.position.y - 10);

  player.update();
}

// creating a function for the second player (drawing the character and the name)
function secondPlayer() {
  textSize(20);
  text(name2, player2.position.x + 15, player2.position.y - 10);

  player2.update();
}

//creating an always repeating animation

// drawing everyting and calling the functions
function draw() {
  background(0, 0, 0);
  firstPlayer();
  secondPlayer();
  collision();
  //platformDraw();
  collectStars();
  displayArray();
  timer();

  player.velocity.x = 0;
  if (keys.d.pressed === true) {
    player.velocity.x = 6;
  } else if (keys.a.pressed === true) {
    player.velocity.x = -6;
  }

  player2.velocity.x = 0;
  if (keys.ArrowRight.pressed === true) {
    player2.velocity.x = 6;
  } else if (keys.ArrowLeft.pressed === true) {
    player2.velocity.x = -6;
  }
}
window.draw = draw;

//creating values to check if the key was pressed in order to later state that the key can be pressed only once
let isWKeyPressed = false;
let isUpKeyPressed = false;

// keys
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
        player.velocity.y = -20;
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
        player2.velocity.y = -20;
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

let targetTime = 22 * 6000;
// clockInterval = setInterval(timer, 100);

// from what time the timer starts
let timeCounter = 21.7 * 6000;

// Function to update the clock display
function timer() {
  const hours = Math.floor(timeCounter / 6000)
    .toString()
    .padStart(2, "0");
  let minutes = (timeCounter % 6000).toString().padStart(2, "0");
  let minutesDisplayed = `${minutes}`;
  minutesDisplayed = minutesDisplayed / 100;
  function financial(x) {
    return Number.parseFloat(x).toFixed(0);
  }
  minutes = financial(minutesDisplayed);

  // getting rid of desimals

  textSize(20);
  fill(255, 255, 255);
  text(`${hours}:${minutes}`, canvasWidth - 80, 40);

  // Check if target time reached
  if (timeCounter >= targetTime) {
    alert("Times up!");
  }

  timeCounter++; // Increment the custom time counter
}
