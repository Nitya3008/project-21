
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,leftSide,rightSide;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
    }
	ball=Bodies.circle(200,100,10,ball_options);
	World.add(world,ball);

	//Create the Bodies Here.
	groundObj = new Ground(600,690,1200,20);
	leftSide = new Ground(930,620,10,120);
	rightSide = new Ground(1090,620,10,120);

	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  push();
  strokeWeight(20)
  stroke(255)
  ellipse(ball.position.x,ball.position.y,10);
  pop();
  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:4,y:-9}) 
	}
}

