let startButton = document.getElementById('start-button')
let restartButton = document.getElementById('restart-button')

function startGame() {
  console.log('start game')
  game = new Game()
  game.start()
}

startButton.addEventListener('click', function () {
  startGame()
})

restartButton.addEventListener('click', function () {
  // startGame()
  location.reload()
})

document.addEventListener('keydown', event => {

  if (event.code === 'ArrowLeft') {
    game.player.directionX = (Math.random() * 10 + 1)
    console.log('moving right')

  }
  if (event.code === 'ArrowRight') {
    game.player.directionX = -(Math.random() * 10 + 1)
    console.log('moving lrft')

  }
})

document.addEventListener('keyup', event => {
  if (
    event.code === 'ArrowLeft' ||
    event.code === 'ArrowRight'
  ) {
    console.log('Stop moving on X')
    game.player.directionX = 0
  }
})