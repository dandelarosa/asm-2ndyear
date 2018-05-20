const GAME_WIDTH = 640;
const GAME_HEIGHT = 480;
const FPS = 30;

var canvas, canvasContext;

var youWin = false;

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
  
  setupInput();

  loadScene();
}

function loadScene() {
  this.currentScene = new MainScene(TileMaps['level1']);
}

function eachFrame() {
  updateGame();
  drawGame();
}

function updateGame() {
  this.currentScene.update();
}

function drawGame() {
  drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'black');
  this.currentScene.draw();
}
