var playState = {
	preload: function(){
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.SPACEBAR]
        );
        createScenary();
        enemies.forEach(function(item){console.log(item.sprite.key); item.init()});
        hero.init();

        game.input.addPointer(); // touchscreen
        createMenuOverlay();

	},

    update: function(){
        updatableObjects.forEach(
            function(item){
                item.update();
            });
        
        if (game.input.mousePointer.isDown) {
            hero.setTarget(game.input.mousePointer.x, game.input.mousePointer.y);
        }
        if (game.input.pointer1.isDown) {
            hero.setTarget(game.input.pointer1.x, game.input.pointer1.y);
        }

        game.physics.arcade.collide(hero.sprite, walls, collisionHandler, null, this);
        game.physics.arcade.collide(mirrorWalkers[0].sprite, walls);

        //game.physics.arcade.collide(enemyMirrorWalkers, walls);

    },
     render: function () {

        //game.debug.body(hero.sprite);
        //game.debug.body(mirrorWalker.sprite);
        //game.debug.pointer(game.input.pointer1);
        //game.debug.body(walls.bodies);
    }
};

function collisionHandler(){
    //prevent hero avatar from getting stuck on corners
    kick = 0.4;
    if(hero.sprite.body.blocked.left && hero.target.sprite.x > hero.sprite.x){
        hero.sprite.x += kick; //KICK right
    } else if(hero.sprite.body.blocked.right && hero.target.sprite.x < hero.sprite.x){
        hero.sprite.x -= kick; //KICK left
    }

    if(hero.sprite.body.blocked.up && hero.target.sprite.y > hero.sprite.y){
        hero.sprite.y += kick; //KICK down
    } else if(hero.sprite.body.blocked.down && hero.target.sprite.y < hero.sprite.y){
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

function createScenary(){
    map.addTilesetImage("tileset", "tiles"); //Tileset name inside TILED, image key on Phaser

    floor = map.createLayer('floor');
    walls = map.createLayer('walls');

    map.setCollisionBetween(1, 10000, true, 'walls');
    floor.resizeWorld();
    //640 x 360 resolution has a sprite count of 40 x 22,5
    //so I made the tilemap bigger and adjusted the camera for a better presentation
    game.camera.x = 8;
    game.camera.y = 12;
}
