let img;
let imgPath;
let step = 22;
let pixels = [];
let harold;

const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

function preload() {
    harold = loadImage('./media/harold50.png');
}

function setup() {
    createCanvas(800, 900);
    // createCanvas(800, 900);
    // harold.resize(1000, 1000); 
    frameRate(10);

    textSize(8);
    textAlign(CENTER, CENTER);

    for (let x = 0; x < harold.height; x += step) {
        pixels[x] = [];
        for (let y = 0; y < harold.width; y += step) { 
            let c = harold.get(x, y);
            pixels[x][y] = { x: x, y: y, color: c }; 
        }
    }
    noLoop(); 
}

function draw() {

    background(0)
    let w = width / harold.width;
    let h = height / harold.height;

    harold.loadPixels();    

    for (let i = 0; i < harold.width; i++) {
        for (let j = 0; j < harold.height; j++) {
          const pixelIndex = (i + j * harold.width) * 4;
          const r = harold.pixels[pixelIndex + 0];
          const g = harold.pixels[pixelIndex + 1];
          const b = harold.pixels[pixelIndex + 2];
          const avg = (r + g + b) / 3;
          
          noStroke();
          fill(255);
        //   square(i * w, j * h, w);
          
          const len = density.length;
          const charIndex = floor(map(avg,0,255,len,0));
          
          
          
          textSize(w);
          textAlign(CENTER, CENTER);
          text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
        }
    }

    // background(0)
    // let w = width / harold.width;
    // let h = height / harold.height;

    // harold.loadPixels();

    // for (let i = 0; i < harold.width; i++) {
    //     for (let j = 0; j < harold.height; j++) {
    //         const pixelIndex = (i + j * harold.width) * 4;
    //         const r = harold.pixels[pixelIndex + 0];
    //         const g = harold.pixels[pixelIndex + 1];
    //         const b = harold.pixels[pixelIndex + 2];
    //         const avg = (r + g + b) / 3;

    //         const len = density.length;
    //         const charIndex = floor(map(avg, 0, 255, len - 1, 0));
    //         const c = density.charAt(charIndex);

    //         fill(255);
    //         text(c, i * w, j * h);
    //     }
    // }



//    for (let x = 0; x < harold.height; x += step) {
//         for (let y = 0; y < harold.width; y += step) {
//             let s = pixels[x][y]; 
//             push();
//             fill(s.color);
//             rect(s.x, s.y, step, step);
//             pop();
//         }
//     }
}