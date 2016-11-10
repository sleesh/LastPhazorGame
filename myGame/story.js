/*global game phaser game_state*/
game_state.story = function() {};

game_state.story.prototype = {

    preload: function() {
        game.load.spritesheet('olddude', 'assets/Olddude.png', 64, 64);
        game.load.image('platform', 'assets/platform.png');
        game.load.image('sky', 'assets/sky.png');
        game.load.image('space', 'assets/Space.png', 128, 32);
    },
    create: function() {
 this.storyText = game.add.text(200, game.world.height / 2, 'Welcome to the ninja game!\nPress down to begin!',{
            fill: '#ffffff'
        });

        this.cursors = game.input.keyboard.createCursorKeys();
        this.space.inputEnabled = true;
        var gameNum = 1;
    },
    update: function() {
        if (this.cursors.down.isDown) {
alert("Ninja Mcninja is part of the odd accessories sneaky clan.");
alert("Because of his bright pink sneakers, he got his entire clan captured.");
alert("He must now go rescue them from the top hat clan.");
alert("In order to rescue them, he must collect the sacred magic scrolls that will help him.");
alert("Luckily, his pink sneakers allow him to hover somehow(up to hover).");
alert("Be sure to avoid enemies!");
game.state.start('main');
        }
    }

};
game.state.add('story', game_state.story);
game.state.start('story');
