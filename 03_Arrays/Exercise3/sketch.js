let myColors;	 //initialize
let myWords;   //initialize
let ts = 50;
let i = -1

function setup() {
	createCanvas(600,600);
    background(255);
	textSize(ts);
    myWords = ["hello", "hi", "test", "word"]
    myColors = ["#c0392b", "#e67e22", "#f1c40f", "#2ecc71","#3498db","#8e44ad"]
}

function draw() {}

function mousePressed(){
    background(255);
    fill(myColors[floor(random(0,5))]);
    // text(myWords[floor(random(0,3))], random(0,width-100), random(50, height));
    if (i == 3){
        i = -1
    }   
    i++
    text(myWords[i], random(0,width-100), random(50, height));
    console.log(i)
}
