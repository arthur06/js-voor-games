var xSize = 650;
var ySize = 600;
var ball;
var balls = []
var numBalls = 5;
var p;
var status = "titel";
var levens = 5;

function setup() {
    createCanvas(xSize, ySize);
    for (var i = 1; i < numBalls + 1; i++) {
        ball = new Ball(25 + i, 25 + i, 10, 2.5 * i, 2.5 * i);
        balls.push(ball);
    }

    p = new Player(150 + i, 250 + i, 10, 5, 5);
}

function draw() {
    switch (status) {
        case "titel":
            textSize(20);
            text("druk op enter om te starten", ySize / 3, xSize / 4);
            break;
        case "start":
            background(255);
            textSize(15);
            text("levens: " + levens, ySize / 2.5, 50);
            for (var i = 0; i < balls.length; i++) {
                ball = balls[i];
                ball.display();
                ball.move();
                ball.CheckIfHitPlayer(p);
            }

            p.move();
            p.display();
            break;
        case "gameOver":
            fill(255, 255, 255)
            createCanvas(xSize, ySize)
            fill(0, 0, 0)
            textSize(20);
            text("Game Over!", ySize / 2, xSize / 4);
            break
    }

}

function keyPressed() {
    if (keyIsDown(ENTER) && status == "titel") {
        status = "start"
    }
    if (keyIsDown(ENTER) && status == "gameOver") {
        status = "start"
    }
}

class Ball {
    constructor(x, y, radius, xspd, yspd) {
        this.xPos = x;
        this.yPos = y;
        this.radius = radius;
        this.xSpeed = xspd;
        this.ySpeed = yspd;
    }

    display() {
        fill(255, 0, 0)
        ellipse(this.xPos, this.yPos, 2 * this.radius, 2 * this.radius);
    }

    CheckIfHitPlayer() {
        if (sqrt((pow(this.xPos - p.xPos, 2)) + (pow(this.yPos - p.yPos, 2))) < this.radius * 2) {
            levens -= 1;
            if (levens == 0) {
                status = "gameOver";
                levens = 5;
            }
            this.xSpeed *= -1;
            this.ySpeed *= -1;
        }
    }

    move() {
        if (this.xPos > width - this.radius - this.radius || this.xPos < this.radius) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.yPos > height - this.radius - this.radius || this.yPos < this.radius * 2) {
            this.ySpeed = -this.ySpeed;
            if (this.xPos < width + this.radius + this.radius || this.xPos < this.radius * 2) {
                this.xSpeed = this.xSpeed;
            }
            if (this.yPos < height - this.radius - this.radius || this.yPos < this.radius) {
                this.ySpeed = this.ySpeed;
            }
        }
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
    }
}