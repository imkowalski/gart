const size = 400;
let x = size / 2;
let y = size / 2;
const psize = 20;
let r = 50;
let g = 200;
let b = 100;
let rng = 10

function setup() {
    createCanvas(size, size);
    background(255)
}

function draw() {
    fill(r, g, b, 255 / 2)
    noStroke()
    rect(x, y, psize, psize)
    if (x <= 0) {
        x = size / 2;
    } else if (x >= size) {
        x = size / 2;
    }
    if (y <= 0) {
        y = size / 2;
    } else if (y >= size) {
        y = size / 2;
    }
    r = r + random([-rng, rng]) * random(1);
    g = g + random([-rng, rng]) * random(1);
    b = b + random([-rng, rng]) * random(1);
    x = x + random([-1, 0, 1]) * psize
    y = y + random([-1, 0, 1]) * psize



}

function mousePressed() {
    window.location.reload()

}