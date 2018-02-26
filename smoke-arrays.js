var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
var r = [];

function setup() {
  createCanvas(400, 400);

 for (var i = 0; i < 100; i = i + 1) {
  x[i] = 0;
  y[i] = (0,100);
  r[i] = 0;
  xSpeed[i] = (0);
  ySpeed[i] = random(0.1,2);
  
 }
}

function draw() {
  background(0);
  noStroke();
  
  fill(255);
  rect(180, height, 30, -100);

  
  for (var i = 0; i < 100; i = i + 1) {
  push();
  fill(y[i]);
  translate(195,y[i]);
  rotate(r[i]);
  rect(-10, -10, 20, 20);
  pop();
  x[i] += xSpeed[i];
  y[i] -= ySpeed[i];
  
  r[i] += 0.05
  
  if (y[i] < -150) {
    y[i] = 290;
  }
}
}
