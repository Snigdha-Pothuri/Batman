const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
var engine, world;

var drops = [];

function preload(){
    
}

function setup(){
 createCanvas(800,400) ; 

 engine = Engine.create();
 world = engine.world;


}

function draw(){
 background(0);  

 Engine.update(engine);

  if(frameCount%60===0){  
    drops.push(new drop(random(width/2-30, width/2+30),10,10)); 
    } 
 
     
    for (var j=0;j<drops.length; j=j+1) {
        drops[j].display();
      } 

}   

