// 4) Subclassing

function Animal() {
  this.move = function() { return 'walk'; };
};

function Bird() {
  this.move = function() { return 'fly'; };
  this.hasWings = true;
};
Bird.prototype = new Animal();
Bird.prototype.constructor = Bird;

function Fish() {
  this.move = function() { return 'swim'; };
};
Fish.prototype = new Animal();
Fish.prototype.constructor = Fish;

function Penguin() {
  this.move = function() { return 'swim'; };
};
Penguin.prototype = new Bird();
Penguin.prototype.constructor = Penguin;

var assert = require('assert');
assert(new Animal().move() === 'walk');
assert(new Fish().move() === 'swim');
assert(new Bird().move() === 'fly');
var pengo = new Penguin();
assert(pengo.move() === 'swim');
assert.ok(pengo.hasWings);
assert.ok(pengo instanceof Bird);
assert.ok(pengo instanceof Animal);



