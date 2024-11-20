class Player {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.w = 75;
        this.h = 40;
        this.collision = false
        this.angle = 0
    }

    update() {
        let easing = 0.1
        this.x += (mouseX  - this.x) * easing
        this.y += (mouseY -this.y)*easing
    }


    display() {
        this.update();

        push();

        rectMode(CENTER)
        if (!this.collision) {
            fill(this.color);
        }
        else{
            fill(225,0,0);
        }

        translate(this.x, this.y);
        // fill(this.color)
        // circle(0,0,75)
        rect(0,0,50,50)
        pop();
    }

    checkCollision(cars){
        let collision = false;
        for (var j = 0; j < cars.length; j++) {
            if (this != cars[j] && this.checkRectangleOverlap(this, cars[j])) {
                collision = true;
            }
        }
        this.collision = collision;
    }


    checkRectangleOverlap(Player, Car) {
		if (
			Player.x < Car.x + Car.w &&
			Player.x + Player.w > Car.x &&
			Player.y < Car.y + Car.h &&
			Player.h + Player.y > Car.y
		) {
			return true;
		}
		return false;
	}


}