const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800,650);
  engine = Engine.create();
	myworld = engine.world;

	roof= new Roof(300,300,200,20)
  bob= new Bob(210,500,20)
  bob1= new Bob(205,500,20) 
  bob2= new Bob(200,500,20)
  bob3= new Bob(215,500,20)
  bob4= new Bob(220,500,20 )

  ro = new Rope(roof.body,bob.body,0,0)
  ro1 = new Rope(roof.body,bob1.body,-40,0) 
  ro2 = new Rope(roof.body,bob2.body,-80,0) 
  ro3 = new Rope(roof.body,bob3.body,40,0) 
  ro4 = new Rope(roof.body,bob4.body,80,0) 

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(19,912,40);
  
  roof.display()
  bob.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  ro.show()
  ro1.show()
  ro2.show()
  ro3.show()
  ro4.show()
  
  if(keyDown("left")){
    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-13,y:10})
  }
  
  if(keyDown("right")){
    Matter.Body.applyForce(bob4.body,bob4.body.position,{x:13,y:10})
  }
  
  
  drawSprites();


}




