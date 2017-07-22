function createDoor(_x, _y){
	return {
		"sprite": null,
		"opened": false,
		"createAnimations": function(){
			this.sprite = game.add.sprite(_x, _y, 'door', 0);
			this.sprite.animations.add('closed', [0], 8, false);
			this.sprite.animations.add('opened', [1], 8, false);
			this.sprite.animations.play('closed');
			game.physics.enable(this.sprite, Phaser.Physics.ARCADE);

			this.sprite.body.setSize(40, 45, -5, -5);
		},
		"open" : function(){
			this.sprite.animations.play("opened");
			this.opened = true;
		},
		"init" : function(){
			this.createAnimations();
		}
	}
}
