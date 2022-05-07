let interval = null;
let ballHit = false;
let ballBounce = false;

let scorePlayer = 0;
let scoreComputer = 0;

let speed = 1 / 10

let boardTop = 0;
let boardBottom = window.innerHeight;
let boardLeft = 40;
let boardRight = window.innerWidth - 40;

const initialBallPositionLeft = window.innerWidth / 2;
const initialBallPositionTop = window.innerHeight - 20;
let ballPositionLeft = initialBallPositionLeft;
let ballPositionTop = initialBallPositionTop;
let dx = 1;
let dy = 1;

const Paddle1PositionLeft = 20;
let Paddle1PositionTop = window.innerHeight / 2 - 40;

const Paddle2PositionLeft = window.innerWidth - 20 - 20;
let initialPaddle2PositionTop = window.innerHeight / 2 - 40;
let Paddle2PositionTop = initialPaddle2PositionTop;

//  initalise paddles & ball positions

const initialiseAll = () => {
  //  paddle 
  paddle1.style.left = Paddle1PositionLeft + "px";
  paddle1.style.top = Paddle1PositionTop + "px";

  Paddle2PositionTop = initialPaddle2PositionTop;
  paddle2.style.left = Paddle2PositionLeft + "px";
  paddle2.style.top = initialPaddle2PositionTop + "px";

  //   ball
  ball.style.top = initialBallPositionTop + "px";
  ball.style.left = initialBallPositionLeft + "px";
  ballPositionLeft = initialBallPositionLeft;
  ballPositionTop = initialBallPositionTop;
  dx = 1;
  dy = 1;
};

//  Set the ball in motion
const bouncingBall = () => {
  //  If the player paddle hits the ball, score points
  if (
    ballPositionLeft + 20 === Paddle2PositionLeft &&
    ballPositionTop >= Paddle2PositionTop &&
    ballPositionTop <= Paddle2PositionTop + 80
  ) {
      
      // ball = "hit" or  ball = "bounce"   
    if (!ballHit) {
        ballHit = true
        ballBounce = false
    } else {
      ballBounce = true;
      ballHit = false
    }

      // score 
    if (ballHit === true && ballBounce === false) {
        scorePlayer += 1;
    }

    document.getElementById("score2").innerHTML = scorePlayer;
  }
  //  Get the computer paddle to hit the ball and score points
  if (
    ballPositionLeft === Paddle1PositionLeft+20
    ) {
    paddle1.style.top = ballPositionTop + "px";

    // ball = "hit" or  ball = "bounce"   
    if (!ballHit) {
      ballHit = true
      ballBounce = false
  } else {
    ballBounce = true;
    ballHit = false
  }
    // score 
  if (ballHit === true && ballBounce === false) {
    scoreComputer += 1;
  }
    document.getElementById("score1").innerHTML = scoreComputer;
  }
  if (ballPositionLeft < boardLeft || ballPositionLeft > boardRight - 20) {
    dx = -dx;
  }
  if (ballPositionTop < boardTop || ballPositionTop > boardBottom - 20) {
    dy = -dy;
  }
  ballPositionLeft -= dx;
  ballPositionTop += dy;
  ball.style.left = ballPositionLeft + "px";
  ball.style.top = ballPositionTop + "px";
};

// ------------------ START ------------------------------------------------------------------
initialiseAll();
// ------------------ PLAY GAME using keys-----------------------------------------------------
document.addEventListener("keydown", (event) => {
  // Play
  if (!interval && (event.key === "P" || event.key === "p")) {
    interval = setInterval(bouncingBall, speed);
  }
  // Stop / pause
  if (event.key === "S" || event.key === "s") {
    clearInterval(interval);
    interval = null;
  }
  // Restart
  if (!interval && (event.key === "R" || event.key === "r")) {
    clearInterval(interval);
    interval = null;
    initialiseAll();
    interval = setInterval(bouncingBall, speed);
  }
  //  Move (right/ player) paddle down
  if (interval && event.key === "ArrowUp") {
    if (Paddle2PositionTop >= boardTop) {
      Paddle2PositionTop -= 15;
      paddle2.style.top = Paddle2PositionTop + "px";
    } else {
      paddle2.style.top = 0 + "px";
    }
  }
  //  Move (right/ player) paddle
  if (interval && event.key === "ArrowDown") {
    if (Paddle2PositionTop + 80 < boardBottom) {
      Paddle2PositionTop += 15;
      paddle2.style.top = Paddle2PositionTop + "px";
    } else {
      paddle2.style.bottom = boardBottom + "px";
    }
  }
});
