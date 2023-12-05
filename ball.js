class Ball {
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.element = document.getElementById('ball')
        this.board = document.querySelector('.board');
        this.paddle = document.getElementById('paddle')

        this.boardWidth = board_coord.width;
        this.boardHeight = board_coord.height;

        this.directionY = 1

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
        console.log(this.element)

        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = this.board.getBoundingClientRect()

        if (
            playerRect.left <= obstacleRect.right &&
            playerRect.right >= obstacleRect.left &&
            playerRect.top <= obstacleRect.bottom &&
            playerRect.bottom >= obstacleRect.top
        ) {
            return true
        } else if (
            //checking if outside of the board
            playerRect.left > obstacleRect.right &&
            playerRect.right < obstacleRect.left &&
            playerRect.top > obstacleRect.bottom &&
            playerRect.bottom < obstacleRect.top
        ) {
            return true
        }
        else {
            return false
        }
    }

}
