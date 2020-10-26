var tree = [];
var leaves = [];

var count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  var a = createVector (width / 2, height);
  var b = createVector (width / 2, height - 300);
  var root = new Branch(a, b);

  tree[0] = root;
}

function mousePressed() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }  
    tree[i].finished = true;
  }
  count++;

  if (count === 3) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }

  if (count === 6) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }

  if (count === 9) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }

}

function draw() {
  background(51);
  
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    //tree[i].jitter();
  }

  for (var i = 0; i < leaves.length; i++) {
    fill(255, 204, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 2.7, 5);
    leaves[i].x += random (0, 1);
    leaves[i].y += random (0, 1);
  }

}