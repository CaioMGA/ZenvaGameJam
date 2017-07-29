var aboutState = {
	create: function(){
		linkZenvaCompo = "https://gamedevacademy.org/first-zenva-phaser-hackathon/";
		linkCredits = "https://github.com/CaioMGA/ZenvaGameJam/blob/master/Credits.txt";
		linkItchIo =  "https://caiomga.itch.io/";
		linkBitbucket = "https://bitbucket.org/CaioMGA/";
		linkGithub = "https://github.com/CaioMGA/";
		linkFacebook = "http://fb.com/caiomga/";
		linkEmail = "mailto:caiomga@gmail.com/"

		playerIllustration = game.add.sprite(400, 80, "hero_spritesheet", 14);
		pointerIllustration = game.add.sprite(550, 55, "targetIndicator", 0);
		pointerIllustration.animations.add("active", [2, 3, 4], 8, true);
		pointerIllustration.animations.play("active");
		enemyIllustration1 = game.add.sprite(480, 160, "enemy_idle", 0);
		enemyIllustration1.alpha = 0.9;
		enemyIllustration2 = game.add.sprite(450, 170, "enemy_bullet", 3);
		enemyIllustration2.alpha = 0.9;
		doorIllustration = game.add.sprite(450, 250, "door", 1);


		btnZenvaCompo = game.add.sprite(79, 130, "link_button");
		btnZenvaCompo.scale.setTo(55, 5);
		btnZenvaCompo.inputEnabled = true;
		btnZenvaCompo.events.onInputDown.add(function(){window.open(linkZenvaCompo, "_blank")}, this);
		btnCredits = game.add.sprite(224, 194, "link_button");
		btnCredits.scale.setTo(55, 5);
		btnCredits.inputEnabled = true;
		btnCredits.events.onInputDown.add(function(){window.open(linkCredits, "_blank")}, this);
		btnItchIo = game.add.sprite(0, 259, "link_button");
		btnItchIo.scale.setTo(53, 5);
		btnItchIo.inputEnabled = true;
		btnItchIo.events.onInputDown.add(function(){window.open(linkItchIo, "_blank")}, this);
		btnBitbucket = game.add.sprite(66, 259, "link_button");
		btnBitbucket.scale.setTo(80, 5);
		btnBitbucket.inputEnabled = true;
		btnBitbucket.events.onInputDown.add(function(){window.open(linkBitbucket, "_blank")}, this);
		btnGithub = game.add.sprite(160, 259, "link_button");
		btnGithub.scale.setTo(60, 5);
		btnGithub.inputEnabled = true;
		btnGithub.events.onInputDown.add(function(){window.open(linkGithub, "_blank")}, this);
		btnFacebook = game.add.sprite(0, 322, "link_button");
		btnFacebook.scale.setTo(84, 5);
		btnFacebook.inputEnabled = true;
		btnFacebook.events.onInputDown.add(function(){window.open(linkFacebook, "_blank")}, this);
		btnEmail = game.add.sprite(97, 322, "link_button");
		btnEmail.scale.setTo(60, 5);
		btnEmail.inputEnabled = true;
		btnEmail.events.onInputDown.add(function(){window.open(linkEmail, "_blank")}, this);

		leftTxt = ["==DUNGEON LURER==",
			"A game by Caio Marchi",
			"This game is my entry to Zenva\'s",
			"1st Phaser Gamedev Competition",
			"More info HERE",
			"All assets used in this game are",
			"free to use and are credited HERE",
			"My Games can be found at:",
			"Itch.io","Bitbucket","Github",
			"==CONTACT==",
			"Facebook","E-mail"
			];
		rightTxt = ["==HOW TO PLAY==",
			"1. Touch or click on the screen to move",
			"2. Lure the enemies to hit on each other",
			"3. Walk to the door"
			];

		titleStyle = {
			font: "18px Arial",
			fontWeight:"bold",
			fill:"#ffffff",
			stroke:"#000000",
			strokeThickness: 3
		};
			
		txtStyle = {
			font: "18px Arial",
			fill:"#ffffff",
			stroke:"#000000",
			strokeThickness: 3,
			wrap:true,
			wrapWidth:310
			};

		leftPanel0 = game.add.text(0, 0, leftTxt[0], titleStyle);
		leftPanel1 = game.add.text(0, 32, leftTxt[1], txtStyle);
		leftPanel2 = game.add.text(0, 64, leftTxt[2], txtStyle);
		leftPanel3 = game.add.text(0, 96, leftTxt[3], txtStyle);
		leftPanel4 = game.add.text(0, 128, leftTxt[4], txtStyle);
		leftPanel5 = game.add.text(0, 160, leftTxt[5], txtStyle);
		leftPanel6 = game.add.text(0, 192, leftTxt[6], txtStyle);
		leftPanel7 = game.add.text(0, 224, leftTxt[7], txtStyle);
		leftPanel8 = game.add.text(0, 256, leftTxt[8], txtStyle);
		leftPanel9 = game.add.text(66, 256, leftTxt[9], txtStyle);
		leftPanel10 = game.add.text(161, 256, leftTxt[10], txtStyle);
		leftPanel11 = game.add.text(0, 288, leftTxt[11], titleStyle);
		leftPanel12 = game.add.text(0, 320, leftTxt[12], txtStyle);
		leftPanel13 = game.add.text(100, 320, leftTxt[13], txtStyle);

		rightPanel0 = game.add.text(game.world.width / 2, 0, rightTxt[0], titleStyle);
		rightPanel1 = game.add.text(game.world.width / 2, 32, rightTxt[1], txtStyle);
		rightPanel2 = game.add.text(game.world.width / 2, 122, rightTxt[2], txtStyle);
		rightPanel3 = game.add.text(game.world.width / 2, 212, rightTxt[3], txtStyle);
		

		btnBack = game.add.button((game.world.width / 2) + 150, 315, "menu_button", goBack, this, 1,2,0);
		btnBack.anchor.setTo(0.5, 0.5);
		txtBack = game.add.text((game.world.width / 2) + 150, 315, "Back", {font: "25px Arial",fill:"#080808"});
		txtBack.anchor.setTo(0.5, 0.5);
	}
};
