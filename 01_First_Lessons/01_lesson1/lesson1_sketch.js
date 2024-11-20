let radius = 50
let targetRadius = 50
let lerpAmount = 0.5 
let distance = 100

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
    colorMode(HSB);
}

function draw() {

    fill(255)
    text('use the scrollwheel', 100, 100);

    let circleHue = map(distance, 0, 200, 0, 360);
    fill(circleHue, 80, 90);
    stroke(circleHue, 80, 90);

	circle(mouseX, mouseY, radius*2);
    circle(mouseX + distance, mouseY + distance, radius);
    circle(mouseX - distance, mouseY - distance, radius);
    circle(mouseX - distance, mouseY + distance, radius);
    circle(mouseX + distance, mouseY - distance, radius);
}

function mouseWheel(event) {
    if (event.delta > 0) {
        radius += 0.5
        distance += 5
        if (radius > 250) {
            radius = 50
        }
        if (distance > 250) {
            distance = 50
        }
    } else {
        radius -= 0.5
        distance -= 5
        if (radius < 0) {
            radius = 50
        }
        if (distance < 0) {
            distance = 50
        }
    }
}