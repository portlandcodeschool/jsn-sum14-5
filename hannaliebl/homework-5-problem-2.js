function TicTacToeBoard (sendMsg) {
    function sendMsg(message) {
        console.log(message);
    }
    var _boardrows = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]];
    this.show = function () {
        var row1 = _boardrows[0].join('|');
        var row2 = _boardrows[1].join('|');
        var row3 = _boardrows[2].join('|');
        console.log(row1);
        console.log(row2);
        console.log(row3);
    };
    this.realshow = function() {
        return _boardrows;
    }
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
    this.winner = function() {
            var testArr = [];
            function tester(value) {
                for (i = 0; i < 3; i++) {
                   testArr.push(value[i]);
                }
            }
            _boardrows.forEach(tester);
            if (((testArr[0] === "O") && (testArr[1] === "O") && (testArr[2] === "O")) || ((testArr[3] === "O") && (testArr[4] === "O") && (testArr[5] === "O")) || ((testArr[6] === "O") && (testArr[7] === "O") && (testArr[8] === "O"))) {
                sendMsg("winner was O on a horizontal");
                return { winner: "O" };
            } else if (((testArr[0] === "X") && (testArr[1] === "X") && (testArr[2] === "X")) || ((testArr[3] === "X") && (testArr[4] === "X") && (testArr[5] === "X")) || ((testArr[6] === "X") && (testArr[7] === "X") && (testArr[8] === "X"))) {
                sendMsg("winner was X on a horizontal");
                return { winner: "X" };
            } else if (((testArr[0] === "O") && (testArr[3] === "O") && (testArr[6] === "O")) || ((testArr[1] === "O") && (testArr[4] === "O") && (testArr[7] === "O")) || ((testArr[2] === "O") && (testArr[5] === "O") && (testArr[8] === "O"))) {
                sendMsg("winner was O on a vertical");
                return { winner: "O" };
            } else if (((testArr[0] === "X") && (testArr[3] === "X") && (testArr[6] === "X")) || ((testArr[1] === "X") && (testArr[4] === "X") && (testArr[7] === "X")) || ((testArr[2] === "X") && (testArr[5] === "X") && (testArr[8] === "X"))) {
                sendMsg("winner was X on a vertical");
                return { winner: "X" };
            } else if (((testArr[0] === "X") && (testArr[4] === "X") && (testArr[8] === "X")) || ((testArr[2] === "X") && (testArr[4] === "X") && (testArr[6] === "X"))) {
                sendMsg("winner was X on a diagonal");
                return { winner: "X" };
            } else if (((testArr[0] === "O") && (testArr[4] === "O") && (testArr[8] === "O")) || ((testArr[2] === "O") && (testArr[4] === "O") && (testArr[6] === "O"))) {
                sendMsg("winner was O on a diagonal");
                return { winner: "O" };
            } else {
               sendMsg("Cat game");
            }
    }
}

var test = new TicTacToeBoard();
test.placeo(0,0);
test.placeo(0,1);
test.placeo(0,2);
// test.placex(0,0);
// test.placex(1,0);
// test.placex(2,0);
test.winner();