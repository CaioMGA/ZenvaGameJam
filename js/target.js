function createTarget(){
	return {
		"sprite": null,
		"show":function(){
			this.sprite.visible = true;
			this.sprite.animations.play("valid");
		},
		"hide":function(){
			this.sprite.visible = false;
		},
		"set": function(x, y){
			// prevent target draw outside game scene
			if(x > game.world.width - 16){
				x = game.world.width - 16;
			} else if(x < 16){
				x = 16;
			}

			if(y > game.world.height - 16){
				y = game.world.height - 16;
			} else if(y < 16){
				y = 16;
			}

			this.sprite.x = x;
			this.sprite.y = y;

			this.show();
		},

		"init": function(){
			this.sprite = game.add.sprite(0, 0, 'targetIndicator', 0);
			this.sprite.anchor.setTo(0.5, 0.5);
			this.sprite.animations.add('valid', [2, 3, 4], 8, true);
			this.sprite.animations.add('invalid', [0, 1], 8, true);
			this.hide();
		}
	};
}
