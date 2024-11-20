let shapeType = 1

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	noStroke();
	colorMode(HSB);
}

function draw() {
	background(100, 10, 10, 0.05);
	fill(300+sin(radians(frameCount))*200, 100, 100);
	if (mouseIsPressed){
		customShape(mouseX, mouseY, 100);
	}
}

function customShape(x, y, radius) {
	switch (shapeType) {
		case 1: 
			ellipse(x, y, radius);
			break;
		case 2: 
			rectMode(CENTER);
			rect(x, y, radius, radius);
			break;
		case 3: 
			stroke(300 + sin(radians(frameCount)) * 200, 100, 100);
			strokeWeight(4); 
			line(x - radius / 2, y, x + radius / 2, y);
			noStroke(); 
			break;
		case 4: 
			triangle(x, y-radius/2, x-radius/2, y+radius/2, x+radius/2, y+radius/2);
			break;
	}
}


function keyPressed() {
	 switch (key) {
		case '1':
			shapeType = 1; 
			console.log('test')
			break;
		case '2':
			shapeType = 2; 
			break;
		case '3':
			shapeType = 3; 
			break;
		case '4':
			shapeType = 4; 
			console.log('test 4')
			break;
	}
}

function doubleClicked() {
	clear();
}

