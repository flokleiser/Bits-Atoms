let wheelAngle = 0
let direction
let carRight = true 

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noStroke();
    rectMode(CENTER)
}

function draw() {
    direction = mouseX - pmouseX

    checkDirection()

    background(0);
    fill(255);

    car(mouseX, height/2);
}

function car(x, y) {
    //car
    push()


        if (carRight) {
            fill(200)
            rect(x-25,y-75, 175, 145,20,20,0,0)
            fill(230)
            rect(x,y, 225, 80,0,20,20,20)
        } else {
            fill(200)
            rect(x+25,y-75, 175, 145,20,20,0,0)
            fill(230)
            rect(x,y, 225, 80,20,0,20,20)
        }
    pop()

    //wheel
    push()
        wheel(x-60,y+50);
        wheel(x+60, y+50);
    pop()

}

function wheel(x, y) {
    wheelAngle = frameCount/5;
    push()
        stroke(50)
        strokeWeight(5)
        fill(175)
        circle(x,y,80)

        push()

            noStroke()
            translate(x,y)
            rectMode(CENTER);

            if (carRight) {
                rotate(wheelAngle)
            } else {
                rotate(-wheelAngle)
            }
            fill(50);
            rect(0,0,80,5)
            rect(0,0,5,80)
        pop()

    pop()
}


function checkDirection() {
    if (direction > 0) {
        carRight= true 
    } else {
        carRight = false
    }

}

  