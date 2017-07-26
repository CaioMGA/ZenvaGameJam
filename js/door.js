function createDoor(_x, _y){
	return {
		"sprite": null,
		"opened": false,
		"emitter" : null,
		"createAnimations": function(){
			this.sprite = game.add.sprite(_x, _y, 'door', 0);
			this.sprite.animations.add('closed', [0], 8, false);
			this.sprite.animations.add('opened', [1], 8, false);
			this.sprite.animations.play('closed');
			game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
			this.sprite.body.immovable = true;
			this.sprite.body.setSize(50, 50, -10, -10);
		},
		"open" : function(){
			if(!this.opened){
				this.sprite.animations.play("opened");
				this.opened = true;
				this.emitter.start(true, 1000, null, 10);
				fxDoorOpen.play();
			}
		},
		"init" : function(){
			this.createAnimations();
			this.emitter = game.add.emitter(
				this.sprite.x + this.sprite.width / 2,
				this.sprite.y + this.sprite.height / 2,
				10);
			this.emitter.makeParticles("particles");
			this.emitter.minParticleScale = 0.2;
			this.emitter.maxParticleScale = 0.4;
			this.emitter.gravity = 100;
			this.emitter.setAlpha(1, 0, 1000, Phaser.Easing.Linear.None, false);
			this.emitter.autoAlpha = true;
			this.emitter.forEach( function(particle) {
				particle.tint = 0xff2222;
			});
		}
	}
}
