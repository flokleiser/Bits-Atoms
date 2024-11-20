let rainbowColors = []

function setup() {
//   createCanvas(800, 800);
  createCanvas(windowWidth, windowHeight);
  rainbowColors = [color('#c0392b'), color('#e67e22'), color('#f1c40f'), color('#2ecc71'), color('#3498db'), color('#8e44ad')]
	smooth()
}

function draw() {
  translate(width / 2, height / 2);
	strokeWeight(10);
	stroke(25);
	noFill();
	for (let i = 0; i < rainbowColors.length; i++) {	
			stroke(rainbowColors[i]);
			arc(0, 0, 300 - i * 30, 300 - i * 30, PI, TWO_PI);
		}
}