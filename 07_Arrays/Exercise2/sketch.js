let circlesX = []; 
let circlesY = []; 

let mX, mY;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    strokeWeight(1);
}

function draw() {
    background(255);

    mX = mouseX;
    mY = mouseY;
    fill("#E35151");
    noStroke();

    for (let i = 0; i < circlesX.length; i++) {
        circle(circlesX[i], circlesY[i], 50);
    }

    if (circlesX.length > 100 || circlesY.length > 100) {
        circlesX.splice(0, 1);
        circlesY.splice(0, 1);
    }
}

function mouseMoved() {
    circlesX.push(mX);
    circlesY.push(mY);
}




