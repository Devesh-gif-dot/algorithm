var fixed,moving;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,70,50);
}

function draw() {
  background(0,0,0);
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  
  if(moving.x-fixed.x <= moving.width/2+fixed.width/2 && fixed.x-moving.x <= moving.width/2+fixed.width/2 
  && moving.y-fixed.y <= moving.height/2+fixed.height/2 && fixed.y-moving.y <= moving.height/2+fixed.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }
  if(moving.x-fixed.x <= moving.width/2+fixed.width/2){
    fixed.velocityX = -4;
  }
  else{
    fixed.velocityX = 0;

  }


  drawSprites();
}