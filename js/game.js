var game = new Phaser.Game(640, 360, Phaser.AUTO, 'gameDiv');

//Global Variables
var heroAvatar;
var heroSpeed;
var walkTarget;
var walking;

//GameStates
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('play', playState);

game.state.start('boot');
