var canvas;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(23,28,36);

}

function makeHex(x, y, radius,r,g,b){
  var angle = TWO_PI / 6;
  noStroke();
  fill(r,g,b);
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawCube(){
 quad(0, 0, 15, 10, 15, 25, 0, 15);
 translate(15,0);
 quad(0, 10, 15, 0, 15, 15, 0, 25);
 translate(-15,-10);
 quad(0, 10, 15, 0, 30, 10, 15, 20);
}

function draw() {

 background(23,28,36);

//for (var i = 0; i < 3; i++){
  //translate(- (width * 30) - 15,25);

  for (var j = 0; j < width / 30; j++){
  drawCube();
  translate(30,10);
  }
//}

translate(- (width * 30) - 15,25);
drawCube();

for (var d = 0; d < width / 30; d++){
drawCube();
translate(30,10);
}



//drawCube();


/* drawCube();
 translate(30,10);
 drawCube();
 translate(30,10);
 drawCube();
 translate(-75,35);
 drawCube();
 translate(30,10);
 drawCube();
 translate(30,10);
 drawCube();
*/


}
