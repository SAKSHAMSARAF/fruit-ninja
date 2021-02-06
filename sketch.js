var PLAY=1;
var END=0;
var gameState=1;

var sword,fruit1,fruit2,fruit3,fruit4,fruit1s,fruit2s,fruit3s,fruit4s,alien1,alien2,alien3,alien4;
var swordImage,alien1Image,alien2Image,alien3Image,alien4Image,gameoverImage;
var fruitGroup,enemyGroup;
var gameover;
var score=0;
var gameoversound,knifeSwoosh;


function preload()
{
  
  
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  fruit1s = loadImage("fruit1.png");
  fruit2s = loadImage("fruit2.png");
  fruit3s = loadImage("fruit3.png");
  fruit4s = loadImage("fruit4.png");
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  swordImage = loadImage("knife.png");
  gameoverImage = loadImage("gameover.png");
  gameoversound = loadSound("gameover.mp3");
  knifeSwoosh = loadSound("knifeSwoosh.mp3");
}


function setup() 
{
  
  createCanvas(600,600);
  
  sword = createSprite(100,200,20,20);  
  sword.scale=0.72;
  sword.addImage(swordImage);
  fruitGroup = new Group();
  alienGroup = new Group();
  fruittGroup = new Group();
      gameover = createSprite(300,300);
      gameover.addImage(gameoverImage);
      gameover.scale=1.5;
 
}


function draw() 
{
  background("lightblue");
  
  if(gameState === PLAY)
  {
 
  aliens();
  fruits();

  gameover.visible = false;  
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
   if(fruitGroup.isTouching(sword))
   {
    fruitGroup.destroyEach();
     knifeSwoosh.play();
    score=score+2;
   }
    if(fruittGroup.isTouching(sword))
      {
        fruittGroup.destroyEach();
        knifeSwoosh.play();
        score=score+2;
      }
     
     else if(alienGroup.isTouching(sword)) 
     {
      
      gameState = END;
      gameover.visible = true; 
      fruitGroup.destroyEach();
      fruittGroup.destroyEach(); 
      alienGroup.destroyEach();
      fruitGroup.velocityX=0;
      fruittGroup.velocityX=0; 
      alienGroup.velocityX=0;
      sword.destroy(); 
      gameoversound.play(); 
      

    }
    
  }
  
  drawSprites();
  
  textSize(20);
  fill("black")
  text("Score : " + score,250,20);
  
}


function fruits() 
{
  
  if(World.frameCount%80===0)
  { 
   fruit=createSprite(600,Math.round(random(50,340)),20,20);
   fruit.scale=0.2;
   
    r=Math.round(random(1,4)); 

     if(r == 1)
     {
      fruit.addImage(fruit1);
     } 
     else if (r == 2)
     {
      fruit.addImage(fruit2)
     } 
     else if (r == 3)
     {
      fruit.addImage(fruit3)
     } 
     else if (r == 4)
     {
      fruit.addImage(fruit4)
     }

     fruit.y=Math.round(random(50,340));
     fruit.velocityX = -(7+(score/4));
     fruit.setlifetime = 50;
    
    fruitGroup.add(fruit);
    
    position = Math.round(random(1,4));
    
    
    
    fruitt=createSprite(90,Math.round(random(50,340)),20,20);
    fruitt.scale = 0.2;
    
    if(position == 1)
    {
      fruitt.addImage(fruit1s)
      fruitt.x = 400;
      fruitt.lifetime = 70;
      fruitt.velocityX = (7+(score/4));
      
    }   
      else
    
      if(position == 2)
      {
       fruitt.addImage(fruit2s) 
       fruitt.x = 0;
       fruitt.lifetime = 70;
       fruitt.velocityX = (7+(score/4));
      
      }  
       
     else 
       
       if(position == 3)
      {
      fruitt.addImage(fruit3s)  
      fruitt.x = 0;
      fruitt.lifetime = 70;
      fruitt.velocityX = (7+(score/4));
      
      }
      
     else if(position == 4)
      {
      fruitt.addImage(fruit4s)  
      fruitt.x = 0;
      fruitt.lifetime = 70;  
      fruitt.velocityX = (7+(score/4));
    
      }  
    
     fruitt.y=Math.round(random(100,600));
     fruitt.velocityX = (7+(score/4));
     fruitt.setlifetime = 50;
       
  fruittGroup.add(fruitt);
  }
}
  

function aliens() 
{
  
   if(World.frameCount%200 === 0)
   { 
     
     alien1=createSprite(600,Math.round(random(50,340)),20,20);
     alien1.addImage("moving", alien1Image);
     alien1.y=Math.round(random(50,340)); 
     alien1.velocityX=-(8+(score/4));
     alien1.setlifetime=50;
     alienGroup.add(alien1);  

   }
  
   if(World.frameCount%200 === 0) 
   {
     
     alien2=createSprite(800,Math.round(random(50,340)),20,20);
     alien2.addImage("moving2", alien2Image);
     alien2.y=Math.round(random(25,170));
     alien2.velocityX=-(8+(score/4));
     alien2.setlifetime=50;
     alienGroup.add(alien2);
     
   }
  }