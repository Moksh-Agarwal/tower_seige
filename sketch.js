const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint=Matter.Constraint;
var engine, world;

var box1, box2, box3,box4,box5,box6,box7,box8,box9;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var slingshot;
var ball;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(520,350,150,10);
    ground2= new Ground(820,250,150,10);
    // first layer
    box1 = new Box(500,346,20,30);
    box2 = new Box(520,346,20,30);
    box3= new Box(540,346,20,30);
    box4= new Box(480,346,20,30);
    box5= new Box(560,346,20,30);
   
    // second layer
    box6 = new Box(500,330,20,30);
    box7 = new Box(520,330,20,30);
    box8= new Box(540,330,20,30);
    // third layer
    box9= new Box(520,314,20,30);
    // second platform
    // first layer
    b1= new Box(800,246,20,30);
    b2= new Box(820,246,20,30);
    b3= new Box(840,246,20,30);
    b4= new Box(780,246,20,30);
    b5= new Box(860,246,20,30);
    // second layer
    b6= new Box(800,230,20,30);
    b7= new Box(820,230,20,30);
    b8= new Box(840,230,20,30);
    // last layer
    b9= new Box(820,214,20,30);
    ball = new Paper(100,300,70);
    slingshot= new SlingShot(ball.body,{x:200,y:100});
}

function draw(){
    background("yellow");
    
    
    Engine.update(engine);
   ground2.display();
    ground.display();
    
    box1.display();
    box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
   b6.display();
   b7.display();
   b8.display();
    b9.display();
    fill("green");
    ball.display();

slingshot.display();    
}
function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    slingshot.fly();
}
