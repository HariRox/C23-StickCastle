var a, b, c, d;
function setup(){
  createCanvas(800,600);
  a = createSprite(150, 350, 40, 500);
  a.shapeColor = "red";
  b = createSprite(650, 350, 40, 500);
  b.shapeColor = "blue";
  createSprite(210,400,70,400);
  createSprite(590,400,70,400);
  c = createSprite(290,425,80,350);
  c.shapeColor = "yellow";
  d = createSprite(510,425,80,350);
  d.shapeColor = "pink";
  createSprite(400,450,130,300);
}

function draw(){
  background(0);
  triangle(175, 200, 245, 200, 210, 150);
  triangle(555, 200, 625, 200, 590, 150);
  triangle(335, 300, 465, 300, 400, 200);
  drawSprites();
}