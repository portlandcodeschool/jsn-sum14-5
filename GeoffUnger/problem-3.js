/**
 * Created with PhpStorm.
 * User: geoffreyunger
 * Date: 6/14/14
 * Time: 11:53 PM
 */
var Card = (function () {

    var Card = function (id) {
        if ((id < 0) || (id > 51)) return undefined;
        this.id = id;

        this.fn = function () {
            console.log("fn called");
        }

    }

    Card.cardID = function (rank, suit) {
        var index = 0;
        for (j = 1; j <= 13; j++) {
            for (k = 1; k <= 4; k++) {
                if ((suit == k) && (rank == j)) return index;
                index++;
            }
        }
    }

    Card.cardRank = function(id){
        return Card.prototype.rank.call({id:id});
    }

    Card.cardSuit = function(id){
        return Card.prototype.suit.call({id:id});
    }

    Card.cardName = function(id){
        return Card.prototype.cardName.call({suit:function(){return Card.cardSuit(id)}, rank:function(){return Card.cardRank(id)}})
    }

    Card.prototype.checkInput = function (val, min, max) {
        if ((typeof val) != "number") return NaN;
        if (val < min) return undefined;
        if (val > max) return undefined;
        return true;
    }

    Card.prototype.rank = function () {
        result = Math.ceil(((this.id + 1) / 4));
        return result;
    }

    Card.prototype.suit = function () {

        var suit = 0;
        var cardSuits = [];
        for (i = 0; i <= 51; i++) {
            suit++;
            cardSuits[i] = suit;
            if (suit == 4) suit = 0;
        }

        return cardSuits[this.id];
    }

    Card.prototype.cardID = function (rank, suit) {
        if (rank == undefined || suit == undefined) return this.id;
        var index = 0;
        for (j = 1; j <= 13; j++) {
            for (k = 1; k <= 4; k++) {
                if ((suit == k) && (rank == j)) return index;
                index++;
            }
        }
    }

    Card.prototype.color = function () {

        if ((this.suit() == 1) || (this.suit() == 2)) return "red";
        else return "black";
    }

    Card.prototype.cardName = function () {

        var cardSuit = "";
        var cardRank = "";
        var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        cardSuit = suits[this.suit() - 1];
        cardRank = ranks[this.rank() - 1];
        if (this.rank() == 13) cardRank = "King";

        return(cardRank + " of " + cardSuit);
    }

    Card.prototype.precedes = function (cardObj) {

        if ((cardObj.rank() == 1) && (this.rank() == 13)) return true;
        if (cardObj.rank() == (this.rank() + 1)) return true;
        else return false;
    }

    Card.prototype.sameColor = function (cardObj) {


        if (this.color() == cardObj.color()) return true;
        else return false;
    }

    Card.prototype.nextInSuit = function () {
        var cardASuit = this.suit();
        var cardARank = this.rank();
        var cardBRank;
        if (cardARank == 13) cardBRank = 1;
        else cardBRank = cardARank + 1;
        result = this.cardID(cardBRank, cardASuit);
        return result;
    }

    Card.prototype.prevInSuit = function () {

        var cardASuit = this.suit();
        var cardARank = this.rank();
        var cardBRank;
        if (cardARank == 1) cardBRank = 13;
        else cardBRank = cardARank - 1;
        result = this.cardID(cardBRank, cardASuit);
        return result;
    }
    return Card;

})();
