// x coordinate
// y coordinate
// fill colour
// text colour
// border
// width
// height

const draw = (ctx) => {
    // board
    ctx.fillStyle = "#4d4d4d";
    ctx.fillRect(0, 0, board.width, board.height); 

    // ball
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.arc(95, 50, 20, 0, 2 * Math.PI);
    ctx.fill();

    // net
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([10, 15]);
    ctx.moveTo(board.width/2, 0);
    ctx.lineTo(board.width/2, board.height);

    // paddle 1
    ctx.fillStyle = "#A9F2FC";
    ctx.fillRect(20, 0, board.width/60, board.height/7); ctx.fillStyle = "#3C8696";
    ctx.fillRect(25, 0, board.width/60, board.height/7); 
    // paddle 2 - player
    ctx.fillStyle = "#A9F2FC";
    ctx.fillRect(board.width-20-board.width/60, 0, board.width/60, board.height/7); ctx.fillStyle = "#3C8696";
    ctx.fillRect(board.width-25-board.width/60, 0, board.width/60, board.height/7); 

    //score for player 1 (font size = width /10 ? + remove hard coded score values)
    scoreFontSize = (board.width/10) + "px"
    console.log(scoreFontSize)
    scoreFont = '"courier new"'
    console.log(scoreFont)
    ctx.font = scoreFontSize + scoreFont;
    console.log(ctx.font)

    ctx.fillText("123", board.width/4, board.height/5);
    //score for player 2
    ctx.font = "96px courier new";
    console.log(ctx.font)
    ctx.fillText("456", (board.width/4) + board.width/2.5, board.height/7);
    // ctx.fillText("123", board.width/4, board.height/10);

    ctx.stroke();
}

const resizeCanvas = (ctx) => {
    board.height = window.innerHeight;
    board.width= window.innerWidth;
    draw(ctx)
}

const mycanvas = document.getElementById("board");
if (board.getContext){
    let ctx = mycanvas.getContext("2d");
    console.log(mycanvas)
    console.log(ctx)
    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('orientationchange', resizeCanvas, false);
    resizeCanvas(ctx);   
}