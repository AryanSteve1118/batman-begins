class Drop{
    constructor(x,y){
      var options ={
        isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.2 
      }
      
       this.r=8;
      
      this.drop= Bodies.circle(x,y,this.r,options);
   
       World.add(world,this.drop);
    }

    display(){
        var droppos = this.drop.position
        var angle=this.drop.angle;
        push()
        translate(droppos.x,droppos.y)
        rotate(angle);
        rectMode(CENTER)
        strokeWeight(3);
        fill("blue")
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop()
    }
    update(){
       if(this.drop.position.y>height){
          Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
       } 
    }
}
