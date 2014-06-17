// 2) Tic-Tac-Toe

function TicTacToeBoard(cb) {
  var board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  //callback
  this.cb = cb || console.log('Game over');

  this.show = function() {
    var str = '';
    board.forEach(function(row) {
      function symbol(num) {
        return num === 1 ? 'X' : 'O';
      }
      str += symbol(row[0])+' '+symbol(row[1])+' '+symbol(row[2])+'\n';
    });
    return str;
  };

  this.placeX = function(x, y) {
    if (board[y][x]) return;
    // place X
    board[y][x] = 1;
    if (this.winner()) this.cb();
    return true;
  };

  this.placeO = function(x, y) {
    if (board[y][x]) return;
    // place O
    board[y][x] = 2;
    if (this.winner()) this.cb();
    return true;
  };

  //reset board
  this.clear = function() {
    var i = 0;
    while (i < 3) {
      board[i] = [0, 0, 0];
      i++
    }
    return true;
  };

  this.winner = function() {
    var winner;
    //loop through each symbol (1 = X's, 2 = O's)
    for (var i = 1; i < 3; i++) {
      var symbol = i === 1 ? 'X' : 'O';
      //check rows
      for (var y = 0; y < 3; y++) {
        if (board[y][0] === i && board[y][1] === i && board[y][2] === i) {
          winner = [{x:0,y:y},{x:1,y:y},{x:2,y:y}, symbol];
        }
      }
      //check cols
      for (var x = 0; x < 3; x++) {
        if (board[0][x] === i && board[1][x] === i && board[2][x] === i) {
          winner = [{x:x,y:0},{x:x,y:1},{x:x,y:2}, symbol];
        }
      }
      //check diags
      if (board[0][0] === i && board[1][1] === i && board[2][2] === i) {
        winner = [{x:0,y:0},{x:1,y:1},{x:2,y:2}, symbol];
      }
      if (board[0][2] === i && board[1][1] === i && board[2][0] === i) {
        winner = [{x:2,y:0},{x:1,y:1},{x:0,y:2}, symbol];
      }
    }
    return winner || false;
  }
};

var assert = require('assert');
var board = new TicTacToeBoard(function() { console.log('Game over.'); });
assert.ok(board.placeX(0,0));
assert.ok(board.placeX(1,0));
assert.ok(board.placeX(2,0));
//make sure the winner is an X
assert(board.winner()[3] === 'X');
assert(board.show() === 'X X X\nO O O\nO O O\n');
