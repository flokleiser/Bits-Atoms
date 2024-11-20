function setup() {
	createCanvas(1000,800);
	background(255);
    rectMode(CENTER);
}

function draw() {
    noStroke()


    fill('#ecd649')
    rect(350,400,600, 600,300,0,0,0); 
    fill('#ecd649')
    rect(650,400,600, 600,0,0,300,0); 


    fill('#ec7739')
    circle(650, 400, 600);
    fill('#623b7f')
    circle(350, 400, 600);
    fill('#e5dfe5')
    circle(650, 400, 450);
    fill('#83b6e5')
    circle(650, 400, 275);
    fill('#623b7f')
    circle(650, 400, 75);
    fill('#ec7739')
    circle(350, 400, 75);

}
