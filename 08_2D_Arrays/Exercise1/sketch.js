let shapes = [];
let spacing = 20;
let rows, cols;

function setup() {
 	createCanvas(800, 800);
	background(255);
    noFill();
	noLoop();
	rectMode(CENTER);
  
    rows = floor(height / spacing);
    cols = floor(width / spacing);

    for (let i = 0; i < rows; i++) {
        shapes[i] = [];
        for (let j = 0; j < cols; j++) {
          let x = j * spacing;
          let y = i * spacing;
          shapes[i][j] = {x: x, y: y, diameter: spacing/2 };
        }
    }
}

function draw() {
	background(255);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
                let s = shapes[i][j]
                stroke(color(random(255), random(255), random(255)));
                if (i % 2 == 0) {
                    rect(s.x , s.y , s.diameter, s.diameter);
                } else {
                    circle(s.x , s.y , s.diameter);
                }
        }
    }
}