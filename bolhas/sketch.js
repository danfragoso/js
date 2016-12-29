var bolhas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  }

function mouseDragged(){
   if (mouseButton == LEFT){
    bolhas.push(new Bolha(mouseX,mouseY));
   }
   if (mouseButton == RIGHT){
    bolhas.splice(bolhas.length - 1, 1);
   }
 }

function draw() {
    background(0);

  for(i = 0; i < bolhas.length; i++){
 bolhas[i].move();
 bolhas[i].display();
  }
}
