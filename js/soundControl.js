function createSounds(){
	//fxVictory = game.add.audio("success");
	fxDoorOpen = game.add.audio("success");
	fxPlayerWalking = game.add.audio("player_walk");
	//fxBulletChangeDirection = null;
	//fxEnemyFollowPlayerChase = null;
	fxEnemyFollowPlayerStop = game.add.audio("enemy_stop");
	fxDeadEnemy = game.add.audio("enemy_death");
	fxDeadPlayer = game.add.audio("you_lose");

	//music = game.add.audio("music_loop");
}

function setSoundLevels(value){
	value = Math.round(value * 10) / 10;
	//fxVictory.volume = value;
	fxDoorOpen.volume = value;
	fxPlayerWalking.volume = value;
	//fxBulletChangeDirection.volume = value;
	//fxEnemyFollowPlayerChase.volume = value;
	fxEnemyFollowPlayerStop.volume = value;
	fxDeadEnemy.volume = value;
	fxDeadPlayer.volume = value;
}

function setMusicLevel(value){
	value = Math.round(value * 10) / 10;
	music.volume = value;
}

function stopAllSounds(){
	//fxVictory.stop();
	fxDoorOpen.stop();
	fxPlayerWalking.stop();
	//fxBulletChangeDirection.stop();
	//fxEnemyFollowPlayerChase.stop();
	fxEnemyFollowPlayerStop.stop();
	fxDeadEnemy.stop();
	fxDeadPlayer.stop();
}
