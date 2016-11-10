/*global game phaser game_state*/
game_state.end = function() {};

game_state.end.prototype = {

    preload: function() {

    },
    create: function() {
this.cursors = game.input.keyboard.createCursorKeys();
 this.storyText = game.add.text(200, game.world.height / 2, 'Play again?(press down)',{
            fill: '#ffffff'
            
        });
        alert('Congrats! You\'re a hero!')
        alert('Turns out the scrolls were actually legal notices...')
        alert('And you sued the top hat clan for not giving equal chance.')
        alert('They wouldn\'t have seen you if you hadn\'t been wearing bright pink shoes..')
        alert('So in the end you won and sued for $6,000,000.')
        alert('Still counts though, so congrats!')
    },
    update: function() {
 if (this.cursors.down.isDown) {
     game.state.start('main');
 }


        }
    }

game.state.add('end', game_state.end);

