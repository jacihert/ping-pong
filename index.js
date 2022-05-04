let interval = null;
let boardTop = 0;
let boardBottom = window.innerHeight;
let boardLeft = 20;
let boardRight = window.innerWidth-20;
let ballPositionLeft = window.innerWidth / 2;
let ballPositionTop = window.innerHeight - 20;
const initialBallPositionLeft = window.innerWidth / 2;
const initialBballPositionTop = window.innerHeight - 20;
let Paddle1PositionLeft = 20;
let Paddle1PositionTop = window.innerHeight / 2 - 20;
let Paddle2PositionLeft = window.innerWidth-20-20;
let Paddle2PositionTop = window.innerHeight / 2;
let dx = 1;
let dy = 1;

//  initalise paddles & ball positions
const initialiseAll = () => {
        //  initalise paddle positions
    paddle1.style.top = Paddle1PositionTop + "px";
    paddle1.style.left = Paddle1PositionLeft + "px";

    paddle2.style.top = Paddle2PositionTop + "px";
    paddle2.style.left = Paddle2PositionLeft + "px";

        //   initalise ball  position
    ball.style.top = initialBballPositionTop + "px";
    ball.style.left = initialBallPositionLeft + "px";
    dx = 1;
    dy = 1;
    ballPositionLeft = initialBallPositionLeft 
    ballPositionTop = initialBballPositionTop

        //  set score
    document.getElementById("score1").innerHTML = 0;
    document.getElementById("score2").innerHTML = 0;
};

//  Set the ball in motion
const bouncingBall = () => {
  if (ballPositionLeft < boardLeft || ballPositionLeft > boardRight-20) {
    dx = -dx;
  }
  if (ballPositionTop < boardTop || ballPositionTop > boardBottom-20) {
    dy = -dy;
  }
  ballPositionLeft -= dx;
  ballPositionTop += dy;
  ball.style.left = ballPositionLeft + "px";
  ball.style.top = ballPositionTop + "px";
};

initialiseAll();
document.addEventListener("keydown", (event) => {
    console.log(event.key);
    // Play
    if (!interval && (event.key === "P" || event.key === "p")) {
    interval = setInterval(bouncingBall, 1/10);
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
    interval = setInterval(bouncingBall, 1/10);
    }
                // if(event.key==="ArrowLeft"){   //move paddle up
// if(event.key==="ArrowUp"){
//     //interval = setInterval(moveLeft, 1);
// }
                // if(event.key==="ArrowRight") {     //move paddle down
// if(event.key==="ArrowDown"){
//     //interval = setInterval(moveRight, 1);
// }
});

//----------------------------------------------------------------------------------------------
// move the ball from top left to bottom right and so on 

// when ball touches paddle then to move back. else to stop  and score to be calculated 

//player 1 paddle to move automatically to the point where the ball will go to  X(0) position
// based on the players arrow keys mmove paddle 2 to move back n forth
//----------------------------------------------------------------------------------------------