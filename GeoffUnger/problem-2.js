/**
 * Created with PhpStorm.
 * User: geoffreyunger
 * Date: 6/14/14
 * Time: 4:07 PM
 */

function TicTacToeBoard() {
    var cells = [];
    var xPos = 0;
    var yPos = 0;
    var gridScore = [0,0,0,0,0,0,0,0];
    for (i = 0; i <= 8; i++) {
        cells[i] = {};
        cells[i].xPos = xPos;
        cells[i].yPos = yPos;
        cells[i].contents = "e";
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
    this.placeX = function (x, y) {
        var success = true;
        cells.map(function (item) {

            if ((item.xPos == x) && (item.yPos == y)) {
                if (item.contents != "e") success = undefined;
                else {
                    item.contents = "x";
                    gridScore[x] += 1;
                    gridScore[3 + y] += 1;
                    if (x == y) gridScore[6] += 1;
                    if ((2 - x) == y) gridScore[7] += 1;
                }
            }

        })
        return success;
    }
    this.placeO = function (x, y) {
        cells.map(function (item) {
            if ((item.xPos == x) && (item.yPos == y)) {
                if (item.contents != "e") return undefined;
                item.contents = "o";
                gridScore[x] -= 1;
                gridScore[3 + y] -= 1;
                if (x == y) gridScore[6] -= 1;
                if ((2 - x) == y) gridScore[7] -= 1;

            }

        })
        return true;
    }
    this.clear = function () {
        cells.map(function (item) {
            item.contents = "e";
        })
        gridScore = [0,0,0,0,0,0,0,0];
    }
    this.winner = function () {
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
                (item == 3) ? result[3] = "x" : result[3] = "o";
            };

        })
        return result;
    }

}

