var playState = {
	preload: function(){
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.SPACEBAR]
        );
        stopAllSounds();
        createScenary();
        enemies.forEach(function(item){console.log(item.sprite.key); item.init()});
        hero.init();
        door.init();
        createMenuOverlay();
        transitioningLevels = false;

        if(!nowPlaying){
            nowPlaying = true;
        }
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

        updateCollisions();
        if(enemiesLeft < 1){
            door.open();
        }

    },
     render: function () {

        //game.debug.body(hero.sprite);
        //game.debug.body(door.sprite);
        //game.debug.pointer(game.input.pointer1);
        //enemies.forEach(function (item){game.debug.body(item.sprite)});

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

function updateCollisions(){
    game.physics.arcade.collide(hero.sprite, walls, collisionHandler, null, this);
    mirrorWalkers.forEach(function(item){
        if(item.alive){
            game.physics.arcade.collide(item.sprite, walls);
        }
    });

    bullets.forEach(function(item){
        game.physics.arcade.collide(item.sprite, walls, function(){item.turn()}, null, this);
    });

    if(door.opened){
        game.physics.arcade.collide(door.sprite, hero.sprite, nextLevel, null, this);
    }

    // Enemies colliding against themselves
    enemies.forEach(function (item1){
        //enemy collides with hero
        game.physics.arcade.collide(item1.sprite, hero.sprite, nextTry, null, hero);
        enemies.forEach(function(item2){
            if(item1.alive && item2.alive){
                game.physics.arcade.collide(item1.sprite, item2.sprite, function(){enemiesColliding(item1, item2)}, null, this);
            }
        });
    });
}

function nextLevel(){
    if(!transitioningLevels){
        transitioningLevels = true;
        stageUnlocked[curLevel] = true;
        curLevel++;
        stopAllSounds();
        if(curLevel > 10){
            showGameover();
        } else {
            showPrepareLevel();
        }
    }
}

function resetLevel(){
    if(!transitioningLevels){
        transitioningLevels = true;
        stopAllSounds();
        showPrepareLevel();
    }
}

function enemiesColliding(enemy1, enemy2){
    console.log("ENEMY COLLISION");
    enemy1.death();
    enemy2.death();
    killEnemy(enemy1);
    killEnemy(enemy2);
}

function killEnemy(enemy){
    enemy.alive = false;
    index = updatableObjects.indexOf(enemy);
    if(index > -1){
        updatableObjects.splice(index, 1);
    }

    index = bullets.indexOf(enemy);
    if(index > -1){
        bullets.splice(index, 1);
    }

    index = mirrorWalkers.indexOf(enemy);
    if(index > -1){
        mirrorWalkers.splice(index, 1);
    }

    index = enemies.indexOf(enemy);
    if(index > -1){
        enemies.splice(index, 1);
    }

    enemiesLeft --;
}

function nextTry(){
    if(hero.alive){
        hero.death();
        playerLost = true;
        game.time.events.add(Phaser.Timer.SECOND * 3, showSettings, this)
    }
    
}