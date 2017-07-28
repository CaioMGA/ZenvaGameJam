function createFullScreenButton () {
	fullscreenBtn = game.add.button(
		game.camera.x + game.camera.width - 32,
		game.camera.y + game.camera.height - 32,
		"button",
		fullScreenButton,
		this,
		1,2,0);
	fullscreenIcon = game.add.sprite(
		game.camera.x + game.camera.width - 32,
		game.camera.y + game.camera.height - 32,
		"icons",
		1);
	fullscreenIcon.tint = 0x9999ff;
}

function createSettingsButton () {
	settingsBtn = game.add.button(608, 12, "button", showSettings, this, 1,2,0);
	settingsIcon = game.add.sprite(608, 12, "icons", 2);
	settingsIcon.tint = 0x9999ff;
}

function createMuteSoundButton () {
	
}

function createMuteMusicButton () {
	
}

function fullScreenButton(){
	if(fullscreenIcon.frame == 1){
		fullscreenIcon.frame = 0;
	} else {
		fullscreenIcon.frame = 1;
	}
	goFull();
}

function createMenuOverlay(){
	createFullScreenButton();
	createSettingsButton();
}

function goBack(){
	game.state.start(breadCrumbs.pop());

}

function showPrepareLevel(){
	breadCrumbs.push(game.state.current);
	game.state.start("prepareLevel");
}

function showPlay(){
	breadCrumbs.push(game.state.current);
	game.state.start("play");
}

function showStageSelect(){
	game.state.start("stageSelect");
	breadCrumbs.push(game.state.current);
}

function showSettings(){
	stopAllSounds();
	game.state.start("settings");
	breadCrumbs.push(game.state.current);
}

function showAbout(){
	stopAllSounds();
	game.state.start("about");
	breadCrumbs.push(game.state.current);
}

function showGameover(){
	stopAllSounds();
	game.state.start("gameover");
}

function showTitleScreen(){
	game.state.start("titleScreen");
	breadCrumbs = [];
}

function resumeGame(){
	game.state.start("play");
}
