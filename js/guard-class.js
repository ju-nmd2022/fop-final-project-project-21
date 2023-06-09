// setup
let canvasHeight = window.innerHeight + 500;
const gravity = 1;

export default class Guard {
  constructor(position) {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.height = 220;
    this.width = 100;

    // values needed for animation
    this.animationFrameRate = 5;
    this.currentFrame = 0;
    this.frameChangeCounter = 0;

    // all the animation frames
    this.animationFrameFunctions = [
      () => this.firstGuard(),
      () => this.secondGuard(),
      () => this.thirdGuard(),
      () => this.fourthGuard(),
      () => this.fifthGuard(),
    ];

    // flipping the animation when walking to the left, changin the x value of "scale" to a negative to mirror the drawing, correcting the placement of the image after mirroring
    this.direction = 0.1;
    this.placeCorrection = 0;
  }

  firstGuard() {
    push();
    scale(this.direction, 0.1);
    translate(this.placeCorrection, 160);
    stroke("rgba(0,0,0,0)");
    strokeCap(PROJECT);
    strokeJoin(MITER);
    fill("#8fa1af");
    beginShape();
    vertex(363.501, 823.32);
    bezierVertex(
      363.501,
      823.32,
      382.14599999999996,
      293.0970000000001,
      521.8389999999999,
      285.22300000000007
    );
    bezierVertex(
      521.8389999999999,
      285.22300000000007,
      766,
      229.55500000000006,
      580.159,
      846.4430000000001
    );
    vertex(363.501, 823.32);
    endShape();
    fill("#768b9d");
    beginShape();
    vertex(43.842, 1487.284);
    vertex(114.877, 1550.046);
    vertex(362.903, 1279.176);
    vertex(459.398, 981.879);
    vertex(368.851, 893.539);
    vertex(251.62, 1223.02);
    vertex(43.842, 1487.284);
    endShape();
    beginShape();
    stroke(1);
    vertex(363.501, 823.32);
    bezierVertex(363.501, 823.32, 349.294, 971.969, 459.399, 981.878);
    vertex(796.817, 1622.718);
    vertex(882.059, 1553.3490000000002);
    vertex(565.952, 929.0250000000002);
    vertex(580.159, 846.4420000000002);
    vertex(363.501, 823.3190000000002);
    endShape();
    fill("#ffffff");
    stroke("#000000");
    beginShape();
    vertex(560.626, 10.664000000000016);
    bezierVertex(
      619.7729352831288,
      10.664000000000016,
      667.721,
      65.30630313740116,
      667.721,
      132.711
    );
    bezierVertex(
      667.721,
      200.11569686259887,
      619.7729352831288,
      254.758,
      560.626,
      254.758
    );
    bezierVertex(
      501.47906471687116,
      254.758,
      453.53099999999995,
      200.11569686259887,
      453.53099999999995,
      132.711
    );
    bezierVertex(
      453.53099999999995,
      65.30630313740116,
      501.47906471687116,
      10.664000000000016,
      560.626,
      10.664000000000016
    );
    endShape();
    stroke("#000000");
    beginShape();
    vertex(43.842, 1487.585);
    bezierVertex(43.842, 1487.585, -80.554, 1530.402, 92.144, 1652.554);
    vertex(218.508, 1652.554);
    bezierVertex(
      218.508,
      1652.554,
      270.885,
      1587.142,
      109.90800000000002,
      1550.3480000000002
    );
    vertex(43.84200000000001, 1487.5850000000003);
    endShape();
    stroke("#000000");
    beginShape();
    vertex(803.141, 1622.719);
    bezierVertex(
      803.141,
      1622.719,
      803.9989999999999,
      1698.3990000000001,
      864.5699999999999,
      1713.2350000000001
    );
    vertex(1001.675, 1502.794);
    bezierVertex(
      1001.675,
      1502.794,
      935.3439999999999,
      1364.767,
      882.42,
      1553.3490000000002
    );
    vertex(803.141, 1622.718);
    endShape();
    fill("#8fa1af");
    beginShape();
    vertex(667.038, 104.223);
    vertex(451.178, 117.731);
    bezierVertex(451.178, 117.731, 422.224, 16.98, 539.735, 1.846);
    bezierVertex(657.246, -13.288, 667.039, 104.223, 667.039, 104.223);
    endShape();
    fill("#768b9d");
    beginShape();
    vertex(743.598, 145.173);
    bezierVertex(
      743.598,
      145.173,
      709.536,
      199.949,
      592.1419999999999,
      108.90899999999999
    );
    vertex(667.0379999999999, 104.222);
    vertex(743.598, 145.173);
    endShape();
    fill("#606060");
    beginShape();
    vertex(365.282, 788.089);
    vertex(363.501, 823.32);
    vertex(580.159, 846.443);
    vertex(590.067, 812.776);
    vertex(365.282, 788.089);
    endShape();
    pop();
  }

