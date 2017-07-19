
function createEnemyFollowHero(_x, _y, _speed){
	return {
		"alive":true,
		"moving" : false,
		"speed":_speed,
		"hero":null,
		"sprite" : null,
		"moving" : false,
		"createAnimations" :function(){
			this.sprite = game.add.sprite(_x, _y, 'enemy_follow_hero', 0);
			this.sprite.anchor.setTo(0.5, 0.5);
			this.sprite.animations.add('move', [0, 1 ,2, 1], 8, true);
			this.sprite.animations.add('idle', [3, 4, 5, 4], 14, false);
			this.sprite.animations.add('death', [6], 10, false);
		    this.sprite.animations.play('idle');
			game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

		    this.sprite.body.collideWorldBounds = true;
		    this.sprite.body.setSize(20, 20, 6, 6); //tweak for better movement
		    this.sprite.body.bounce.set(0.05);

		},
		"death" : function(){
			this.sprite.animations.play('death');
		},
		"stop" : function(){
			if(this.moving){
				this.sprite.animations.play('idle');
				this.sprite.body.velocity.setTo(0, 0);
				this.moving = false;
			}
		},
		
		"update" : function(){
			this.move();
		},
		"move" : function(){
			if(this.hero.moving){
				if(!this.moving){
					this.moving = true;
					this.sprite.animations.play('move');
				}
		        game.physics.arcade.moveToXY(this.sprite, this.hero.sprite.x, this.hero.sprite.y,this.speed, 0);
	    	} else {
	    		this.stop();
	    	}
		},
		"init" : function(){
			this.hero = hero;
			this.createAnimations();
		}
	};
}


