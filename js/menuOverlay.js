function createFullScreenButton () {
	fullscreenBtn = game.add.button(608, 340, "button", fullScreenButton, this, 1,2,0);
	fullscreenIcon = game.add.sprite(608, 340, "icons", 1);
	fullscreenIcon.tint = 0x9999ff;
}

function createSettingsButton () {
	settingsBtn = game.add.button(608, 12, "button", settingsButton, this, 1,2,0);
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

function settingsButton(){
	
	
}

function createMenuOverlay(){
	createFullScreenButton();
	createSettingsButton();
}
