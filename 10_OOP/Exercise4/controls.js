function mousePressed()
{
  drag = true;
  p1.set(ball.x, ball.y,0);
  p2.set(mouseX,mouseY,0);
}
 
function mouseDragged()
{
  p2.set(mouseX,mouseY,0);
}
 
function mouseReleased()
{
  drag = false;
  // shooting direction calculation. 
  var dir = p5.Vector.sub(p2,p1);
  // shorten the length 
  dir.mult(0.09);
  //the ball is given a new direction 
  ball.set(p1,dir,0.993);
}