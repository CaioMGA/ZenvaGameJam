var loadState = {
	preload:function (){
		game.add.text(80, 80, "Loading . . .");
		game.state.start("play");
	}
};
