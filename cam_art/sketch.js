let a;
let on = false;
function setup() {
  createCanvas(400, 400);
  a = createCapture(VIDEO)
  a.size(400,400)
  a.hide()
  background(220);
  fill(1)
  triangle(width/2-50,height/2-50,width/2+50,height/2,width/2-50,height/2+50)
}

function draw() {
  if(on) {
    for(let i = 0; i<20;i++) {
    
    let x = random(width)
    let y = random(height)
    let c = a.get(x,y)
    noStroke()
    fill(c)
    ellipse(x+random(-10,10),y+random(-10,10),20)
  }
  }
  
}

function mousePressed() {
  on = !on;
}