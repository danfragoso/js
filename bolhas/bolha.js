function Bolha(posx,posy){

  this.x = posx;
  this.y = posy;

  this.s = random(5,50);

  this.r = random(0,255);
  this.g = random(0,255);
  this.b = random(0,255);

  this.display = function(){
    ellipse(this.x,this.y,this.s,this.s);
    fill(this.r,this.g,this.b);
  }

  this.move = function(){
    this.x = this.x + random(-4,4);
    this.y = this.y + random(-4,4);
  }


}
