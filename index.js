// 20 left limit & 20 right limit
// let speed = 0;

// initalise paddles & ball positions
const initialiseAll = () => {
    //let board = document.getElementById('board')
    console.log(`height & width of the board is: height ${window.innerHeight} , y: ${window.innerWidth}`);

    //initalise paddle positions
    initialHeightPaddle1 = window.innerHeight/2
    paddle1.style.top = initialHeightPaddle1 + 'px'
    paddle1.style.left = 20 + 'px'
    paddle1Position = paddle1.getBoundingClientRect()

    initialHeightPaddle2 = window.innerHeight/2
    paddle2.style.top = initialHeightPaddle2 + 'px'  
    paddle2.style.right = 20 + 'px'      
    paddle2Position = paddle2.getBoundingClientRect()

    //initalise ball  position
    initialHeightball = window.innerHeight -20
    ball.style.top = initialHeightball + 'px'  
    ball.style.left = window.innerWidth/2 + 'px'   
    ballPosition = ball.getBoundingClientRect()

    // set score
    document.getElementById('score1').innerHTML=0
    document.getElementById('score2').innerHTML=0
}

// Locate paddles & balls
const locateGamePieces = () => {
// get position  -  ball  
ball = document.getElementById('ball')
ballPosition = ball.getBoundingClientRect()
ballPositionLeft = ball.style.left
ballPositionTop = ball.style.top
console.log(`Position of the ball is x: ${ballPositionLeft} , y: ${ballPositionTop}`);

// get position  -  paddle 1
paddle1 = document.getElementById('paddle1')
paddle1Position = paddle1.getBoundingClientRect()
paddle1PositionLeft = paddle1.style.left
paddle1PositionTop = paddle1.style.top
console.log(`Position of the paddle1 is x: ${paddle1PositionLeft} , y: ${paddle1PositionTop}`);

// get position  -  paddle 2
paddle2 = document.getElementById('paddle2')
paddle2Position = paddle2.getBoundingClientRect()
paddle2PositionLeft = paddle2.style.left // NOT WORKING!
paddle2PositionTop = paddle2.style.top
console.log(`Position of the paddle2 is x: ${paddle2PositionLeft} , y: ${paddle2PositionTop}`);
}

initialiseAll()
document.getElementById('ball').addEventListener('click',function(e){
        console.log('passed');  
        
        alert('I was clicked');
        console.log(`initial PositionPaddle1 now set to: x: ${paddle1Position.x} , y: ${paddle1Position.y}`); 
     
})



