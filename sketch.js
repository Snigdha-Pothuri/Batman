const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 

var boy,boyimg;
//const Constraint = Matter.Constraint;
var engine, world;

var drops = [];

function preload(){
 boyimg = loadImage("boy.png")  ; 
}

function setup(){
 createCanvas(400,400) ; 

 engine = Engine.create();
 world = engine.world;

 boy = createSprite(200,300,50,50);
 boy.addImage("img",boyimg);
 boy.scale = 0.4;
}

function draw(){
 background(0);  

 Engine.update(engine);

  if(frameCount%60===0){  
    drops.push(new drop(random(width/2-30, width/2+30),10,10)); 
    } 
 
     
    for (var j=0;j<drops.length; j=j+1) {
        drops[j].display();
        drops[j].updateY();
      } 
   
  drawSprites();
}   

