var inc = 0.01 // aleatoriedade
var scl = 20  // escala -> tamanho do vetor
var cols, rows

let startBtn
let sliderInc
let sliderScl
let sliderS
let sliderB
let leftPos = 620

function setup() {
  colorMode(HSB, 255);
  
  createCanvas(600, 600);
  cols = floor(width / scl)
  rows = floor(height / scl)
  
  let controlPanel = createDiv('Painel de controle').position(leftPos, 0);
  controlPanel.style('font-size', '20px');
  controlPanel.style('font-weight', 'bold');
  
  createDiv('Aleatoriedade').position(leftPos, 30);
  
  sliderInc = createSlider(10, 300, 0);
  sliderInc.position(leftPos, 50); 
  sliderInc.style('width', '200px');
  
  createDiv('Comprimento da linha').position(leftPos, 70);

  sliderSize = createSlider(0, 50);
  sliderSize.position(leftPos, 90); 
  sliderSize.style('width', '200px');
  
  createDiv('Densidade').position(leftPos, 110);

  sliderScl = createSlider(3, 25);
  sliderScl.position(leftPos, 130); 
  sliderScl.style('width', '200px');
  
  createDiv('Saturação').position(leftPos, 150);

  sliderS = createSlider(0, 200);
  sliderS.position(leftPos, 170); 
  sliderS.style('width', '200px');
  
  createDiv('Brilho').position(leftPos, 190);

  sliderB = createSlider(0, 200);
  sliderB.position(leftPos, 210); 
  sliderB.style('width', '200px');

  rstBtn = createButton('Reset');
  rstBtn.position(leftPos, 240); 
  rstBtn.mousePressed(reset);
  rstBtn.size(60, 30);
  rstBtn.style("font-size", "14px");
}

function draw() {
  background(255)

  // Define o tamanho e a cor do texto
  textSize(16);
  fill(0);

  var inc = sliderInc.value() * 0.001
  var size = sliderSize.value()
  var scl = sliderScl.value()
  var cols = floor(width / scl)
  var rows = floor(height / scl)
  var s = sliderS.value()
  var b = sliderB.value()

  var yoff = 0
  for (var y = 0; y < rows; y++) {
    var xoff = 0
    for (var x = 0; x < cols; x++) {
      
      var angle = noise(xoff, yoff) * TWO_PI
      var v = p5.Vector.fromAngle(angle)
      
      var h = map(angle, 0, TWO_PI, 0, 255)
      
      stroke(h,s, b)
      xoff += inc
      push()
      translate(x * scl, y * scl)
      rotate(v.heading())
      line(0, 0, size, 0)
      pop()
    }
    yoff += inc
  }
}

function reset() {
  noiseSeed(random(0, 100000))
}
