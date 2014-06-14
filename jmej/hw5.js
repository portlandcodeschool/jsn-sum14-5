//hw5 1)a - took 30 mins

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

obj1.constructor.prototype.d = 3 /*obj1.contructor.prototype is the same object as Ctor.prototype.
this means that obj1, obj2, obj3, and any other objects that have or will been created with new Ctor()
will inherit a d:3 */

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

//2)
var ticTacToe = (function(){
squares = {00:false, 01:false, 02:false, 10:false, 11:false, 12:false, 20:false, 22:false, 23:false};

function TicTacToeBoard(){
	this.move = function(x, y, player){
		var square = x+y;
		if (this.squares[square] != false){
		return squares[square]+"already made that move!";}
		else{squares[square] = player; 
             console.log("nice move"+player);
             this.show();
		     this.win();}
	}
	this.win = function(){
		if (squares.00 && squares.01 && squares.02)
/*		|| (squares.10 && squares.11 && squares.12)
		|| (squares.20 && squares.21 && squares.22)
		|| (squares.00 && squares.11 && squares.22)
		|| (squares.20 && squares.12 && squares.03))*/
        {return squares.11 + "is the winner!";}
	}
	this.show = function(){
		console.log(squares);

	}
}
var game = new TicTacToeBoard();
return game;
}());
