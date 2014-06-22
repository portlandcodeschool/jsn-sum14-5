/**
 * Created with PhpStorm.
 * User: geoffreyunger
 * Date: 6/14/14
 * Time: 11:44 AM
 */

function Ctor(){
    this.a = 0;
    this.b = 1;
}

obj1 = new Ctor;
obj2 = new Ctor;
obj3 = {};
Ctor.call(obj3);
obj2.c = 2;
obj1.constructor.prototype.d = 3;

function User(name,pw, likeable) {
    this.getName = function () {return name;};
    this.validate = function (str) {return (pw === str);};
    this.isDislikeable = likeable || false;
}

var kynareth = new User("Kynareth","treehugger");
var talos = new User("Talos","imawes0me", true);
var akatosh = new User("Akatosh","password");

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

/*
objA.constructor
function Object() { [native code] }

objA.constructor.prototype
Object {}

objB.constructor
function B() {} problem-1.js:35

objB.constructor.prototype
B {num: 0, str: "default"}

Object A's prototype is explicitly defined as an object, so it's constructor is Object(). You have effectively
overridden the prototype for the constructor function A()
Object B's prototype is not explicitly defined, so it's constructor is function B()
*/
