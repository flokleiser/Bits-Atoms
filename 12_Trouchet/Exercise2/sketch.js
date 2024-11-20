let tiles = [];
let rows = 5;
let cols;
let rule = 1;
// let aspectRatio = 1;

function setup() {
  noFill()
  createCanvas(windowWidth, windowHeight)
  // strokeCap(PROJECT);
  // strokeCap(ROUND)
  background(255);
  // cols = Math.round((rows / windowWidth* windowHeight));
  // cols = ((rows / windowWidth* windowHeight));
  cols = rows -1

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

function mouseWheel(event) {
    if (event.delta < 0) {
      rows -= 1;
      if (rows <= 2) {
        rows = 2;
      }
    } else if (event.delta > 0) {
      rows += 1;
    }
    setup();
}

function drawTiles() {
  s = width / rows + 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x = (width * i) / rows;
      y = (height * j) / cols;
      noStroke();
      rect(x, y, s, s);

      stroke(0);
      strokeWeight(100 / rows);

      let midTop = { x: x + s / 2, y: y };
      let midBottom = { x: x + s / 2, y: y + s };
      let midLeft = { x: x, y: y + s / 2 };
      let midRight = { x: x + s, y: y + s / 2 };
      let midMiddle = { x: x + s / 2, y: y + s / 2 };

      if (tiles[i][j]) {
        //quarter circles
        // arc(x, y, s, s, 0, PI / 2);
        // arc(x + s, y + s, s, s, PI, (3 * PI) / 2);
        
        //diagonal lines
        line(midTop.x, midTop.y, midRight.x, midRight.y);
        line(midBottom.x, midBottom.y, midLeft.x, midLeft.y); 
        line(x,y,x+s,y+s);

        //straight lines
        // line(midLeft.x, midLeft.y, midMiddle.x, midMiddle.y); 
        // line(midTop.x, midTop.y, midMiddle.x, midMiddle.y); 
        // line(midTop.x, midTop.y, midRight.x, midRight.y);
        // line(midBottom.x, midBottom.y, midLeft.x, midLeft.y); 



      } else {
        line(midBottom.x, midBottom.y, midLeft.x, midLeft.y); 
        // line(x,y,x+s,y+s);
        // arc(x + s, y, s, s, PI / 2, PI);
        // arc(x, y + s, s, s, (3 * PI) / 2, TWO_PI);

        // line(midTop.x, midTop.y, midLeft.x, midLeft.y); // Top to left
        // line(midBottom.x, midBottom.y, midRight.x, midRight.y); // Bottom to right

        // line(x, y, x + s, y); 
        // line(x, y, x, y + s);  

        // line(midRight.x, midRight.y, midMiddle.x, midMiddle.y); 
        // line(midBottom.x, midBottom.y, midMiddle.x, midMiddle.y); 

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
