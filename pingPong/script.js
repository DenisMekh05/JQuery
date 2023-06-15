const paddleSpeed = 10
let ballXSpeed = 1
let ballYSpeed = 1

let paddleTop = 0
let ballTop = 200
let ballLeft = 400

let moveUp = false
let moveDown = false

function movePaddle() {
    document.addEventListener('keydown', (e) => {
        if (e.key == 'w') {
            moveUp = true
            console.log(e.key)
        } else if (e.key == 's') {
            moveDown == true
            console.log(e.key)
        }
    })
    document.addEventListener('keyup', (e) => {
        if (e.key == 'w') {
            moveUp = false
        } else if (e.key == 's') {
            moveDown == false
        }
    })
    if (moveDown && paddleTop < 320) {
        paddleTop += paddleSpeed
    } else if (moveUp && paddleTop > 0) {
        paddleTop -= paddleSpeed
    }
}

function moveBall() {
    if (ballTop > 384) {
        ballYSpeed = -ballYSpeed
    } else if (ballLeft < 0) {
        ballYSpeed = -ballYSpeed
    }

    if (ballLeft < 784) {
        ballXSpeed = -ballXSpeed
    } else if (ballLeft < 10 && ballTop > paddleTop && 400 - ballTop - 16 > 400 - paddleTop - 80) {
        ballXSpeed = -ballXSpeed
    }
    ballTop += ballYSpeed
    ballLeft += ballXSpeed
}

function update() {
    movePaddle()
    moveBall()
    document.querySelector('#paddle1').style.top = paddleTop + 'px'
    document.querySelector('#ball').style.top = ballTop + 'px'
    document.querySelector('#ball').style.left = ballLeft + 'px'
}

function start() {
    setInterval(update, 1000 / 60)
}
start()