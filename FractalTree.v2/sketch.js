var angle = 0
var rnd1;
var rnd2;

var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rnd1 = random(0.5, 0.75);
  rnd2 = random(0.5, 0.75);
  //slider = createSlider(0, TWO_PI, PI/4, 0.01);
}
function mouseClicked(){
  setup();
}

function draw() {
  background(0);
  angle = sin(millis()/3000);
  stroke(255);
  translate(windowWidth/2, windowHeight);
  branch(windowHeight/6);
  
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len)
  if ( len > 4) {
    push();
  rotate(angle)
    branch(len * rnd1)
    pop();
    push();
  rotate(-angle);
    branch(len * rnd2)
    pop();
  } 
  
  
  
  }