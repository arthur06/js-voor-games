class Player {
    constructor(x, y, radius, xspd, yspd) {
        this.xPos = x;
        this.yPos = y;
        this.radius = radius;
        this.xSpeed = xspd;
        this.ySpeed = yspd;
    }

    display() {
        fill(0, 0, 255);
        ellipse(this.xPos, this.yPos, 2 * this.radius, 2 * this.radius);
    }

    move() {
        if (keyIsDown(UP_ARROW)) {
            this.yPos -= this.ySpeed;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.yPos += this.ySpeed;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.xPos -= this.xSpeed;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.xPos += this.xSpeed;
        }
        if (this.xPos > width - this.radius * 1.5) {
          this.xPos = width - this.radius * 1.5;
        }
        if (this.xPos < this.radius * 1.5) {
            this.xPos = this.radius * 1.5;
        }
        if (this.yPos > height - this.radius * 1.5) {
            this.yPos = height - this.radius * 1.5;
        }
        if (this.yPos < this.radius * 1.5) {
            this.yPos = this.radius * 1.5;
        }
    }
}