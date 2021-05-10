
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
	startbobpositionX=width/2;
	startbobpositionY=height/4+500;

	//Create the Bodies Here.
	bob1= new bob(startbobpositionX-bobDiameter*2,startbobpositionY,bobDiameter);
	bob2= new bob(startbobpositionX-bobDiameter,startbobpositionY,bobDiameter);
	bob3= new bob(startbobpositionX,startbobpositionY,bobDiameter);
	bob4= new bob(startbobpositionX+bobDiameter*2,startbobpositionY,bobDiameter);
	bob5= new bob(startbobpositionX+bobDiameter*2,startbobpositionY,bobDiameter);

	Roof1= new Roof(width/2,height/4,width/7,80);

	rope1= new Rope(bob1.body,Roof1.body,-bobDiameter*2,0);
	rope2= new Rope(bob2.body,Roof1.body,-bobDiameter,0);
	rope3= new Rope(bob3.body,Roof1.body,0,0);
	rope4= new Rope(bob4.body,Roof1.body,+bobDiameter*1,0);
	rope5= new Rope(bob5.body,Roof1.body,+bobDiameter*2,0);

	//constraint1={
	///	bodyA:bob1.body,
		//bodyB:Roof1.body,
		//po//intB:{x:-bobDiameter*2,y:0}
//}
//	var pendulum1=Constraint.create(constraint1);

//	constraint2={
//		bodyA:bob2.body,
//		bodyB:Roof1.body,
//		pointB:{x:-bobDiameter,y:0}
//	}
//	var pendulum2=Constraint.create(constraint2);

//	constraint3={
//		bodyA:bob3.body,
//		bodyB:Roof1.body,
//		pointB:{x:-bobDiameter,y:0}
//	}
//	var pendulum3=Constraint.create(constraint3);

	

//	constraint4={
//		bodyA:bob4.body,
//		bodyB:Roof1.body,
//		pointB:{x:+bobDiameter,y:0}
//	}
//	var pendulum4=Constraint.create(constraint4);

	//constraint5={
	//	bodyA:bob5.body,
	//	bodyB:Roof1.body,
	//	pointB:{x:+bobDiameter*2,y:0}
	//}
	//va//r pendulum5=Constraint.create(constraint5);

	//World.add(world,pendulum1);
//	World.add(world,pendulum2);
//	World.add(world,pendulum3);
//	World.add(world,pendulum4);
//	World.add(world,pendulum5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
Roof1.display(); 
rope1.display(); 
rope2.display(); 
rope3.display(); 
rope4.display(); 
rope5.display(); 

// line(bob1.body.position.x,bob1.body.position.y,Roof1.body.position.x,Roof1.body.position.y);
// line(bob2.body.position.x,bob2.body.position.y,Roof1.body.position.x,Roof1.body.position.y);
// line(bob3.body.position.x,bob3.body.position.y,Roof1.body.position.x,Roof1.body.position.y);
// line(bob4.body.position.x,bob4.body.position.y,Roof1.body.position.x,Roof1.body.position.y);
// line(bob5.body.position.x,bob5.body.position.y,Roof1.body.position.x,Roof1.body.position.y);
  drawSprites();
 
}
function drawLine(constraint){
 bobBodyPosition=Constraint.bodyA.position;
 roofBodyPosition=Constraint.bodyB.position;

 roofBodyoffset=constraint.pointB;
 roofBodyX=roofBodyPosition.x+roofBodyoffset.x;
 roofBodyY=roofBodyPosition.y+roofBodyoffset.y;
 line(bobBodyPosition.X,bobBodyPosition.Y,roofBodyX)
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-300});

	}
}

