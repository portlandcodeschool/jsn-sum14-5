function TicTacToeBoard() {

  var rows = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      trialCoords = [];

  this.isValid = function (move) {
    if (!(move == 1 || move == 2 || move == 3)) {
      console.log('Invalid move');
      return false;
    }
    return true;
  };

  this.isAvailable = function (row, column) {
    if (this.isValid(row) && this.isValid(column)) {
      if (rows[row - 1][column - 1] === '-') {
        return true;
      } else {
        console.log('That space is occupied');
        return false;
      }
    } else {
      return false;
    }
  };

  this.cellValue = function(coord) {
    return rows[(coord[1] - 1)][(coord[0] -1) ];
  };

  this.placeX = function (row, column) {
    if (this.isAvailable(row, column)) {
      rows[row - 1][column - 1] = 'X';
    } else {
      return false;
    }
  };

  this.placeO = function (row, column) {
    if (this.isAvailable(row, column)) {
      rows[row - 1][column - 1] = 'O';
    } else {
      return false;
    }
  }

  this.clear = function () {
    for (var i = 0; i <=2; i++) {
      for (var j = 0; j <=2; j++) {
        rows[i][j] = '-';
      }
    }
  }

  checkCoords = function(coords) {
    for (var i = 0; i < coords.length; i++) {
      if ((cellValue(coords[i]) !== 'X') && (cellValue(coords[i]) !== 'O')) {
        return false;
      } else if (cellValue(coords[i]) !== cellValue(coords[0])) {
        return false;
      }
    }
    trialCoords.winner = cellValue(coords[0]);
    return true;
  }

  this.horizontalCheck = function () {
    for (var h = 0; h < rows.length; h++) {
      trialCoords = [];
      for (var i = 0; i < rows.length; i++) {
        trialCoords.push([i, h]);
      }
    }
    return this.checkCoords(trialCoords);
  }

  this.verticalCheck = function () {
    for (var i = 0; i < rows.length; i++) {
      trialCoords = [];
      for (var j = 0; j < rows.length; j++) {
        trialCoords.push([i, j]);
      }
    }
    return this.checkCoords(trialCoords);
  }
// build diagonalCheck
  this.winner = function () {
    if (this.horizontalCheck) { return trialCoords; }
    else if (this.verticalCheck) { return trialCoords; }
    else if (this.diagonalCheck) { return trialCoords;   }
    else { return false; }
  }

  this.show = function () {
    var display = '';
    rows.forEach( function(row) {
      display = '';
      row.forEach( function(cell) {
        display += cell;
      });
      console.log(display); 
    })
  };
}

var test = new TicTacToeBoard;
console.log('/nBefore moves:');
test.show();
console.log('/n' + 'After moves:');
test.placeX(1,1);
test.placeO(2,2);
test.placeX(3,3);
test.placeO(2,3);
test.placeX(2,1);
test.placeO(1,3);
test.show();
//console.log('/n' + 'After "hack":');
//test.rows[1][0] = 'apple';
//test.show();

/*In this problem, you'll be implementing some of the machinery for a game of tic-tac-toe. Tic-tac-toe takes places on a board which, as you'll recall from your childhood days, has three rows and three columns. Players take turns placing X's and O's until the board is full without anyone winning, which is a draw, or until a player gets three in a row of their piece.

a) [easy] Use closures and constructors to implement the 3x3 board as an object. Specifically, write a constructor TicTacToeBoard which can be used to create a board instance, which will have all the methods needed to play a game. Keep the board's internal representation private, but write a method show() which prints the board out as a string with three lines, one per row.

There are several ways to represent a 2D board, but we recommend one of these two:

    Use a simple array and have the logic of your program understand how to translate that to a 2D coordinate system. Hint: that logic is very similar to the logic of converting a single card id to a rank and suit.

    OR, use nested arrays: one array whose elements are other arrays, corresponding to a series of rows each containing a series of cells.

Either way, you'll have to decide how to represent blank spaces, X's, and O's, and update that structure as the game is played.

b) [easy] Implement methods for your board called placeX(x,y) and placeO(x,y) which place, respectively, an X and an O in the spot described by the coordinates (x,y). Coordinate (0,0) is the upper left corner of the board and (2,2) is the lower right corner of the board. They should return true if they successfully place the mark, and undefined if the square wasn't empty.

Implement another method clear() that will reset the board back to being empty.

c) [moderate] Implement a method .winner() that will check the board and, if there is a winner, return the three coordinates of the squares that made up the win as an array of objects of the form {x: ?, y: ?}. If there are multiple winning configurations on the board, just return one of them; it doesn't matter which. Give the returned array one extra property named 'winner' indicating which symbol occupies those winning spaces.

d) [moderately difficult] Add an optional parameter to the TicTacToeBoard constructor providing a callback function which, if available, is called whenever the game ends, either in a win or a draw. You may decide what the callback does in each case, but a message to console.log would be an easy choice.*/
