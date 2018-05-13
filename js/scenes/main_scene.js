var playerX = 0;
var playerY = 0;

function MainScene(tilemap) {
  this.tilemap = tilemap;

  var objectsToLoad = tilemap.layers[1].objects;
  for (var i = 0; i < objectsToLoad.length; i++) {
    var objectToLoad = objectsToLoad[i];
    if (objectToLoad.properties.type === 'player') {
      playerX = objectToLoad.x;
      // In the Tiled app, the origin for objects is bottom left.
      // See https://github.com/bjorn/tiled/issues/386 for details.
      // We need to change the origin to top left instead.
      playerY = objectToLoad.y - 32;
    }
  }

  this.update = function() {
    if (leftPressed) {
      playerX -= 5;
    }
    else if (upPressed) {
      playerY -= 5;
    }
    else if (rightPressed) {
      playerX += 5;
    }
    else if (downPressed) {
      playerY += 5;
    }
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

    canvasContext.drawImage(playerImage, playerX, playerY);
  }
}
