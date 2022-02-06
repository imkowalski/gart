// using color palette from: https://www.figma.com/community/file/1004727401971389237
const c = {
  bg: "#ece6c2",
  bl: "#73bda8",
  o1: "#d2a24c",
  o2: "#cc6b49",
};

const size = 400;
const cell_s = 25;
let s, p, t, x;
let dir = "d";
let blue_rng, rand;

function setup() {
  createCanvas(size, size);
  background(c.bg);
  p = cell_s*2;
  t = 0;
  blue_rng = random([+cell_s,0])
  x = p
  if (s) {
      strokeWeight(cell_s/2);
      stroke(c.bl);
    } else {
      
      strokeWeight(cell_s/4);
      stroke(c[random(["o1", "o2"])]);
    }
  frameRate(30)
}

function draw() {
  noFill();
  
  
  if (dir == "d") {
    rand = random();
    if (rand < 0.6) {
      li(x, t);
    } else if (rand > 0.8) {
        curve_l_u(x, t);
        x -= cell_s;
        curve_l_d(x, t);
        dir = "l";
    } else {
        curve_r_u(x, t);
        x += cell_s;
        curve_r_d(x, t);
        dir = "r";
    }
  } else if (dir == "r") {
    rand = random();
    if(rand < 0.7) {
      curve_l_u(x, t);
        x -= cell_s;
        curve_l_d(x, t); 
        dir = "d";
    } else {
      li(x, t);
    }
  } else if (dir == "l") {
    rand = random();
    if(rand < 0.7) {
       curve_r_u(x, t);
        x += cell_s;
        curve_r_d(x, t);
        dir = "d";
    } else {
      li(x, t);
    }
  }

  if (t > size) {
    p += cell_s;
    x = p
    t = 0;
    s = round(size / cell_s / 2) * cell_s - blue_rng == p ;
    if (s) {
      
      strokeWeight(cell_s/2);
      stroke(c.bl);
    } else {
      
      strokeWeight(cell_s/4);
      stroke(c[random(["o1", "o2"])]);
    }
  } else {
    t += cell_s;
  }
  if (p >= size - cell_s*2) {
    noLoop();
  }
}

// used this desmos demo to calculate the  bezier curve points: https://www.desmos.com/calculator/d1ofwre0fr

function li(x, y) {
  let hc = cell_s / 2;
  line(x + hc, y, x + hc, y + cell_s);
}

function curve_l_u(x, y) {
  let hc = cell_s / 2;
  bezier(x + hc, y, x + hc, y + hc / 2, x + hc / 2, y + hc, x, y + hc);
}
function curve_r_u(x, y) {
  let hc = cell_s / 2;
  bezier(
    x + hc,
    y,
    x + hc,
    y + hc / 2,
    x + hc + hc / 2,
    y + hc,
    x + cell_s,
    y + hc
  );
}
function curve_l_d(x, y) {
  let hc = cell_s / 2;
  bezier(
    x + cell_s,
    y + hc,
    x + hc + hc / 2,
    y + hc,
    x + hc,
    y + hc + hc / 2,
    x + hc,
    y + cell_s
  );
}
function curve_r_d(x, y) {
  let hc = cell_s / 2;
  bezier(
    x,
    y + hc,
    x + hc / 2,
    y + hc,
    x + hc,
    y + hc + hc / 2,
    x + hc,
    y + cell_s
  );
}
function mousePressed() {
    window.location.reload()

}
