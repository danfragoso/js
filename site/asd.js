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



function drawCube(scale,r1,g1,b1,r2,b2,g2,r3,g3,b3){

 fill(r1, g1, b1);
 quad(0, 0, 15 * scale, 10* scale, 15* scale, 25* scale, 0, 15* scale);
 translate(15* scale,0);
 fill(r2, g2, b2);
 quad(0, 10* scale, 15* scale, 0, 15* scale, 15* scale, 0, 25* scale);
 translate(-15* scale,-10* scale);
 fill(r3, g3, b3);
 quad(0, 10* scale, 15* scale, 0, 30* scale, 10* scale, 15* scale, 20* scale);
}

function draw() {

 background(23,28,36);


for ( i = 0; i < height / 150 +1 ; i++){
  push();
  for (var j = 0; j < width / 90 + 1; j++){
    drawCube(3,20,30,60,60,55,58,66,61,42);
    translate(-45,105);
    drawCube(3,22,39,63,62,51,51,62,68,46);
    translate(135,-45);
  }
  pop();
  translate( 0,150);
}

translate(mouseX,mouseY);
drawCube(3);
}
