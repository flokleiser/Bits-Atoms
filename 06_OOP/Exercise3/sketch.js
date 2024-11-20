let cars = []
let helicopters = []

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < 50; i++) {
		let newColor = color(random(70,200));
		cars[i] = new Car(random(width),random(height),newColor,random(1,5));
		// cars.push(new Car(random(width), random(height), newColor, random(1, 4)));
	}

	for (let j = 0; j < 5; j++) {
		let newColor2 = color(random(150,230));
		helicopters[j] = new Helicopter(random(width),random(height),newColor2,random(1,5));
	}
}

function draw() {

    stroke(0);
    noFill();

	background(230,230,230,120)
	for (let i = 0; i<cars.length; i++) {
		cars[i].update();
		cars[i].checkColision(cars);
		cars[i].display();
	}	
	// helicopter.checkColision(cars);
	for (let j = 0; j < helicopters.length; j++) {
		helicopters[j].update();
		helicopters[j].display();
	}
}

