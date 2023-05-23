// an object for the moving platform

export default class MovingPlatform {
  constructor(position, color) {
    this.position = position;
    this.width = 200;
    this.height = 15;
    this.color = color;
  }

  draw() {
    fill(this.color);
    noStroke();
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
