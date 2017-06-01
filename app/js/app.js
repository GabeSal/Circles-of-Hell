// Create a phaser game object
var Hell = Hell || {};

Hell.game = new Phaser.Game(720, 720, Phaser.AUTO, 'game-canvas');

Hell.game.state.add('Boot', Hell.BootState);
Hell.game.state.add('Preload', Hell.PreloadState);
Hell.game.state.add('Game', Hell.GameState);

Hell.game.state.start('Boot');