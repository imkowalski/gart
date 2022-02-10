const size = 400;
const psize = 20;

let a, b, c;

function setup() {
    createCanvas(size, size);
    background(255)
    a = new walker()
    b = new walker()
    c = new walker()
}

function draw() {
    a.update()
    b.update()
    c.update()
}

function mousePressed() {
    window.location.reload()

}

class walker {
    constructor() {
        this.x = size / 2;
        this.y = size / 2;
        this.r = 50;
        this.g = 200;
        this.b = 100;
        this.rng = 10
    }
    update() {
        fill(this.r, this.g, this.b, 255 / 2)
        noStroke()
        rect(this.x, this.y, psize, psize)
        if (this.x <= 0) {
            this.x = size / 2;
        } else if (this.x >= size) {
            this.x = size / 2;
        }
        if (this.y <= 0) {
            this.y = size / 2;
        } else if (this.y >= size) {
            this.y = size / 2;
        }
        this.r = this.r + random([-this.rng, this.rng]) * random(1);
        this.g = this.g + random([-this.rng, this.rng]) * random(1);
        this.b = this.b + random([-this.rng, this.rng]) * random(1);
        this.x = this.x + random([-1, 0, 1]) * psize
        this.y = this.y + random([-1, 0, 1]) * psize


    }
}