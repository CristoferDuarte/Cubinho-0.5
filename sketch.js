var gameState = 0;
var playerCount;
var database;
var form,player,game

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    game = new Gamer();
    game.getState();
    game.start();
}

function draw(){

    }

