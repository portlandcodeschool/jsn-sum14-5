// 2) Tic-Tac-Toe

function TicTacToeBoard(cb) {
  var board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ];

  function gameOver(winner) {
    console.log('Game Over. ' + winner.winner + ' wins!');
  }

  //callback
  this.cb = cb || gameOver;

  this.show = function() {
    var str = '';
    for (var i = 0; i < 3; i++)
      str += board[i].join('') + '\n';

    return str;
  };

  this.placeX = function(x, y) {
    if (board[y][x] !== '-')
      return;

    board[y][x] = 'X';

    if (this.winner())
      this.cb(this.winner());

    return true;
  };

  this.placeO = function(x, y) {
    if (board[y][x] !== '-')
      return;

    board[y][x] = 'O';

    if (this.winner())
      this.cb(this.winner());

    return true;
  };

  //reset board
  this.clear = function() {
    var i = 0;
    while (i < 3) {
      board[i] = ['-', '-', '-'];
      i++;
    }
    return true;
  };

  this.winner = function() {
    var winner;
    //loop through each symbol
    for (var i = 0; i < 2; i++) {
      var symbol = (i === 0 ? 'X' : 'O');
      //check rows
      for (var y = 0; y < 3; y++) {
        if (board[y][0] === symbol && board[y][1] === symbol && board[y][2] === symbol) {
          winner = [{x:0,y:y},{x:1,y:y},{x:2,y:y}];
          winner.winner = symbol;
          return winner;
        }
      }
      //check cols
      for (var x = 0; x < 3; x++) {
        if (board[0][x] === symbol && board[1][x] === symbol && board[2][x] === symbol) {
          winner = [{x:x,y:0},{x:x,y:1},{x:x,y:2}];
          winner.winner = symbol;
          return winner;
        }
      }
      //check diags
      if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) {
        winner = [{x:0,y:0},{x:1,y:1},{x:2,y:2}];
        winner.winner = symbol;
        return winner;
      }
      if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) {
        winner = [{x:2,y:0},{x:1,y:1},{x:0,y:2}];
        winner.winner = symbol;
        return winner;
      }
    }
    return false;
  };
}

var assert = require('assert');
var board = new TicTacToeBoard(function() { console.log('Game over.'); });
assert.ok(board.placeX(0,0));
assert.ok(board.placeX(1,0));
assert.ok(board.placeX(2,0));
//make sure the winner is an X
assert(board.winner().winner === 'X');
