class Umbrella{
    constructor(x,y){
      var options ={
        isStatic:true,
        restitution: 0.3,
        friction:0.5,
        density:1.2 
      }
      
       this.r=300;
       this.plinko= Bodies.circle(x,y,this.r/2,options);
       World.add(world,this.plinko);
       this.image = loadImage("images/Walking Frame/walking_1.png")
    }

    display(){
        var plinkopos = this.plinko.position
        var angle=this.plinko.angle;
        push()
        translate(plinkopos.x,plinkopos.y)
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}