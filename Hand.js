class Hand {

    constructor(bodyA,pointB){

       var options = {
           bodyA: bodyA,
           pointB: pointB,
           stiffness: 0.04,
           length: 20
       }

       this.hand = Constraint.create(options);
       this.pointB = pointB;

       World.add(world,this.hand);

    }

    fly(){

    this.hand.bodyA = null;

    }
 
    display(){

      if(this.hand.bodyA){

       var pointA = this.hand.bodyA.position;
       var pointB = this.pointB;

       stroke("blue");
       strokeWeight(4);

       line(pointA.x,pointA.y,pointB.x,pointB.y);

      }

    }

    attach(){
       this.hand.bodyA = stone.body;
    }
 
 };