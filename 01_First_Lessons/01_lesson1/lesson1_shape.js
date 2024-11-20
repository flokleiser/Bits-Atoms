
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
    customX = mouseX;
    customY = mouseY;
}


function draw() {
    background(51);
    fill(255)
    stroke(255)
    strokeWeight(5)

    line(customX/1 - 55, customY/1-100, customX/1 + 55, customY/1-100)
    line(customX/1 - 55, customY/1+100, customX/1 + 55, customY/1+100)
    line(customX/1 - 115, customY/1, customX/1 - 55, customY/1 + 100)
    line(customX/1 - 115, customY/1, customX/1 - 55, customY/1 - 100)
    line(customX/1 + 115, customY/1, customX/1 + 55, customY/1 - 100)
    line(customX/1 + 115  , customY/1, customX/1 + 55, customY/1 + 100)

}

function ion() {
    
}

function mouseMoved() {
    customX = mouseX
    customY = mouseY    
}


function mouseClicked() {
    console.log(mouseX, mouseY)
    background(51);
}