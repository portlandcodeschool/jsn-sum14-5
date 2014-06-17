//Homework for week 5



//1).
//a).

function Ctor(){
	this.a = 0;
	this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {}; Ctor.call(obj3);

//**console readout for properties : obj3 Object {a: 0, b: 1}

obj1.c = 2;

obj1.__proto__.d = 3; //also be written as obj1.constructor.prototype.d or Ctor.prototype.d;

//obj1.d = 3; obj2.d = 3; obj3.d = undefined;



//b).
function User(name,pw,uncool) {
    this.getName = function () {return name;};
    this.validate = function (str) {return (pw === str);};
    if ("uncool") {
    		this.isDislikeable = true;
    }
    else{this.isDislikeable = false;}
    }
var kynareth = new User("Kynareth","treehugger");
var talos = new User("Talos","imawes0me","uncool");
var akatosh = new User("Akatosh","password");


//c).

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

/* I am a little bit fuzzy about how to explain but I realize that objA.constructor.prototype is Object {} whereas objB.constructor.prototype is 
B {num: 0, str: "default"}




