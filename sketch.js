'use strict';
let state = 'title';
let cnv;
let points = 0;

function setup() {
  cnv = createCanvas(600, 600);
  textFont('monospace')
}

function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
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
  // } else if (state==='level 1'){
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
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

function level1() {
  background(38, 222, 87);
  textSize(60);
  textAlign(CENTER)
  text('click!', 300, 100);
  textSize(20);
  text('click like your life depends on it!', 300, 300);
}

function titleMouseClicked() {
  state = 'level 1';
}

function level1MouseClicked() {
  points++;
  if (points >= 20) {
    state = 'victory'
  }
}

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
  state = 'level 1'
  points = 0;
}
