var Ctor = function Ctor(){
    this.a = 0;
    this.b = 1;
};

var obj1 = new Ctor();
var obj2 = new Ctor();

var obj3 = {};
Ctor.call(obj3);

obj1.c = 2;
obj1.constructor.prototype.d = 3;

function User(name,pw,likeable) {
    if (!likeable){
        this.isDislikeable = true;
    }
    else{
        this.isDislikeable = false;    
    }
    this.getName = function () {return name;};
    this.validate = function (str) {return (pw === str);};
}
var kynareth = new User("Kynareth","treehugger",true);
var talos = new User("Talos","imawes0me",false);
var akatosh = new User("Akatosh","password", true);

function A() {}
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();
//returns [object Object]

function B() {}
//// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();
//returns object
