function createEnemyMirrorWalker(_hero, _mirrorAxis){
	return {
		"hero":_hero,
		"mirrorAxis" : _mirrorAxis,
		"moving":false,
		"sprite":null,
		"dummy":null,
		"createDummy": function(){
			this.dummy = game.add.sprite(0, 0, "enemy_mirror_walk");
			this.dummy.visible = false;
			this.dummy.anchor.setTo(0.5, 0.5);
			game.physics.enable(this.dummy, Phaser.Physics.ARCADE);
		},
		"createAnimations": function(){
			this.sprite = game.add.sprite(0, 0, "enemy_mirror_walk");
			this.sprite.anchor.setTo(0.5, 0.5);
			this.sprite.animations.add("walkH", [7, 8, 9], 8, true);
			this.sprite.animations.add("walkDown", [1, 2, 3, 2], 8, true);//inverse of hero animation
			this.sprite.animations.add("walkUp", [4, 5, 6, 5], 8, true);//inverse of hero animation
			this.sprite.animations.add("idle", [5], 8, false); //inverse of hero animation
			this.sprite.animations.add("death", [0], 8, false);
			this.sprite.animations.play("moving");
			game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
			this.sprite.body.setSize(20, 20, 6, 6);
			this.sprite.visible = true;
			this.move();
		},
		"move":function(){
			if(this.moving){
				this.dummy.x = this.hero.sprite.x;
				this.dummy.y = this.hero.sprite.y;

				game.physics.arcade.moveToXY(this.dummy, this.hero.target.sprite.x, this.hero.target.sprite.y,this.hero.speed, 0);

				if(this.mirrorAxis == "vertical"){
					this.sprite.body.velocity.x = this.dummy.body.velocity.x;
					this.sprite.body.velocity.y = -this.dummy.body.velocity.y;
				}
				if(this.mirrorAxis == "horizontal"){
					this.sprite.body.velocity.x = -this.dummy.body.velocity.x;
					this.sprite.body.velocity.y = this.dummy.body.velocity.y;
				}
				if(this.mirrorAxis == "both"){
					this.sprite.body.velocity.x = -this.dummy.body.velocity.x;
					this.sprite.body.velocity.y = -this.dummy.body.velocity.y;
				}
			} else {
				this.sprite.body.velocity.setTo(0, 0);
			}
		},
		"update":function(){
			if(this.hero.sprite.animations.currentAnim != this.sprite.animations.currentAnim){
				this.sprite.animations.play(this.hero.sprite.animations.currentAnim.name);
			}
			if(this.hero.moving != this.moving){
				this.moving = this.hero.moving;
				this.move();
			}

			if(this.moving){
				this.move();
			}
		},
		"placeOnScreen": function(){
			if(this.mirrorAxis == "vertical"){
				this.sprite.x = this.hero.sprite.x;
				this.sprite.y = game.world.height - this.hero.sprite.y;
			}
			if(this.mirrorAxis == "horizontal"){
				this.sprite.x = game.world.width - this.hero.sprite.x;
				this.sprite.y = this.hero.sprite.y;
			}
			if(this.mirrorAxis == "both"){
				this.sprite.x = game.world.width - this.hero.sprite.x;
				this.sprite.y = game.world.height - this.hero.sprite.y;
			}
		},
		"init": function(){
			this.createAnimations();
			this.createDummy();
			this.placeOnScreen();
		}
	}
}
