//3a card CTOR

var Card = (function(){

function Card(id){

  this.id = id;
  this.rank = rank;
  this.suit = suit;
  this.cardID = cardId;
  this.color = color;
  this.cardName = cardName;
  this.precedes = precedes;
  this.sameColor = sameColor;
  this.nextInSuit = nextInSuit;
  this.prevInSuit = prevInSuit;
}

function rank() {
        var id = this.id;
        var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        var index = Math.floor(id / 4);
        return (ranks[index]);
  }
function suit() {
        var id = this.id;
        var suits = [1, 2, 3, 4];
        return (suits[(id % 4)]);
  }
function cardId() {
        var id = this.id;
        return(id);
  }
function color() {
        var colors = ["red", "red", "black", "black"];
        var id = this.id;
        return(colors[(id % 4)]);
  }
function cardName() {
       var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
       var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
       var rank = ranks[(this.rank()-1)];
       var suit = suits[(this.suit()-1)];
       return (rank + " of " + suit);
  }
function precedes(cardObj) {
       var A = this.rank();
       var B = cardObj.rank();
       if (A === (B-1)){
          return (true);
       }else if ((A === 13) && (B === 1)){
          return(true);
         }
        return(false);        
  }
function sameColor(cardObj) {
        return(this.color()===cardObj.color());
  }

function nextInSuit() {
    if (this.id<48){
       return(this.id+4);
    }else{
       return(this.id-48);
       }
  }

function prevInSuit() {
    if (this.id>3){
       return(this.id-4);
    }else{
        return(this.id+48);
         }
  }



return Card;
})();

//usage test
var card30= new Card(30)

//3b + c card CTOR

var Card = (function(){

function Card(id){

  this.id = id;
  Card.prototype.rank = rank;
  Card.prototype.suit = suit;
  Card.prototype.cardID = cardId;
  Card.prototype.color = color;
  Card.prototype.cardName = cardName;
  Card.prototype.precedes = precedes;
  Card.prototype.sameColor = sameColor;
  Card.prototype.nextInSuit = nextInSuit;
  Card.prototype.prevInSuit = prevInSuit;
  Card.cardId = cardId;
  Card.rank = rank;
  Card.suit = suit;
  Card.cardName = cardName;
}


//cardRank(cardID)
//cardSuit(cardID)
//cardName(cardID)

function rank(cid) {
        if (cid == undefined){  //if being called from an instance - these arguments will be undefined
        var id = this.id;
      }else{var id = cid;}
        var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        var index = Math.floor(id / 4);
        return (ranks[index]);
  }
function suit(cid) {
        if (cid == undefined){  //if being called from an instance - these arguments will be undefined
        var id = this.id;
      }else{var id = cid;}
        var suits = [1, 2, 3, 4];
        return (suits[(id % 4)]);
  }
function cardId(rankNum,suitNum) {
        if (rankNum == undefined){  //if being called from an instance - these arguments will be undefined
          var id = this.id;
        }else{                      //if being called directly via the constructor this logic takes effect to return Id.
          var subt = [4, 3, 2, 1];
          var id = ((rankNum * 4) - (subt[(suitNum-1)]));
        }
        
        return(id);
  }
function color() {
        var colors = ["red", "red", "black", "black"];
        var id = this.id;
        return(colors[(id % 4)]);
  }
function cardName(cid) {
        var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  if (cid == undefined){  //if being called from an instance - these arguments will be undefined
        var rank = ranks[(this.rank()-1)];
        var suit = suits[(this.suit()-1)];
     }else{
        var rank = ranks[(Card.rank(cid)-1)];
        var suit = suits[(Card.suit(cid)-1)];
     }
       return (rank + " of " + suit);
  }
function precedes(cardObj) {
       var A = this.rank();
       var B = cardObj.rank();
       if (A === (B-1)){
          return (true);
       }else if ((A === 13) && (B === 1)){
          return(true);
         }
        return(false);        
  }
function sameColor(cardObj) {
        return(this.color()===cardObj.color());
  }

function nextInSuit() {
    if (this.id<48){
       return(this.id+4);
    }else{
       return(this.id-48);
       }
  }

function prevInSuit() {
    if (this.id>3){
       return(this.id-4);
    }else{
        return(this.id+48);
         }
  }



return Card;
})();

//usage test
var card30 = new Card(30)
