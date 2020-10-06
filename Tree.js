class Tree {

    constructor(x,y,width,height){

       var options = {
           'isStatic': true,
       }

       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       this.image = loadImage("Plucking mangoes/tree.png")

       World.add(world,this.body);

    }
 
    display(){

        push();
       image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
       pop();

    }
 
 };