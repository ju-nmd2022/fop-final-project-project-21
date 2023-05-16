// an object for the platform
export default class Platform {
  constructor(position) {
    this.position = position;
    this.width = 100;
    this.height = 15;
  }

  draw() {
    fill(255, 255, 255);
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
