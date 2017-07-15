
function createHero(x, y, _speed){
	return {
		"alive":true,
		"walking" : false,
		"speed":_speed,
		"direction" : {"x":1, "y":0},
		"target":null,
		"sprite" : null,
		"createTarget": function(){
			this.target = createTarget();
		},
		"createAnimations" :function(){
			this.sprite = game.add.sprite(x, y, 'hero_spritesheet', 10);
			this.sprite.anchor.setTo(0.5, 0.5);
			this.sprite.animations.add('walkH', [13, 14 ,15, 14], 8, true);
			this.sprite.animations.add('walkUp', [7, 8, 7, 9], 8, true);
			this.sprite.animations.add('walkDown', [10, 11, 10, 12], 8, true);
			this.sprite.animations.add('idle', [10], 8, false);
			this.sprite.animations.add('idleUp', [7], 8, false);
			this.sprite.animations.add('victory', [10, 16, 10, 16, 10, 16], 5, false);
		    this.sprite.animations.add('death', [0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 6], 8, false);
		    this.sprite.animations.play('idle');
			game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
		    this.sprite.body.collideWorldBounds = true;
		},
		"death" : function(){
			this.sprite.animations.play('death');
		},
		"walk" : function(direction){
			this.sprite.animations.play('walkH');
			this.sprite.scale.x = direction;
		},
		"walkUp" : function(){
			this.sprite.animations.play('walkUp');
		},
		"walkDown" : function(){
			this.sprite.animations.play('walkDown');
		},
		"stop" : function(){
			this.walking = false;
			this.sprite.animations.play('idle');
		},
		"victory" : function(){
			this.sprite.animations.play('victory');
		},
		"update" : function(){
			this.move();
		},
		"move" : function(){
			if(this.walking){
		        game.physics.arcade.moveToXY(this.sprite, this.target.sprite.x, this.target.sprite.y,this.speed);
		        if(Phaser.Math.distance(this.sprite.x, this.sprite.y, this.target.sprite.x, this.target.sprite.y) < 8){
		            this.sprite.x = this.target.sprite.x;
		            this.sprite.y = this.target.sprite.y;
		            this.walking = false;
		            this.sprite.body.velocity.setTo(0, 0);
		            this.stop();
		            this.target.hide();
		        }
	    	}
		},
		"setTarget" : function (x, y){
			//prevents target being created outside the game screen
			
			this.target.set(x, y);
			this.walking = true;
			//

			if(Math.abs(this.sprite.x - this.target.sprite.x) >= Math.abs(this.sprite.y - this.target.sprite.y)){
				if(this.sprite.x > this.target.sprite.x){
					this.walk(-1);
				} else {
					this.walk(1);
				}
			} else {
				if(this.sprite.y > this.target.sprite.y){
					this.walkUp();
				} else {
					this.walkDown();
				}
			}
		},
		"init" : function(){
			this.createAnimations();
			this.createTarget();
			this.target.init();
		}
	};
}
