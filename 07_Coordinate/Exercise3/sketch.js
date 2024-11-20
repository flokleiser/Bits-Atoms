let angle = 0
let increment
let speed = 0.08
let amplitude = 100
let diameter = 200

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    increment = TWO_PI/45;
    rectMode(CENTER)
  }
  
  function draw() {
    translate(-width/2,-height/2)

    background(255);
    fill(0)
    push()
        // squareAngle = frameCount/3;
        translate(0,0)
        let testY = sinMovment(angle,0,0+diameter,height-diameter)
        rect(width/1.5,testY,2*diameter, 1.5*diameter);
        rotate(testY)
    pop()



    colorThing = map(0,width,100,255)


    for (let i = 0; i < width; i+= 15) {
        noStroke()
        let offset = i/20;
        let y = sinMovment(angle, offset, 0, height);
        if (i % 10 == 0) {
            strokeWeight(2)
            stroke(0)
            fill(255)
          rect(i,y,50)
          }
        circle(i, y, 50);
        fill(i-150)
        // stroke(i+75)
      }
      angle += increment;

      filter(INVERT)
     }
  
  function sinMovment(angle, offset, minVal, maxVal) {
      let factor = sin(angle + offset)
      let sinMovementVal = map(factor, -1, 1, minVal, maxVal)
      return sinMovementVal;
  }