// an object for the button

export default class Button {
  constructor(position, height, color) {
    this.position = position;
    this.width = 15;
    this.height = height;
    this.color = color;
  }

  draw() {
    fill(255, 0, 0);
    noStroke();
    fill(this.color);
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
