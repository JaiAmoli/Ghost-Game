var ghost, ghostImage;
var door,doorImage;
var spookywave,spookywaveSound;
var climber,climberImage;
var tower, towerImage
var doorGroup;
var climberGroup
var invisibleblock,invisibleblockGroup;
var GameState = "play";


function preload(){
  ghostImage = loadImage("ghost-standing.png")
  doorImage = loadImage("door.png")
  climberImage = loadImage("climber.png")
  spookywaveSound = loadSound("spooky.wav")
  towerImage = loadImage("tower.png")
  doorGroup = new Group();
  climberGroup = new Group();
  invisibleblockGroup = new Group();
}
function setup(){
 createCanvas(600,600); 
  
  tower = createSprite(300,300)
  tower.addImage(towerImage)
  tower.velocityY = 2;
  
  ghost = createSprite(200,200,50,50)
  ghost.addImage(ghostImage)
  ghost.scale = 0.3;
  
}
function draw(){
 background("black")
  if(GameState === "play"){
    
         if(tower.y > 400){
    tower.y = 300;
  }
       if(keyDown("left")){
    ghost.x = ghost.x -2; 
  }
   if(keyDown("right")){
    ghost.x = ghost.x +2; 
  }
  if(keyDown("space")){
   ghost.velocityY = -5;
    
  }
     ghost.velocityY = ghost.velocityY +0.8;
    

    
    
  if(climberGroup.isTouching(ghost)){
   ghost.velocityY = 0;
  }
  if(invisibleblockGroup.isTouching(ghost) || ghost.y >600){
   ghost.destroy(); 
    GameState = "end";
  }
  
  SpawnDoor();  
  drawSprites();
  }
  if(GameState === "end"){
    stroke("yellow")
    textSize(24)
   text("GameOver", 230,250) 
    fill("yellow")
  }
 
  
  
  
}

function SpawnDoor(){
  if(frameCount% 240 === 0){
  var door = createSprite(200,-50)
  door.addImage(doorImage)
    var climber = createSprite(200,10)
    climber.addImage(climberImage)
    climber.x = door.x;
    climber.lifetime = 300
    climber.velocityY = 2;
    invisibleblock = createSprite(200,15)
    invisibleblock.width = climber.width;
    invisibleblock.height = 2;
    invisibleblock.velocityY = 2;
    invisibleblock.x = door.x;
  door.X = Math.round(random(120,400))
  door.velocityY = 2;
  door.lifetime = 300;
    climberGroup.add(climber)
    doorGroup.add(door)
    invisibleblockGroup.add(invisibleblock)
    ghost.depth = door.depth;
    ghost.depth = ghost.depth+1;
  }
  
}




