function Player() {
  this.draw = function() {
    canvasContext.drawImage(playerImage, this.x, this.y);
  }
}
