function TicTacToeBoard(){
    this.board = [["","",""],["","",""],["","",""]];
    this.placeX = function(x,y){
        this.board[x][y] = "X";
        return this.board;
    };
    this.placeO = function(x,y){
        this.board[x][y] = "O";
        return this.board;
    };
    this.show = function(){
        var currentBoard;
        for (var i; i < this.board.length; i++){
            for (var l in i){
                console.log(l);
            }
            currentBoard += this.board[i];
        }
        return console.log(currentBoard);
    };
    this.clear = function(){
        this.board = [["","",""],["","",""],["","",""]];
    };
}
