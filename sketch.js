var object2, object1;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 100, 50, 80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(400, 800,80,30);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect.velocityY = 5;
  fixedRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
if(isTouching(movingRect,fixedRect))
{
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
 // bounceOff(movingRect,fixedRect);

  drawSprites();
}


