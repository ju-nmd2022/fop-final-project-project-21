export default class Door {
  constructor(position) {
    this.position = position;
  }

  doorClosed() {
    push();
    scale(1, 1);
    stroke("rgba(0,0,0,0)");
    stroke(1);
    fill("#5e2a2a");
    beginShape();
    vertex(168.099, 0.672);
    vertex(231.5, 0.672);
    quadraticVertex(231.5, 0.672, 231.5, 0.672);
    vertex(231.5, 359.514);
    quadraticVertex(231.5, 359.514, 231.5, 359.514);
    vertex(168.099, 359.514);
    quadraticVertex(168.099, 359.514, 168.099, 359.514);
    vertex(168.099, 0.672);
    quadraticVertex(168.099, 0.672, 168.099, 0.672);
    endShape();
    fill("#5e2a2a");
    beginShape();
    vertex(0.5, 0.5);
    vertex(167.5, 0.5);
    quadraticVertex(167.5, 0.5, 167.5, 0.5);
    vertex(167.5, 359.342);
    quadraticVertex(167.5, 359.342, 167.5, 359.342);
    vertex(0.5, 359.342);
    quadraticVertex(0.5, 359.342, 0.5, 359.342);
    vertex(0.5, 0.5);
    quadraticVertex(0.5, 0.5, 0.5, 0.5);
    endShape();
    stroke("#000000");
    fill("#191919");
    beginShape();
    vertex(31.074, 33.278);
    vertex(148.542, 33.278);
    quadraticVertex(148.542, 33.278, 148.542, 33.278);
    vertex(148.542, 76.725);
    quadraticVertex(148.542, 76.725, 148.542, 76.725);
    vertex(31.074, 76.725);
    quadraticVertex(31.074, 76.725, 31.074, 76.725);
    vertex(31.074, 33.278);
    quadraticVertex(31.074, 33.278, 31.074, 33.278);
    endShape();
    stroke("#000000");
    beginShape();
    vertex(31.074, 155.573);
    vertex(148.542, 155.573);
    quadraticVertex(148.542, 155.573, 148.542, 155.573);
    vertex(148.542, 199.02);
    quadraticVertex(148.542, 199.02, 148.542, 199.02);
    vertex(31.074, 199.02);
    quadraticVertex(31.074, 199.02, 31.074, 199.02);
    vertex(31.074, 155.573);
    quadraticVertex(31.074, 155.573, 31.074, 155.573);
    endShape();
    stroke("#000000");
    beginShape();
    vertex(31.074, 94.425);
    vertex(148.542, 94.425);
    quadraticVertex(148.542, 94.425, 148.542, 94.425);
    vertex(148.542, 137.872);
    quadraticVertex(148.542, 137.872, 148.542, 137.872);
    vertex(31.074, 137.872);
    quadraticVertex(31.074, 137.872, 31.074, 137.872);
    vertex(31.074, 94.425);
    quadraticVertex(31.074, 94.425, 31.074, 94.425);
    endShape();
    stroke("#000000");
    translate(314.575, -82.277);
    rotate(1.5707963267948966);
    beginShape();
    vertex(115.555, 104.885);
    vertex(281.298, 104.885);
    quadraticVertex(281.298, 104.885, 281.298, 104.885);
    vertex(281.298, 127.41300000000001);
    quadraticVertex(281.298, 127.41300000000001, 281.298, 127.41300000000001);
    vertex(115.555, 127.41300000000001);
    quadraticVertex(115.555, 127.41300000000001, 115.555, 127.41300000000001);
    vertex(115.555, 104.885);
    quadraticVertex(115.555, 104.885, 115.555, 104.885);
    endShape();
    stroke("#000000");
    fill("#fff");
    push();
    rotate(-1.55);
    textSize(18);
    text("Entré", -245, 150);
    pop();
    pop();
  }

  doorOpen() {
    push();
    scale(1, 1);
    stroke("rgba(0,0,0,0)");
    strokeCap(PROJECT);
    strokeJoin(MITER);
    fill("#5e2a2a");
    stroke(1);
    beginShape();
    vertex(0.5, 0.5);
    vertex(168.289, 0.5);
    quadraticVertex(168.289, 0.5, 168.289, 0.5);
    vertex(168.289, 360.279);
    quadraticVertex(168.289, 360.279, 168.289, 360.279);
    vertex(0.5, 360.279);
    quadraticVertex(0.5, 360.279, 0.5, 360.279);
    vertex(0.5, 0.5);
    quadraticVertex(0.5, 0.5, 0.5, 0.5);
    endShape();
    fill("#5e2a2a");
    beginShape();
    vertex(336.079, 0.5);
    vertex(397.387, 0.5);
    quadraticVertex(397.387, 0.5, 397.387, 0.5);
    vertex(397.387, 360.279);
    quadraticVertex(397.387, 360.279, 397.387, 360.279);
    vertex(336.079, 360.279);
    quadraticVertex(336.079, 360.279, 336.079, 360.279);
    vertex(336.079, 0.5);
    quadraticVertex(336.079, 0.5, 336.079, 0.5);
    endShape();
    stroke("#000000");
    fill("#fff");
    beginShape();
    vertex(168.289, 0.5);
    vertex(336.078, 0.5);
    quadraticVertex(336.078, 0.5, 336.078, 0.5);
    vertex(336.078, 360.279);
    quadraticVertex(336.078, 360.279, 336.078, 360.279);
    vertex(168.289, 360.279);
    quadraticVertex(168.289, 360.279, 168.289, 360.279);
    vertex(168.289, 0.5);
    quadraticVertex(168.289, 0.5, 168.289, 0.5);
    endShape();

    stroke("#000000");
    fill("#191919");
    beginShape();
    vertex(31.074, 33.278);
    vertex(148.542, 33.278);
    quadraticVertex(148.542, 33.278, 148.542, 33.278);
    vertex(148.542, 76.725);
    quadraticVertex(148.542, 76.725, 148.542, 76.725);
    vertex(31.074, 76.725);
    quadraticVertex(31.074, 76.725, 31.074, 76.725);
    vertex(31.074, 33.278);
    quadraticVertex(31.074, 33.278, 31.074, 33.278);
    endShape();
    stroke("#000000");
    beginShape();
    vertex(31.074, 155.573);
    vertex(148.542, 155.573);
    quadraticVertex(148.542, 155.573, 148.542, 155.573);
    vertex(148.542, 199.02);
    quadraticVertex(148.542, 199.02, 148.542, 199.02);
    vertex(31.074, 199.02);
    quadraticVertex(31.074, 199.02, 31.074, 199.02);
    vertex(31.074, 155.573);
    quadraticVertex(31.074, 155.573, 31.074, 155.573);
    endShape();
    stroke("#000000");
    beginShape();
    vertex(31.074, 94.425);
    vertex(148.542, 94.425);
    quadraticVertex(148.542, 94.425, 148.542, 94.425);
    vertex(148.542, 137.872);
    quadraticVertex(148.542, 137.872, 148.542, 137.872);
    vertex(31.074, 137.872);
    quadraticVertex(31.074, 137.872, 31.074, 137.872);
    vertex(31.074, 94.425);
    quadraticVertex(31.074, 94.425, 31.074, 94.425);
    endShape();
    stroke("#000000");
    push();
    translate(483, -82.277);
    rotate(1.5707963267948966);
    beginShape();
    vertex(115.555, 104.885);
    vertex(281.298, 104.885);
    quadraticVertex(281.298, 104.885, 281.298, 104.885);
    vertex(281.298, 127.41300000000001);
    quadraticVertex(281.298, 127.41300000000001, 281.298, 127.41300000000001);
    vertex(115.555, 127.41300000000001);
    quadraticVertex(115.555, 127.41300000000001, 115.555, 127.41300000000001);
    vertex(115.555, 104.885);
    quadraticVertex(115.555, 104.885, 115.555, 104.885);
    endShape();
    pop();
    stroke("#000000");
    push();
    fill("#fff");
    translate(-130, -85);
    scale(-1, 1);
    textSize(18);
    text("Entré", -245, 150);
    pop();
    pop();
  }

  draw() {
    translate(this.position.x, this.position.y);
    doorClosed();
    doorOpen();
  }

  update() {
    this.draw();
  }
}
