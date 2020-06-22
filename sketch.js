var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	
ball=new Ball(600,500,40)
ball2=new Ball(650,500,40)
ball3=new Ball(550,500,40)
ball4=new Ball(500,500,40)
ball5=new Ball(700,500,40)
ball6=new Ball(450,500,40)
cl = new Tr(ball.body,{x:600,y:200});
c2 = new Tr(ball2.body,{x:650,y:200});
c3 = new Tr(ball3.body,{x:550,y:200});
c4 = new Tr(ball4.body,{x:600,y:200});
c5 = new Tr(ball5.body,{x:600,y:200});
c6 = new Tr(ball6.body,{x:600,y:200});
h=new Ground(625,500,400,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
ball2.display()
ball3.display()
ball4.display()
ball5.display()
ball6.display()
c1.display()
c2.display()
c3.display()
c4.display()
c5.display()
c6.display()
  drawSprites();
  h.display()

 
}



