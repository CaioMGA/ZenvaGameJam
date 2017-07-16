var loadState = {
	preload:function (){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill:'#ffffff'});

		game.load.spritesheet("hero_spritesheet", "img/hero_spritesheet.png", 32, 32);
		game.load.spritesheet("targetIndicator", "img/cursorIcons.png", 32, 32);
		game.load.spritesheet("enemy_bullet", "img/enemy_bullet.png", 46, 32);
		game.load.spritesheet("enemy_mirror_walk", "img/enemy_mirror_walk.png", 32, 32);

		game.load.tilemap("map", "misc/map1.json", null, Phaser.Tilemap.TILED_JSON);
		game.load.image("tiles", "img/tiles_purple.png");

		game.state.start("play");
	}
};
