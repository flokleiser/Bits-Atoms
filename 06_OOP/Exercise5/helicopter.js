let bladeAngle = 0

class Helicopter extends Car {
    constructor(x,y,color, speed){
        super(x,y,color,speed)
    }

    update() {
        this.x += this.speed/2;
        // this.x += this.speed;
        this.y += sin(radians((frameCount / 2)));

        if (this.x > width) {
            this.x = 0 - this.w * 2;
        }
        
        if (this.x < 0 - this.w * 2) {
            this.x = width + this.w;
        }

        this.angle = atan2(cos(radians(frameCount/2 - 70))*(1/this.speed), 1);
        bladeAngle = frameCount/3;
	}

    display() {
        push();

        translate(this.x, this.y);
        rotate(this.angle)

        fill(this.color);
        rect(0, 0, this.w + 20, this.h);

        push();
        translate(this.w/2 + 10, this.h/2)
            rectMode(CENTER);

            rotate(bladeAngle)

            fill(50);
            rect(0,0,150,5)
            rect(0,0,5,150)

        pop();

        pop();
    }
}
