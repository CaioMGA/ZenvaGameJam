var loadState = {
	preload:function (){
		game.add.text(80, 80, "Loading . . .");

		game.load.image("hero", "img/hero.png");
		game.load.spritesheet("targetIndicator", "img/cursorIcons.png", 32, 32);

		game.state.start("play");
	}
};
