function setup() {
  createCanvas(600, 600);
  background(240);
  stroke(0);
  strokeWeight(1);
  
  let step = 35; 
  for (let i = 0; i < width / 2; i += step) {
		
    // Top-left to center lines
    line(i, 0, width / 2, height / 2 - i);
    line(0, i, width / 2 - i, height / 2);
    
		// Top-right to center lines
		line(width - i, 0, width / 2, height / 2 - i);
    line(width, i, width / 2 + i, height / 2);
		
    // Bottom-left to center lines
    line(i, height, width / 2, height / 2 + i);
    line(0, height - i, width / 2 - i, height / 2);

    // Bottom-right to center lines
    line(height - i, height, width / 2, height / 2 + i);
    line(height - 0, height - i, width / 2 + i, height / 2);
  }
}