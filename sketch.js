const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine,world
var box
var ground

function setup(){
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
var b_options={
  restitution:1
}
  box=Bodies.circle(100,100,20,b_options);
  World.add(world,box)
  var g_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,20,g_options);
  World.add(world,ground)

}
function draw(){
  background(0)
  Engine.update(engine)
  ellipseMode(RADIUS)
  fill ("yellow")
ellipse(box.position.x,box.position.y,20,20)
fill ("green")
rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)

}