  secondGuard() {
    push();
    scale(this.direction, 0.1);
    translate(this.placeCorrection, 240);
    stroke("rgba(0,0,0,0)");
    strokeCap(PROJECT);
    strokeJoin(MITER);
    fill("#768b9d");
    beginShape();
    vertex(68.808, 1306.792);
    vertex(113.003, 1415.475);
    vertex(387.015, 1326.918);
    vertex(409.112, 1033.072);
    vertex(283.803, 933.796);
    vertex(272.107, 1218.235);
    vertex(68.808, 1306.792);
    endShape();
    fill("#8fa1af");
    beginShape();
    vertex(241.17, 807.655);
    bezierVertex(
      241.17,
      807.655,
      254.42899999999997,
      984.768,
      409.11199999999997,
      1033.072
    );
    vertex(528.439, 1234.337);
    vertex(501.92199999999997, 1516.108);
    vertex(638.928, 1516.108);
    vertex(665.445, 1214.211);
    vertex(479.82400000000007, 920.364);
    vertex(493.0830000000001, 835.706);
    vertex(241.1690000000001, 807.6560000000001);
    endShape();
    fill("#fffff");
    stroke("#000000");
    beginShape();
    vertex(449.691, 20.092);
    bezierVertex(
      508.8379352831288,
      20.092,
      556.786,
      73.60337441547372,
      556.786,
      139.613
    );
    bezierVertex(
      556.786,
      205.62262558452628,
      508.8379352831288,
      259.134,
      449.691,
      259.134
    );
    bezierVertex(
      390.54406471687116,
      259.134,
      342.596,
      205.62262558452628,
      342.596,
      139.613
    );
    bezierVertex(
      342.596,
      73.60337441547372,
      390.54406471687116,
      20.092,
      449.691,
      20.092
    );
    endShape();
    stroke("#000000");
    beginShape();
    vertex(68.952, 1306.766);
    vertex(0.575, 1306.766);
    vertex(34.763000000000005, 1549.769);
    bezierVertex(
      34.763000000000005,
      1549.769,
      105.516,
      1591.581,
      110.055,
      1415.449
    );
    vertex(68.95100000000001, 1306.766);
    endShape();
    stroke("#000000");
    beginShape();
    vertex(548.211, 1516.337);
    bezierVertex(
      548.211,
      1516.337,
      491.70500000000004,
      1559.94,
      509.54900000000004,
      1626.926
    );
    vertex(783.155, 1612.364);
    bezierVertex(
      783.155,
      1612.364,
      782.645,
      1509.053,
      644.61,
      1550.0240000000001
    );
    vertex(610.664, 1516.3370000000002);
    vertex(548.211, 1516.3370000000002);
    endShape();
    fill("#8fa1af");
    beginShape();
    vertex(241.17, 813.061);
    bezierVertex(241.17, 813.061, 259.815, 293.81100000000004, 399.508, 286.1);
    bezierVertex(
      399.508,
      286.1,
      644.9,
      224.63500000000002,
      493.08299999999997,
      835.705
    );
    vertex(241.16899999999998, 813.0600000000001);
    endShape();
    beginShape();
    vertex(561.146, 115.47);
    vertex(345.28, 102.335);
    bezierVertex(345.28, 102.335, 329.066, 0.911, 447.547, 0.501);
    bezierVertex(
      566.028,
      0.09099999999999997,
      561.1460000000001,
      115.47,
      561.1460000000001,
      115.47
    );
    endShape();
    fill("#768b9d");

    beginShape();
    vertex(632.026, 164.577);
    bezierVertex(
      632.026,
      164.577,
      591.423,
      213.66,
      486.24799999999993,
      110.913
    );
    vertex(561.146, 115.47);
    vertex(632.026, 164.577);
    endShape();
    fill("#606060");
    beginShape();
    vertex(241.17, 813.061);
    vertex(493.083, 835.705);
    vertex(499.887, 807.655);
    vertex(243.339, 772.326);
    vertex(241.17, 813.061);
    endShape();
    pop();
  }

