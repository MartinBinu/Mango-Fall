
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;
var ground,tree,stone,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){

   boyImage = loadImage("Plucking mangoes/boy.png");

   treeImage = loadImage("Plucking mangoes/tree.png");

}

function setup() {

   createCanvas(1500, 500);

   engine = Engine.create();
   world = engine.world;

   //Create the Bodies Here.

   ground = new Ground(400,450,3000);
   
   tree = new Tree(800,120);

   stone = new Stone(210,335);

   mango1 = new Mango(940,160);
   mango2 = new Mango(920,180);
   mango3 = new Mango(950,170);
   mango4 = new Mango(970,220);
   mango5 = new Mango(1000,160);
   mango6 = new Mango(1040,200);
   mango7 = new Mango(850,210);
   mango8 = new Mango(1050,210);
   mango9 = new Mango(870,170);
   mango10 = new Mango(1000,230);

   hand = new Hand(stone.body,{x: 210,y: 345});

   boy = createSprite(245,375,10,10);
   boy.addImage("boy",boyImage);
   boy.scale = 0.05;

   //var render = Render.create({ 
     // element: document.body,
       //engine: engine,
       //options: { width: 1200, height: 700, wireframes: false } });
       Engine.run(engine);
       //Render.run(render);

}


function draw() {

   rectMode(CENTER);
   background(0);

   ground.display();

   hand.display();

   tree.display();

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

   stone.display();

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