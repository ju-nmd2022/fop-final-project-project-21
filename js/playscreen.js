// importing elements needed to build the game
import Player from "./player.js";
import Platform from "./platform.js";
import Guard from "./guard-class.js";

// getting the proportions of the window
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight + 500;

// setting up a canvas
function setup() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight + 500;
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30);
  // starting the scrolling from the bottom https://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
}

window.setup = setup;

// listening for window resizing to addjust the canvas
window.addEventListener("resize", setup);

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

// all the overall color options
const colorOptions = {
  yellow: { light: "#fff100", dark: "#d7c700" },
  green: { light: "#009245", dark: "#005129" },
  blue: { light: "#3F54A0", dark: "#263169" },
  red: { light: "#C1272D", dark: "#821E19" },
  white: { light: "#FFFFFF", dark: "#BEBEBE" },
};

// asking what the players chose as their color
let firstPlayerColor = sessionStorage.getItem("color");
let secondPlayerColor = sessionStorage.getItem("color2");

// in case they stuck with the default yellow
if (!colorOptions[firstPlayerColor]) {
  firstPlayerColor = "yellow";
}
if (!colorOptions[secondPlayerColor]) {
  secondPlayerColor = "yellow";
}

// applying the corresponding colors
const firstPlayerLightColor = colorOptions[firstPlayerColor].light;
const firstPlayerDarkColor = colorOptions[firstPlayerColor].dark;
const secondPlayerLightColor = colorOptions[secondPlayerColor].light;
const secondPlayerDarkColor = colorOptions[secondPlayerColor].dark;

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

// the guard that walks in front of the door
const properGuard = new Guard({
  x: canvasWidth / 2,
  y: 120,
});

// source for guardWalking function https://www.youtube.com/watch?v=Rz4GS51dRTA&t=2s
// wich direction the quard is walking
let walkingDirection = "right";

function guardWalking() {
  // walking back and forth
  if (walkingDirection === "right") {
    if (properGuard.position.x < canvasWidth / 1.6) {
      properGuard.velocity.x = 4;
    } else {
      walkingDirection = "left";
    }
  } else if (walkingDirection === "left") {
    if (properGuard.position.x > 350) {
      properGuard.velocity.x = -4;
    } else {
      walkingDirection = "right";
    }
  }
}

//  seting values for the platforms
// common platforms between all levels (sides and bottom)
let commonPlatforms = [
  new Platform({ x: 0, y: canvasHeight - 15 }, canvasWidth, 15),
  new Platform({ x: 0, y: 0 }, 15, canvasHeight),
  new Platform({ x: canvasWidth - 15, y: 0 }, 15, canvasHeight),

  // the lange platform on top
  new Platform({ x: 270, y: 350 }, canvasWidth / 1.6, 15),
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
];

//second levels platforms
let secondLevelPlatforms = [
  new Platform({ x: 500, y: 700 }, 700, 15),
  new Platform({ x: 20, y: 100 }, 400, 15),
];

// adding the common level platforms to all other levels
let platformArrayLevel1 = fistLevelPlatforms.concat(commonPlatforms);
let platformArrayLevel2 = secondLevelPlatforms.concat(commonPlatforms);

// looping trough the platforms to draw them, first level
function drawFirstLevelPlatrom() {
  for (let i = 0; i < platformArrayLevel1.length; i++) {
    platformArrayLevel1[i].draw();
  }
}

// looping trough the platforms to draw them, second level
function drawSecondLevelPlatrom() {
  for (let i = 0; i < platformArrayLevel2.length; i++) {
    platformArrayLevel2[i].draw();
  }
}

// checking which level was chosen, drawing the platforms
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
// function collision() {
//   const currentPlatformArray =
//     sessionStorage.getItem("platformArray") === "platformArray"
//       ? platformArrayLevel1
//       : platformArrayLevel2;
//   for (let i = 0; i < currentPlatformArray.length; i++) {
//     const platform = currentPlatformArray[i];

