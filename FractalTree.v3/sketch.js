var angle = 0

var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
  background(0);
  angle = slider.value()
  stroke(255);
  translate(windowWidth/2, height);
  branch(300);
  
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len)
  if ( len > 16) {
    push();
  rotate(angle)
    branch(len * 0.65)
    pop();
    push();
  rotate(-angle);
    branch(len * 0.65)
    pop();
    push();
  rotate(2*angle);
    branch(len * 0.65)
    pop();
  } 
  
  
  
  }

