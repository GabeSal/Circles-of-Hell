var Hell = Hell || {};

Hell.BootState = {
  init: function() {
    // loading screen will have white background
    this.game.stage.backgroundColor = '#fff';

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  },

  preload: function() {
    this.load.image('preloadbar', 'img/preloader-bar.png');
  },

  create: function() {
    this.state.start('Preload');
  }
};