//     // check collision for player1
//     if (
//       player.position.x + player.width >= platform.position.x &&
//       player.position.x <= platform.position.x + platform.width &&
//       player.position.y + player.height >= platform.position.y &&
//       player.position.y <= platform.position.y + platform.height
//     ) {
//       if (
//         player.position.y + player.height <=
//         platform.position.y + player.velocity.y
//       ) {
//         // player1 is colliding from the top
//         player.position.y = platform.position.y - player.height;
//         player.velocity.y = 0;
//       } else if (
//         player.position.y >=
//         platform.position.y + platform.height + player.velocity.y
//       ) {
//         // player1 is colliding from the bottom
//         player.position.y = platform.position.y + platform.height;
//         player.velocity.y = 0;
//       } else if (
//         player.position.x + player.width <=
//         platform.position.x + player.velocity.x
//       ) {
//         // player1 is colliding from the left
//         player.position.x = platform.position.x - player.width;
//         player.velocity.x = 0;
//       } else if (
//         player.position.x >=
//         platform.position.x + platform.width + player.velocity.x
//       ) {
//         // player1 is colliding from the right
//         player.position.x = platform.position.x + platform.width;
//         player.velocity.x = 0;
//       }
//     }

//     // checking collision for player2
//     if (
//       player2.position.x + player2.width >= platform.position.x &&
//       player2.position.x <= platform.position.x + platform.width &&
//       player2.position.y + player2.height >= platform.position.y &&
//       player2.position.y <= platform.position.y + platform.height
//     ) {
//       if (
//         player2.position.y + player2.height <=
//         platform.position.y + player2.velocity.y
//       ) {
//         //player2 is colliding from the top
//         player2.position.y = platform.position.y - player2.height;
//         player2.velocity.y = 0;
//       } else if (
//         player2.position.y >=
//         platform.position.y + platform.height + player2.velocity.y
//       ) {
//         //player2 is colliding from the bottom
//         player2.position.y = platform.position.y + platform.height;
//         player2.velocity.y = 0;
//       } else if (
//         player2.position.x + player2.width <=
//         platform.position.x + player2.velocity.x
//       ) {
//         // player2 is colliding from the left
//         player2.position.x = platform.position.x - player2.width;
//         player2.velocity.x = 0;
//       } else if (
//         player2.position.x >=
//         platform.position.x + platform.width + player2.velocity.x
//       ) {
//         //player2 is colliding from the right
//         player2.position.x = platform.position.x + platform.width;
//         player2.velocity.x = 0;
//       }
//     }
//     if (
//       properGuard.position.x + properGuard.width >= platform.position.x &&
//       properGuard.position.x <= platform.position.x + platform.width &&
//       properGuard.position.y + properGuard.height >= platform.position.y &&
//       properGuard.position.y <= platform.position.y + platform.height
//     ) {
//       if (
//         properGuard.position.y + properGuard.height <=
//         platform.position.y + properGuard.velocity.y
//       ) {
//         // the quard is colliding the platforms from the top
//         properGuard.position.y = platform.position.y - properGuard.height;
//         properGuard.velocity.y = 0;
//       }
//     }
//   }
// }

function collision() {
  const currentPlatformArray =
    sessionStorage.getItem("platformArray") === "platformArray"
      ? platformArrayLevel1
      : platformArrayLevel2;

  const checkCollision = (object, platform) => {
    if (
      object.position.x + object.width >= platform.position.x &&
      object.position.x <= platform.position.x + platform.width &&
      object.position.y + object.height >= platform.position.y &&
      object.position.y <= platform.position.y + platform.height
    ) {
      if (
        object.position.y + object.height <=
        platform.position.y + object.velocity.y
      ) {
        // colliding from the top
        object.position.y = platform.position.y - object.height;
        object.velocity.y = 0;
      } else if (
        object.position.y >=
        platform.position.y + platform.height + object.velocity.y
      ) {
        // colliding from the bottom
        object.position.y = platform.position.y + platform.height;
        object.velocity.y = 0;
      } else if (
        object.position.x + object.width <=
        platform.position.x + object.velocity.x
      ) {
        // colliding from the left
        object.position.x = platform.position.x - object.width;
        object.velocity.x = 0;
      } else if (
        object.position.x >=
        platform.position.x + platform.width + object.velocity.x
      ) {
        // colliding from the right
        object.position.x = platform.position.x + platform.width;
        object.velocity.x = 0;
      }
    }
  };

  for (let i = 0; i < currentPlatformArray.length; i++) {
    const platform = currentPlatformArray[i];
    checkCollision(player, platform);
    checkCollision(player2, platform);
    checkCollision(properGuard, platform);
  }
}