  thirdGuard() {
    push();
    scale(this.direction, 0.1);
    translate(this.placeCorrection, 120);
    stroke("rgba(0,0,0,0)");
    stroke(1);
    strokeCap(PROJECT);
    strokeJoin(MITER);
    fill("#768b9d");
    beginShape();
    vertex(118.15, 1274.355);
    vertex(129.539, 1358.9);
    vertex(462.672, 1274.355);
    vertex(394.337, 853.112);
    vertex(300.377, 980.221);
    vertex(340.239, 1186.773);
    vertex(118.15, 1274.355);
    endShape();
    fill("#8fa1af");
    beginShape();
    vertex(169.401, 808.094);
    bezierVertex(
      169.401,
      808.094,
      162.632,
      893.6400000000001,
      205.87800000000001,
      944.875
    );
    vertex(129.538, 1639.656);
    vertex(240.582, 1652.84);
    vertex(300.375, 980.2209999999999);
    bezierVertex(
      300.375,
      980.2209999999999,
      340.237,
      953.7399999999999,
      394.336,
      853.1119999999999
    );
    vertex(169.4, 808.0939999999998);
    endShape();
    beginShape();
    vertex(170.173, 812.622);
    bezierVertex(
      170.173,
      812.622,
      188.818,
      282.399,
      328.51099999999997,
      274.525
    );
    bezierVertex(
      328.51099999999997,
      274.525,
      571.3589999999999,
      239.89,
      394.337,
      853.111
    );
    vertex(170.173, 812.622);
    endShape();
    fill("#ffffff");
    stroke("#000000");
    beginShape();
    vertex(391.33, 18.982);
    bezierVertex(
      450.4769352831288,
      18.982,
      498.42499999999995,
      73.62430313740114,
      498.42499999999995,
      141.029
    );
    bezierVertex(
      498.42499999999995,
      208.43369686259885,
      450.4769352831288,
      263.076,
      391.33,
      263.076
    );
    bezierVertex(
      332.1830647168712,
      263.076,
      284.235,
      208.43369686259885,
      284.235,
      141.029
    );
    bezierVertex(
      284.235,
      73.62430313740114,
      332.1830647168712,
      18.982,
      391.33,
      18.982
    );
    endShape();
    stroke("#000000");
    beginShape();
    vertex(119.29, 1274.355);
    bezierVertex(119.29, 1274.355, 99.537, 1258.296, 56.087, 1263.124);
    vertex(0.567, 1521.412);
    bezierVertex(
      0.567,
      1521.412,
      94.70899999999999,
      1572.99,
      94.70899999999999,
      1369.779
    );
    vertex(129.882, 1358.9);
    vertex(119.29, 1274.355);
    endShape();
    stroke("#000000");
    beginShape();
    vertex(152.568, 1643.243);
    bezierVertex(
      152.568,
      1643.243,
      106.53500000000001,
      1694.3909999999998,
      126.882,
      1752.8899999999999
    );
    vertex(388.62, 1752.8899999999999);
    bezierVertex(
      388.62,
      1752.8899999999999,
      443.439,
      1644.57,
      230.15800000000002,
      1653.148
    );
    vertex(152.567, 1643.243);
    endShape();
    fill("#8fa1af");
    beginShape();
    vertex(505.102, 127.023);
    vertex(290.96299999999997, 96.646);
    bezierVertex(290.96299999999997, 96.646, 282.959, -7.877, 401.104, 1.04);
    bezierVertex(
      519.249,
      9.957,
      505.102,
      127.02300000000001,
      505.102,
      127.02300000000001
    );
    endShape();
    fill("#768b9d");
    beginShape();
    vertex(571.811, 182.595);
    bezierVertex(
      571.811,
      182.595,
      527.3860000000001,
      229.361,
      430.803,
      116.483
    );
    vertex(505.102, 127.023);
    vertex(571.8109999999999, 182.596);
    endShape();
    fill("#606060");
    beginShape();
    vertex(170.173, 812.622);
    vertex(172.035, 776.038);
    vertex(402.705, 823.476);
    vertex(394.337, 853.112);
    vertex(170.173, 812.622);
    endShape();
    pop();
  }

