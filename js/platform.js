// an object for the platform
export default class Platform {
  constructor(position, width, height) {
    this.position = position;
    this.width = width;
    this.height = height;
  }

  draw() {
    fill(255, 255, 255);
    noStroke();
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
