function TicTacToeBoard(callBack) {
    if(!callBack) callBack = function(msg){console.log(msg)};
    var cells = [];
    var xPos = 0;
    var yPos = 0;
    var gridScore = [0,0,0,0,0,0,0,0];
    var numberOfMoves = 0;

    for (i = 0; i <= 8; i++) {
        cells[i] = {};
        cells[i].xPos = xPos;
        cells[i].yPos = yPos;
        cells[i].contents = ".";
        xPos++;
        if (xPos > 2) {
            yPos++;
            xPos = 0;
        }
    }
    this.show = function () {
        var count = 0;
        var row = "";
        for (i = 0; i < 9; i++) {
            row += (cells[i].contents + " ");
            count++;
            if (count == 3) {
                row += "\n";
                count = 0;
            }
        }
        console.log(row);
    }

    var place = function(x,y,team, score){
        var success = true;
        cells.map(function (item) {
            if ((item.xPos == x) && (item.yPos == y)) {
                if (item.contents != ".") success = undefined;
                else {
                    item.contents = team;
                    gridScore[x] += score;
                    gridScore[3 + y] += score;
                    if (x == y) gridScore[6] += score;
                    if ((2 - x) == y) gridScore[7] += score;
                    winner();
                    numberOfMoves++;
                    if(numberOfMoves == 9) callBack("The game was a draw!");
                }
            }

        })
        return success;
    }
    this.placeX = function (x, y) {
        return place(x,y,"x",1);
    }
    this.placeO = function (x, y) {
        return place(x,y,"o", -1);
    }
    this.clear = function () {
        cells.map(function (item) {
            item.contents = ".";
        })
        gridScore = [0,0,0,0,0,0,0,0];
        numberOfMoves = 0;
    }

    var winner = function () {
        var result = [];
        gridScore.map(function (item, index) {
            if((item == -3) || (item == 3)){
                console.log("We have a winner!");
                for(i = 0; i < 3; i++){
                if(index < 3) result[i] = {x:index,y:i};
                if(index >= 3) result[i] = {x:i, y:(index-2)};
                if(index >= 6) result[i] = {x:i, y:i};
                if(index == 7) result[i] = {x:(i), y:(2-i)}
                }
                (item == 3) ? result.winner = "x" : result.winner = "o";
                callBack("The winner was " + result.winner + "!");
            };

        })

        return result;
    }
    this.winner = winner;
}