  fourthGuard() {
    push();
    scale(this.direction, 0.1);
    translate(this.placeCorrection, 0);
    stroke("rgba(0,0,0,0)");
    stroke(1);
    strokeCap(PROJECT);
    strokeJoin(MITER);
    fill("#768b9d");
    beginShape();
    vertex(511.556, 1576.643);
    vertex(614.681, 1576.643);
    vertex(673.61, 1270.777);
    vertex(485.774, 908.005);
    vertex(390.014, 1032.938);
    vertex(559.435, 1274.333);
    vertex(511.556, 1576.643);
    endShape();
    fill("#8fa1af");
    beginShape();
    vertex(268.473, 865.326);
    bezierVertex(
      268.473,
      865.326,
      253.741,
      959.6850000000001,
      286.88800000000003,
      1003.1990000000001
    );
    vertex(36.44, 1683.341);
    vertex(143.249, 1736.6899999999998);
    vertex(390.014, 1032.9379999999999);
    bezierVertex(
      390.014,
      1032.9379999999999,
      426.845,
      1011.1459999999998,
      485.774,
      908.0049999999999
    );
    vertex(268.473, 865.3259999999999);
    endShape();
    beginShape();
    vertex(271.077, 866.911);
    bezierVertex(
      271.077,
      866.911,
      289.722,
      316.3829999999999,
      429.41499999999996,
      308.20799999999997
    );
    bezierVertex(
      429.41499999999996,
      308.20799999999997,
      673.9309999999999,
      259.56699999999995,
      485.77399999999994,
      908.005
    );
    vertex(271.07699999999994, 866.911);
    endShape();
    fill("#ffffff");
    stroke("#000000");
    beginShape();
    vertex(460.112, 6.298000000000002);
    bezierVertex(
      519.2589352831288,
      6.298000000000002,
      567.207,
      63.032476501441835,
      567.207,
      133.018
    );
    bezierVertex(
      567.207,
      203.00352349855817,
      519.2589352831288,
      259.738,
      460.112,
      259.738
    );
    bezierVertex(
      400.9650647168712,
      259.738,
      353.01700000000005,
      203.00352349855817,
      353.01700000000005,
      133.018
    );
    bezierVertex(
      353.01700000000005,
      63.032476501441835,
      400.9650647168712,
      6.298000000000002,
      460.112,
      6.298000000000002
    );
    endShape();
    stroke("#000000");
    beginShape();
    vertex(64.892, 1695.409);
    bezierVertex(
      64.892,
      1695.409,
      5.343999999999994,
      1708.6740000000002,
      0.5159999999999911,
      1783.865
    );
    vertex(121.21099999999998, 1871);
    vertex(259.57, 1871);
    bezierVertex(259.57, 1871, 303.02, 1759.987, 130.043, 1783.205);
    vertex(116.63900000000001, 1723.1999999999998);
    vertex(64.89200000000001, 1695.4089999999999);
    endShape();
    stroke("#000000");
    beginShape();
    vertex(525.066, 1578.201);
    bezierVertex(
      525.066,
      1578.201,
      499.744,
      1654.201,
      523.539,
      1697.5430000000001
    );
    vertex(752.516, 1595.516);
    bezierVertex(
      752.516,
      1595.516,
      743.842,
      1470.6570000000002,
      602.1379999999999,
      1578.201
    );
    vertex(525.0659999999999, 1578.201);
    endShape();
    fill("#8fa1af");
    beginShape();
    vertex(567.927, 108.195);
    vertex(352.067, 122.22099999999999);
    bezierVertex(352.067, 122.22099999999999, 323.113, 17.611, 440.624, 1.897);
    bezierVertex(558.135, -13.817, 567.928, 108.194, 567.928, 108.194);
    endShape();
    fill("#768b9d");
    beginShape();
    vertex(644.487, 150.714);
    bezierVertex(
      644.487,
      150.714,
      610.425,
      207.587,
      493.03099999999995,
      113.061
    );
    vertex(567.9269999999999, 108.19500000000001);
    vertex(644.4869999999999, 150.714);
    endShape();
    fill("#606060");
    beginShape();
    vertex(271.077, 866.911);
    vertex(272.546, 835.873);
    vertex(494.199, 878.403);
    vertex(485.774, 908.005);
    vertex(271.077, 866.911);
    endShape();

    pop();
  }

