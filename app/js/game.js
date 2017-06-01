var Hell = Hell || {};

Hell.GameState = {

  init: function() {

    // constants
    this.RUNNING_SPEED = 300;
    this.JUMPING_SPEED = 675;

    // gravity
    this.game.physics.arcade.gravity.y = 1000;

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.upBtn = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.leftBtn = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.rightBtn = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.downBtn = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
  },

  create: function() {
    this.loadLevel();
  },

  update: function() {
    this.game.physics.arcade.collide(this.player, this.platform);

    this.player.body.velocity.x = 0;

    if(this.cursors.left.isDown || this.leftBtn.isDown) {
      this.player.body.velocity.x = -this.RUNNING_SPEED;
      this.player.scale.setTo(-1, 1);
      this.player.play('walking');
    }
    else if(this.cursors.right.isDown || this.rightBtn.isDown) {
      this.player.body.velocity.x = this.RUNNING_SPEED;
      this.player.scale.setTo(1, 1);
      this.player.play('walking');
    }
    else {
      this.player.animations.stop();
      this.player.frame = 0;
    }

    if ((this.cursors.up.isDown || this.upBtn.isDown) && (this.player.body.blocked.down || this.player.body.touching.down)) {
      this.player.body.velocity.y = -this.JUMPING_SPEED;
    }
  },

  loadLevel: function() {
    this.player = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 200, 'player', 0);
    this.player.anchor.setTo(0.5);
    this.player.animations.add('walking', [0, 1, 2, 1,], 20, true);
    this.game.physics.arcade.enable(this.player);
    this.player.customParams = {};
    this.player.body.collideWorldBounds = true;

    this.platform = this.add.sprite(50, 600, 'platform');
    this.game.physics.arcade.enable(this.platform);
    this.platform.body.allowGravity = false;
    this.platform.body.immovable = true;

    this.game.camera.follow(this.player);
  }
};