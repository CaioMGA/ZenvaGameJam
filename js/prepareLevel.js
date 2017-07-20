var prepareLevelState = {
	preload : function(){
		map = game.add.tilemap("level" + curLevel.toString());
		createScenary();
		//load hero from map
		hero = createHero(64, 64, 200);
		hero.init();
		updatableObjects.push(hero);
		//load enemies and put them inside onScreenEnemies

		tmpEnemies = game.add.group();
		map.createFromObjects("Enemies", "fly", "enemy_follow_hero", 0, true, false, tmpEnemies);
		tmpEnemies.forEach(
			function(item){
				enemies.push(createEnemyFollowHero(item.position.x,item.position.y,100))
			});

		tmpEnemies.destroy();
		tmpEnemies = game.add.group();
		map.createFromObjects("Enemies", "idle", "enemy_idle", 0, true, false, tmpEnemies);
		tmpEnemies.forEach(
			function(item){
				enemies.push(createEnemyIdle(item.position.x, item.position.y))
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
				enemies.push(createEnemyBullet(item.position.x, item.position.y, hero.speed))
			});
        

		enemies.forEach(
			function(item){
				item.init();
				if(item.sprite.key != "enemy_idle"){
					updatableObjects.push(item);
				}
				if(item.sprite.key == "enemy_mirror_walk"){
					mirrorWalkers.push(item);
				}
			});
	},
	create: function(){
		game.state.start("play");
	}
};