  fifthGuard() {
    push();
    scale(this.direction, 0.1);
    translate(this.placeCorrection, 150);
    stroke("rgba(0,0,0,0)");
    stroke(1);
    strokeCap(PROJECT);
    strokeJoin(MITER);
    fill("#768b9d");
    beginShape();
    vertex(738.822, 1603.413);
    vertex(826.514, 1539.407);
    vertex(532.936, 896.975);
    vertex(437.619, 1000.419);
    vertex(738.822, 1603.413);
    endShape();
    fill("#8fa1af");
    beginShape();
    vertex(319.425, 855.034);
    bezierVertex(
      319.425,
      855.034,
      296.54900000000004,
      890.494,
      334.676,
      957.867
    );
    vertex(258.42199999999997, 1258.687);
    vertex(48.72399999999996, 1517.6399999999999);
    vertex(136.41599999999994, 1585.5049999999999);
    vertex(353.73999999999995, 1287.6429999999998);
    vertex(437.61899999999997, 1000.4189999999999);
    bezierVertex(
      437.61899999999997,
      1000.4189999999999,
      502.43499999999995,
      970.8299999999999,
      532.9359999999999,
      896.9749999999999
    );
    vertex(319.42499999999995, 855.0339999999999);
    endShape();
    beginShape();
    vertex(319.59, 855.001);
    bezierVertex(319.59, 855.001, 345.296, 328.27, 486.25, 322.071);
    bezierVertex(486.25, 322.071, 729.9, 281.73900000000003, 532.275, 896.551);
    vertex(319.59, 855.0010000000001);
    endShape();
    fill("#ffffff");
    stroke("#000000");
    beginShape();
    vertex(532.414, 31.75999999999999);
    bezierVertex(
      591.5609352831289,
      31.75999999999999,
      639.509,
      86.40230313740113,
      639.509,
      153.807
    );
    bezierVertex(
      639.509,
      221.21169686259884,
      591.5609352831289,
      275.854,
      532.414,
      275.854
    );
    bezierVertex(
      473.2670647168712,
      275.854,
      425.31899999999996,
      221.21169686259884,
      425.31899999999996,
      153.807
    );
    bezierVertex(
      425.31899999999996,
      86.40230313740113,
      473.2670647168712,
      31.75999999999999,
      532.414,
      31.75999999999999
    );
    endShape();
    stroke("#000000");
    beginShape();
    vertex(61.998, 1530.119);
    bezierVertex(
      61.998,
      1530.119,
      20.354999999999997,
      1531.5729999999999,
      0.5689999999999955,
      1582.432
    );
    vertex(103.894, 1714.633);
    vertex(233.6, 1714.633);
    bezierVertex(233.6, 1714.633, 268.775, 1638.313, 145.663, 1645.695);
    vertex(124.86500000000001, 1582.432);
    vertex(61.99600000000001, 1530.119);
    endShape();
    stroke("#000000");
    beginShape();
    vertex(757.95, 1588.504);
    vertex(816.6880000000001, 1720.705);
    bezierVertex(
      816.6880000000001,
      1720.705,
      866.1810000000002,
      1720.857,
      890.363,
      1628.4479999999999
    );
    vertex(958.514, 1514.0539999999999);
    bezierVertex(
      958.514,
      1514.0539999999999,
      899.165,
      1413.858,
      824.4110000000001,
      1588.504
    );
    vertex(797.557, 1557.4199999999998);
    vertex(757.95, 1588.504);
    endShape();
    fill("#8fa1af");
    beginShape();
    vertex(644.456, 104.223);
    vertex(428.596, 117.731);
    bezierVertex(428.596, 117.731, 399.641, 16.98, 517.152, 1.846);
    bezierVertex(634.663, -13.288, 644.456, 104.223, 644.456, 104.223);
    endShape();
    fill("#768b9d");
    beginShape();
    vertex(721.016, 145.173);
    bezierVertex(
      721.016,
      145.173,
      686.954,
      199.949,
      569.56,
      108.90899999999999
    );
    vertex(644.4559999999999, 104.222);
    vertex(721.0159999999998, 145.173);
    endShape();
    fill("#606060");
    beginShape();
    vertex(319.59, 855.001);
    vertex(321.392, 826.273);
    vertex(539.874, 872.529);
    vertex(532.275, 896.551);
    vertex(319.59, 855.001);
    endShape();

    pop();
  }

  // timing the animation
  characterAnimation() {
    // add to the counter
    this.frameChangeCounter++;

    // reset the counter
    if (this.frameChangeCounter >= this.animationFrameRate) {
      this.currentFrame++;
      this.frameChangeCounter = 0;
    }

    // looping the animation
    if (this.currentFrame >= this.animationFrameFunctions.length) {
      this.currentFrame = 0;
    }
  }

  // drawing the animation
  animate() {
    const currentAnimationFunction =
      this.animationFrameFunctions[this.currentFrame];
    currentAnimationFunction();
    this.characterAnimation();
  }

  draw() {
    push();
    // making the guard slightly bigger
    scale(1.1, 1.1);
    // moving the x and y possition of the drawing
    translate(this.position.x, this.position.y);
    // checking weather the guard is walking left or right, corresponding animation
    if (this.velocity.x > 0) {
      this.animate();
      this.direction = 0.1;
      this.placeCorrection = 0;
    } else if (this.velocity.x < 0) {
      this.animate();
      this.direction = -0.1;
      this.placeCorrection = -400;
    }
    pop();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y < canvasHeight - 10) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}
