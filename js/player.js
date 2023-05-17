const firtPlayerColor = sessionStorage.getItem("color");
const secondPlayerColor = sessionStorage.getItem("color2");

let canvasHeight = window.innerHeight;
const gravity = 1;

const lightYellow = "#fff100";
const darkYellow = "#d7c700";

const lightGreen = "#009245";
const darkGreen = "#005129";

const lightBlue = "#3F54A0";
const darkBlue = "#263169";

const lightRed = "#C1272D";
const darkRed = "#821E19";

const lightWhite = "#FFFFFF";
const darkWhite = "#BEBEBE";

var lightOvveColor;
var darkOvveColor;

if (firtPlayerColor === null) {
  lightOvveColor = lightYellow;
  darkOvveColor = darkYellow;
} else if (firtPlayerColor === "yellow") {
  lightOvveColor = lightYellow;
  darkOvveColor = darkYellow;
} else if (firtPlayerColor === "green") {
  lightOvveColor = lightGreen;
  darkOvveColor = darkGreen;
} else if (firtPlayerColor === "blue") {
  lightOvveColor = lightBlue;
  darkOvveColor = darkBlue;
} else if (firtPlayerColor === "red") {
  lightOvveColor = lightRed;
  darkOvveColor = darkRed;
} else if (firtPlayerColor === "white") {
  lightOvveColor = lightWhite;
  darkOvveColor = darkWhite;
}

let heightOfCharacter = "";
let widthOfCharacter = "";

function firstPerson() {
  push();
  scale(0.1, 0.1);
  translate(0 + heightOfCharacter, 10 + widthOfCharacter);
  stroke("rgba(0,0,0,0)");
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(darkOvveColor);
  beginShape();
  vertex(43.842, 1462.402);
  vertex(109.908, 1525.165);
  vertex(340.583, 1254.294);
  vertex(430.328, 956.997);
  vertex(346.115, 868.657);
  vertex(237.085, 1198.138);
  vertex(43.842, 1462.402);
  endShape();
  fill(lightOvveColor);
  beginShape();
  vertex(341.139, 798.439);
  bezierVertex(341.139, 798.439, 327.926, 947.088, 430.328, 956.997);
  vertex(744.142, 1597.837);
  vertex(823.421, 1528.468);
  vertex(529.427, 904.1440000000001);
  vertex(542.64, 821.5610000000001);
  vertex(341.139, 798.4380000000001);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(341.139, 798.439);
  bezierVertex(341.139, 798.439, 358.48, 268.216, 488.401, 260.342);
  bezierVertex(488.401, 260.342, 659.8720000000001, 197.75, 542.641, 821.562);
  vertex(341.14, 798.439);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(537.423, 0.5);
  bezierVertex(
    596.5699352831289,
    0.5,
    644.518,
    55.14230313740114,
    644.518,
    122.547
  );
  bezierVertex(
    644.518,
    189.95169686259885,
    596.5699352831289,
    244.594,
    537.423,
    244.594
  );
  bezierVertex(
    478.2760647168712,
    244.594,
    430.328,
    189.95169686259885,
    430.328,
    122.547
  );
  bezierVertex(
    430.328,
    55.14230313740114,
    478.2760647168712,
    0.5,
    537.423,
    0.5
  );
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(43.842, 1462.402);
  bezierVertex(43.842, 1462.402, -80.554, 1505.219, 92.144, 1627.371);
  vertex(218.508, 1627.371);
  bezierVertex(
    218.508,
    1627.371,
    270.885,
    1561.959,
    109.90800000000002,
    1525.1650000000002
  );
  vertex(43.84200000000001, 1462.4020000000003);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(744.141, 1597.837);
  bezierVertex(
    744.141,
    1597.837,
    744.9989999999999,
    1673.517,
    805.5699999999999,
    1688.353
  );
  vertex(942.675, 1477.912);
  bezierVertex(
    942.675,
    1477.912,
    876.3439999999999,
    1339.885,
    823.42,
    1528.467
  );
  vertex(744.141, 1597.836);
  endShape();
  pop();
}

