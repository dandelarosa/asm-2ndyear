function MenuScene() {
  this.currentOption = 0;

  this.update = function() {
    if (enterPressed) {
      if (this.currentOption == 0) {
        restartGame();
      }
    }
    if (upPressed) {
      this.currentOption--;
      if (this.currentOption < 0) {
        this.currentOption = 2;
      }
    }
    if (downPressed) {
      this.currentOption++;
      if (this.currentOption > 2) {
        this.currentOption = 0;
      }
    }
  }

  this.draw = function() {
    drawRect(0, 0, GAME_WIDTH, GAME_HEIGHT, 'white');
    canvasContext.drawImage(titleBgImage, 0, 0);

    canvasContext.font = '48px Times';
    drawText('David\'s World 2', GAME_WIDTH/2, 180, 'black', 'center', 'middle');
    canvasContext.font = '36px Times';
    drawText('Prototype', GAME_WIDTH/2, 230, 'black', 'center', 'middle');

    canvasContext.font = '30px Times';

    drawText('Start Game', GAME_WIDTH/2, 300, this.currentOption == 0 ? 'yellow' : 'black', 'center', 'middle');
    drawText('Instructions', GAME_WIDTH/2, 340, this.currentOption == 1 ? 'yellow' : 'black', 'center', 'middle');
    drawText('Credits', GAME_WIDTH/2, 380, this.currentOption == 2 ? 'yellow' : 'black', 'center', 'middle');
  }
}
