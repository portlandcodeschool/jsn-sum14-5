//part a

function Ctor() {
    this.a = 0;
    this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();
var obj3 = {}; Ctor.call(obj3);
obj1.c = 2;
obj2.c; //undefined
obj1.constructor.prototype.d = 3; 
obj1.d; //3
obj2.d; //3
obj3.d //undefined

// because obj1 and obj2 were made through the constructor's new call

function User(name,pw) {
    this.getName = function () {return name;};
    this.validate = function (str) {return (pw === str);};
    this.isDislikeable = false;
}
var kynareth = new User("Kynareth","treehugger");
var talos = new User("Talos","imawes0me");
var akatosh = new User("Akatosh","password");