function secondPerson() {
  push();
  scale(0.1, 0.1);
  translate(0, 90);
  stroke("rgba(0,0,0,0)");
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(darkOvveColor);
  beginShape();
  vertex(68.95, 1295.527);
  vertex(110.054, 1406.507);
  vertex(364.896, 1316.079);
  vertex(385.448, 1016.022);
  vertex(268.905, 914.648);
  vertex(258.027, 1205.099);
  vertex(68.95, 1295.527);
  endShape();
  fill(lightOvveColor);
  beginShape();
  vertex(229.254, 785.842);
  bezierVertex(
    229.254,
    785.842,
    241.58499999999998,
    966.698,
    385.448,
    1016.0219999999999
  );
  vertex(496.428, 1221.54);
  vertex(471.766, 1509.2649999999999);
  vertex(599.187, 1509.2649999999999);
  vertex(623.849, 1200.9879999999998);
  vertex(451.21400000000006, 900.9319999999998);
  vertex(463.5450000000001, 814.4849999999998);
  vertex(229.25400000000008, 785.8419999999998);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(229.254, 791.362);
  bezierVertex(229.254, 791.362, 246.595, 261.139, 376.51599999999996, 253.265);
  bezierVertex(
    376.51599999999996,
    253.265,
    550.5649999999999,
    235.79199999999997,
    463.54499999999996,
    814.485
  );
  vertex(229.25399999999996, 791.362);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(426.552, 0.5);
  bezierVertex(
    485.69893528312883,
    0.5,
    533.647,
    55.14230313740114,
    533.647,
    122.547
  );
  bezierVertex(
    533.647,
    189.95169686259885,
    485.69893528312883,
    244.594,
    426.552,
    244.594
  );
  bezierVertex(
    367.4050647168712,
    244.594,
    319.457,
    189.95169686259885,
    319.457,
    122.547
  );
  bezierVertex(
    319.457,
    55.14230313740114,
    367.4050647168712,
    0.5,
    426.552,
    0.5
  );
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(68.95, 1295.527);
  vertex(0.574, 1295.527);
  vertex(34.762, 1543.665);
  bezierVertex(34.762, 1543.665, 105.515, 1586.36, 110.054, 1406.507);
  vertex(68.95, 1295.527);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(501.209, 1509.266);
  bezierVertex(
    501.209,
    1509.266,
    444.703,
    1553.7910000000002,
    462.547,
    1622.192
  );
  vertex(736.153, 1607.3220000000001);
  bezierVertex(
    736.153,
    1607.3220000000001,
    735.643,
    1501.8280000000002,
    597.6080000000001,
    1543.6650000000002
  );
  vertex(563.662, 1509.266);
  vertex(501.20900000000006, 1509.266);
  endShape();
  pop();
}

function thirdPerson() {
  push();
  scale(0.1, 0.1);
  translate(0, -20);
  stroke("rgba(0,0,0,0)");
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(darkOvveColor);
  beginShape();
  vertex(119.29, 1256.272);
  vertex(129.882, 1340.816);
  vertex(439.711, 1256.272);
  vertex(376.156, 835.028);
  vertex(288.769, 962.137);
  vertex(325.842, 1168.69);
  vertex(119.29, 1256.272);
  endShape();
  fill(lightOvveColor);
  beginShape();
  vertex(166.956, 790.01);
  bezierVertex(166.956, 790.01, 160.66, 875.556, 200.882, 926.7909999999999);
  vertex(129.883, 1621.572);
  vertex(233.159, 1634.7559999999999);
  vertex(288.769, 962.1369999999998);
  bezierVertex(
    288.769,
    962.1369999999998,
    325.842,
    935.6559999999998,
    376.15700000000004,
    835.0279999999998
  );
  vertex(166.95700000000005, 790.0099999999998);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(167.673, 794.539);
  bezierVertex(167.673, 794.539, 185.014, 264.31600000000003, 314.935, 256.442);
  bezierVertex(314.935, 256.442, 493.38800000000003, 211.216, 376.156, 835.028);
  vertex(167.673, 794.539);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(368.743, 0.5);
  bezierVertex(
    427.8899352831288,
    0.5,
    475.83799999999997,
    55.14230313740114,
    475.83799999999997,
    122.547
  );
  bezierVertex(
    475.83799999999997,
    189.95169686259885,
    427.8899352831288,
    244.594,
    368.743,
    244.594
  );
  bezierVertex(
    309.5960647168712,
    244.594,
    261.648,
    189.95169686259885,
    261.648,
    122.547
  );
  bezierVertex(
    261.648,
    55.14230313740114,
    309.5960647168712,
    0.5,
    368.743,
    0.5
  );
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(119.29, 1256.272);
  bezierVertex(119.29, 1256.272, 99.537, 1240.213, 56.087, 1245.041);
  vertex(0.567, 1503.328);
  bezierVertex(
    0.567,
    1503.328,
    94.70899999999999,
    1554.906,
    94.70899999999999,
    1351.695
  );
  vertex(129.882, 1340.816);
  vertex(119.29, 1256.271);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(155.568, 1624.851);
  bezierVertex(
    155.568,
    1624.851,
    109.53500000000001,
    1675.999,
    129.882,
    1734.498
  );
  vertex(391.62, 1734.498);
  bezierVertex(
    391.62,
    1734.498,
    446.439,
    1626.178,
    233.15800000000002,
    1634.756
  );
  vertex(155.567, 1624.851);
  endShape();
  pop();
}

