// a shader variable
let theShader;

function preload(){
  // load the shader
  theShader = loadShader(
    'https://raw.githubusercontent.com/HurrayBanana/filehosting/main/Shaders/basic.vert', 
    'https://raw.githubusercontent.com/HurrayBanana/filehosting/main/Shaders/basic.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(400, 400, WEBGL);
  noStroke();
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);
  // rect gives us some geometry on the screen
  rect(0,0,100,200);
 
  // print out the framerate
  //print(frameRate());
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}