// an object for the platform

export default class Platform {
  constructor(position) {
    this.position = {
      x: 100,
      y: 100,
    };
    this.height = 100;
    this.width = 100;
  }

  draw() {
    c.fillStyle = "white";
    c.fillRect(this.position.x, this.position.y, this.height, this.width);
  }

  update() {
    this.draw();
  }
}
