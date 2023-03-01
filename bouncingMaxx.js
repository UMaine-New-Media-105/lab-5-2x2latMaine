//Ex 1. Now add movement for the sprite in the y-direction and make them bounce off of all the borders on the canvas. The result should be a windows theme screensaver
speedX = 2;
speedY = 2;
myX = 30;
myY = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(240, 75, 72);
  drawMaxx(myX, myY, 0.5); //My Sprite
  
  myX += speedX; //X Movement
  myY += speedY;
  
  if (myX + 50 >= width || myX < 0){
    speedX *= -1;
  }
  if (myY + 80 >= height || myY < 0){
    speedY *= -1;
  }
}

function drawMaxx(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  push();
  noStroke();

  //Colors
  let skin = color(34, 60, 69);
  let darkSkin = color(34, 60, 59);
  let darkerSkin = color(35, 60, 49);

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
//Link to sketch: https://editor.p5js.org/maxxkeoni219/sketches/huu931ZUT
