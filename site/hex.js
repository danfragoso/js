var hexPoints_xlarge = null;
var hexSize = 60;
var canvas;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  frameRate(1);
  ellipseMode(CENTER);
  // Get the 1st array of hexPoints
  hexPoints_xlarge = makeGrid(hexSize);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  hexPoints_xlarge = makeGrid(hexSize);
}

function draw() {

  //  Paint it black
  background(color(0));
  fill(color(255));
  noStroke();

  //  Go thru them drawing hexes
  var hPoint = null;
  for (var i = 0; i < hexPoints_xlarge.length; i++) {
    hPoint = hexPoints_xlarge[i];
    fill(color(255, 255, 255));
    drawHex(hPoint.x, hPoint.y, hexSize+1); // 1px larger to hide edges
  }

}

function drawHex(x, y, radius) {

  //  Work out the outside 6 points.
  var NEx = -radius * sin(radians(-30));
  var NEy = -radius * cos(radians(-30));
  var Ex = -radius * sin(radians(-90));
  var Ey = -radius * cos(radians(-90));
  var SEx = -radius * sin(radians(-150));
  var SEy = -radius * cos(radians(-150));
  var SWx = -radius * sin(radians(-210));
  var SWy = -radius * cos(radians(-210));
  var Wx = -radius * sin(radians(-270));
  var Wy = -radius * cos(radians(-270));
  var NWx = -radius * sin(radians(-330));
  var NWy = -radius * cos(radians(-330));

  //  Now we need to work out the mid points
  //  between the NE and E points, and so on
  //  so we can slit the whole thing into 4
  //  bits
  var NEEx = lerp(NEx, Ex, 0.5);
  var NEEy = lerp(NEy, Ey, 0.5);
  var SEEx = lerp(SEx, Ex, 0.5);
  var SEEy = lerp(SEy, Ey, 0.5);

  var NWWx = lerp(NWx, Wx, 0.5);
  var NWWy = lerp(NWy, Wy, 0.5);
  var SWWx = lerp(SWx, Wx, 0.5);
  var SWWy = lerp(SWy, Wy, 0.5);

  //  This is where we work out the colours. lerpColor really
  //  doesn't seem to be working for me in p5js otherwise
  //  I'd be using HSB to find nice colour palettes. Until
  //  then, adapt the code below to fancy up the colours.
  var r1 = int(random(0, 255));
  var g1 = int(random(0, 255));
  var b1 = int(random(0, 255));

  var r2 = int(random(0, 255));
  var g2 = int(random(0, 255));
  var b2 = int(random(0, 255));

  var c1 = color(r1, g1, b1);
  var c4 = color(r2, g2, b2);
  var c2 = lerpColor(c1, c4, 0.33);
  var c3 = lerpColor(c1, c4, 0.66);

  /*
  var c1 = color(int(random(0,100)), 80, 100);
  var c4 = color(int(random(0,100)),20,100);
  var c2 = lerpColor(c1, c4, 0.33);
  var c3 = lerpColor(c1, c4, 0.66);
  */

  fill(c1);
  push();
  translate((windowWidth / 2) + x, (windowHeight / 2) + y);

  var newAngle = int(random(0, 6)) * 60;
  rotate(radians(newAngle));

  //  Now draw the 4 different slices of the hex
  stroke(c1);
  fill(c1);
  beginShape();
  vertex(NEx, NEy);
  vertex(NEEx, NEEy);
  vertex(NWWx, NWWy);
  vertex(NWx, NWy);
  vertex(NEx, NEy);
  endShape();

  stroke(c2);
  fill(c2);
  beginShape();
  vertex(NEEx, NEEy);
  vertex(Ex, Ey);
  vertex(Wx, Wy);
  vertex(NWWx, NWWy);
  vertex(NEEx, NEEy);
  endShape();

  stroke(c3);
  fill(c3);
  beginShape();
  vertex(Ex, Ey);
  vertex(SEEx, SEEy);
  vertex(SWWx, SWWy);
  vertex(Wx, Wy);
  vertex(Ex, Ey);
  endShape();

  stroke(c4);
  fill(c4);
  beginShape();
  vertex(SEEx, SEEy);
  vertex(SEx, SEy);
  vertex(SWx, SWy);
  vertex(SWWx, SWWy);
  vertex(SEEx, SEEy);
  endShape();

  pop();
}

function makeGrid(radius) {

  //  This is going to hold the array of hexPoints that we return
  var hexPoints = [];

  //  first we can work out the total width of a hexagon
  //  this will be twice the radius
  var hex_width = radius * 2;

  //  Now we need to work out the height, to do that we
  //  need to move the second point straight up and then
  //  rotate it
  var NEx = -radius * sin(radians(-30));
  var NEy = -radius * cos(radians(-30));
  var hex_height = abs(NEy * 2);

  var leftover_width = (windowWidth / 2) - (hex_width / 2);
  var number_of_hexes = ceil(leftover_width / hex_width);
  var start_x_offset = -(number_of_hexes * hex_width) - (hex_width / 2);

  var leftover_height = (windowHeight / 2) - (hex_height / 2);
  number_of_hexes = ceil(leftover_height / (hex_height));
  var start_y_offset = -(number_of_hexes * hex_height) - (hex_height / 2);

  var counter = 0;
  for (var y = start_y_offset; y <= abs(start_y_offset) + (hex_height); y += (hex_height / 2)) {
    var shift_hex = false;
    if (counter % 2 == 0) {
      shift_hex = true;
    }
    for (var x = start_x_offset; x <= abs(start_x_offset); x += hex_width * 1.5) {
      var newX = x;
      if (shift_hex) {
        newX += hex_width * 0.75;
      }
      hexPoints.push(new HexPoint(newX, y));
    }
    counter++;
  }

  return hexPoints;

}

//  This is just a point that's the center of a hex
function HexPoint(x, y) {
  this.x = x;
  this.y = y;
}
