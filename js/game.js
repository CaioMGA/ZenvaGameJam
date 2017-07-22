var game = new Phaser.Game(640, 360, Phaser.AUTO, 'gameDiv');

//Global Variables
var walls;
var floor;
var map;
var stageClear = [false, false, false, false, false];
var curLevel = 1;
var hero = null;
var enemies = [];
var onScreenEnemies = [];
var updatableObjects = []; //objects to be updated on play.update()
var initiableObjects = []; //objects to be initialized
var mirrorWalkers = [];
var bullets = [];
var door;
var transitioningLevels;
var enemiesLeft;

var breadCrumbs = []; // used to track menu navigation

//GameStates
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('prepareLevel', prepareLevelState);
game.state.add('titleScreen', titleScreenState);
game.state.add('settings', settingsState);
game.state.add('play', playState);

game.state.start('boot');
