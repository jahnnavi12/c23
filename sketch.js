var helicopterIMG, helicopterSprite, packageSprite,packageIMG,packageState="PICK";
var packageBody,ground,rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	rect1=createSprite(282,590,20,100);
	rect1.shapeColor=color(255,0,0);
	rect2=createSprite(462,590,20,100);
	rect2.shapeColor=color(255,0,0);
	rect3=createSprite(372,650,200,20);
	rect3.shapeColor=color(255,0,0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(helicopterSprite.x , helicopterSprite.y , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	rect3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world,rect3);
	//Create a Ground
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW && packageState==="PICK") {
	helicopterSprite.velocityX=0;
	Matter.Body.setStatic(packageBody,false);
	packageState="DROPED";
  }
  if(keyCode===LEFT_ARROW && packageState==="PICK"){
	  helicopterSprite.velocityX=-1;
	 packageBody.position.x=helicopterSprite.x;
	 
		 
  }
  if(keyCode===RIGHT_ARROW && packageState==="PICK"){
	helicopterSprite.velocityX=1;
	packageBody.position.x=helicopterSprite.x;
	
}
}




