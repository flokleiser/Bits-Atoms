let gravity
let gravityConst = 9

class BouncingBall
{
  constructor(shapeWidth, shapeHeight, color)
  {
    this._pos = createVector(width/2, height/2);
    this._velocity = createVector(0,0);
    this._dampV = 1;
     
    this._w = shapeWidth;
    this._h = shapeHeight;
    this.color = color;
    this.collision = false;
  }
   
  set(pos,dir,dampV)
  {
    this._pos = pos;
    this._velocity.add(dir);
    this._dampV = dampV;
  }
	get y() {
	 return	this._pos.y;
	}
   
	get x() {
	 return	this._pos.x;
	}
   
  calcPos(){
    // curent position shifted by velocity
    this._pos.add(this._velocity);
		
    // movement vector modified
    this._velocity.mult(this._dampV);
     

    gravity = createVector(0, 0.3);
    this._velocity.add(gravity);

    // test horizontal 
    if(this._pos.x + this._w/2 > width) {
      this._velocity.x *= -1;
      this._velocity.x /= 1.25;
      this._pos.x = width - this._w/2;
    } else if(this._pos.x - this._w/2 < 0) {
      this._velocity.x *= -1;
      this._velocity.x /= 1.25;
      this._pos.x = this._w/2;
    }
    // test vertical 
    if(this._pos.y + this._h/2 > height) {
      this._velocity.y *= -1;
      this._velocity.y += 2;
      this._pos.y = height - this._w/2;
    } else if(this._pos.y - this._h/2 < 0)
    {
      this._velocity.y *= -1;
      this._velocity.y += 2; 
      this._pos.y = this._h/2;
    }

  }

  checkCollision(mainBall) {
    this.collision = this.checkCircleOverlap(this, mainBall);
    if (this.collision) {
      //todo: add collision response
    }
  }
	
  draw() {
    this.calcPos();
    fill(this.color);
    ellipse(this._pos.x,this._pos.y,this._w,this._h);
  }

  checkCircleOverlap(ball1, ball2){
    let distance = dist(ball1.x, ball1.y, ball2.x, ball2.y);
    let radiusSum = (ball1._w/2) + (ball2._w/2);
    return distance < radiusSum;
  }
}