function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    rectMode(CENTER)
    noStroke();
    fill(255);
  }
  
  function draw() {

    background(0,0,0,10);


        for (let x=0;x<width;x+=20) {
            for (let y=0;y<height;y+=100) {
            let size = 16.45
            size += sin((frameCount*0.1)+(x+y)*0.1) * 5;
            let rotation = sin((frameCount*0.1)+(x+y)*0.01) * 0.2;

            fill(x/2.5)
            ellipse(x,y,2*size,2*size)
            rotateZ(rotation)
          }
        }

        rotate(PI)
        for (let x=0;x<width;x+=20) {
            for (let y=0;y<height;y+=100) {
            let size = 16.45
            size += sin((frameCount*0.1)+(x+y)*0.1) * 5;
            let rotation = sin((frameCount*0.1)+(x+y)*0.01) * 0.2;

            fill(x/2.5)
            ellipse(x,y,2*size,2*size)
            rotateZ(rotation)


          }
        }
  }