var titleScreenState = {
	create : function(){
		nowPlaying = false;
		game.stage.backgroundColor = '#440044';
		map = game.add.tilemap("level1");
		map.addTilesetImage("tileset", "tiles");
	    floor = map.createLayer('floor');

		createCharacters();

		titleStyle = { "font":"50px Arial", "stroke":"#ffffbb	", "strokeThickness":10, "fill":"#dd4444"};
		textStyle = { "font":"30px Arial", "fill":"#080808"};
		title = game.add.text (game.world.width / 2, 50, "Dungeon Lurker", titleStyle);
		title.anchor.setTo(0.5, 0.5);

		btnPlay = game.add.button((game.world.width / 2), 120, "menu_button", showPrepareLevel, this, 1,2,0);
		btnPlay.anchor.setTo(0.5, 0.5);
		txtPlay = game.add.text((game.world.width / 2), 120, "Play", textStyle);
		txtPlay.anchor.setTo(0.5, 0.5);

		btnStageSelect = game.add.button((game.world.width / 2), 180, "menu_button", showStageSelect, this, 1,2,0);
		btnStageSelect.anchor.setTo(0.5, 0.5);
		txtStageSelect = game.add.text((game.world.width / 2), 180, "Stage Select", textStyle);
		txtStageSelect.anchor.setTo(0.5, 0.5);

		btnSettings = game.add.button((game.world.width / 2), 240, "menu_button", showSettings, this, 1,2,0);
		btnSettings.anchor.setTo(0.5, 0.5);
		txtSettings = game.add.text((game.world.width / 2), 240, "Settings", textStyle);
		txtSettings.anchor.setTo(0.5, 0.5);

		btnAbout = game.add.button((game.world.width / 2), 300, "menu_button", showAbout, this, 1,2,0);
		btnAbout.anchor.setTo(0.5, 0.5);
		txtAbout = game.add.text((game.world.width / 2), 300, "About", textStyle);
		txtAbout.anchor.setTo(0.5, 0.5);
		
		createFullScreenButton();
	},
	update: function(){
		updateEnemyBullet();
		updateEnemyFly();
	}
};

function createCharacters(){
	h = game.add.sprite(50, 50, "hero_spritesheet");
	h.scale.x = 1.5;
	h.scale.y = 1.5;
	h.animations.add("default", [10, 11, 10, 12], 8, true);
	h.animations.play("default");

	e1 = game.add.sprite(50, 270, "enemy_idle");
	e1.scale.x = 1.5;
	e1.scale.y = 1.5;
	e1.animations.add("default", [1], 8, false);
	e1.animations.play("default");

	e2 = game.add.sprite(550, 210, "enemy_bullet");
	e2.scale.x = 1.5;
	e2.scale.y = 1.5;
	e2.anchor.setTo(0.5, 0.5);
	e2.animations.add("default", [0, 1, 2], 8, true);
	e2.animations.play("default");
	bulletSpeed = 2;

	e3 = game.add.sprite(600, 50, "enemy_follow_hero");
	e3.scale.x = -1.5;
	e3.scale.y = 1.5;
	e3.anchor.setTo(0.5, 0.5);
	e3.animations.add("default", [0, 1, 2], 8, true);
	e3.animations.play("default");
	flySpeed = 0.3;

	e4 = game.add.sprite(550, 280, "enemy_mirror_walk");
	e4.scale.x = 1.5;
	e4.scale.y = 1.5;
	e4.anchor.setTo(0.5, 0.5);
	e4.animations.add("default", [5, 4, 5, 6], 8, true);
	e4.animations.play("default");
}

function updateEnemyBullet(){
	if(e2.x < 50 || e2.x > 600){
		bulletSpeed *= -1;
		e2.rotation += Math.PI;
	}
	e2.x += bulletSpeed;
}

function updateEnemyFly(){
	if(e3.x < 580 || e3.x > 600){
		flySpeed *= -1;
	}
	e3.x += flySpeed;
	e3.y += flySpeed;
}