function fourthPerson() {
  push();
  scale(0.1, 0.1);
  translate(0, -50);
  stroke("rgba(0,0,0,0)");
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(darkOvveColor);
  beginShape();
  vertex(483.227, 1493.757);
  vertex(579.139, 1493.757);
  vertex(633.946, 1199.172);
  vertex(459.25, 849.78);
  vertex(370.189, 970.105);
  vertex(527.758, 1202.597);
  vertex(483.227, 1493.757);
  endShape();
  fill(lightOvveColor);
  beginShape();
  vertex(257.15, 808.675);
  bezierVertex(257.15, 808.675, 243.44799999999998, 899.554, 274.277, 941.463);
  vertex(41.349, 1596.519);
  vertex(140.686, 1647.9);
  vertex(370.18899999999996, 970.104);
  bezierVertex(370.18899999999996, 970.104, 404.443, 949.115, 459.25, 849.778);
  vertex(257.151, 808.673);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(259.572, 810.201);
  bezierVertex(
    259.572,
    810.201,
    276.913,
    279.97800000000007,
    406.834,
    272.10400000000004
  );
  bezierVertex(
    406.834,
    272.10400000000004,
    576.482,
    225.96700000000004,
    459.25,
    849.779
  );
  vertex(259.573, 810.201);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(412.319, 0.5);
  bezierVertex(
    471.46593528312883,
    0.5,
    519.414,
    55.14230313740114,
    519.414,
    122.547
  );
  bezierVertex(
    519.414,
    189.95169686259885,
    471.46593528312883,
    244.594,
    412.319,
    244.594
  );
  bezierVertex(
    353.1720647168712,
    244.594,
    305.22400000000005,
    189.95169686259885,
    305.22400000000005,
    122.547
  );
  bezierVertex(
    305.22400000000005,
    55.14230313740114,
    353.1720647168712,
    0.5,
    412.319,
    0.5
  );
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(64.893, 1608.697);
  bezierVertex(
    64.893,
    1608.697,
    5.344999999999999,
    1621.473,
    0.5169999999999959,
    1693.8899999999999
  );
  vertex(121.21199999999999, 1777.812);
  vertex(259.571, 1777.812);
  bezierVertex(
    259.571,
    1777.812,
    303.021,
    1670.8939999999998,
    130.04400000000004,
    1693.2549999999999
  );
  vertex(116.64000000000004, 1635.463);
  vertex(64.89300000000004, 1608.697);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(502.067, 1493.757);
  bezierVertex(
    502.067,
    1493.757,
    476.745,
    1566.9540000000002,
    500.54,
    1608.6970000000001
  );
  vertex(729.517, 1510.4330000000002);
  bezierVertex(
    729.517,
    1510.4330000000002,
    720.8430000000001,
    1390.1790000000003,
    579.1390000000001,
    1493.7560000000003
  );
  vertex(502.0670000000001, 1493.7560000000003);
  endShape();

  pop();
}

