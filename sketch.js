const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
 
 var thunder1,thunder2,thunder3,thunder4;
 var drops=[];
 var engine, world
 var drop,thunder,fc
 var umbrella
var maxDrops  = 100;
function preload(){
 thunder1=loadImage("images/thunderbolt/1.png");
 thunder2=loadImage("images/thunderbolt/2.png");
 thunder3=loadImage("images/thunderbolt/3.png");
 thunder4=loadImage("images/thunderbolt/4.png");
}

function setup(){
 createCanvas(600,600)  

 engine=Engine.create();
 world=engine.world;
   // drop= new Drop(100,100);
    umbrella= new Umbrella(400,500);
    for(var i=0; i<maxDrops;i++){
        drops.push(new Drop(random(0,600),random(0,600)))
    }
}
function thunders(){
    if(frameCount%100===0){
        fc=frameCount;
         thunder=createSprite(300,50)
        
        rand= Math.round(random(1,4))
        switch(rand){
            case 1: thunder.addImage(thunder1);
                    break;
            case 2: thunder.addImage(thunder2);
                    break;
            case 3: thunder.addImage(thunder3);
                    break;
            case 4: thunder.addImage(thunder4);
                    break;
        }
        thunder.scale = 0.5
    }
    if(fc+10 === frameCount && thunder){
        thunder.destroy();
    }
  
}

function draw(){
    background(0);
    Engine.update(engine);
    thunders();
for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
}
    umbrella.display();

    drawSprites()
}   

