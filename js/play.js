var playState = {
	create: function(){
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.SPACEBAR]
        );
		game.stage.backgroundColor = '#440044';
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        hero = createHero(0, 0, 200);
        hero.createAnimations();

        /*
        cursor = game.add.sprite(100, 100, 'targetIndicator');
        cursor.anchor.setTo(0.5, 0.5);
        cursor.animations.add('valid', [4, 3, 2], 5, true);
        cursor.animations.add('invalid', [0, 1], 4, true);
        cursor.animations.play('valid');
        */
	},

    update: function(){
        hero.update();
        if (game.input.mousePointer.isDown) {
            hero.setTarget(game.input.mousePointer.x, game.input.mousePointer.y);
        }
    }
};

function goFull() {
	if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }
}
