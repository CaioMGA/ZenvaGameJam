var playState = {
	create: function(){
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.SPACEBAR]
        );
		game.stage.backgroundColor = "#440044";
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        heroAvatar = game.add.sprite(0, 0, "hero");
        heroAvatar.anchor.setTo(0.5, 0.5);
        game.physics.enable(heroAvatar, Phaser.Physics.ARCADE);
        heroAvatar.body.collideWorldBounds = true;
        heroSpeed = 200;

        cursor = game.add.sprite(100, 100, "targetIndicator");
        cursor.anchor.setTo(0.5, 0.5);
        cursor.animations.add('valid', [4, 3, 2], 5, true);
        cursor.animations.add('invalid', [0, 1], 4, true);
        cursor.animations.play('valid');

        setWalkTarget(100, 100);
	},

    update: function(){
        walkPlayer();

        if (game.input.mousePointer.isDown) {
            setWalkTarget(game.input.mousePointer.x, game.input.mousePointer.y);
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

function setWalkTarget(x, y){
    walkTarget = {"x": x, "y": y};
    cursor.x = x;
    cursor.y = y;
    walking = true;
}

function walkPlayer(){
    if(walking){
        game.physics.arcade.moveToXY(heroAvatar, walkTarget.x, walkTarget.y,heroSpeed);
        if(Phaser.Math.distance(heroAvatar.x, heroAvatar.y, walkTarget.x, walkTarget.y) < 8){
            heroAvatar.x = walkTarget.x;
            heroAvatar.y = walkTarget.y;
            walking = false;
            heroAvatar.body.velocity.setTo(0, 0);
        }
    }
}
