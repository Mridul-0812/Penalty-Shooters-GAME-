var keeper;
var player;
var post;
var ball;
var plank;

var gamestate = "serve"

var goals = 0;
var lives = 5;
var turns = 0;

var rectangle;
var rect;

function preload(){
    KeeperImg = loadAnimation("goalkeeper.png")
    PlayerImg = loadImage("player1.png")
    PostImg = loadImage("post.png")
    BallImg = loadImage("ball.png")
}

function setup() {
    createCanvas(500, 500)

    keeper = createSprite(250, 120)
    keeper.addAnimation("dog", KeeperImg)
   
    player = createSprite(250, 375)
    player.addImage("AngryDog", PlayerImg)
   
    post = createSprite(250, 120)
    post.addImage("ManNow", PostImg)

    ball = createSprite(247, 475)
    ball.addImage("Ball", BallImg)

    rectangle = createSprite(250, 105, 210, 130)

    rect = createSprite(248.5, 180, 43, 40)

    plank = createSprite(10, 10, 1000, 30)

    var rand =  (random(1,500))
    console.log(rand)
}

function draw() {

    post.scale = 0.9
    player.scale = 0.37
    keeper.scale = 0.4
    ball.scale = 0.09
    
    plank.visible = false

    keeper.depth = keeper.depth
    post.depth = keeper.depth-1

    player.depth = player.depth
    ball.depth = player.depth-1

    background("green")
    drawSprites()
    
    textSize(15)
      fill("black")
      text("Goals: "+goals, 10, 50)
      text("Lives: "+lives, 10, 25)
      text("Turns: "+turns, 10, 75)
    
    rectangle.visible = false
    ball.depth = ball.depth
    player.depth = ball.depth+1
   
   if (gamestate === "serve") {
      textSize(25)
      fill("yellow")
      text("Click S to take your penalty.", 50, 220)
   if (keyDown("s")) {
    gamestate = "play"
  }
    }
   
    if (ball.isTouching(plank)) {
      ball.velocityX = 0
      ball.velocityY = 0
      WAIT = 1000
      keeper.x = 250
      keeper.y = 120
      player.x = 250
      player.y = 375
      ball.x = 245
      ball.y = 475
      goals = goals+0
      lives = lives-1
      turns = turns+1
    }

    if (ball.isTouching(rectangle)) {
        ball.velocityY = 0
        ball.velocityX = 0
    }
   
   if (ball.velocityX === 0) {
     ball.rotationSpeed = 0
   }
   
   
    if (gamestate === "play") {
      if (mouseDown()) {
         ball.velocityY = -10
         keeper.x = (random(100, 400))
      }

      if (gamestate === "play") {
        rect.x = keeper.x
      }
      
rect.visible = false

if (gamestate === "serve") {
    rect.visible = false
}


if (ball.isTouching(rectangle)) {
    turns = turns+1
    goals = goals+1
    keeper.x = 250
    keeper.y = 120
    player.x = 250
    player.y = 375
    ball.x = 245
    ball.y = 475
  }

    }
    
        if (gamestate === "play") {
      if (keyWentUp("SPACE")) {
         ball.velocityY = -10
         ball.rotationSpeed = 100
         keeper.x = (random(100, 400))
      }
    }
    
      
    rectangle.depth = rectangle.depth
    keeper.depth = rectangle.depth-1
    
    keeper.debug = false
    ball.debug = false
    
    if (gamestate === "play") {
      if (keyDown("left_arrow")) {
        ball.x = ball.x-2
        player.x = player.x-2
        ball.rotationSpeed = 100
      }
      if (keyDown("right_arrow")) {
        ball.x = ball.x+2
        player.x = player.x+2
        ball.rotationSpeed = -100
      }
    }
    
    if (keyWentUp("up_arrow")) {
      ball.velocityY = -15
      ball.velocityX = 0
      keeper.x = (random(100, 400))
    }
    
    
    
    if (ball.isTouching(rectangle && rect)) {
      ball.velocityX = 0
      ball.velocityY = 0
      WAIT = 1000
      keeper.x = 250
      keeper.y = 120
      player.x = 250
      player.y = 375
      ball.x = 245
      ball.y = 475
      goals = goals+0
      lives = lives-1
      turns = turns+1
    }
    
    if (ball.isTouching(rectangle)) {
      ball.velocityX = 0
      ball.velocityY = 0
      ball.x = 195
      ball.y = 350
      keeper.x = 200
      player.x = 200
      player.x = 250
      player.y = 375
      goals = goals+1
    }

   
    if (ball.x === 0) {
      goals = goals+0
      ball.x = 195
      ball.y = 350
    }
    
    
    if (gamestate === "serve") {
      goals = 0
      Lives = 5
    }
    
    if (lives === 0) {
      gamestate = "end"
    }
    
    if (lives === 0) {
      textSize(25)
      fill("yellow")
      text("Game Over! Better luck next time!", 30, 220)
       post.destroy(post)
      keeper.destroy(keeper)
      player.destroy(player)
      ball.destroy(ball)      
    } 
  }