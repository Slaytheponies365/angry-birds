
const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld , myEngine , box
var box1, box2, box3
var ground
var backGround

function preload() {
   callAPI()
}
function setup() {
  createCanvas(1200,800);
  myEngine= Engine.create();
  myWorld = myEngine.world;
  box1 = new Box(800,700,50,50);
  box2 = new Box(950,700,50,50);
  box3 = new Box(750,650,50,50)
  box4 = new Box(950,650,50,50)
  box5 = new Box(850,550,50,50)
  ground = new Ground(600,750,1200,10)
  piggy1 = new Piggy(825,700,50,50)
  piggy2 = new Piggy(850,650,50,50)
  plank1 = new Planks(850,690,10,250,PI/2)
  plank2 = new Planks(850,590,10,250,PI/2)
  plank3 = new Planks(800,525,10,125,PI/4)
  plank4 = new Planks(900,520,10,125,PI/-4)
  redBird = new Bird (200,600,50,50)
  connection = new Connect(redBird.Bird,{
    x:200,y:300
  })
  platform = new Ground (100,600,400,400)
}

function draw() {
  if(backGround){

  
  background(backGround);
  }
  Engine.update(myEngine)
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 ground.display();
 piggy1.display();
 piggy2.display();
 plank1.display();
 plank2.display();
 plank3.display();
 plank4.display();
 redBird.display();
 connection.display();
 platform.display();
}

function mouseDragged(){
  Matter.Body.setPosition(redBird.Bird,{
    x:mouseX,y:mouseY
  })
}

function mouseReleased(){
  connection.fly();
}

async function callAPI(){
  var response = await fetch("http://worldclockapi.com/api/json/pst/now")
  var data = await response.json()
  var time = data.currentDateTime
  var hour = time.slice(11,13)
  if(hour>=6&&hour<=16){
    backGround = loadImage("bg.png")

  }
  else{
    backGround = loadImage("bg2.jpg")
  }

  

  if(hour>=5&&hour<=12){
    console.log("GOOD MORNING")
  }
  else if(hour>=13&&hour<=20){
    console.log("GOOD AFTERNOON")
  }
  else if(hour>=21||hour<=4){
    console.log("GOOD NIGHT")
  }
  
  console.log(hour)
}