
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,tree,stone,boy;
var mango1,mango2,mango3,mango4,mango5;

function preload(){

   boyImage = loadImage("Plucking mangoes/boy.png")

}

function setup() {

   createCanvas(1500, 500);

   engine = Engine.create();
   world = engine.world;

   //Create the Bodies Here.

   ground = new Ground(400,450,3000);

   tree = new Tree(850,110,230,300);

   stone = new Stone(210,335);

   mango1 = new Mango(940,180);
   mango2 = new Mango(920,200);
   mango3 = new Mango(950,190);
   mango4 = new Mango(970,240);
   mango5 = new Mango(1000,180);
   mango6 = new Mango(1040,220);
   mango7 = new Mango(850,230);
   mango8 = new Mango(1050,230);
   mango9 = new Mango(870,190);
   mango10 = new Mango(1000,250);

   hand = new Hand(stone.body,{x: 210,y: 345});

   boy = createSprite(245,375,10,10);
   boy.addImage("boy",boyImage);
   boy.scale = 0.05;

   Engine.run(engine);  

}


function draw() {

   rectMode(CENTER);
   background(0);

   ground.display();
   
   tree.display();

   stone.display();

   hand.display();

   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();

   detectCollision(stone,mango1);
   detectCollision(stone,mango2);
   detectCollision(stone,mango3);
   detectCollision(stone,mango4);
   detectCollision(stone,mango5);
   detectCollision(stone,mango6);
   detectCollision(stone,mango7);
   detectCollision(stone,mango8);
   detectCollision(stone,mango9);
   detectCollision(stone,mango10);

   //boy.display();

   drawSprites();

}

function mouseDragged(){

   Matter.Body.setPosition(stone.body,{x: mouseX, y:mouseY})

}

function mouseReleased(){

   hand.fly();

}

function keyPressed(){

   if(keyCode === 32){

      Matter.Body.setPosition(stone.body,{x: 210,y: 345})

      hand.attach(stone.body);

   }

}

function detectCollision(obj1,obj2){
   
   distance = dist(obj1.body.position.x,obj1.body.position.y,obj2.body.position.x,obj2.body.position.y);

   if(distance <= obj1.radius +obj2.radius){
      Matter.Body.setStatic(obj2.body,false);
   }
 
}
