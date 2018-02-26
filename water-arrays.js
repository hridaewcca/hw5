var a = [];
var b = [];
var velx = [];
var vely = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  for (var i = 0; i < 5; i++) {
    a[i] = 230;
    b[i] = 220;
    velx[i] = random(-0.5,0.5);
    vely[i] = random(3,2);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  
  // draw drip
  for (var i = 0; i < 5; i++) {
  	ellipse(a[i], b[i], 10);
    a[i] += velx[i];
    b[i] += vely[i];
    if (b[i] > height) {
      b[i] = 220;
      a[i] = 230;
	  }
	}
}
