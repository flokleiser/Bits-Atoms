var ball;
let balls = []
// var ball1;
var p1;
var p2;
var drag = false;
 
function setup() {
//   createCanvas(800,600);
	createCanvas(windowWidth,windowHeight);
	p1= createVector();
	p2= createVector();
	gravity = createVector(0, 1);
	ball = new BouncingBall(100,100, color(0));
	// ball1 = new BouncingBall(40,40);
	// ball1.set(createVector(width/2,height/2),createVector(5,5),1.0);

	for (let i = 0; i < 25; i++) {
		balls[i] = new BouncingBall(40,40, color(200));
		// balls[i].set(createVector(width/2,height/2),createVector(5,5),1.0);
		balls[i].set(createVector(width/2,height/2),createVector(random(-5,5),random(-5,5)),1.0);
	}
}
 
function draw() {
	background(255);
	fill(255,255,255,60);
	rect(0,0,width,height);
 
	if(drag)  {
		p1.set(ball.x,ball.y,0);
		line(p1.x,p1.y,p2.x,p2.y);
	}
 
	fill(0);
	ball.draw();

	for (let i = 0; i<balls.length; i++) {
		balls[i].checkCollision(ball);
		balls[i].draw();
	}
}
 

