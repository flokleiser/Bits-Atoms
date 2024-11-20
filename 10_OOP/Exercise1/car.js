class Car {
    constructor(x, y, color, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = color;
        this.w = 75;
        this.h = 40;
    }
    update() {
        this.x += this.speed;
        this.y += sin(radians((frameCount)));
        
        if (this.x > width) {
            this.x = 0 - this.w;
        }
        
        if (this.x < 0 - this.w) {
            this.x = width + this.w;
        }
    }
    display() {
        this.update();

        push();

            noStroke();
            fill(this.color);
            translate(this.x, this.y);

            let angle = atan2(cos(radians(frameCount - 60))*(1/this.speed), 1);
            rotate(angle);

            rect(0, 0, this.w, this.h);

            fill(50); 
            rect(10, 40, this.w / 4, this.h / 5);
            rect(10, -8, this.w / 4, this.h / 5);
            rect(43.5, -8, this.w / 4, this.h / 5);
            rect(43.5, 40, this.w / 4, this.h / 5);

            fill(this.color - 20);
            rect(7.5, 5, this.w - 25, this.h - 10);
        pop();
    }
}