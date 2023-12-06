class Game {
    constructor() {
        this.gameScreen = document.getElementById('game-container')
        this.endScreen = document.getElementById('game-end')
        this.startScreen = document.getElementById('game-start')
        this.startButton = document.getElementById('start-button')
        this.restartButton = document.getElementById('restart-button')
        this.messageHeadline = document.getElementById('message')
        this.score = 0
        this.lives = 3
        this.level = 1
        this.isGameOver = false
        this.player = null
        this.ball = new Ball(this.gameScreen)
        this.board = document.querySelector('.board');
        this.gameScreen.style.display = 'none'
        //        this.boardHeight = this.board.getBoundingClientRect().height
    }


    start() {
        this.messageHeadline.innerText = "Playing the game now"
        this.startScreen.style.display = 'none'
        this.restartButton.style.display = 'block'
        this.startButton.style.display = 'none'
        this.endScreen.style.display = 'none'
        this.gameScreen.style.display = 'flex'
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
       
        this.ball = new Ball(this.gameScreen)
        this.player = new Player(this.gameScreen)
        this.gameLoop()
    }


    gameLoop() {
        this.player.move()
        this.ball.moveBall()

        if (this.ball.didCollidePaddle(this.player)) {
            this.ball.directionY = -this.ball.directionY
            this.score += 1
            document.getElementById('score').innerText = this.score
        }
        if (this.score === 2) {
            this.score = 0
            this.level += 1
            document.getElementById('level').innerText = this.level
            document.getElementById('score').innerText = this.score

            console.log(this.level);
        }

        if (this.ball.top >= this.ball.boardHeight - 64) {
            this.lives -= 1
            document.getElementById('lives').innerText = this.lives
            this.ball.top = this.ball.top
            this.ball = new Ball(this.gameScreen)
            this.start()
            //
        }
        if (this.lives <= 0) {
            this.isGameOver = true
        }



        if (this.isGameOver) {
            this.messageHeadline.innerText = "Game Over"
            this.gameScreen.style.display = 'none'
            this.endScreen.style.display = 'block'
            this.ball.element.remove()
        }
        else {
            this.animateId = requestAnimationFrame(() => this.gameLoop())
        }
    }
}