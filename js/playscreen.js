// importing elements needed to build the game
import Player from "./player.js";
import Platform from "./platform.js";
import Button from "./button.js";
import MovingPlatform from "./moving-platform.js";
import DisapearingPlatform from "./disapearing-platform.js";
import Guard from "./guard-class.js";
import Door from "./door-class.js";

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

// creating the door
const theDoor = new Door({ x: canvasWidth / 2 - 150, y: 100 });

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
    // x: 50,
    // y: canvasHeight - 200,
    x: 250,
    y: 100,
  },
  firstPlayerDarkColor,
  firstPlayerLightColor
);

// second players starting possition, and color
const player2 = new Player(
  {
    // x: canvasWidth - 150,
    // y: canvasHeight - 200,
    x: canvasWidth - 100,
    y: 100,
  },
  secondPlayerDarkColor,
  secondPlayerLightColor
);

// the button
let button = new Button(
  {
    x: canvasWidth - 300,
    y: canvasHeight - 25,
  },
  10,
  "red"
);

let button2 = new Button(
  {
    x: canvasWidth / 3 + 100,
    y: canvasHeight / 2 + 21,
  },
  10,
  "red"
);

let button3 = new Button(
  {
    x: canvasWidth / 2 - 700,
    y: canvasHeight / 2 + 121,
  },
  10,
  "red"
);

let button4 = new Button(
  {
    x: canvasWidth / 2 - 100,
    y: canvasHeight / 2 + 21,
  },
  10,
  "blue"
);

let button5 = new Button(
  {
    x: canvasWidth / 2 - 300,
    y: 340,
  },
  10,
  "blue"
);

// the moving platform
let movingPlatform = new MovingPlatform(
  { x: 150, y: canvasHeight - 50 },
  "red"
);
let movingPlatform2 = new MovingPlatform(
  {
    x: canvasWidth - 350,
    y: canvasHeight - 220,
  },
  "red"
);

let movingPlatform3 = new MovingPlatform(
  {
    x: canvasWidth / 2 - 350,
    y: 700,
  },
  "blue"
);

let movingPlatform4 = new MovingPlatform(
  {
    x: canvasWidth / 2 + 150,
    y: 700,
  },
  "blue"
);

let disapearingPlatform = new DisapearingPlatform(
  {
    x: canvasWidth - 450,
    y: 1000,
  },
  "rgb(60, 60, 60)"
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
  new Platform({ x: 250, y: 350 }, canvasWidth / 1.5, 15),

  // the lange platform on top
  new Platform({ x: 270, y: 350 }, canvasWidth / 1.6, 15),
];

// first levels platroms
let fistLevelPlatforms = [
  new Platform({ x: 200, y: canvasHeight - 200 }, 200, 15),
  new Platform({ x: canvasWidth - 400, y: canvasHeight - 200 }, 200, 15),
  new Platform({ x: canvasWidth / 3 - 50, y: canvasHeight - 400 }, 650, 15),
  new Platform({ x: canvasWidth / 2, y: canvasHeight - 800 }, 15, 400),
  new Platform({ x: canvasWidth - 400, y: canvasHeight - 600 }, 200, 15),
  new Platform({ x: 200, y: canvasHeight - 600 }, 200, 15),
  new Platform({ x: canvasWidth - 200, y: canvasHeight - 800 }, 200, 15),
  new Platform({ x: 0, y: canvasHeight - 800 }, 200, 15),
];

//second levels platforms
let secondLevelPlatforms = [
  new Platform({ x: 500, y: 700 }, 700, 15),
  new Platform({ x: 15, y: 500 }, 100, 15),
  new Platform({ x: canvasWidth - 115, y: 500 }, 100, 15),
  movingPlatform,
  button,
  button2,
  movingPlatform2,
];

let thirdLevelPlatforms = [
  new Platform({ x: canvasWidth / 2 - 150, y: 700 }, 300, 15),
  new Platform({ x: canvasWidth / 2 - 300, y: 1200 }, 200, 15),
  new Platform({ x: canvasWidth / 2 - 650, y: 1000 }, 300, 15),
  new Platform({ x: canvasWidth / 2 - 750, y: 800 }, 200, 15),
  new Platform({ x: canvasWidth - 700, y: 1200 }, 200, 15),
  disapearingPlatform,
  new Platform({ x: canvasWidth - 250, y: 800 }, 200, 15),
  button3,
  button4,
  movingPlatform3,
  button5,
  movingPlatform4,
];

let forthLevelPlatforms = [
  new Platform({ x: canvasWidth - 250, y: 800 }, 200, 15),
  new Platform({ x: canvasWidth / 2 - 650, y: 1000 }, 300, 15),
];

// adding the common level platforms to all other levels
let platformArrayLevel1 = fistLevelPlatforms.concat(commonPlatforms);
let platformArrayLevel2 = secondLevelPlatforms.concat(commonPlatforms);
let platformArrayLevel3 = thirdLevelPlatforms.concat(commonPlatforms);
let platformArrayLevel4 = forthLevelPlatforms.concat(commonPlatforms);

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

