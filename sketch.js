
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

const Constraint = Matter.Constraint;

var launcher, stone, boy, tree, mango1, mango2, manog3, mango4, mango5, ground;


function preload(){
	boy=loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
//	ground = new Ground(400,400,230,20);
//	World.add(world, ground);
	//Create the Bodies Here.
	 
     stone =new Stone(205,280,25);
	 launcher = new Launcher(stone.body, {x:205, y:280});
	 tree = new Tree(740, 535);
	 ground = new Ground(400,400,230,20);
	 mango1 = new Mango(700, 200, 25);
	 mango2 = new Mango(762, 190, 25);
	 mango3 = new Mango(642, 225, 25);
	 mango4 = new Mango(772, 120, 25);
	 mango5 = new Mango(852, 235, 25);

//	 boy = new Boy(260, 340, 150, 250);

	var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
});
Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background("white");
  image(boy ,180,225,150,250);
  display();

  detectCollision(mango1,stone);
  detectCollision( mango2,stone);
  detectCollision( mango3,stone);
  detectCollision( mango4,stone);
  detectCollision(mango5,stone);

  
  
 // drawSprites();
 
}

  function mouseDragged() {

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  
  }
  
  function mouseReleased() {
  
	launcher.fly();
	
  }

  function keyPressed() {
	
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x : 205, y : 280})
	launcher.attach(stone.body);
		//Matter.Body.setStatic(stone.body, true );
		
	}
  }

  function detectCollision(Mango, Stone) {
	  mangoPosition = Mango.body.position;
	  stonePosition = Stone.body.position;

	  var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
	  
	  if(distance <= Mango.r + Stone.r){
		  Matter.Body.setStatic(Mango.body, false);

	  }
  }


  function display() {
	
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	//boy.display();
	stone.display();
//	ground.display();
	launcher.display();
	


  }


