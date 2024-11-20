let dia = 30;
let gap = 60;

function setup() {
  createCanvas(750,600);
  noFill();
  rectMode(CENTER);
}

function draw() {
  background(255);

   for (let xpos = gap; xpos <= width - gap; xpos += gap) {

      strokeWeight((xpos+1) * 0.01);

        if (xpos % (gap * 4) == 0) {
            stroke(0)
            circle(xpos, height / 2, mouseX);
          } else if (xpos % (gap * 3) == 0) {
            stroke(color(200, 0, 0));
            circle(xpos, height / 2, dia);
          } else {
            stroke(0);
            circle(xpos, height / 2, dia);
          }



    }

}
