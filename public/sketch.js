function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  stroke(255);
  noFill();
}

function draw() {
  background(255,30); // slight trail effect

  translate(width / 2, height / 2);

  let R = map(mouseX, 0, width, 50, 200);  // Fixed circle radius
  let r = map(mouseY, 0, height, 10, 100); // Rolling circle radius

  let k = R / r;

  beginShape();
  stroke(103, 86, 165);
  strokeWeight(1);
  noFill();

  for (let t = 0; t < TWO_PI * r; t += 0.01) {
    let x = (R + r) * cos(t) - r * cos((1 + k) * t);
    let y = (R + r) * sin(t) - r * sin((1 + k) * t);
    vertex(x, y);
  }

  endShape();
}
