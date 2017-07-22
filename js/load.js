var loadState = {
	preload:function (){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill:'#ffffff'});

		game.load.spritesheet("hero_spritesheet", "img/hero_spritesheet.png", 32, 32);
		game.load.spritesheet("targetIndicator", "img/cursorIcons.png", 32, 32);
		game.load.spritesheet("enemy_bullet", "img/enemy_bullet.png", 46, 32);
		game.load.spritesheet("enemy_mirror_walk", "img/enemy_mirror_walk.png", 32, 32);
		game.load.spritesheet("enemy_follow_hero", "img/enemy_follow_hero.png", 64, 43);
		game.load.spritesheet("enemy_idle", "img/enemy_idle.png", 32, 30);
		game.load.spritesheet("door", "img/door.png", 32, 32);
		game.load.spritesheet("button", "img/small_button.png", 32, 32);
		game.load.spritesheet("menu_button", "img/big_button.png", 276, 46);
		game.load.spritesheet("icons", "img/icons.png", 32, 32);

		for(i = 1; i <= 10; i ++){
			game.load.tilemap("level"+i.toString(), "misc/1-" + i.toString()+".json", null, Phaser.Tilemap.TILED_JSON);
		}

		//game.load.tilemap("level1", "misc/1-1.json", null, Phaser.Tilemap.TILED_JSON);
		game.load.image("tiles", "img/tiles_purple.png");

	},
	create: function(){
		showTitleScreen();
	}

};
