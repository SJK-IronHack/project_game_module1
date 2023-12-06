
let board = document.querySelector('.board');

let paddle_coord = paddle.getBoundingClientRect();
let board_coord = board.getBoundingClientRect();
this.directionX = Math.random() * 2 +1

// player.js
class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.left = 8
        this.bottom = 8
        this.directionX = 0
        this.width = 170

        this.element = document.getElementById('paddle');
        this.element.style.position = 'absolute'
        this.element.style.left = `${this.left}px`
        this.element.style.width = `${this.width}px`
    }

    // Assume that these variables are defined globally or passed as parameters

    // Function to move the paddle to the left

    move() {
        this.left += this.directionX

        if (this.left <= 8) {
            this.left = 8
        }

        if (this.left >= board_coord.width - this.width - 16) {
            this.left = board_coord.width - this.width - 16
        }
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
    }


}
