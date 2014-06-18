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

/* objA.constructor is Object, objB.constructor is B - because A.prototype was pointed to 
a new object that doesn't have a contructor property - so by default, that new object's 
constructor is Object. A.prototype is the __proto__ for objA. OTOH, B merely adds to the 
existing properties of it's prototype object - so those proto/prototype links remain intact.*/