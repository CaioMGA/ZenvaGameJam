function createEnemyBullet(_x, _y, _speed){
	return {
		"speed": _speed,
		"direction" : {"x":0, "y":1},
		"moving" : false,
		"sprite":null,
		"createAnimations": function(){
			this.sprite = game.add.sprite(_x, _y, "enemy_bullet");
			this.sprite.anchor.setTo(0.5, 0.5);
			this.sprite.animations.add("moving", [0, 1, 2], 8, true);
			this.sprite.animations.add("death", [3], 8, false);
			this.sprite.animations.play("moving");
			game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
			this.sprite.body.setSize(28, 28, 3, 3);
			this.sprite.visible = false;
		},
		"fire": function(_direction){
			this.direction = _direction;
			this.rotate();
			this.sprite.visible = true;
			this.moving = true;
			this.sprite.body.velocity. x = this.direction.x * this.speed;
			this.sprite.body.velocity. y = this.direction.y * this.speed;

		},
		"rotate": function(){
			if(this.direction.x < 0){ // going left
				this.sprite.rotation = Math.PI;
			} else if(this.direction.x > 0){ // going right
				this.sprite.rotation = 0;
			}  else if(this.direction.y < 0){ // going up
				this.sprite.rotation = - (Math.PI / 2);
			} else if(this.direction.y > 0){ // going down
				this.sprite.rotation = (Math.PI / 2);
			}
		},
		"turn": function(){
			this.direction.x *= -1;
			this.direction.y *= -1;
			this.rotate();
			this.sprite.body.velocity. x = this.direction.x * this.speed;
			this.sprite.body.velocity. y = this.direction.y * this.speed;


		},
		"update":function(){
			if(this.moving){

			}
		}
	}
}
