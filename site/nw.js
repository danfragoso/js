
var img_nave;
var posicao_nave;
var posicao_mouse;
var direcao;
var angulo;
var canvas;
var speed = 2;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
	img_nave = loadImage("//45.55.205.18/cg/resources/images/naves/4.png");
}

// chamada no inicio do programa
function setup() {
	angleMode(DEGREES);

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');

	posicao_nave = createVector(width/2, height/2);
	posicao_mouse = createVector(0, 0);
	angulo = 270;

}


// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	posicao_mouse.x = mouseX;
	posicao_mouse.y = mouseY;


	direcao = p5.Vector.sub(posicao_mouse, posicao_nave).normalize().mult(speed);
	angulo = direcao.heading();

	if (p5.Vector.dist(posicao_nave, posicao_mouse) > 6) {
		posicao_nave.add(direcao);
	}

	// pinta o fundo de preto
	background(23, 28, 36);
  ellipse(56, 46, 55, 55);


	push();
	translate(posicao_nave.x, posicao_nave.y);
	rotate(angulo-270);
	image(img_nave, -20, -35, 40, 70);
  size = random(3,22);
  quant = random(5,20);
  for (var i = 0; i < quant; i++){
  ellipse(random(-20,20), random(40,100), size, size);
}
	pop();
}
