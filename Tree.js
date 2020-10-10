class Tree {

    constructor(){

       var options = {
           'isStatic': true,
       }

       this.body = Bodies.rectangle(950,120,10,10,options);
       this.width = 10;
       this.height = 10;
       this.image = loadImage("Plucking mangoes/tree.png")

       World.add(world,this.body);

    }
 
    display(){

        push();
       image(this.image,800,120,300,300);
       pop();

    }
 
 };