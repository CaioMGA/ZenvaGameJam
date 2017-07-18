var titleScreenState = {
	create : function(){
		game.stage.backgroundColor = '#440044';
		textStyle = { "font":"30px Arial", "fill":"#080808"};

		btnPlay = game.add.button((game.world.width / 2), 100, "menu_button", showPlay, this, 1,2,0);
		btnPlay.anchor.setTo(0.5, 0.5);
		txtPlay = game.add.text((game.world.width / 2), 100, "Play", textStyle);
		txtPlay.anchor.setTo(0.5, 0.5);

		btnStageSelect = game.add.button((game.world.width / 2), 160, "menu_button", showStageSelect, this, 1,2,0);
		btnStageSelect.anchor.setTo(0.5, 0.5);
		txtStageSelect = game.add.text((game.world.width / 2), 160, "Stage Select", textStyle);
		txtStageSelect.anchor.setTo(0.5, 0.5);

		btnSettings = game.add.button((game.world.width / 2), 220, "menu_button", showSettings, this, 1,2,0);
		btnSettings.anchor.setTo(0.5, 0.5);
		txtSettings = game.add.text((game.world.width / 2), 220, "Settings", textStyle);
		txtSettings.anchor.setTo(0.5, 0.5);

		btnAbout = game.add.button((game.world.width / 2), 280, "menu_button", showAbout, this, 1,2,0);
		btnAbout.anchor.setTo(0.5, 0.5);
		txtAbout = game.add.text((game.world.width / 2), 280, "About", textStyle);
		txtAbout.anchor.setTo(0.5, 0.5);
		
	}
};

