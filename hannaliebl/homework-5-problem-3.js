//PART A:

var Card = (function () {
    function makecard (id) {
        var card = {};
        this.id = id;
        this.isvalid = Card.isvalid;
        this.rank = Card.rank;
        this.suit = Card.suit;
    }
    makecard.isvalid = function(num, low, high) {
        if ((typeof num) != "number")
            return NaN;
        if (!Number.isInteger(num))
            return NaN;
        if (num < low || num > high)
            return NaN;
        return true;
    }
    makecard.rank = function () {
        return this.isvalid(this.id, 0, 51) && Math.floor(this.id / 4) + 1;
    }
    makecard.suit = function () {
       return this.isvalid(this.id, 0, 51) && (this.id % 4) + 1;
    }
    return makecard;
})();

var card1 = new Card(1);
card1.rank();
card1.suit();
card1.constructor; //test

////////////////////////////////////////////////////////////////

//PART B 
//(one way):

var Card = (function () {
    function makecard (id) {
        var card = {};
        this.id = id;
    }
    return makecard;
})();

Card.prototype = {
isvalid: function(num, low, high) {
    if ((typeof num) != "number")
        return NaN;
    if (!Number.isInteger(num))
        return NaN;
    if (num < low || num > high)
        return NaN;
    return true;
   },
rank: function () {
      return this.isvalid(this.id, 0, 51) && Math.floor(this.id / 4) + 1;
   },
suit: function () {
      return this.isvalid(this.id, 0, 51) && (this.id % 4) + 1;
   }
}

var card2 = new Card(2);
card2.rank();
card2.suit();
card2 instanceof Card //true

////////////////////////////////////////

//PART B 
//(another way, perhaps less clear):

var Card = (function () {
    function makecard (id) {
        var card = {};
        this.id = id;
    }
    makecard.prototype = {
    isvalid: function(num, low, high) {
        if ((typeof num) != "number")
            return NaN;
        if (!Number.isInteger(num))
            return NaN;
        if (num < low || num > high)
            return NaN;
        return true;
       },
    rank: function () {
          return this.isvalid(this.id, 0, 51) && Math.floor(this.id / 4) + 1;
       },
    suit: function () {
          return this.isvalid(this.id, 0, 51) && (this.id % 4) + 1;
       }
    }
    return makecard;
})();

var card2 = new Card(2);
card2.rank();
card2.suit();
card2 instanceof Card //true


///////////////////////////////////////////

//part of PART C
//...maybe :/

Card.prototype = {
    rank: function(cardID) {
        return Math.floor(cardID / 4) + 1;
    },
    suit: function(cardID) {
        return (cardID % 4) + 1;
    }
}