function guardCollision() {
  // collision between guard and player
  const checkGuardCollision = (aPlayer, theGueard) => {
    if (
      aPlayer.position.x + aPlayer.width >= theGueard.position.x &&
      aPlayer.position.x <= theGueard.position.x + theGueard.width &&
      aPlayer.position.y + aPlayer.height >= theGueard.position.y &&
      aPlayer.position.y <= theGueard.position.y + theGueard.height
    ) {
      if (
        aPlayer.position.y + aPlayer.height <=
        theGueard.position.y + aPlayer.velocity.y
      ) {
        // colliding from the top
        aPlayer.position.y = theGueard.position.y - aPlayer.height;
        aPlayer.velocity.y = 0;
        theGueard.velocity.y = 0;
        alert("You got caught by the guard!");
      } else if (
        aPlayer.position.y >=
        theGueard.position.y + theGueard.height + aPlayer.velocity.y
      ) {
        // colliding from the bottom
        aPlayer.position.y = theGueard.position.y + theGueard.height;
        aPlayer.velocity.y = 0;
        theGueard.velocity.y = 0;
        alert("You got caught by the guard!");
      } else if (
        aPlayer.position.x + aPlayer.width <=
        theGueard.position.x + aPlayer.velocity.x
      ) {
        // colliding from the left
        aPlayer.position.x = theGueard.position.x - aPlayer.width;
        aPlayer.velocity.x = 0;
        theGueard.velocity.y = 0;
        alert("You got caught by the guard!");
      } else if (
        aPlayer.position.x >=
        theGueard.position.x + theGueard.width + aPlayer.velocity.x
      ) {
        // colliding from the right
        aPlayer.position.x = theGueard.position.x + theGueard.width;
        aPlayer.velocity.x = 0;
        theGueard.velocity.y = 0;
        alert("You got caught by the guard!");
      }
    }
  };

  checkGuardCollision(player, properGuard);
  checkGuardCollision(player2, properGuard);
  checkGuardCollision(properGuard, player);
  checkGuardCollision(properGuard, player2);
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
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
let name1 = sessionStorage.getItem("name") ?? "";
let name2 = sessionStorage.getItem("name2") ?? "";

// function to draw the character and the names + the guard
function drawThePlayers() {
  push();
  textSize(16);
  text(name1, player.position.x - 5, player.position.y - 10);
  text(name2, player2.position.x - 5, player2.position.y - 10);
  pop();
  player.update();
  player2.update();
  properGuard.update();
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
// from what time the timer starts from
let timeCounter = 21.7 * 6000;
// the target time is 22:00 o'clock
let targetTime = 22 * 6000;

// function to update the clock display (chatGPT)
function timer() {
  // timer div from html
  const timerElement = document.getElementById("timer");
  const hours = Math.floor(timeCounter / 6000)
    .toString()
    .padStart(2, "0");
  let minutes = (timeCounter % 6000).toString().padStart(2, "0");
  let minutesDisplayed = `${minutes}`;
  minutesDisplayed = minutesDisplayed / 100;
  // source for removing numbers from the end https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  function shortenNumber(x) {
    return Number.parseFloat(x).toFixed(0);
  }
  minutes = shortenNumber(minutesDisplayed);

  // dispalying the time
  timerElement.textContent = `${hours}:${minutes}`;

  // getting rid of  the clock displaying 21:60
  if (minutes === "60") {
    timerElement.textContent = "22:00";
  }

  // checking if target time is reached
  if (timeCounter > targetTime) {
    alert("Times up!");
    targetTime = 22 * 6000;
    timeCounter = 21.7 * 6000;
  }

  // making time go forward
  timeCounter++;
}

// drawing everyting and calling the functions
function draw() {
  background(0, 0, 0);
  drawThePlayers();
  collision();
  guardCollision();
  collectStars();
  displayArray();
  timer();
  guardWalking();

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
