function createEnemyIdle(_x, _y){
	return {
		"sprite":null,
		"createAnimations": function(){
			this.sprite = game.add.sprite(_x, _y, "enemy_idle");
			this.sprite.anchor.setTo(0.5, 0.5);
			this.sprite.animations.add("idle", [1], 8, false);
			this.sprite.animations.add("death", [0], 8, false);
			this.sprite.animations.play("idle");
			game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
			this.sprite.body.setSize(20, 20, 6, 6);
			this.sprite.visible = true;
		},
		"death" : function(){
			this.sprite.animations.play("death");
		},
		"init": function(){
			this.createAnimations();
		}
	}
}
