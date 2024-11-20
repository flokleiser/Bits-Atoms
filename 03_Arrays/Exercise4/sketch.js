let lines = [];
let next = 0;   

function setup() {
  // createCanvas(600, 600);
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);

  for (let i = width / 2; i < width; i += 10) {
    let line = {
      xPos: i,
      yPos: height
    };
    lines.push(line);
  }
  console.log(lines)
}

function draw() {
  background(0);

  for (let i = 0; i < lines.length; i++) {
    let l = lines[i];
    line(l.xPos, 0, l.xPos, l.yPos);
  }
}

function mousePressed() {
  // next++
  next += 10
  lines.splice(0, 1)

  for (let i = 0; i < width/2; i += 10) {
    lines.push({
      xPos: next,
      yPos: height
    })
  }

}
