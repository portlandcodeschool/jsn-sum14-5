//use node's testing library
var assert = require('assert');

// 1) Constructor Basics
// Part a

function Ctor() {
  this.a = 0;
  this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();
var obj3 = {};
Ctor.call(obj3);

obj1.c = 2;
obj2.c //=> undefined

Ctor.prototype.d = 3;
//obj1.__proto__.d = 3;
//obj1.constructor.prototype.d = 3
//Object.getPrototypeOf(obj1)

assert(obj1.d === 3, 'obj1 test failed');
assert(obj2.d === 3, 'obj2 test failed');
//obj3.d is undefined because a new object isn't initialized and doesn't inherhit
//Ctor's prototype
assert(obj3.d !== 3, 'obj3 test failed');

// Part b

function User(name, pw, dislikable) {
  this.getName = function() { return name; };
  this.validate = function(str) { return pw === str; };
  this.isDislikable = dislikable || false;
};

var kynareth = new User('Kynareth', 'treehugger');
var talos = new User('Talos', 'imawes0me', true);
var akatosh = new User('Akatosh', 'password');

assert.ok(talos.isDislikable, 'talos test failed');
assert.ok(!akatosh.isDislikable, 'akatosh test failed');

// Part c

function A() {};
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

// A's prototype is set to Object.prototype, which means objA's constructor
// now points to the Object constructor and not A
