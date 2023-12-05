class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-container')
        this.endScreen = document.getElementById('game-end')
        this.score = 0
        this.lives = 3
        this.isGameOver = false
        this.player = null
        this.ball = new Ball(this.gameScreen)
        this.board = document.querySelector('.board');
        this.gameScreen.style.display = 'none'



    }

    start() {
        this.startScreen.style.display = 'none'
        this.endScreen.style.display = 'none'
        this.gameScreen.style.display = 'flex'
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        this.player = new Player(this.gameScreen)
        this.gameLoop()
    }


    gameLoop() {
        this.player.move()
        this.ball.moveBall()

        if (this.ball.didCollidePaddle(this.player)) {
            this.ball.directionY = -this.ball.directionY
        }


        if (this.isGameOver) {
            this.gameScreen.style.display = 'none'
            this.endScreen.style.display = 'block'
            this.player.element.remove()
        }
        else {
            this.animateId = requestAnimationFrame(() => this.gameLoop())
        }
    }
}