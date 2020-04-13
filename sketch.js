var ball;

function setup(){
  createCanvas(800,400);
  ball = createSprite(700,100,50,50);
  ball.addImage("circle.png",ball_Image);
  ball.scale = 0.3;
 
}
function preload(){
  ball_Image=loadImage("circle.png");
  }
function draw(){
 background(mouseX,mouseY,mouseX/mouseY);
//background( Math.round(random(0,255)));
  ball.y = World.mouseY;
  ball.x = World.mouseX;
  
  drawSprites();
  //ball.display();
   
}