function drawThirdLevelPlatform() {
  for (let i = 0; i < platformArrayLevel3.length; i++) {
    platformArrayLevel3[i].draw();
  }
}

function drawForthLevelPlatforms() {
  for (let i = 0; i < platformArrayLevel4.length; i++) {
    platformArrayLevel4[i].draw();
  }
}

// checking which level was chosen, drawing the platforms and pushing them in an array
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
  } else if (array === "platformArrayLevel3") {
    drawThirdLevelPlatform();
    platformArrayLevel1 = platformArrayLevel3;
  } else if (array === "platformArrayLevel4") {
    drawForthLevelPlatforms();
    platformArrayLevel1 = platformArrayLevel4;
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
      : sessionStorage.getItem("platformArray") === "platformArrayLevel2"
      ? platformArrayLevel2
      : sessionStorage.getItem("platformArray") === "platformArrayLevel3"
      ? platformArrayLevel3
      : platformArrayLevel4;
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

    // stay on top of moving platform
    /*if (
      player.position.y + player.height <=
      movingPlatform.position.y + player.velocity.y
    ) {
      player.position.y = player.position.y =
        movingPlatform.position.y -
        (player.position.y - movingPlatform.position.y);
      player.velocity.y = 0;
    }*/

    // check collision with button
    if (
      player2.position.x + player2.width >= button.position.x &&
      player2.position.x <= button.position.x + button.width &&
      player2.position.y + player2.height >= button.position.y &&
      player2.position.y <= button.position.y + button.height
    ) {
      button.position.y = canvasHeight - 17;
      button.height = 2;
      movingPlatform.position.y -= 0.5;
    } else {
      button.position.y = canvasHeight - 25;
      button.height = 10;
    }
    //check collision with button2
    if (
      player.position.x + player.width >= button2.position.x &&
      player.position.x <= button2.position.x + button2.width &&
      player.position.y + player.height >= button2.position.y &&
      player.position.y <= button2.position.y + button2.height
    ) {
      button2.position.y = canvasHeight / 2 + 29;
      button2.height = 2;
      movingPlatform2.position.y -= 0.5;
    } else {
      button2.position.y = canvasHeight / 2 + 21;
      button2.height = 10;
    }
    // collison with button3 and displaying platform
    if (
      player.position.x + player.width >= button3.position.x &&
      player.position.x <= button3.position.x + button3.width &&
      player.position.y + player.height >= button3.position.y &&
      player.position.y <= button3.position.y + button3.height
    ) {
      button3.height = 2;
      button3.position.y = canvasHeight / 2 + 129;
      disapearingPlatform.color = "white";
      /*if (
        player2.position.x + player2.width >= disapearingPlatform.position.x &&
        player2.position.x <=
          disapearingPlatform.position.x + disapearingPlatform.width &&
        player2.position.y + player2.height >= disapearingPlatform.position.y &&
        player2.position.y <=
          disapearingPlatform.position.y + disapearingPlatform.height
      ) {
        if (
          player2.position.y + player2.height <=
          disapearingPlatform.position.y + player2.velocity.y
        ) {
          //player2 is colliding from the top
          player2.position.y = disapearingPlatform.position.y - player2.height;
          player2.velocity.y = 0;
        } else if (
          player2.position.y >=
          disapearingPlatform.position.y +
            disapearingPlatform.height +
            player2.velocity.y
        ) {
          //player2 is colliding from the bottom
          player2.position.y =
            disapearingPlatform.position.y + disapearingPlatform.height;
          player2.velocity.y = 0;
        } else if (
          player2.position.x + player2.width <=
          disapearingPlatform.position.x + player2.velocity.x
        ) {
          // player2 is colliding from the left
          player2.position.x = disapearingPlatform.position.x - player2.width;
          player2.velocity.x = 0;
        } else if (
          player2.position.x >=
          disapearingPlatform.position.x +
            disapearingPlatform.width +
            player2.velocity.x
        ) {
          //player2 is colliding from the right
          player2.position.x =
            disapearingPlatform.position.x + disapearingPlatform.width;
          player2.velocity.x = 0;
        }*/
    } else {
      button3.height = 10;
      button3.position.y = canvasHeight / 2 + 121;
      disapearingPlatform.color = "rgb(60, 60, 60)";
    }

    //collisun button4
    if (
      player2.position.x + player2.width >= button4.position.x &&
      player2.position.x <= button4.position.x + button4.width &&
      player2.position.y + player2.height >= button4.position.y &&
      player2.position.y <= button4.position.y + button4.height
    ) {
      button4.position.y = canvasHeight / 2 + 29;
      button4.height = 2;
      if (movingPlatform3.position.x > 15) {
        movingPlatform3.position.x -= 0.5;
        movingPlatform3.position.y -= 0.15;
      }
    } else {
      button4.position.y = canvasHeight / 2 + 21;
      button4.height = 10;
    }

    //collisun button5
    if (
      player.position.x + player.width >= button5.position.x &&
      player.position.x <= button5.position.x + button5.width &&
      player.position.y + player.height >= button5.position.y &&
      player.position.y <= button5.position.y + button5.height
    ) {
      button5.position.y = 348;
      button5.height = 2;
      if (movingPlatform4.position.x > canvasWidth - 215) {
        movingPlatform4.position.x += 0.5;
        movingPlatform4.position.y -= 0.15;
      }
    } else {
      button5.position.y = 340;
      button5.height = 10;
    }
  }

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

