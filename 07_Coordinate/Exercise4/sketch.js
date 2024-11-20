let diameter = 300;
let pointCount = 16;
let radius = diameter / 2;
let angle = 0



function setup() {
  createCanvas(600, 600);
}

function draw() {
	background(255);
    fill(0);
    strokeWeight(5);
    translate(width / 2, height / 2);

    let oscillator = sin(angle) * 50

  
    for (let i = 0; i < TWO_PI; i += TWO_PI / pointCount) {
        // Modify radius with the oscillator (sin(a))
        let x = radius * cos(i);
        let y = radius * sin(i);
        circle(x, y, oscillator);
        angle += 0.005;
    }
}
