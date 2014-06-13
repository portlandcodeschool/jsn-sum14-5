//hw5 1)a

var Ctor = function(){
	this.a = 0;
	this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {}; Ctor.call(obj3); 

//obj3
//{a: 0, b: 1}

obj1.c=2

//obj1
//{a: 0, b: 1, c: 2}

//obj2
//{a: 0, b: 1}

obj1.constructor.prototype.d = 3 //obj1.contructor.prototype is the same object as Ctor.prototype.
//this means that obj1, obj2, obj3, and any other objects that have or will been created with new Ctor()
//will inherit a d:3

//1) b

function User(name,pw,uncool) {
    this.getName = function () {return name;};
    this.validate = function (str) {return (pw === str);};
    if (uncool == "uncool") {
    		this.isDislikeable = true;
    }
    else{this.isDislikeable = false;}
    }
var kynareth = new User("Kynareth","treehugger");
var talos = new User("Talos","imawes0me","uncool");
var akatosh = new User("Akatosh","password");

//1) c
function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

//objA.constructor is Object, objB.constructor is B - not really sure why this is.

//2