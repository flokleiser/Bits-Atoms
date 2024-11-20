let tiles = [];
let rows = 10;
let cols;
let rule = 1;
let aspectRatio = 1;

function setup() {
  createCanvas(windowWidth, windowHeight)
  strokeCap(PROJECT);
//   strokeCap(SQUARE)
  background(255);
  cols = Math.round((rows / windowWidth* windowHeight));
//   cols = Math.round((windowHeight /100)) ;

  for (let i = 0; i < width; i++) {
    tiles.push(new Array(cols).fill(""));
  }

  generateTiles();
  drawTiles();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rows += 2;
  } else if(keyCode === RIGHT_ARROW) {
    rows -= 2;
    if (rows <= 0) {
      rows = 2;
    }
  }
  setup();
}

function drawTiles() {
  s = width / rows + 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x = (width * i) / rows;
      y = (height * j) / cols;

    //   fill(255);
      fill(random(0,255))
      noStroke();
      rect(x, y, s, s);

    //   stroke(0);
      stroke(random(0,255))
      strokeWeight(100 / rows);
      if (tiles[i][j]) {
        arc(x, y, s, s, 0, PI / 2);
        arc(x + s, y + s, s, s, PI, (3 * PI) / 2);
      } else {
        arc(x + s, y, s, s, PI / 2, PI);
        arc(x, y + s, s, s, (3 * PI) / 2, TWO_PI);
      }
    }
  }
}

function generateTiles() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (int(round(random(0, 1))) == 1) {
        tiles[i][j] = true;
      } else {
        tiles[i][j] = false;
      }
    }
  }
}
