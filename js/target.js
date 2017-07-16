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
			tmpX = x % 32;
			tmpY = y % 32;
			newX = 0;
			newY = 0;
			if(tmpX > 16){
				newX = (parseInt(x / 32) * 32 ) + 32;
			} else {
				newX = (parseInt(x / 32) * 32 );
			}

			if(tmpY > 16){
				newY = (parseInt(y / 32) * 32 )+ 32;
			} else {
				newY = (parseInt(y / 32) * 32 );
			}
			newX += 16;
			newY += 16;

			/*
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
			*/

			this.sprite.x = newX;
			this.sprite.y = newY;

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
