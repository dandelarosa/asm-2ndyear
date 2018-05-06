const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;
const FPS = 30;

var canvas, canvasContext;

var playerX = 0;
var playerY = 0;

window.addEventListener("load", function(event) {
  canvas = document.createElement('canvas');
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  document.body.appendChild(canvas);
  canvasContext = canvas.getContext('2d');

  drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'black');
  drawText("LOADING ASSETS", GAME_WIDTH/2, GAME_HEIGHT/2, 'white', 'center', 'middle');

  loadImages();
});

function imageLoadingDoneSoStartGame() {
  setInterval(eachFrame, 1000/FPS);
  
  loadScene();
}

function loadScene() {
  var objectsToLoad = TileMaps['level1'].layers[1].objects;
  for (var i = 0; i < objectsToLoad.length; i++) {
    var objectToLoad = objectsToLoad[i];
    if (objectToLoad.properties.type === 'player') {
      playerX = objectToLoad.x;
      playerY = objectToLoad.y;
    }
  }
}

function eachFrame() {
  updateGame();
  drawGame();
}

function updateGame() {
}

function drawGame() {
  drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'black');

  var dataToDraw = TileMaps['level1'].layers[0].data;
  var mapColumns = TileMaps['level1'].width;
  var tileWidth = TileMaps['level1'].tilewidth;
  var tileHeight = TileMaps['level1'].tileheight;
  var tileColumns = TileMaps['level1'].tilesets[0].columns;
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
