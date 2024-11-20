let width = 800;
let height = 800;

function setup() {
	createCanvas(800,800);
	background(255);
    rectMode(CENTER);
}

function draw() {
    noLoop()
    for (let i = 50; i < width; i += 100){
        for (let j = 50; j < height; j += 100){
            block(i, j, random(50, 100), random(1, 5));
        }
    }

}


function block(x, y, size, modifier){
    modifier = random(1, 5)
    strokeWeight(3)
    noFill()
    square(x, y, size); 
    stroke(random(0,255),random(0,255),random(0,255))
    square(x, y, size/modifier); 
    stroke(random(0,255),random(0,255),random(0,255))
    square(x, y, size/modifier-100);
    stroke(random(0,255),random(0,255),random(0,255))
    square(x, y, size/modifier-20); 
    stroke(random(0,255),random(0,255),random(0,255))
}