// importing elements needed to build the game
import Player from "./player.js";
import Platform from "./platform.js";
import Guard from "./guard-class.js";

// styling the body element to get rid of scroll bars and wiggling of the sreen
const documentBody = document.querySelector("body");
// documentBody.style.overflow = "hidden";
documentBody.style.padding = "0px";
documentBody.style.margin = "0px";

// getting the proportions of the window
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight + 500;

// setting up a canvas
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30);
  // starting the scrolling from the bottom https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
}

window.setup = setup;

// disabling the up and down arrow keys from scrolling the canvas  source https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser
window.addEventListener(
  "keydown",
  function (e) {
    if (["ArrowUp", "ArrowDown"].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  },
  false
);

// listening for window resizing to addjust the canvas
window.addEventListener("resize", setup);

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

// asking what the first person chose and applying the corresponding color
const firstPlayerColor = sessionStorage.getItem("color");
if (firstPlayerColor) {
  firstPlayerLightColor = colorOptions[firstPlayerColor].light;
  firstPlayerDarkColor = colorOptions[firstPlayerColor].dark;
} else {
  // default color
  firstPlayerLightColor = colorOptions.yellow.light;
  firstPlayerDarkColor = colorOptions.yellow.dark;
}

// asking what the second person chose and applying the corresponding color
const secondPlayerColor = sessionStorage.getItem("color2");
if (secondPlayerColor) {
  secondPlayerLightColor = colorOptions[secondPlayerColor].light;
  secondPlayerDarkColor = colorOptions[secondPlayerColor].dark;
} else {
  // default color
  secondPlayerLightColor = colorOptions.yellow.light;
  secondPlayerDarkColor = colorOptions.yellow.dark;
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
// common platforms between all levels (sides and bottom)
let commonPlatforms = [
  new Platform({ x: 0, y: canvasHeight - 15 }, canvasWidth, 15),
  new Platform({ x: 0, y: 0 }, 15, canvasHeight),
  new Platform({ x: canvasWidth - 15, y: 0 }, 15, canvasHeight),
];

// first levels platroms
let fistLevelPlatforms = [
  new Platform({ x: 200, y: canvasHeight - 200 }, 200, 15),
  new Platform({ x: canvasWidth - 400, y: canvasHeight - 200 }, 200, 15),
  new Platform({ x: canvasWidth / 3, y: canvasHeight - 400 }, 500, 15),
  new Platform({ x: canvasWidth / 2, y: canvasHeight - 800 }, 15, 400),
  new Platform({ x: canvasWidth - 400, y: canvasHeight - 600 }, 200, 15),
  new Platform({ x: 200, y: canvasHeight - 600 }, 200, 15),
  new Platform({ x: canvasWidth - 200, y: canvasHeight - 800 }, 200, 15),
  new Platform({ x: 0, y: canvasHeight - 800 }, 200, 15),

  new Platform({ x: 250, y: 350 }, canvasWidth / 1.5, 15),
];

//second levels platforms
let secondLevelPlatforms = [
  new Platform({ x: 500, y: 700 }, 700, 15),
  new Platform({ x: 20, y: 100 }, 400, 15),
];

// combinign the common level platforms to all other levels
let platformArrayLevel1 = fistLevelPlatforms.concat(commonPlatforms);
let platformArrayLevel2 = secondLevelPlatforms.concat(commonPlatforms);

// looping trough the platforms to draw them
function drawFirstLevelPlatrom() {
  for (let i = 0; i < platformArrayLevel1.length; i++) {
    platformArrayLevel1[i].draw();
  }
}

// looping trough the platforms to draw them
function drawSecondLevelPlatrom() {
  for (let i = 0; i < platformArrayLevel2.length; i++) {
    platformArrayLevel2[i].draw();
  }
}

// checking which level was chosen, drawing the platforms and pushing them in an array
function displayArray() {
  let array = sessionStorage.getItem("platformArray");
  if (array === "platformArray") {
    // calling the drawing function
    drawFirstLevelPlatrom();
  } else if (array === "platformArrayLevel2") {
    // calling the drawing function
    drawSecondLevelPlatrom();
    platformArrayLevel1 = platformArrayLevel2;
  }
}

// creating a function to check for collision between the players and the platforms
function collision() {
  const currentPlatformArray =
    sessionStorage.getItem("platformArray") === "platformArray"
      ? platformArrayLevel1
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
let starsCollectedLevel1 = 0;
let starsCollectedLevel2 = 0;

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
// updating the starsCollectedLevel1 counter
// saving the information to sessionStorage
function collectStars() {
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    let array = sessionStorage.getItem("platformArray");

    if (
      star.dataset.x < player.position.x + player.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player.position.x &&
      star.dataset.y < player.position.y + player.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) >
        player.position.y &&
      array === "platformArray"
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollectedLevel1++;
      sessionStorage.setItem("starsCollectedLevel1", starsCollectedLevel1);
      i--;
    } else if (
      star.dataset.x < player2.position.x + player2.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player2.position.x &&
      star.dataset.y < player2.position.y + player2.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) >
        player2.position.y &&
      array === "platformArray"
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollectedLevel1++;
      sessionStorage.setItem("starsCollectedLevel1", starsCollectedLevel1);
      i--;
    } else if (
      star.dataset.x < player.position.x + player.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player.position.x &&
      star.dataset.y < player.position.y + player.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) >
        player.position.y &&
      array === "platformArrayLevel2"
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollectedLevel2++;
      sessionStorage.setItem("starsCollectedLevel2", starsCollectedLevel2);
      i--;
    } else if (
      star.dataset.x < player2.position.x + player2.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player2.position.x &&
      star.dataset.y < player2.position.y + player2.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) >
        player2.position.y &&
      array === "platformArrayLevel2"
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollectedLevel2++;
      sessionStorage.setItem("starsCollectedLevel2", starsCollectedLevel2);
      i--;
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
  text(name1, player.position.x - 5, player.position.y - 10);

  player.update();
}

