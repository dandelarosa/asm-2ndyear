function MainScene(tilemap) {
  this.tilemap = tilemap;

  var objectsToLoad = tilemap.layers[1].objects;
  for (var i = 0; i < objectsToLoad.length; i++) {
    var objectToLoad = objectsToLoad[i];
    var objectWidth = objectToLoad.width;
    var objectHeight = objectToLoad.height;
    var objectX = objectToLoad.x;
    // In the Tiled app, the origin for objects is bottom left.
    // See https://github.com/bjorn/tiled/issues/386 for details.
    // We need to change the origin to top left instead.
    var objectY = objectToLoad.y - objectHeight;
    if (objectToLoad.properties.type === 'player') {
      var player = new Player();
      player.x = objectX;
      player.y = objectY;
      this.player = player;
    }

    var grid = new Grid2D(tilemap.layers[0].data, tilemap.width);
    this.gridCollider = new GridCollider(grid);
  }

  this.update = function() {
    if (leftPressed) {
      this.player.dx = -5;
    }
    else if (upPressed) {
      this.player.dy = -5;
    }
    else if (rightPressed) {
      this.player.dx = 5;
    }
    else if (downPressed) {
      this.player.dy = 5;
    }

    this.gridCollider.handleCollisionsWith(this.player);
    this.player.x += this.player.dx;
    this.player.y += this.player.dy;

    this.player.dx = 0;
    this.player.dy = 0;
  }

  this.draw = function() {
    var dataToDraw = this.tilemap.layers[0].data;
    var mapColumns = this.tilemap.width;
    var tileWidth = this.tilemap.tilewidth;
    var tileHeight = this.tilemap.tileheight;
    var tileColumns = this.tilemap.tilesets[0].columns;
    var image = tileImage;
    for (var i = 0; i < dataToDraw.length; i++) {
      var tileValue = dataToDraw[i];
      if (tileValue > 0) {
        var tileIndex = tileValue - 1;
        var sx = tileWidth * (tileIndex % tileColumns);
        var sy = tileHeight * Math.floor(tileIndex / tileColumns);
        var sw = tileWidth;
        var sh = tileHeight;
        var dx = tileWidth * (i % mapColumns);
        var dy = tileHeight * Math.floor(i / mapColumns);
        var dw = tileWidth;
        var dh = tileHeight;
        canvasContext.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
      }
    }

    this.player.draw();
  }
}
