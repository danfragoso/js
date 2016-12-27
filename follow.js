var points = [],
    x, j,
    lines_length = 15,
    x_spacing = y_spacing = lines_length * 4 - 4;


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (x = 0; x < width / x_spacing ; x++){
      for (y = 0; y < height / y_spacing ; y++){
        points.push(createVector(x * x_spacing, y * y_spacing));

      }
  }

}

function draw() {
    background(255);
    points.forEach(function(point){
        drawVectorFromPoint(point);
    })
}

function drawVectorFromPoint(anchorLocation){
    var mouse = createVector(mouseX, mouseY);
    var lineVector = p5.Vector.sub(mouse, anchorLocation);
    lineVector.setMag(lines_length);
    strokeWeight(1);
    //stroke(hue, 100, 100);
    stroke(0, 128, 128);
    line(anchorLocation.x,
        anchorLocation.y,
        anchorLocation.x + lineVector.x,
        anchorLocation.y + lineVector.y);
}
