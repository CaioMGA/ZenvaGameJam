var loadState = {
	preload:function (){
		game.add.text(80, 80, "Loading . . .");

		game.load.image("box", "img/box.png");
		game.load.spritesheet("hero_spritesheet", "img/hero_spritesheet.png", 32, 32);
		game.load.spritesheet("targetIndicator", "img/cursorIcons.png", 32, 32);

		game.state.start("play");
	}
};
