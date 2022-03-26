// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;
let ball = document.querySelector(".ball");
ball.style.borderRadius = "50%";

//position and velocity
let ballPositionX = 0;
let ballPositionY = 0;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

let ballVelocityX = 1;
let ballVelocityY = 2;

// Update the pong world
function update() {

    // Update the computer paddle's position

    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    if (computerPaddleYPosition === 0 || computerPaddleYPosition === 400) {
        computerPaddleYVelocity = computerPaddleYVelocity * -1;
    }

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;


    ballPositionY = ballPositionY + ballVelocityY;
    ball.style.top = ballPositionY + "px";

    ballPositionX = ballPositionX + ballVelocityX;
    ball.style.left = ballPositionX + "px";

    ballVelocityY += 0.1;
    ballVelocityX += 0.1;

    if (ballPositionX > 680){
        ballVelocityX = ballVelocityX * -1;
        ballPositionX = 680;
    }
    if (ballPositionX < 0){
        ballVelocityX = ballVelocityX * -1;
        ballPositionX = 0;
    }
    if (ballPositionY > 480){
        ballVelocityY = ballVelocityY * -1;
        ballPositionY = 480;
    }
    if (ballPositionY < 0){
        ballVelocityY = ballVelocityY * -1;
        ballPositionY = 0;
    }
}

// Call the update() function every 35ms
setInterval(update, 35);


//steps:

// Above the update() funciton, create variables to store the ball's x-position, y-position, x-velocity, and y-velocity
// Each time update() is called
// increment the ball's x-position by the x-velocity
// increment the ball's y-position by the y-velocity
// update the ball's style so that its left edge is located at the x-position variable (in pixels)
// update the ball's style so that its top edge is located at the y-position variable (in pixels)
// add a conditional to detect if the ball is touching the left or right edge of the window
// if it is, multiply the ball's x-velocity by -1
// add a conditional to detect if the ball is touching the top or bottom edge of the window
// if it is, multiply the ball's y-velocity by -1