var aboutState = {
	create: function(){
		linkZenvaCompo = "https://gamedevacademy.org/first-zenva-phaser-hackathon/";
		linkCredits = "https://github.com/CaioMGA/ZenvaGameJam/blob/master/Credits.txt";
		linkItchIo =  "https://caiomga.itch.io/";
		linkBitbucket = "https://bitbucket.org/CaioMGA/";
		linkGithub = "https://github.com/CaioMGA/ZenvaGameJam";
		linkFacebook = "http://fb.com/caiomga/";
		linkEmail = "mailto:caiomga@gmail.com/"

		playerIllustration = game.add.sprite(400, 80, "hero_spritesheet", 14);
		pointerIllustration = game.add.sprite(550, 50, "targetIndicator", 0);
		pointerIllustration.animations.add("active", [2, 3, 4], 8, true);
		pointerIllustration.animations.play("active");
		enemyIllustration1 = game.add.sprite(480, 160, "enemy_idle", 0);
		enemyIllustration1.alpha = 0.9;
		enemyIllustration2 = game.add.sprite(450, 170, "enemy_bullet", 3);
		enemyIllustration2.alpha = 0.9;
		doorIllustration = game.add.sprite(450, 250, "door", 1);


		btnZenvaCompo = game.add.sprite(79, 123, "link_button");
		btnZenvaCompo.scale.setTo(55, 5);
		btnZenvaCompo.inputEnabled = true;
		btnZenvaCompo.events.onInputDown.add(function(){window.open(linkZenvaCompo, "_blank")}, this);
		btnCredits = game.add.sprite(188, 183, "link_button");
		btnCredits.scale.setTo(55, 5);
		btnCredits.inputEnabled = true;
		btnCredits.events.onInputDown.add(function(){window.open(linkCredits, "_blank")}, this);
		btnItchIo = game.add.sprite(0, 273, "link_button");
		btnItchIo.scale.setTo(53, 5);
		btnItchIo.inputEnabled = true;
		btnItchIo.events.onInputDown.add(function(){window.open(linkItchIo, "_blank")}, this);
		btnBitbucket = game.add.sprite(66, 273, "link_button");
		btnBitbucket.scale.setTo(80, 5);
		btnBitbucket.inputEnabled = true;
		btnBitbucket.events.onInputDown.add(function(){window.open(linkBitbucket, "_blank")}, this);
		btnGithub = game.add.sprite(160, 273, "link_button");
		btnGithub.scale.setTo(60, 5);
		btnGithub.inputEnabled = true;
		btnGithub.events.onInputDown.add(function(){window.open(linkGithub, "_blank")}, this);
		btnFacebook = game.add.sprite(0, 332, "link_button");
		btnFacebook.scale.setTo(84, 5);
		btnFacebook.inputEnabled = true;
		btnFacebook.events.onInputDown.add(function(){window.open(linkFacebook, "_blank")}, this);
		btnEmail = game.add.sprite(97, 332, "link_button");
		btnEmail.scale.setTo(60, 5);
		btnEmail.inputEnabled = true;
		btnEmail.events.onInputDown.add(function(){window.open(linkEmail, "_blank")}, this);

		txtCredits = "==Dungeon Lurer==\nA game by Caio Marchi\nThis game is my entry to Zenva\'s 1st Phaser Gamedev Competition\nMore info HERE\nAll assets used in this game are free to use and are credited HERE\nMy Games and projects can be found at:\nItch.io    Bitbucket    Github\n==Contact==\nFacebook    E-mail";
		txtHowToPlay = "==HOW TO PLAY==\n1. Touch or click on the screen to move\n\n2. Lure the enemies to hit on each other\n\n3. Walk to the door";

		txtStyle = {
			font: "18px Arial",
			fill:"#ffffff",
			stroke:"#000000",
			strokeThickness: 3,
			wordWrap:true,
			wordWrapWidth:300,align:"left",
			boundsAlignH:"left",
			boundsAlignV:"top"};
		leftPanel = game.add.text(0, 0, txtCredits, txtStyle);
		leftPanel.setTextBounds(0, 0, 320, 320);

		rightPanel = game.add.text(0, 0, txtHowToPlay, txtStyle);
		rightPanel.setTextBounds(320, 0, 320, 320);
		

		btnBack = game.add.button((game.world.width / 2) + 150, 315, "menu_button", goBack, this, 1,2,0);
		btnBack.anchor.setTo(0.5, 0.5);
		txtBack = game.add.text((game.world.width / 2) + 150, 315, "Back", textStyle);
		txtBack.anchor.setTo(0.5, 0.5);
	}
};