function fifthPerson() {
  push();
  scale(0.1, 0.1);
  translate(0, 30);
  stroke("rgba(0,0,0,0)");
  strokeCap(PROJECT);
  strokeJoin(MITER);
  fill(darkOvveColor);
  beginShape();
  vertex(685.13, 1543.895);
  vertex(766.688, 1479.888);
  vertex(493.648, 837.456);
  vertex(404.998, 940.9);
  vertex(685.13, 1543.895);
  endShape();
  fill(lightOvveColor);
  beginShape();
  vertex(295.073, 795.515);
  bezierVertex(295.073, 795.515, 273.79699999999997, 830.975, 309.257, 898.348);
  vertex(238.33800000000002, 1199.168);
  vertex(43.309000000000026, 1458.1209999999999);
  vertex(124.86600000000003, 1525.9859999999999);
  vertex(326.98600000000005, 1228.1239999999998);
  vertex(404.99700000000007, 940.8999999999999);
  bezierVertex(
    404.99700000000007,
    940.8999999999999,
    465.27900000000005,
    911.3109999999999,
    493.6460000000001,
    837.4559999999999
  );
  vertex(295.07200000000006, 795.5149999999999);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(297.053, 798.438);
  bezierVertex(297.053, 798.438, 314.394, 268.21500000000003, 444.315, 260.341);
  bezierVertex(444.315, 260.341, 610.88, 213.644, 493.648, 837.456);
  vertex(297.05400000000003, 798.438);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(493.338, 0.5);
  bezierVertex(
    552.4849352831288,
    0.5,
    600.433,
    55.14230313740114,
    600.433,
    122.547
  );
  bezierVertex(
    600.433,
    189.95169686259885,
    552.4849352831288,
    244.594,
    493.338,
    244.594
  );
  bezierVertex(
    434.1910647168712,
    244.594,
    386.24300000000005,
    189.95169686259885,
    386.24300000000005,
    122.547
  );
  bezierVertex(
    386.24300000000005,
    55.14230313740114,
    434.1910647168712,
    0.5,
    493.338,
    0.5
  );
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(61.998, 1473.672);
  bezierVertex(
    61.998,
    1473.672,
    20.354999999999997,
    1475.126,
    0.5689999999999955,
    1525.9850000000001
  );
  vertex(103.894, 1658.1860000000001);
  vertex(233.6, 1658.1860000000001);
  bezierVertex(
    233.6,
    1658.1860000000001,
    268.775,
    1581.8660000000002,
    145.663,
    1589.248
  );
  vertex(124.86500000000001, 1525.9850000000001);
  vertex(61.99600000000001, 1473.672);
  endShape();
  fill("#ffffff");
  stroke("#000000");
  beginShape();
  vertex(707.95, 1525.986);
  vertex(766.6880000000001, 1658.1870000000001);
  bezierVertex(
    766.6880000000001,
    1658.1870000000001,
    816.1810000000002,
    1658.3390000000002,
    840.363,
    1565.93
  );
  vertex(908.514, 1451.536);
  bezierVertex(
    908.514,
    1451.536,
    849.165,
    1351.3400000000001,
    774.4110000000001,
    1525.986
  );
  vertex(747.557, 1494.902);
  vertex(707.95, 1525.986);
  endShape();

  pop();
}

const animationFrameFunctions = [
  firstPerson,
  secondPerson,
  thirdPerson,
  fourthPerson,
  fifthPerson,
];

let currentFrame = 0;
let frameChangeCounter = 0;
let animationFrameRate = 10;

function characterAnimation() {
  // calling one of the functtions from the array
  // animationFrameFunctions[currentFrame]();

  frameChangeCounter++;

  if (frameChangeCounter >= animationFrameRate) {
    currentFrame++;
    frameChangeCounter = 0; // Reset the counter
  }

  // looping the animation
  if (currentFrame >= animationFrameFunctions.length) {
    currentFrame = 0;
  }
}

//player object
export default class Player {
  constructor(position) {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.height = 100;
    this.width = 100;
  }

  draw() {
    push();
    translate(this.position.x, this.position.y);
    animationFrameFunctions[currentFrame]();
    pop();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y < canvasHeight - 75) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
    requestAnimationFrame(characterAnimation);
  }
}
