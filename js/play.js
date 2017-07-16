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
        hero.init();

        box = game.add.sprite(150, 150, "box");
        game.physics.enable(box, Phaser.Physics.ARCADE);
        box.body.immovable = true;
	},

    update: function(){
        hero.update();
        if (game.input.mousePointer.isDown) {
            hero.setTarget(game.input.mousePointer.x, game.input.mousePointer.y);
        }

        game.physics.arcade.collide(box, hero.sprite, collisionHandler, null, this);
    },
     render: function () {

        game.debug.body(hero.sprite);
        game.debug.body(box);
    }
};

function collisionHandler(){
    //prevent hero avatar from getting stuck on corners
    kick = 0.4;
    if(box.x < hero.sprite.x && hero.target.sprite.x > hero.sprite.x){
        hero.sprite.x += kick; //KICK right
    } else if(box.x > hero.sprite.x && hero.target.sprite.x < hero.sprite.x){
        hero.sprite.x -= kick; //KICK left
    }

    if(box.y < hero.sprite.y && hero.target.sprite.y > hero.sprite.y){
        hero.sprite.y += kick; //KICK down
    } else if(box.y > hero.sprite.y && hero.target.sprite.y < hero.sprite.y){
        hero.sprite.y -= kick; //KICK up
    }
}

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
