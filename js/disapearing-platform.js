// an object for the disapearing platform

export default class DisapearingPlatform {
  constructor(position, color) {
    this.position = position;
    this.width = 300;
    this.height = 15;
    this.color = color;
  }

  draw() {
    stroke("red");
    fill(this.color);
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
