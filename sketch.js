let img;
let hi;

function preload() {
  img = loadImage("images/bagil.png"); // load your texture image
}

function setup() {
  createCanvas(400, 400, WEBGL);
  hi = createGraphics(200, 200); // optional 2D canvas
}

function draw() {
  background(180, 244, 111, 60);
  noStroke(); 
  orbitControl(); // lets you move the camera

  // Apply your texture image to the shape
  texture(img);

  // Optional: lighting can make it look more 3D
  lights();

  // Draw a torus (donut shape)
  push();
  translate(0, -100, 0);
  torus(30, 15);
  pop();
}
