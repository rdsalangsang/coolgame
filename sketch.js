'use strict';
let i=0;
let state = 'title';
let cnv;
let hero;
let heroPosX=300;
let heroPosY=300;
let boss;
let BobHealth = 0;
let shots=0;


function setup() {
  cnv = createCanvas(600, 600);
  textFont('monospace');
  hero = new Player(300,300);
  boss = new Bob();
}

function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
      case 'intro':
        intro();
        cnv.mouseClicked(introMouseClicked);
        break;
    case 'level':
      level();
      //cnv.mouseClicked(levelMouseClicked);
      break;
    case 'victory':
      victory();
      cnv.mouseClicked(victoryMouseClicked);
      break;
    default:
      break;
  }

  //   if(state === 'title'){
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  // } else if (state==='level'){
  //   level1();
  //   cnv.mouseClicked(levelMouseClicked);
  // } else {
  //
  //   }
}



function title() {
  background(50);
  textSize(50);
  stroke(255);
  fill(220);
  textAlign(CENTER);
  text('Cool Game', 300, 100);
  textSize(25);
  text('click to start', 300, 300)
}
function intro(){
  background(50);
  textSize(15);
  text("Bob tires of Rosa's shenangigans and has taken over the game", 300, 100);
  text("that they were working on for a class project.", 300, 130);
  text("Defeat Bob so that Rosa can finish their project.", 300, 160);
  text("Use WASD to move", 300, 290);
  text("Click to shoot", 300, 320);
}

function level() {
  background(50);
  hero.show();
  hero.move();
  boss.display();
  fill(52, 235, 70);
  rect(10,550,250,10);
  stroke(50);
  boss.health();
}



function titleMouseClicked() {
  state = 'intro';
}

function introMouseClicked() {
  state = 'level';
}
// function level1MouseClicked() {
//   points++;
//   if (points >= 20) {
//     state = 'victory'
//   }
// }

function victory() {
  background(59, 59, 245);
  textSize(75);
  stroke(255);
  textAlign(CENTER);
  text('Winner!', 300, 100);
  textSize(25);
  text('click to restart', 300, 300)
}

function victoryMouseClicked() {
  state = 'title'
  points = 0;
}

class Player{
  constructor(){
  }
  show(){
    stroke(0);
    beginShape();
    fill(183, 15, 245);
    ellipse(heroPosX,heroPosY,35);
    endShape();
  }
  move() {
    //up
    if (keyIsDown(87) && heroPosY>5){
      heroPosY-=2
    }
    //down
   if (keyIsDown(83) && heroPosY<height-5){
     heroPosY+=2
   }
   //left
    if (keyIsDown(65) && heroPosX>5){
      heroPosX -=2;
    }
    //right
    if (keyIsDown(68) && heroPosX<width-5){
      heroPosX+=2;
    }
  }
  shot(){
    this.x=this.x*0.5;
    this.y=this.y*0.75;
  }
}


class Bob{
  constructor(){
    this.x=this.x*0.5;
    this.y=0;
    this.w=this.x+0.5;
    this.h=300;
  }
  display(){
  stroke(255);
  strokeWeight(2);
  fill(240);
  ellipse(300, 100, 150);
  fill(50);
  ellipse(260, 95, 20);
  ellipse(330, 80, 20);
  stroke(50);
  line(340, 150, 260, 145);
  stroke(255);
  triangle(300, 175, 380, 150, 360, 190);
  triangle(300, 175, 210, 150, 250, 190);
  ellipse(300, 175, 20);
  }
  health(){
    fill(250);
    noStroke();
    text("Bob", 20,580);
  }
}
