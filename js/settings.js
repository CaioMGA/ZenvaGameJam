var settingsState = {
	create : function(){
		var soundLvl = 1;
		var musicLvl = 1;
		game.stage.backgroundColor = '#440044';
		textStyle = { "font":"30px Arial", "fill":"#080808"};
		labelStyle = { "font":"28px Arial", "fill":"#080808", "stroke":"#ffffff", "strokeThickness":4};

		if(nowPlaying){
			btnPlay = game.add.button((game.world.width / 2), 75, "menu_button", showPrepareLevel, this, 1,2,0);
			btnPlay.anchor.setTo(0.5, 0.5);
			txtPlay = game.add.text((game.world.width / 2), 75, "Restart", textStyle);
			txtPlay.anchor.setTo(0.5, 0.5);
		}
		
		if(!nowPlaying){
			btnResetProgress = game.add.button((game.world.width / 2), 135, "menu_button", resetProgressPrompt, this, 1,2,0);
			btnResetProgress.anchor.setTo(0.5, 0.5);
			txtResetProgress = game.add.text((game.world.width / 2), 135, "Reset Progress", textStyle);
			txtResetProgress.anchor.setTo(0.5, 0.5);
		} else {
			btnStageSelect = game.add.button((game.world.width / 2), 135, "menu_button", showTitleScreen, this, 1,2,0);
			btnStageSelect.anchor.setTo(0.5, 0.5);
			txtStageSelect = game.add.text((game.world.width / 2), 135, "Main Menu", textStyle);
			txtStageSelect.anchor.setTo(0.5, 0.5);
		}
		

		//Sound settings
		btnSoundMinus = game.add.button((game.world.width / 2) - 120, 195, "button", soundMinus, this, 1,2,0);
		btnSoundMinus.anchor.setTo(0.5, 0.5);
		txtSoundMinus = game.add.text((game.world.width / 2) - 120, 195, "-", textStyle);
		txtSoundMinus.anchor.setTo(0.5, 0.5);

		txtSoundLabel = game.add.text((game.world.width / 2), 195, "Sound 100%", labelStyle);
		txtSoundLabel.anchor.setTo(0.5, 0.5);

		btnSoundPlus = game.add.button((game.world.width / 2) + 120, 195, "button", soundPlus, this, 1,2,0);
		btnSoundPlus.anchor.setTo(0.5, 0.5);
		txtSoundPlus = game.add.text((game.world.width / 2) + 120, 195, "+", textStyle);
		txtSoundPlus.anchor.setTo(0.5, 0.5);

		//Music settings
		btnMusMinus = game.add.button((game.world.width / 2) - 120, 255, "button", musMinus, this, 1,2,0);
		btnMusMinus.anchor.setTo(0.5, 0.5);
		txtMusMinus = game.add.text((game.world.width / 2) - 120, 255, "-", textStyle);
		txtMusMinus.anchor.setTo(0.5, 0.5);

		txtMusLabel = game.add.text((game.world.width / 2), 255, "Music 100%", labelStyle);
		txtMusLabel.anchor.setTo(0.5, 0.5);

		btnMusPlus = game.add.button((game.world.width / 2) + 120, 255, "button", musPlus, this, 1,2,0);
		btnMusPlus.anchor.setTo(0.5, 0.5);
		txtMusPlus = game.add.text((game.world.width / 2) + 120, 255, "+", textStyle);
		txtMusPlus.anchor.setTo(0.5, 0.5);

		if(!nowPlaying){
			btnBack = game.add.button((game.world.width / 2), 315, "menu_button", goBack, this, 1,2,0);
			btnBack.anchor.setTo(0.5, 0.5);
			txtBack = game.add.text((game.world.width / 2), 315, "Back", textStyle);
			txtBack.anchor.setTo(0.5, 0.5);
		}
		
		createFullScreenButton();
	}
};

function musMinus(){
	musicLvl -= 0.1;
	txtMusLabel.text = "Music " + (musicLvl * 100).toFixed(0) + "%";

}

function musPlus(){
	musicLvl += 0.1;
	txtMusLabel.text = "Music " + (musicLvl * 100).toFixed(0) + "%";
}

function soundMinus(){
	soundLvl -= 0.1;
	txtSoundLabel.text = "Sound " + (soundLvl * 100).toFixed(0) + "%";

}

function soundPlus(){
	soundLvl += 0.1;
	txtSoundLabel.text = "Sound " + (soundLvl * 100).toFixed(0) + "%";
}


function resetProgressPrompt(){

}

function resetProgress(){
	
}
