function TicTacToeBoard () {
    var _boardrows = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    this.show = function () {
        var row1 = _boardrows[0].join('|');
        var row2 = _boardrows[1].join('|');
        var row3 = _boardrows[2].join('|');
        console.log(row1);
        console.log(row2);
        console.log(row3);
    };
    this.placex = function (x, y) {
        if (x === 0  && _boardrows[0][y] == " ") {
            _boardrows[0][y] = "X";
            return true;
        } else if (x === 1 && _boardrows[1][y] == " ") {
            _boardrows[1][y] = "X";
            return true;
        } else if (x === 2 && _boardrows[2][y] === " ") {
            _boardrows[2][y] = "X";
            return true;
        } else {
            return undefined;
        }
    }
    this.placeo = function (x, y) {
        if (x === 0  && _boardrows[0][y] == " ") {
            _boardrows[0][y] = "O";
            return true;
        } else if (x === 1 && _boardrows[1][y] == " ") {
            _boardrows[1][y] = "O";
            return true;
        } else if (x === 2 && _boardrows[2][y] === " ") {
            _boardrows[2][y] = "O";
            return true;
        } else {
            return undefined;
        }
    }
    this.clear = function() {
        _boardrows = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    }
}

var test = new TicTacToeBoard();