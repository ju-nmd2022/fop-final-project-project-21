const canvas = document.querySelector("canvas");
//c = context
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// an object for the platform
export default class Platform {
  constructor(position) {
    this.position = position;
    this.width = 100;
    this.height = 15;
  }

  draw() {
    c.fillStyle = "white";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
