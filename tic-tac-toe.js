function ticTacToeChecker(gameboardAs2dArr){
    
    //this function will work if I have understood correctly that empty position means ''
    if(hasPlayerWon(gameboardAs2dArr, 1)){
        return 1;
    }else if(hasPlayerWon(gameboardAs2dArr, 2)){
        return 2;
    }else if(gameHasOpenPositions(gameboardAs2dArr)){
        return -1;
    }
    return 0;
    
    //this check works now
    function gameHasOpenPositions(board){
        return board.some(row=>row.some(el=>el == '')) ? true : false;
    }
    
    function hasPlayerWon(board, symbolRepresentingPlayer){
        let hasPlayerWon = false;
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === symbolRepresentingPlayer && board[i][1] === symbolRepresentingPlayer && board[i][2] === symbolRepresentingPlayer) {
              hasPlayerWon = true;
              break;
            }
            if (board[0][i] === symbolRepresentingPlayer && board[1][i] === symbolRepresentingPlayer && board[2][i] === symbolRepresentingPlayer) {
              hasPlayerWon = true;
              break;
            }
        }
        if (!hasPlayerWon) {
            if ((board[0][0] === symbolRepresentingPlayer && board[1][1] === symbolRepresentingPlayer && board[2][2] === symbolRepresentingPlayer) ||
              (board[2][0] === symbolRepresentingPlayer && board[1][1] === symbolRepresentingPlayer && board[0][2] === symbolRepresentingPlayer)) {
              hasPlayerWon = true;
            }
          }
        return hasPlayerWon;
        
    }

}
console.time('tic-tac');
console.log(ticTacToeChecker([[1,0,1],[1,'',0],[2,1,2]]));
console.timeEnd('tic-tac');