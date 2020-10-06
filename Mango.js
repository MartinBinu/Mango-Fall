class Mango {

    constructor(x,y){

       var options = {
           'isStatic': true,
           'restitution': 0,
           'friction': 1
       }

       this.body = Bodies.circle(x,y,10,options);
       this.width = 20;
       this.height = 20;
       this.image = loadImage("Plucking mangoes/mango.png")

       World.add(world,this.body);
    }
 
    display(){

        push();
       image(this.image,this.body.position.x,this.body.position.y,15,15);
       pop();
       
    }
 
 };