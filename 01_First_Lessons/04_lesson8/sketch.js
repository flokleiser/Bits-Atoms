let posX = windowWidth/2
let posY = windowHeight/2
	
let posX2 = windowWidth/3
let posY2 = windowHeight/3
	
let posX3 = windowWidth/1.5
let posY3 = windowHeight/1.5
	

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
	background(255);
	//circle(posX,posY,	10)
	//circle(posX2,posY2,20)
	//circle(posX3,posY3,30)
	moveBall(10,10,30)
}

// function moveBall(posX, posY, d) {
// 	fill(color(math.floor.random(0,255)))
// 	circle(posX,posY,d)
// 	posX += 1
	
// }
line
function moveBall(posX, posY, d) {
	fill(color(random(0, 255), random(0, 255), random(0, 255)));
	circle(posX, posY, d);
	posX += 1;
	posY += 1;
}


