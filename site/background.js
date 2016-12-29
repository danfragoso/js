var canvas;

var points = [],
    x, j,
    lines_length = 15,
    x_spacing = y_spacing = lines_length * 4 - 4;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

  for (x = 0; x < width / x_spacing ; x++){
      for (y = 0; y < height / y_spacing ; y++){
        points.push(createVector(x * x_spacing, y * y_spacing));

      }
  }

}

function draw() {
  background(23,28,36);

    points.forEach(function(point){
        drawVectorFromPoint(point);
    })
    fill(0,128,128);
    //rect(width / 2 - 450 / 2, height / 2 - 400 / 2, 450, 400, 20);
    rect(0, height / 2 -180 / 2, windowWidth, 200);

    //rect(width /2 -100 ,height - 20, 200 , 40,5);

}

function drawVectorFromPoint(anchorLocation){
    var mouse = createVector(mouseX, mouseY);
    var lineVector = p5.Vector.sub(mouse, anchorLocation);
    lineVector.setMag(lines_length);
    strokeWeight(3);
    stroke(0, 128, 128);
    line(anchorLocation.x,
        anchorLocation.y,
        anchorLocation.x + lineVector.x,
        anchorLocation.y + lineVector.y);
}
