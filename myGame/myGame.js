/*global Phaser*/


var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {}

game_state = function() {};
game_state.prototype = {


    preload: function() {
        game.load.image('sky', 'assets/sky.png');
        game.load.audio('pickup', 'assets/pickup_Coin2.wav');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/New Piskel (2).png', 32, 32);
        game.load.spritesheet('dude', 'assets/Ninja dude.png', 64, 64);
    },


    create: function() {
     var music = new Phaser.Sound(game,'pickup',1,true);
        this.score = 0;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'sky');
        game.add.sprite(game.world.width/2, game.world.height/2, 'ground');
        this.platforms = game.add.group();
        this.platforms.enableBody = true;
        var ground = this.platforms.create(0, game.world.height - 64, 'ground');
        ground.scale.setTo(2, 2);
        ground.body.immovable = true;
        this.player = game.add.sprite(128, game.world.height - 150, 'dude');
        game.physics.arcade.enable(this.player);
        this.player.body.bounce.y = .5;
        this.player.body.gravity.y = 1000;
        this.player.body.collideWorldBounds = true;
        this.player.animations.add('left', [2], 3, true);
        this.player.animations.add('right', [0], 3, true);
        this.cursors = game.input.keyboard.createCursorKeys();
        this.stars = game.add.group();
        this.stars.enableBody = true;
        this.scoreText = game.add.text(16,16, 'Score: ' + this.score,{
            fontSize:'32px',
            fill:'#000'
        });
        for (var i = 0; i < 12; i++) {
            var star = this.stars.create(i * 70, 0, 'star');
            star.body.gravity.y = 300;
            star.body.bounce.y = .5 + Math.random() * 1;
            star.body.bounce.x = -1 + Math.random() + 2;
        }

    },


    update: function() {
        
        
        
        
        game.physics.arcade.collide(this.player, this.platforms);
          game.physics.arcade.collide(this.star, this.platforms);
        this.player.body.velocity.x = 0;
        if (this.cursors.left.isDown) { 
            this.player.body.velocity.x = -150;
            this.player.animations.play('left');
        }
        else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 150;
            this.player.animations.play('right');
        }
        else {
            this.player.animations.play('stop');
            this.player.frame = 4;

        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {

            this.player.body.velocity.y = -500;
        }
        if(this.cursors.down.isDown){
    this.player.body.velocity.y = -100;
}
game.physics.arcade.collide(this.stars, this.platforms);
game.physics.arcade.overlap(this.player, this.stars, this.collectStar,null, this);
    },
collectStar: function(player, star){
this.score += 10;
 this.scoreText.text = 'Score: ' + this.score;

    star.kill();

            var star = this.stars.create( Math.random() * 800, Math.random() * 600, 'star');
            star.body.gravity.y = 300;
            star.body.bounce.y = .5 + Math.random() * .5;
        
}

};
game.state.add('main', game_state.main);
game.state.start('main');
