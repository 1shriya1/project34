//Create variables here
var dog1, dogimg ,foodStock ,doghappy,foodS,milkimg;
var databasex


function preload()
{
 
  doghappy= loadImage("dogImg1.png")
  

}

function setup() {
  createCanvas(500, 500);
   createSprite(200,200,70,70);
 
 dog1.addImage(dogimg)
 dog1.scale= 0.2;
  databasex = firebase.database();


  foodStock = databasex.ref('Food');
  foodStock.on("value",readstock)
  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     //doghappy = createSprite(200,330)
     dog1.addImage(doghappy)
  }

  drawSprites();
  //fill("red")
  //ext("foodstock")
  fill("red");
  text("Press UP_ARROWKEY to feed the drago milk!",50,100);
  text("foodstock = ",100,100);
    
  
  

}
function readstock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
     x=0
  }else{
    x=x-1;
  }

  databasex.ref('/').update({
    Food:x
  })
}



