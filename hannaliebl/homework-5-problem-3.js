var makeCard = (function () {
    function Card (id) {
        this.id = id;
        this.isvalid = Card.isvalid;
        this.rank = Card.rank;
        this.suit = Card.suit;
    }
    Card.isvalid = function(num, low, high) {
        if ((typeof num) != "number")
            return NaN;
        if (!Number.isInteger(num))
            return NaN;
        if (num < low || num > high)
            return NaN;
        return true;
    }
    Card.rank = function () {
        return this.isvalid(this.id, 0, 51) && Math.floor(this.id / 4) + 1;
    }
    Card.suit = function () {
       return this.isvalid(this.id, 0, 51) && (this.id % 4) + 1;
    }
    return Card;
})();

var card1 = new makeCard(1);
card1.rank();
card1.suit();
card1.constructor; //test