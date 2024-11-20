class Candle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        push();

        rectMode(CENTER);
        translate(this.x, this.y);

        // fill('#010728')
        // ellipse(0, -250,random(240,250), random(240,255));
        // fill('#030132')
        // ellipse(0,-250, random(110,120),random(110,125));
        // fill(360);
        rect(0,0,100, 400,10,10,10,10);
        fill(random(30,41),100,50);
        
        // ellipse(0,0,200,200)
        // fill(255,0,0)
        colorMode(HSL)
        fill(random(30,41),100,50)
        ellipse(0,-250, random(15,25), random(55,70));

        pop();
    }
}