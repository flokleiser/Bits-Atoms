let len = 10;
let bg;

function setup() {
	createCanvas(600, 600);
	background(0);
	frameRate(30);
	rectMode(CENTER);

	bg = color(100,100,30, 10)
}

function draw() {
	
	background(bg)
	noFill();
	strokeWeight(5);
	stroke(200, 30, 140);

	square(pmouseX, pmouseY, len)

	stroke(0, 130, 140);
	square(pmouseX, height - pmouseY, len )
	len++
	if (mouseIsPressed) {
		len = 0;
		bg = color(80, 10, 100);
	}
}

// function mouseIsPressed() {
//     bg = color(200,200,30, 10)
// }
