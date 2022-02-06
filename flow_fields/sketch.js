const density = 30;
const canvas_size = 400;

let r1, r2, r3;
let p = [];
let d = canvas_size / density;
let mul = 0.005;
let i = 0
    /*
    GOOD mul values
    0.2-0.05

    */

function setup() {
    createCanvas(canvas_size, canvas_size);
    angleMode(DEGREES);
    noiseDetail(1);
    r1 = random(["x", "y"])
    r2 = random(["x", "y"])
    r3 = random(["x", "y"])
    while (r1 == r2 && r2 == r3 && r1 == r3) {
        r1 = random(["x", "y"])
        r2 = random(["x", "y"])
        r3 = random(["x", "y"])
    }
    for (let i = 0; i < width / d + 1; i++) {
        for (let j = 0; j < height / d + 1; j++) {
            p.push(createVector(i * d + random(-10, 10), j * d + random(-10, 10)));
        }
    }
    background(0);
}

function mousePressed() {
    window.location.reload()

}

function draw() {
    i++
    if (i < 600) {
        normal_flow()
    } else {
        print("END")
        noLoop()
    }
}

function normal_flow() {
    noStroke();

    for (let i = 0; i < p.length; i++) {
        fill(
            map(p[i][r1], 0, width, 0, 1) * 255,
            map(p[i][r2], 0, width, 0, 1) * 255,
            map(p[i][r3], 0, width, 0, 1) * 255,
            60
        );

        let a = map(noise(p[i].x * mul, p[i].y * mul), 0, 1, 0, 720);

        p[i].add(createVector(cos(a), sin(a)));
        if (p[i].x > width || p[i].x < 0) {
            if (p[i].y > height || p[i].y < 0) {
                p[i] = createVector(round(random(width)), round(random(height)))
            }
        }

        ellipse(p[i].x, p[i].y, 2);
    }
}