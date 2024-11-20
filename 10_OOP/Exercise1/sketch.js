let car1;
let car2;
let car3;
let cars = []

function setup() {
	createCanvas(windowWidth, windowHeight);

		for (let i = 0; i < 100; i++) {
			let newColor = color(random(70,200));
			cars[i] = new Car(random(width),random(height),newColor,random(1,5));
		}
}

function draw() {

    stroke(0);
    noFill();

	background(230);
	for (let i = 0; i<cars.length; i++) {
		cars[i].display();
	}	
}