function createEnemyIdle(_x, _y){
	return {
		"sprite":null,
		"alive": true,
		"emiter": null,
		"createAnimations": function(){
			this.sprite = game.add.sprite(_x, _y, "enemy_idle");
			this.sprite.x += (this.sprite.width / 2);
			this.sprite.y += (this.sprite.height / 2);
			this.sprite.anchor.setTo(0.5, 0.5);
			this.sprite.animations.add("idle", [1], 8, false);
			this.sprite.animations.add("death", [0], 8, false);
			this.sprite.animations.play("idle");
			game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
			this.sprite.body.setSize(20, 20, 6, 6);
			this.sprite.body.immovable = true;
			this.sprite.visible = true;
		},
		"death" : function(){
			this.alive = false;
			this.sprite.animations.play("death");
			this.sprite.alpha = 0.4;
			this.emitter.x = this.sprite.x;
			this.emitter.y = this.sprite.y;
			this.emitter.start(true, 1000, null, 10);
		},
		"init": function(){
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
	}
}
