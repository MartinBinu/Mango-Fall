class Ground {

   constructor(x,y,width){

      var options = {
          'isStatic': true
      }

      this.body = Bodies.rectangle(x,y,width,105,options);
      this.width = width;
      this.height = 105;

      World.add(world,this.body);

   }

   display(){

       push();
      fill("green");
      rect(this.body.position.x,this.body.position.y,this.width,100);
      pop();

   }

};