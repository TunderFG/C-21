
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola;
var solo,parede1,parede2;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var bolaop = {
		restitution: 0.3,
		friction: 0,
		density: 1.2
	};

	bola = Bodies.circle(260,100,20,bolaop);
	World.add(world,bola);

	solo = new Ground(width/2,670,width,20);
	
	parede1 = new Ground(700,600,20,120)
	parede2 = new Ground(800,600,20,120)


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(bola.position.x,bola.position.y,20,20);


  solo.display();
  parede1.display();
  parede2.display()
  drawSprites();
	
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bola,bola.position,{
			x: 60,
			y: -60
		});
	}
}



