var fixed,moving;
var edges;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,70,50);
  moving.shapeColor = "green";


  fixed.velocityX = -4;
  moving.velocityX = 4;
}

function draw(){
    background(0);
   
    if(fixed.x - moving.x < fixed.width/2 + moving.width/2){
        moving.velocityX = -1 * moving.velocityX;
        fixed.velocityX = -1 * fixed.velocityX;

    }
    console.log(moving.x);
    drawSprites();
}