// collision with the door
// function standInFrontOfDoor() {
//   // collision between guard and player
//   const checkForWin = (players, theDoor) => {
//     if (
//       players.position.x + players.width >= theDoor.position.x + 100 &&
//       players.position.x <= theDoor.position.x + 100 + theDoor.width &&
//       players.position.y + players.height >= theDoor.position.y &&
//       players.position.y <= theDoor.position.y + theDoor.height
//     ) {
//       if (players.position.y + players.height <= theDoor.position.y) {
//         // colliding from the top
//         players.position.y = theDoor.position.y - players.height;
//         players.velocity.y = 0;
//         alert("Win!");
//       } else if (
//         players.position.y >=
//         theDoor.position.y + theDoor.height + players.velocity.y
//       ) {
//         // colliding from the bottom
//         players.position.y = theDoor.position.y + theDoor.height;
//         players.velocity.y = 0;
//         alert("Win!");
//       } else if (
//         players.position.x + players.width <=
//         theDoor.position.x + players.velocity.x
//       ) {
//         // colliding from the left
//         players.position.x = theDoor.position.x + 100 - players.width;
//         players.velocity.x = 0;
//         alert("Win!");
//       } else if (
//         players.position.x >=
//         theDoor.position.x + 100 + theDoor.width + players.velocity.x
//       ) {
//         // colliding from the right
//         players.position.x = theDoor.position.x + 100 + theDoor.width;
//         players.velocity.x = 0;
//         alert("Win!");
//       }
//     }
//   };

//   checkForWin(player, theDoor);
//   checkForWin(player2, theDoor);
// }

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
let starsCollectedLevel3 = 0;
let starsCollectedLevel4 = 0;

// a loop to create the stars and to display them on random positions
for (let i = 0; i < starsCount; i++) {
  const star = document.createElement("img");
  star.src = imageSources[i];

  const randomX = Math.floor(
    Math.random() * (canvasWidth - 100 - 100 + 1) + 100
  );
  const randomY = Math.floor(
    Math.random() * (canvasHeight - 100 - 100 + 1) + 100
  );

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
    } else if (
      star.dataset.x < player.position.x + player.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player.position.x &&
      star.dataset.y < player.position.y + player.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) >
        player.position.y &&
      array === "platformArrayLevel3"
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollectedLevel3++;
      sessionStorage.setItem("starsCollectedLevel3", starsCollectedLevel3);
      i--;
    } else if (
      star.dataset.x < player2.position.x + player2.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player2.position.x &&
      star.dataset.y < player2.position.y + player2.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) >
        player2.position.y &&
      array === "platformArrayLevel3"
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollectedLevel3++;
      sessionStorage.setItem("starsCollectedLevel3", starsCollectedLevel3);
      i--;
    } else if (
      star.dataset.x < player.position.x + player.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player.position.x &&
      star.dataset.y < player.position.y + player.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) >
        player.position.y &&
      array === "platformArrayLevel4"
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollectedLevel4++;
      sessionStorage.setItem("starsCollectedLevel4", starsCollectedLevel4);
      i--;
    } else if (
      star.dataset.x < player2.position.x + player2.width &&
      parseInt(star.dataset.x) + parseInt(star.style.width) >
        player2.position.x &&
      star.dataset.y < player2.position.y + player2.height &&
      parseInt(star.dataset.y) + parseInt(star.style.height) >
        player2.position.y &&
      array === "platformArrayLevel4"
    ) {
      starsContainer.removeChild(star);
      stars.splice(i, 1);
      starsCollectedLevel4++;
      sessionStorage.setItem("starsCollectedLevel4", starsCollectedLevel4);
      i--;
    }
  }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll
function scrolling() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
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

// x bigger than 408
// x smaller than 525
// y smaller than 176

// drawing everyting and calling the functions
function draw() {
  background(0, 0, 0);

  theDoor.draw();
  drawThePlayers();
  collision();
  // guardCollision();
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

  if (
    player.position.y < canvasHeight - 590 &&
    player2.position.y < canvasHeight - 590
  ) {
    scrolling();
  }

  function standInFrontOfDoor() {
    if (
      player.position.x + 20 > theDoor.position.x + 85 &&
      player.position.x + 20 < theDoor.position.x - 85 + theDoor.width &&
      player.position.y > theDoor.position.y + theDoor.height
    ) {
      alert("win!");
      console.log("nej");
    } else {
      console.log("yay");
    }
  }

  push();
  fill("#fff");
  rect(theDoor.position.x + 85, theDoor.position.y, 5, 250);
  pop();

  standInFrontOfDoor();
  // console.log(theDoor.position.x);
  console.log(player.position.x);
  console.log(theDoor.position.x);
}

window.draw = draw;
