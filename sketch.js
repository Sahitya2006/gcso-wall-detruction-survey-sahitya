var bullet,wall;
var bspeed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(20, 200, 100, 10);
  bullet.shapeColor=("yellow");

  bspeed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);

  wall=createSprite(1250,200,thickness,height/2);
  wall.shapeColor=("white");

}

function draw() {
  background(0);  
  drawSprites();
  bullet.velocityX=bspeed;

  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * bspeed * bspeed/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  

}
function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
     return true
  }
  return false;
}
