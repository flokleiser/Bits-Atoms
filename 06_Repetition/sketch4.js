function setup() {
	createCanvas(800,800);
	background(255);
}

function draw() {
    push();
    translate(190, 200);
    rotate(PI/2);
    translate(-200, -200);
    block(0, 0, 390);
    pop();


    push()
    translate(600, 190);    
    rotate(-PI/2);
    translate(-600, -200);
    block(400,0,390);
    pop()

    block(0,400,390);
    block(400,400,390);
}


function block(x, y, size){
    noFill();
    noStroke()

    fill(81, 84, 92);
    square(x, y, size);
    fill(236, 230, 225);
    square(x, y, size/1.75);
    fill(152, 187, 224);
    square(x, y, size/2.35);

    fill(236, 230, 225);
    arc(size+x, size+y, size/0.85, size/0.85, PI, PI + HALF_PI);
    fill(232, 220, 93); 
    arc(size+x, size+y, size/1.15, size/1.15, PI, PI + HALF_PI);
}
