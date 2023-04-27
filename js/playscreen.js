import Player from "./player.js";
import Platform from "./platform.js";

const canvas = document.querySelector("canvas");
//c = context
const c = canvas.getContext("2d");

canvas.width = 1400;
canvas.height = 730;

const player = new Player({
  x: 0,
  y: 0,
});
const player2 = new Player({
  x: 1300,
  y: 0,
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
function animate() {
  window.requestAnimationFrame(animate);

  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  platformDraw();

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
}

animate();

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
