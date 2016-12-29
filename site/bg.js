var canvas;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(23,28,36);

  for (var i = 0; i  <  height ; i = i + 38){
   translate(22,0);
      for (var j = 0; j  <  width + 1;  j++){
      push();
      translate(j*44, i);
      rotate(11);
      makeHex(0, 0, 25, 25, 90,56);
      pop();
    }
  }


}

function makeHex(x, y, radius,r,g,b){
  var angle = TWO_PI / 6;
  //noStroke();
  fill(r,g,b);
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function draw() {




}
