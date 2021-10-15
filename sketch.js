var bombImg;
var coinImg;
var energyDrinkImg;
var pathImg;
var powerImg;
var RunnerImg;

function preload(){
  //pre-load images
  bombImg = loadImage("bomb.png")
  coinImg = loadImage("coin.png")
  energyDrinkImg = loadImage("energyDrink.png")
  pathImg = loadImage("path.png")
  powerImg = loadImage("power.png")
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  
  path.scale = 1.2

  Runner = createSprite(200,200);
  Runner.addAnimation("Running",RunnerImg);
  Runner.scale = 0.1
}

function draw() {
  background(0);
  path.velocityY = 4 
  Runner.x = World.mouseX;
  if(path.y > 400){
    path.y = height/2
  }

  drawSprites();
}
