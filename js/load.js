var loadState = {
	preload:function (){
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill:'#ffffff'});

		game.load.image("locked", "img/locked.png");
		game.load.image("link_button", "img/link_button_image.png");
		game.load.spritesheet("hero_spritesheet", "img/hero_spritesheet.png", 32, 32);
		game.load.spritesheet("targetIndicator", "img/cursorIcons.png", 32, 32);
		game.load.spritesheet("enemy_bullet", "img/enemy_bullet.png", 46, 32);
		game.load.spritesheet("enemy_mirror_walk", "img/enemy_mirror_walk.png", 32, 32);
		game.load.spritesheet("enemy_follow_hero", "img/enemy_follow_hero.png", 64, 43);
		game.load.spritesheet("enemy_idle", "img/enemy_idle.png", 32, 30);
		game.load.spritesheet("door", "img/door.png", 32, 32);
		game.load.spritesheet("button", "img/small_button.png", 32, 32);
		game.load.spritesheet("menu_button", "img/big_button.png", 276, 46);
		game.load.spritesheet("medium_button", "img/medium_button.png", 96, 96);
		game.load.spritesheet("icons", "img/icons.png", 32, 32);
		game.load.spritesheet("particles", "img/particles.png", 64, 64);
		game.load.spritesheet("smoke", "img/smoke.png", 64, 64);

		for(i = 1; i <= 10; i ++){
			game.load.tilemap("level"+i.toString(), "misc/1-" + i.toString()+".json", null, Phaser.Tilemap.TILED_JSON);
		}

		game.load.image("tiles", "img/tiles_purple.png");

		game.load.audio("enemy_death", "snd/enemydeath.ogg");
		game.load.audio("enemy_stop", "snd/flystop.ogg");
		game.load.audio("success", "snd/success.ogg");
		game.load.audio("you_lose", "snd/youlose.ogg");
		game.load.audio("player_walk", "snd/playerwalk.ogg");

	},
	create: function(){
		showTitleScreen();
	}

};
