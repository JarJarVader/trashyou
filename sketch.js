const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b0x1
var b0x2
var engine,world;
function preload(){
amongus=loadImage("dustbingreen.png")
}
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  

  /*   var b_options = {

      restitution : 1.5
    }
  
  ball = Bodies.circle(200,200,25, b_options)
World.add(world,ball);
*/
b0x1=new Box(500,540,10,100);
b0x2=new Box(700,540,10,100);
b0x3=new Box(600,585,200,10)
gr0und=new Ground(400,590,800,10)
ball=new Boll(150,550,20,20)
}
function draw() {
background(255);
Engine.update(engine);
fill("cyan");
 // ground.isStatic=true;
 /*fill("fuchsia")
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25)
//ball.restitution=2
*/
b0x1.disrespect()
b0x2.disrespect()
b0x3.disrespect()
gr0und.disrespect()
ball.disrespect()
image(amongus,500,400,200,200)
}
function keyPressed (){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(ball.object,ball.object.position, {x:15, y:-15})
  }
}