let cars = []
let helicopters = []
let player

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < 25; i++) {
		let newColor = color(random(70,200));
		cars[i] = new Car(random(width),random(100,height-200),newColor,random(1,5));
		// cars.push(new Car(random(width), random(height), newColor, random(1, 4)));
	}

	for (let j = 0; j < 5; j++) {
		let newColor2 = color(random(150,230));
		helicopters[j] = new Helicopter(random(width),random(100,height-300),newColor2,random(1,5));
	}
	player = new Player(width/2, height/2, color(0,0,0));
}

function draw() {

	background(230,230,230,120)
    stroke(0);
    noFill();

	push()
	noStroke()
	fill(70)
	rect(0,100,width, height - 200);
	pop()


	// background(230,230,230,120)
	for (let i = 0; i<cars.length; i++) {
		cars[i].update();
		cars[i].checkCollision(cars);
		cars[i].checkPlayerCollision(player);
		cars[i].display();
	}	
	for (let j = 0; j < helicopters.length; j++) {
		helicopters[j].update();
		helicopters[j].display() 
	}

	player.display();	
	player.update()
	player.checkCollision(cars)
	// player.checkCollision(helicopters)



}

