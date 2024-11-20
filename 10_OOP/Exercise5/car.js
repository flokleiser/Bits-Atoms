class Car {
    constructor(x, y, color, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = color;
        this.w = 75;
        this.h = 40;
        this.collision = false
        this.playerCollision = false
        this.angle = 0

    }

    update() {
        this.x += this.speed;
        // this.y += sin(radians((frameCount)));
        if (this.x > width) {
            this.x = 0 - this.w;
        }
        
        if (this.x < 0 - this.w) {
            this.x = width + this.w;
        }
    }

        checkCollision(cars){
            // check collision 
            let collision = false;
            for (var j = 0; j < cars.length; j++) {
                if (this != cars[j] && this.checkRectangleOverlap(this, cars[j])) {
                    collision = true;
                }
            }
            this.collision = collision;
        }

        checkPlayerCollision(player){
            // check collision 
            let playerCollision = false;
            for (var j = 0; j < player.length; j++) {
                if (this != player[j] && this.checkRectangleOverlap(this, player[j])) {
                    playerCollision = true;
                
            }
            this.playerCollision = playerCollision;
        }
    }



    display() {
        this.update();

        push();

            noStroke();
            if (this.playerCollision) {
                fill(200,200,0);
            }
            if (this.collision){
                // fill(this.color)
                fill(200,0,0);
                let randomSlowdown = random(0.25, 2.5);
                this.x -= this.speed * randomSlowdown;
            }
            else {
                fill(this.color);
            }
            translate(this.x, this.y);

            // let angle = atan2(cos(radians(frameCount - 70))*(1/this.speed), 1);
            rotate(this.angle);

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
    checkRectangleOverlap(Car1, Car2) {
		//simple rectangle collision detection
		if (
			Car1.x < Car2.x + Car2.w &&
			Car1.x + Car1.w > Car2.x &&
			Car1.y < Car2.y + Car2.h &&
			Car1.h + Car1.y > Car2.y
		) {
			return true;
		}
		return false;
	}
}