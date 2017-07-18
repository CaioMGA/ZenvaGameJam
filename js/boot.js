var bootState = {
	create: function(){
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start('load');
	}
};
