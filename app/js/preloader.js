Hell.PreloadState = {
  preload: function() {
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('platform', 'img/platform.png');
    this.load.image('goal', 'img/goal.png');
    this.load.image('enemy', 'img/enemy.png');

    this.load.spritesheet('player', 'img/player_spritesheet.png', 100, 150);
  },

  create: function() {
    this.state.start('Game');
  }
}