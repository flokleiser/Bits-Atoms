class Confetti{	
	constructor(){
		this.pos = createVector(400, 580);
		this.velocity = createVector(random(-1, 1), random(-1, -4));
		this.alpha = 255;
		this.col = createVector(random(256), random(256), random(256));
	}
	finished(){
		return this.alpha <= 0;
	}
	update(){
		this.pos.add(this.velocity);
		this.alpha-=1;
	}	
	show(){
		noStroke();
		fill(this.col.x, this.col.y, this.col.z, this.alpha);
		ellipse(this.pos.x, this.pos.y, 15);
	}
}