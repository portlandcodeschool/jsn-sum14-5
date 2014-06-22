function Ctor () {
	this.a=0;
	this.b=1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();
var obj3 = {};
Ctor.call(obj3);

console.log(obj3);
obj1.c = 2;

console.log(obj2);
obj1.constructor.prototype.d = 3;

console.log(obj1.d);
console.log(obj2.d);
console.log(obj3.d);



function User(name,pw) {
    this.getName = function () {return name;};
    this.validate = function (str) {return (pw === str);};

}
var kynareth = new User("Kynareth","treehugger");
var talos = new User("Talos","imawes0me");
var akatosh = new User("Akatosh","password");

User.prototype.isDislikable = false;

talos.isDislikable = true;
console.log(talos);



