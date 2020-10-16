class Stone {

    constructor(x,y){

       var options = {
           'restitution': 0,
           'friction': 3,
           'density':1.2
       }

       this.body = Bodies.circle(x,y,5,options);
       this.radius = 5;
       this.image = loadImage("Plucking mangoes/stone.png")

       World.add(world,this.body);
    }
 
    display(){

        push();
       image(this.image,this.body.position.x,this.body.position.y,15,15);
       pop();

    }
 
 };