// creating a function for the second player (drawing the character and the name)
function secondPlayer() {
  textSize(20);
  text(name2, player2.position.x - 5, player2.position.y - 10);

  player2.update();
}

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

// timer
// from what time the timer starts
let timeCounter = 21.7 * 6000;
let targetTime = 22 * 6000;

// Function to update the clock display
function timer() {
  const timerElement = document.getElementById("timer");
  const hours = Math.floor(timeCounter / 6000)
    .toString()
    .padStart(2, "0");
  let minutes = (timeCounter % 6000).toString().padStart(2, "0");
  let minutesDisplayed = `${minutes}`;
  minutesDisplayed = minutesDisplayed / 100;
  function shortenNumber(x) {
    return Number.parseFloat(x).toFixed(0);
  }

  // source for removing numbers from the end https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  minutes = shortenNumber(minutesDisplayed);

  timerElement.textContent = `${hours}:${minutes}`;

  if (minutes === "60") {
    timerElement.textContent = "22:00";
  }

  // Check if target time reached
  if (timeCounter > targetTime) {
    alert("Times up!");
    targetTime = 22 * 6000;
    timeCounter = 21.7 * 6000;
  }
  timeCounter++; // Increment the custom time counter
}

// the guard
// const guard = new Player(
//   {
//     x: canvasWidth / 2,
//     y: 100,
//   },
//   "#414141",
//   "#565656"
// );

const properGuard = new Guard({
  x: canvasWidth / 2,
  y: 100,
});

function theGuard() {
  // staying on its lil platform
  for (let i = 0; i < platformArrayLevel1.length; i++) {
    const platform = platformArrayLevel1[i];
    if (
      properGuard.position.x + properGuard.width >= platform.position.x &&
      properGuard.position.x <= platform.position.x + platform.width &&
      properGuard.position.y + properGuard.height >= platform.position.y &&
      properGuard.position.y <= platform.position.y + platform.height
    ) {
      if (
        properGuard.position.y + properGuard.height <=
        platform.position.y + properGuard.velocity.y
      ) {
        // player1 is colliding from the top
        properGuard.position.y = platform.position.y - properGuard.height;
        properGuard.velocity.y = 0;
      }
    }
  }

  // walking back and forth
  // 250, 300 }, canvasWidth / 1.5,
  // let walkingSpeed = 4;
  // let direction = "right";

  // if (direction === "right") {
  //   if (properGuard.position.x < canvasWidth / 1.5 + 200) {
  //     walkingSpeed = 4;
  //   } else {
  //     direction = "left";
  //   }
  // } else if (direction === "left") {
  //   if (properGuard.position.x < 200) {
  //     walkingSpeed = -4;
  //   } else {
  //     direction = "right";
  //   }
  // }

  // if (direction === "left") {
  //   walkingSpeed = -4;
  // } else if (direction === "right") {
  //   walkingSpeed = 4;
  // }

  // properGuard.velocity.x = walkingSpeed;

  // console.log(direction);
}

// drawing everyting and calling the functions
function draw() {
  background(0, 0, 0);
  firstPlayer();
  secondPlayer();
  collision();
  collectStars();
  displayArray();
  timer();
  theGuard();

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
