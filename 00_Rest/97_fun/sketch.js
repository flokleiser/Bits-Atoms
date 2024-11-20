let x;
let thick;
let L;
let state = 0;
let counter = 0;
let TIME = 120; 


let confetti = [];
let candles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    confetti = Array(100).fill().map(p => new Confetti())

    x = height / 2;
    thick = 30;
    L = -(height - 100);
    f = height - 420;
    noStroke();
}

function draw() {
    // background(0)
    // background(242, 96, 6);
    background('#02011E')

    // push() 
    // for (let i = 0; i < width; i+=200) {
    //     candles.push(new Candle(i, height /1.5));
    //     candles.forEach(c => c.show());
    // }
    // pop()

    let candle1 = new Candle(width / 2, height / 1.5);
    candle1.show();


    push()
        translate(width/2 , height / 2)
        for(let i = 0; i < 1; i++){
            confetti.push(new Confetti());
        }
        confetti.sort((a, b) => b.alpha-a.alpha);
        confetti.forEach(p => p.update());
        confetti.forEach(p => p.show());
        confetti = confetti.filter(p => !p.finished());
    pop()

    push()
        translate(-width/5 , height / 2)

        for(let i = 0; i < 1; i++){
            confetti.push(new Confetti());
        }

        confetti.sort((a, b) => b.alpha-a.alpha);
        confetti.forEach(p => p.update());
        confetti.forEach(p => p.show());
        confetti = confetti.filter(p => !p.finished());
    pop()
}
