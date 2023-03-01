//Ex 2.  keyPressed() is function that checks for which key is pressed. Use this function to allow interaction with your arrow keys i.e., pressing UP key should change the direction of the sprite to make them move in the upwards direction, pressing the DOWN key should change the direction of the sprite to make them move in the downwards directions, and so on.

let speedX;
let speedY;
let myX;
let myY;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
  rectMode(CENTER);
  angleMode(DEGREES);

  speedX = random(1, 10);
  speedY = random(1, 10);
  myX = random(30, width - 50);
  myY = random(30, height - 80);
}

function draw() {
  background(240, 75, 72);
  drawMaxx(myX, myY, 0.5); //My Sprite
  myX += speedX; //X Movement
  myY += speedY; //Y Movement
  //Reverses X and Y speed when there's a collision
  if (myX + 50 >= width || myX < 0) {
    speedX *= -1;
  }
  if (myY + 80 >= height || myY < 0) {
    speedY *= -1;
  }
}
function keyPressed() {
  if (keyCode == LEFT_ARROW) { //On left arrow, goes left
    speedX -= 1;
    console.log("speedX is " + speedX);
  } else if (keyCode == RIGHT_ARROW) { //On right arrow, goes right
    speedX += 1;
    console.log("speedX is " + speedX);
  } else if (keyCode == UP_ARROW) { //On up arrow, goes up
    speedY -= 1;
    console.log("speedY is " + speedY); 
  } else if (keyCode == DOWN_ARROW) { //On down arrow, goes down
    speedY += 1;
    console.log("speedY is " + speedY);
  }
}
function drawMaxx(x, y, size) {
  push();
  //Changes sprite based on user input
  translate(x, y);
  scale(size);
  push();
  noStroke();

  //Colors
  let skin = color(34, 60, 69);
  let darkSkin = color(34, 60, 59);
  let darkerSkin = color(35, 60, 49);

  //Fits sprite into top left corner
  scale(0.5);
  translate(-85, -54);

  //Shirt
  fill("red");
  arc(190, 400, 200, 110, 180, 0);

  //Neck
  fill(darkSkin);
  rect(190, 300, 70, 100);
  arc(190, 350, 70, 60, 0, 180);

  //Face
  fill(skin);
  rect(200, 200, 130, 130);
  //Forehead
  arc(200, 135, 130, 130, 180, 0);
  //Jaw
  arc(200, 265, 130, 130, 0, 180);

  //Hair
  fill("black");
  arc(180, 135, 160, 160, 180, 270);
  rect(140, 150, 80, 100, 30);
  rect(230, 95, 160, 80, 30);

  //Eyes
  fill("white");
  //Right Eye
  ellipse(265, 180, 50);
  //Left Eye
  ellipse(210, 180, 50);
  //Right Pupil
  fill("black");
  ellipse(275, 179, 10);
  //Left Pupil
  ellipse(220, 179, 10);
  //Top Right Eyelid
  fill(darkSkin);
  arc(265, 175, 55, 60, 180, 0);
  //Top Left Eyelid
  arc(210, 175, 55, 60, 180, 0);

  //Sleep
  if (mouseIsPressed) {
    //Bottom Right Eyelid
    arc(265, 175, 55, 60, 0, 180);
    //Bottom Left Eyelid
    arc(210, 175, 55, 60, 0, 180);

    //Eyelid Overlap
    fill(darkerSkin);
    rect(210, 175, 60, 10, 10);

    //Eyelid Overlap
    fill(darkerSkin);
    rect(265, 175, 60, 10, 10);

    //Mouth
    fill("black");
    rect(250, 260, 50, 10, 10);

    //ZZZ
    textFont("Comic Sans MS");
    fill("white");
    textSize(32);
    text("Z", 300, 240);
    textSize(64);
    text("Z", 330, 210);
    textSize(80);
    text("Z", 370, 150);
  } else {
    //Mouth
    fill("white");
    arc(250, 240, 70, 70, 0, 180);
  }

  //Nose
  fill(darkSkin);
  translate(225, 150);
  triangle(10, 10, 10, 70, 60, 70);
  translate(-225, -150);

  //Ear
  fill(darkSkin);
  arc(140, 210, 60, 65, 90, 270);
  pop();
  pop();
}
