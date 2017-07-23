var prepareLevelState = {
	preload : function(){
		map = game.add.tilemap("level" + curLevel.toString());

		updatableObjects = [];

		heroGroup = game.add.group();
		map.createFromObjects("Player", "hero", "hero_spritesheet", 0, true, false, heroGroup);
		heroGroup.forEach(function (item) {
			if(hero == null){
				hero = createHero(item.position.x + 16, item.position.y + game.camera.y + 16, 200);
			} else {
				hero.sprite.x = item.position.x + 16;
				hero.sprite.y = item.position.y + game.camera.y + 16;
			}
			
			hero.init(); // some enemies need player info to load, so I init player here and on playState
			updatableObjects.push(hero);
			console.log("Hero created");
			});

		//create door
		door = null;
		doorGroup = game.add.group();
		map.createFromObjects("Player", "door", "door", 0, true, false, doorGroup);
		doorGroup.forEach(function (item) {
			door = createDoor(item.position.x, item.position.y);
		});

		//load enemies and put them inside onScreenEnemies
		enemies = [];

		tmpEnemies = game.add.group();
		map.createFromObjects("Enemies", "fly", "enemy_follow_hero", 0, true, false, tmpEnemies);
		tmpEnemies.forEach(
			function(item){
				enemies.push(createEnemyFollowHero(item.position.x,item.position.y,100));
			});

		tmpEnemies.destroy();
		tmpEnemies = game.add.group();
		map.createFromObjects("Enemies", "idle", "enemy_idle", 0, true, false, tmpEnemies);
		tmpEnemies.forEach(
			function(item){
				enemies.push(createEnemyIdle(item.position.x, item.position.y));
			});

		tmpEnemies.destroy();
		tmpEnemies = game.add.group();
		map.createFromObjects("Enemies", "mirror", "enemy_mirror_walk", 0, true, false, tmpEnemies);
		tmpEnemies.forEach(
			function(item){
				enemies.push(createEnemyMirrorWalker(hero, "both"));
			});

		tmpEnemies.destroy();
		tmpEnemies = game.add.group();
		map.createFromObjects("Enemies", "bullet", "enemy_bullet", 0, true, false, tmpEnemies);
		tmpEnemies.forEach(
			function(item){
				enemies.push(createEnemyBullet(item.position.x, item.position.y, 100))
			});
        enemiesLeft = 0;
		enemies.forEach(
			function(item){
				item.init();
				if(item.sprite.key != "enemy_idle"){
					updatableObjects.push(item);
				}
				if(item.sprite.key == "enemy_mirror_walk"){
					mirrorWalkers.push(item);
				}
				if(item.sprite.key == "enemy_bullet"){
					bullets.push(item);
				}
				enemiesLeft ++;
			});
	},
	create: function(){
		game.state.start("play");
	}
};


