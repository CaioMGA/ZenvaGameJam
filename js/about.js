var aboutState = {
	create: function(){
		/* 
		 * Dungeon Lurer
		 * A game by Caio Marchi
		 * This game is my entry to Zenva’s 1st Phaser Gamedev Competition
		 * https://gamedevacademy.org/first-zenva-phaser-hackathon/
		 *
		 * All assets used in this game are free to use and are credited in the link below
		 * https://github.com/CaioMGA/ZenvaGameJam/blob/master/Credits.txt
		 *
		 * Check out my games at https://caiomga.itch.io/
		 * Contact me at http://fb.com/caiomga
		 * 
		*/


		btnBack = game.add.button((game.world.width / 2), 315, "menu_button", goBack, this, 1,2,0);
		btnBack.anchor.setTo(0.5, 0.5);
		txtBack = game.add.text((game.world.width / 2), 315, "Back", textStyle);
		txtBack.anchor.setTo(0.5, 0.5);
	}
};
