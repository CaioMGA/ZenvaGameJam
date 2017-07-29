var stageSelectState = {
	create: function(){

		game.add.button(16, 16, "medium_button", function() {stageSelected(0)}, this, 1,2,0);
		game.add.button(144, 16, "medium_button", function() {stageSelected(1)}, this, 1,2,0);
		game.add.button(272, 16, "medium_button", function() {stageSelected(2)}, this, 1,2,0);
		game.add.button(400, 16, "medium_button", function() {stageSelected(3)}, this, 1,2,0);
		game.add.button(528, 16, "medium_button", function() {stageSelected(4)}, this, 1,2,0);

		game.add.button(16, 144, "medium_button", function() {stageSelected(5)}, this, 1,2,0);
		game.add.button(144, 144, "medium_button", function() {stageSelected(6)}, this, 1,2,0);
		game.add.button(272, 144, "medium_button", function() {stageSelected(7)}, this, 1,2,0);
		game.add.button(400, 144, "medium_button", function() {stageSelected(8)}, this, 1,2,0);
		game.add.button(528, 144, "medium_button", function() {stageSelected(9)}, this, 1,2,0);

		txtStageSelectStyle = { "font":"50px Arial", "fill":"#080808"};

		tmpX = 16;
		tmpY = 16;
		for(i = 0; i < 10; i++){
			if(i==5){
				tmpX = 16;
				tmpY += 128; 
			}
			if(stageUnlocked[i]){
				t = game.add.text(tmpX + 48, tmpY + 48, i+1, txtStageSelectStyle);
				t.anchor.setTo(0.5, 0.5);
			} else {
				game.add.sprite(tmpX, tmpY, "locked");
			}
			tmpX += 128;
		}

		btnUnlock = game.add.button((game.world.width / 2) - 140, 315, "menu_button", unlockAllStages, this, 1,2,0);
		btnUnlock.anchor.setTo(0.5, 0.5);
		txtUnlock = game.add.text((game.world.width / 2) - 140, 315, "Unlock All Stages", textStyle);
		txtUnlock.anchor.setTo(0.5, 0.5);

		btnBack = game.add.button((game.world.width / 2) + 140, 315, "menu_button", goBack, this, 1,2,0);
		btnBack.anchor.setTo(0.5, 0.5);
		txtBack = game.add.text((game.world.width / 2) + 140, 315, "Back", textStyle);
		txtBack.anchor.setTo(0.5, 0.5);
	}
	
};

function stageSelected(stageNum){
	if(stageUnlocked[stageNum] || stageNum == 0){
		curLevel = stageNum + 1;
		showPrepareLevel();
	} else {
		fxEnemyFollowPlayerStop.play();
	}
}

function unlockAllStages(){
	for(i = 0; i < 10; i++){
		stageUnlocked[i] = true;
	}
	game.state.start("stageSelect");
}