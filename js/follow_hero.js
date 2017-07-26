
function createEnemyFollowHero(_x, _y, _speed){
	return {
		"alive":true,
		"emitter" : null, 
		"moving" : false,
		"speed":_speed,
		"hero":null,
		"sprite" : null,
		"moving" : false,
		"createAnimations" :function(){
			this.sprite = game.add.sprite(_x, _y, 'enemy_follow_hero', 0);
			this.sprite.x += (this.sprite.width / 2);
			this.sprite.y += (this.sprite.height / 2);
			this.sprite.anchor.setTo(0.5, 0.5);
			this.sprite.animations.add('move', [0, 1 ,2, 1], 8, true);
			this.sprite.animations.add('idle', [3, 4, 5, 4], 14, false);
			this.sprite.animations.add('death', [6], 10, false);
		    this.sprite.animations.play('idle');
			game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

		    this.sprite.body.collideWorldBounds = true;
		    this.sprite.body.setSize(24, 24, 20, 20);
		    this.sprite.body.bounce.set(0.05);

		},
		"death" : function(){
			this.sprite.animations.play('death');
			this.sprite.alpha = 0.4;
			this.emitter.x = this.sprite.x;
			this.emitter.y = this.sprite.y;
			this.emitter.start(true, 1000, null, 10);
			fxDeadEnemy.play();
			this.sprite.body.velocity.setTo(0, 0);
		},
		"stop" : function(){
			if(this.moving){
				this.sprite.animations.play('idle');
				this.sprite.body.velocity.setTo(0, 0);
				this.moving = false;
				fxEnemyFollowPlayerStop.play();
				this.sprite.body.setSize(24, 24, 20, 20);
			}
		},
		
		"update" : function(){
			this.move();
		},
		"move" : function(){
			if(this.hero.moving){
				if(!this.moving){
					this.sprite.body.setSize(24, 24, 20, 10);
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
			this.emitter = game.add.emitter(this.sprite.x, this.sprite.y, 5);
			this.emitter.makeParticles("smoke", [0, 1, 2]);
			this.emitter.minParticleScale = 0.5;
			this.emitter.maxParticleScale = 1;
			this.emitter.minParticleSpeed.setTo(-10, -10);
			this.emitter.maxParticleSpeed.setTo(10, 10);
			this.emitter.gravity = 0;
			this.emitter.setAlpha(1, 0, 1000, Phaser.Easing.Linear.None, false);
			this.emitter.autoAlpha = true;
		}
	};
}


