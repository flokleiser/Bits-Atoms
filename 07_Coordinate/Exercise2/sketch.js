// let imageList = [];
let ship;
let image0;
let image1;
let image2;
let image3;

let spaceShipX = 0
let spaceShipY = 0 

let easing = 0.025;

let starArray = [];

function preload() {
    image0 = loadImage("./media/space/0.jpg");
    image1 = loadImage("./media/space/1.jpg");
    image2 = loadImage("./media/space/2.jpg");  
    image3 = loadImage("./media/space/3.png");  

    ship = loadImage("./media/space/spaceShip.png");
}


function setup() {
    randomSeed(2);
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    rectMode(CENTER);

    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(0, 2.5);
        let star = new Star(x, y, r);
        starArray.push(star);
    }



}


function draw() {
  background(0);

  for (let star of starArray) {
    star.show();
}


  // SUN
  push();
    translate(width/2, height/2);
    image(image0,0,0,image0.width * 0.5,image0.height * 0.5);

    rotate(frameCount/80)

        push()
            // EARTH
            translate(150,150)
            image(image2,0,0,image2.width * 0.2,image2.height * 0.2);

        push()

        translate(0,0)
        rotate(frameCount/50)
            // MOON
            image(image1,50,50,image1.width * 0.1,image1.height * 0.1);
        pop()
    pop()
  pop()

  let targetX = mouseX;
  spaceShipX = spaceShipX + ((targetX - spaceShipX) * easing);
  
  let targetY = mouseY;
  spaceShipY = spaceShipY + ((targetY - spaceShipY) * easing);
  
//   push()
//     stars()
//   pop()
  
  image(ship, spaceShipX, spaceShipY, 100, 100);

}

class Star {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    show() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.r, this.r);
    }
}


// function stars()  {
//     for (let i = 0; i < 100; i++) {
//         let x = random(width);
//         let y = random(height);
//         let r = random(0, 2.5);
//         let star = new Star(x, y, r);
//         star.show();

//     }
// }

