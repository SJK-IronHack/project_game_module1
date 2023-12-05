class Ball {
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.element = document.getElementById('ball')
        this.board = document.querySelector('.board');
        this.paddle = document.getElementById('paddle')

        this.boardWidth = this.board.getBoundingClientRect().width
        this.boardHeight = this.board.getBoundingClientRect().height

        this.directionY = Math.random() * 2 - 1
        this.directionX = Math.random() * 2 - 1

        this.paddle = document.getElementById('paddle');
        this.left = 8
        this.top = 8
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`

        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
    }
    moveBall() {
        this.top += this.directionY;
        this.left += this.directionX;

        if (this.left > this.boardWidth - 64 ||
            this.left <= 0) {
        this.directionX = -this.directionX
        }
      
        if (this.top >= this.boardHeight - 64 ||
            this.top <= 0) {
        this.directionY = -this.directionY
        }
        console.log(this);
        this.updatePosition()
    }
    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        console.log(this);
    }

    didCollidePaddle(paddle) {
        const ballRect = this.element.getBoundingClientRect()
        const paddleRect = this.paddle.getBoundingClientRect()

        if (
            ballRect.left <= paddleRect.right &&
            ballRect.right >= paddleRect.left &&
            ballRect.top <= paddleRect.bottom &&
            ballRect.bottom >= paddleRect.top
        ) {
            return true
        } else {
            return false
        }
    }

    didCollideWall(board) {

        const ballRect = this.element.getBoundingClientRect()
        const boardRect = this.board.getBoundingClientRect()

    if (
            //checking if outside of the board
         //   ballRect.bottom > boardRect.bottom ||
            ballRect.right >= boardRect.right ||
            ballRect.left <= boardRect.left ||
            ballRect.top <= boardRect.top
        ) {
            return true
        }
        else {
            return false
        }
    }

}
