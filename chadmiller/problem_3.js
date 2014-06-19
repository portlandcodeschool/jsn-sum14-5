// 3) Cards Schmards

function Card(id) {

  if (!Card.isValid(id, 0, 51))
    return NaN;

  this.id = id;
}

Card.isValid = function(num, low, high) {
  if (typeof num !== 'number')
    return false;
  if (num % 1 !== 0)
    return false;
  if (num < low || num > high)
    return false;
  return true;
};

Card.cardID = function(rank, suit) {
  if (!this.isValid(rank, 1, 13) && !this.isValid(suit, 1, 4))
    return NaN;
  return ((rank - 1) * 4 + (suit - 1));
};

Card.cardRank = function(id) {
  if (!this.isValid(id, 0, 51))
    return NaN;
  return Math.floor(id / 4) + 1;
};

Card.cardSuit = function(id) {
  if (!this.isValid(id, 0, 51))
    return NaN;
  return (id % 4) + 1;
};

Card.ranks = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine',
              'Ten', 'Jack','Queen','King'];

Card.suits = ['Hearts','Diamonds','Spades','Clubs'];

Card.cardName = function(id) {
  if (!this.isValid(id, 0, 51))
    return NaN;
  return this.ranks[this.cardRank(id) - 1] + ' of ' +
    this.suits[this.cardSuit(id) - 1];
};

Card.prototype.rank = function() {
  return Card.cardRank(this.id);
};

Card.prototype.suit = function() {
  return Card.cardSuit(this.id);
};

Card.prototype.cardID = function() {
  return this.id;
};

Card.prototype.color = function() {
  return this.suit() < 3 ? 'red' : 'black';
};

Card.prototype.name = function() {
  return Card.cardName(this.id);
};

Card.prototype.precedes = function(cardObj) {
  var diff = cardObj.rank() - this.rank();
  return diff == 1 || diff == -12;
};

Card.prototype.sameColor = function(cardObj) {
  return this.color() === cardObj.color();
};

Card.prototype.nextInSuit = function() {
  var next = this.id + 4;
  if (next > 51) return next - 52;
  return next;
};

Card.prototype.prevInSuit = function() {
  var prev = this.id - 4;
  if (prev < 0) return prev + 52;
  return prev;
};

var assert = require('assert');
assert(new Card(0).rank() === 1, "Test 1 failed");
assert(new Card(3).rank() === 1, "Test 2 failed");
assert(new Card(51).rank() === 13, "Test 3 failed");
assert(new Card(0).suit() === 1, "Test 4 failed");
assert(new Card(5).suit() === 2, "Test 5 failed");
assert(new Card(51).suit() === 4, "Test 6 failed");
assert(new Card(1).cardID() === 1, "Test 7 failed");
assert(new Card(51).cardID() === 51, "Test 8 failed");
assert(new Card(30).cardID() === 30,"Test 9 failed");
assert(new Card(0).color() === 'red', "Test 10 failed");
assert(new Card(2).color() === 'black', "Test 11 failed");
assert(new Card(5).name() === 'Two of Diamonds', "Test 12 failed");
assert(new Card(51).name() === 'King of Clubs', "Test 13 failed");
assert(!new Card(0).precedes(new Card(1)), "Test 14 failed");
assert(new Card(0).precedes(new Card(5)), "Test 15 failed");
assert(new Card(51).precedes(new Card(0)), "Test 16 failed");
assert(new Card(50).precedes(new Card(2)), "Test 17 failed");
assert(new Card(0).sameColor(new Card(1)), "Test 18 failed");
assert(!new Card(1).sameColor(new Card(2)), "Test 19 failed");
assert(new Card(0).nextInSuit() === 4, "Test 20 failed");
assert(new Card(51).nextInSuit() === 3, "Test 21 failed");
assert(new Card(48).nextInSuit() === 0, "Test 22 failed");
assert(new Card(0).prevInSuit() === 48, "Test 23 failed");
assert(new Card(3).prevInSuit() === 51, "Test 24 failed");
assert(new Card(5).prevInSuit() === 1, "Test 25 failed");
