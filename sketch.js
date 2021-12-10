'use strict';
let i=0;
let state = 'title';
let cnv;
let hero;
let heroPosX=300;
let heroPosY=300;
let boss;
let BobHealth = 0;
let BulletHell=[];
let shots=0;
let radius=0;
let xpos=300;
let ypos=100;

let endingIndex;
let bobWin=[
  {name:"haha"},
  {name:"lol loser"},
  {name:"let me sleep now"},
  {name:"k bye"},
  {name:"better luck next time"}
];
let heroWin=[
  {name:"dangit"},
  {name:"i just wanna sleep"},
  {name:"well then"},
  {name:"heck"},
  {name:"$%#@"}
];

function setup() {
  cnv = createCanvas(600, 600);
  textFont('monospace');
  hero = new Player(300,300);
  boss = new Bob();
  for (let i=0;i<50;i++){
    BulletHell[i]= new Projectile(this.x,this.y,this.r)
  }
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
      case 'lose':
        lose();
        cnv.mouseClicked(loseMouseClicked);
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
  text("Bob", 300, 100);
  textSize(25);
  text('click to start', 300, 300)
}
function intro(){
  background(50);
  textSize(15);
  noStroke();
  text("Bob tires of Rosa's shenangigans and has taken over the game", 300, 100);
  text("that they were working on for a class project.", 300, 130);
  text("Defeat Bob so that Rosa can finish their project.", 300, 160);
  text("Use WASD to move", 300, 290);
  text("Get Bob's health to zero", 300, 320);
}

function level() {
  background(50);
  hero.display();
  hero.move();
  BulletHell[i].display();
  BulletHell[i].fire();
  boss.display();
  fill(52, 235, 70);
  rect(10,550,(300-BobHealth),10);
  stroke(250);
  boss.health();
  //player bullets
  let radius = 2.5;
  if(ypos>150){
    ypos=ypos-10;
  }
  else{
    ypos=heroPosY-hero.r;
    xpos=heroPosX;
    BobHealth=BobHealth+2;
  }

  stroke(240);
  strokeWeight(3);
  fill(150);
  ellipse(xpos,ypos,radius);
///hero Health
noStroke
fill(52,235,70);
stroke(250);
rect(580-((5-shots)*30)-2.5,550,160,10);
fill(250);
noStroke();
text("You",575,580);

//oh i've been hit
var d=dist(heroPosX,heroPosY,BulletHell[i].x,BulletHell[i].y);
if(d<(hero.r+BulletHell[i].r)){
  shots=shots+1
  hero.shot();
  BulletHell[i].shot();
}
//loser
if (shots>4){
  state='lose';
}
//Winner
if (BobHealth>299){
  state='victory';
}
}



function titleMouseClicked() {
  state = 'intro';
}

function introMouseClicked() {
  state = 'level';
}

function victory() {
  background(50);
  stroke(255);
  strokeWeight(2);
  fill(240);
  ellipse(300, 210, 150);
  fill(50);
  ellipse(260, 205, 20);
  ellipse(330, 190, 20);
  stroke(50);
  line(340, 260, 260, 255);
  stroke(255);
  triangle(300, 285, 380, 260, 360, 300);
  triangle(300, 285, 210, 260, 250, 300);
  ellipse(300, 285, 20);
  textSize(75);
  fill(250);
  textSize(75);
  fill(255);
  noStroke();
  textAlign(CENTER);
  text('Winner!', 300, 100);
  if(heroWin[0]){
    endingIndex=int(random(heroWin.length));
    fill(255);
    textSize(25);
    text(heroWin[endingIndex].name,300,370)
  };
  heroWin.splice(endingIndex,1);
  textSize(15);
  text('refresh to play again', 300, 500)
}

function lose(){
  background(50);
  stroke(255);
  strokeWeight(2);
  fill(240);
  ellipse(300, 210, 150);
  fill(50);
  ellipse(260, 205, 20);
  ellipse(330, 190, 20);
  stroke(50);
  line(340, 260, 260, 255);
  stroke(255);
  triangle(300, 285, 380, 260, 360, 300);
  triangle(300, 285, 210, 260, 250, 300);
  ellipse(300, 285, 20);
  textSize(75);
  fill(250);
  noStroke();
  textAlign(CENTER);
  text("You lose!",300,100);
  if(bobWin[0]){
    endingIndex=int(random(bobWin.length));
    fill(255);
    textSize(25);
    text(bobWin[endingIndex].name,300,370)
  };
  heroWin.splice(endingIndex,1);
  textSize(15);
  text('refresh to try again',300,500)
}
// function victoryMouseClicked() {
//   state = 'title';
// }
//
// function loseMouseClicked(){
//   state='level'
// }

class Player{
  constructor(){
    this.x=600*0.5;
    this.y=600*0.75;
    this.r=50;
  }
  display(){
    stroke(0);
    beginShape();
    fill(183, 15, 245);
    ellipse(heroPosX,heroPosY,this.r);
    endShape();
  }
  move() {
    //up
    if (keyIsDown(87) && heroPosY>5){
      heroPosY-=3.5;
    }
    //down
   if (keyIsDown(83) && heroPosY<height-5){
     heroPosY+=3.5;
   }
   //left
    if (keyIsDown(65) && heroPosX>5){
      heroPosX -=3.5;
    }
    //right
    if (keyIsDown(68) && heroPosX<width-5){
      heroPosX+=3.5;
    }
  }
  shot(){
    this.x=heroPosX*0.5;
    this.y=heroPosY*0.75;
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
  noStroke();
  fill(250);
  text("man, I just wanna sleep",100,100);
  text("plz.let me sleep",500,100);
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
    noStroke()
    text("Bob", 20,580);
  }
}
//test
class Projectile{
  constructor(){
    this.x=random(0,555);
    this.y=50;
    this.r=30;
  }
  display(){
    fill(250);
    ellipse(this.x,this.y,this.r);
  }
  fire(){
    if(this.y<550){
      this.y=this.y+7
    }
    else{
      this.y=200
      this.x=random(0,600);
    }
  }
  shot(){
    this.y=100
    this.x=random(100,500);
  }
}
