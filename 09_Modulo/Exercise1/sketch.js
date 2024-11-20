let size = 40
let gap = 50
let nth = 2

function setup() {
	createCanvas(600,600);
	rectMode(CENTER);
	noStroke();
}

function draw() {
	background(100);
	
	for (let xpos = gap; xpos <= width - gap; xpos+=gap) {
		if (xpos % (gap * nth) == 0 ) {
			fill(255);
            rect(xpos, height / 2,  size,  size);
		} else {
			fill(255);
            ellipse(xpos , height / 2,  size,  size);	
		}
	}
}