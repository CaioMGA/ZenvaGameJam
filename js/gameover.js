var gameoverState = {
	create: function(){
		title = game.add.text(game.world.width/2, 100, "G A M E    O V E R", {font:"50px Arial", fill:"#ffffff", stroke:"#000000", strokeThickness:10});
		title.anchor.setTo(0.5, 0.5);
		msg = game.add.text(game.world.width/2, 250, "Congratulations! You beat the game!", {font:"20px Arial", fill:"#ffffff", stroke:"#000000", strokeThickness:5});
		msg.anchor.setTo(0.5, 0.5);

		btnBack = game.add.button((game.world.width / 2), 315, "menu_button", showTitleScreen, this, 1,2,0);
		btnBack.anchor.setTo(0.5, 0.5);
		txtBack = game.add.text((game.world.width / 2), 315, "Main Menu", textStyle);
		txtBack.anchor.setTo(0.5, 0.5);
	}
};
