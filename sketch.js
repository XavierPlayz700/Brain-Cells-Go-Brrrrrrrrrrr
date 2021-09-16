var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz, music, pic;

function preload () {
  // Suffer with Music because Yes
  music = loadSound("Rickroll.mp3");
  pic = loadImage("XaviDab.png");
}
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  music.loop();
  music.setVolume(0.45);
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  imageMode(CENTER);
  image(pic, width * 0.8, height * 0.34, 100, 130);
}
