var car,wall;
var speed,weight;

function setup() {
createCanvas(1370,400);

speed=random (20,90);
weight=random (400,3000);
car=createSprite(50,200,50,50);
wall=createSprite(1300,200,60,height/2);


}

function draw() {
  background(0); 
  
  car.velocityX=speed;
  
  if(car.x-wall.x <= car.width/2+wall.width/2 &&
    wall.x-car.x<= wall.width/2+car.width/2 &&
    car.y-wall.y <= car.height/2+wall.height/2 &&
    wall.y-car.y<= wall.height/2+car.height/2 ){

if(weight<=3000 && speed<=45)
{
   car.shapeColor=(230,230,0)
}

if(weight<=1000 && speed<=50)
{
  car.shapeColor=(0,255,0)
}

if(weight<2000 && speed<=60)
{
  car.shapeColor=(255,0,0)
}

  }

  else
  {  
  car.shapeColor="white";
  wall.shapeColor=(80,80,80)
  }

  drawSprites();
}