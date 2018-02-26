var x = [];
var y = [];
var d = [];

function setup(){
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 50; i++){
    noStroke();
    x[i] = random(10,390);
    y[i] = random(10, 390);
    d[i] = random(100);

    color[i] = color((0), (0), (360));
  }
}
//draw circles
function draw(){
  background(0);
  for (var i = 0; i < 50; i++){
    fill(color[i]);
    ellipse(x[i], y[i], d[i]);
  if (random() < 10){
    d[i] = random(1,5);
  }
  }
}
