const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var bob,string,stand,ground;

var pendulumState;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  bob = new Bob(400,100,50);
  stand = new Stand(400,50);
  string = new String(bob.body,stand.body);
  ground = new Ground(400,250,800,10);

  pendulumState = "start";
}

function draw() {
  background("white");
  Engine.update(engine);

  stand.display();
  bob.display();
  string.display();
  ground.display();

  fill("black");
  text("X:"+mouseX,50,50);
  text("Y:"+mouseY,50,60);
  text("Press space to set the pendulum",550,50);
  text("Press enter to make it oscillate",550,70);

  if(pendulumState==="set"){
    bob.body.position.x = mouseX;
    bob.body.position.y = mouseY;
  }

  if(pendulumState === "oscillate"){
    bob.body.position.x = 400;
  }
}

function keyPressed(){
  if(keyCode === 32 && pendulumState === "start"){
    pendulumState = "set";
  }

  if(keyCode === 13 && pendulumState === "set"){
    pendulumState = "oscillate";
  }

  if(keyCode === 32 && pendulumState === "oscillate"){
    pendulumState = "set";
  }
}