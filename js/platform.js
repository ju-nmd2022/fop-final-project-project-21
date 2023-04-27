const canvas = document.querySelector("canvas");
//c = context
const c = canvas.getContext("2d");

canvas.width = 1400;
canvas.height = 730;

// an object for the platform
export default class Platform {
  constructor(position) {
    this.position = position;
    this.height = 100;
    this.width = 200;
  }

  draw() {
    c.fillStyle = "white";
    c.fillRect(this.position.x, this.position.y, this.height, this.width);
  }
}
