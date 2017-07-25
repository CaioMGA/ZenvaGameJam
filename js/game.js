var game = new Phaser.Game(640, 360, Phaser.AUTO, 'gameDiv');

//Global Variables
var walls;
var floor;
var map;
var stageUnlocked = [true, false, false, false, false, false, false, false, false, false];
var curLevel = 1;
var hero = null;
var heroDeploy = null;
var enemies = [];
var onScreenEnemies = [];
var updatableObjects = []; //objects to be updated on play.update()
var initiableObjects = []; //objects to be initialized
var mirrorWalkers = [];
var bullets = [];
var door;
var transitioningLevels;
var enemiesLeft;
var nowPlaying = false;

var musicLvl = 1;
var soundLvl = 1;
var music = null;
var fxVictory = null;
var fxDoorOpen = null;
var fxPlayerWalking = null;
var fxBulletChangeDirection = null;
var fxEnemyFollowPlayerChase = null;
var fxEnemyFollowPlayerStop = null;
var fxDeadEnemy = null;
var fxDeadPlayer = null;

var breadCrumbs = []; // used to track menu navigation

//GameStates
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('about', aboutState);
game.state.add('prepareLevel', prepareLevelState);
game.state.add('titleScreen', titleScreenState);
game.state.add('stageSelect', stageSelectState);
game.state.add('settings', settingsState);
game.state.add('play', playState);

game.state.start('boot');
