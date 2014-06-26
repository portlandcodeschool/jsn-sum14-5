/**
 * Crouse Matthew Homework 5
 */
var startQuestion = '\n' + "========================================== " + '\n';
console.log("\n1.a)" + startQuestion);
function Ctor() {
	this.a = 0;
	this.b = 1;
}

var obj1 = new Ctor(); 
var obj2 = new Ctor();
var obj3 ={};
Ctor.call(obj3); // implicitly made using Ctor function but 
					// not actually being made there
					// so prototype is not connected.

console.log(obj1);

obj1.c = 2;

console.log(obj1);

console.log("\n2.a)" + startQuestion);

obj1.constructor.prototype.d = 3;

console.log(obj1.d);

console.log(obj3.d);

console.log("\n1.b)" + startQuestion);
function User(name,pw) {
    this.getName = function () {return name;};
    this.validate = function (str) {return (pw === str);};
}
var kynareth = new User("Kynareth","treehugger");
var talos = new User("Talos","imawes0me");
var akatosh = new User("Akatosh","password");

User.prototype.isDislikeable = false;

talos.isDislikeable = true;

console.log('\n kynareth: ',kynareth);
console.log('\n talos: ',talos);
console.log('\n akatosh: ',akatosh);

console.log("\n1.c)" + startQuestion);

function A() {}
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {}
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();


 console.log('function A is creating an object with key values where\n',
 		'function B is creating an object and then adding properties\n',
 		'to the object at a later time.'); 
 
 console.log("\n2)" + startQuestion);

 

 function makeBoard(){
 	
 	this.array = [];

 	this.buildBoard = function (){
 		for(i = 0; i <9; ++i){
 			this.array[i] = '[_]';
 		}
 	};

 	this.displayBoard = function(){
 	console.log('\n','-----------');
	console.log('',this.array[0], this.array[1], this.array[2]);
	console.log('',this.array[3], this.array[4], this.array[5]);
	console.log('',this.array[6], this.array[7], this.array[8]);
	console.log('','-----------','\n');
 	};

	this.addChar = function (char, address){
  	this.array[address] = '['+char+']';
  	};

	this.checkWin = function(){
	if(this.checkD() || this.checkUD() || this.checkLR())
		console.log("\n\n\t\tYAY YOU WON");
	else
		console.log("\n\n\t\tNext Players Turn");

	};

	this.checkD = function (){
		var check="";
		check += this.array[0] + this.array[4] + this.array[8];
		if(( check === '[X][X][X]') || (check === '[O][O][O]'))
				return true;
		check = '';
		check += this.array[2] + this.array[4] + this.array[6];
		if(( check === '[X][X][X]') || (check === '[O][O][O]'))
			return true;

		return false;
	};

	this.checkUD = function(){
		var check='';
		for( i = 0; i < 9; i += 3){
			check += this.array[i];
			if(( check === '[X][X][X]') || (check === '[O][O][O]'))
				return true;
		}
		check = '';
		for( i = 1; i < 9; i += 3){
			check += this.array[i];
			if((check === '[X][X][X]') || (check === '[O][O][O]'))
				return true;
		}
		check = '';
		for( i = 2; i < 9; i += 3){
			check += this.array[i];
			if((check === '[X][X][X]') || (check === '[O][O][O]'))
				return true;
		}

		return false;
	};

	this.checkLR = function(){
		var x = ['[X]','[X]','[X]'];
		var o = ['[O]','[O]','[O]'];

		if(this.array.slice(0,3).toString() == x.toString()){return true;}
		if(this.array.slice(3,6).toString() == x.toString()){return true;}
		if(this.array.slice(6,9).toString() == x.toString()){return true;}
		if(this.array.slice(0,3).toString() == o.toString()){return true;}
		if(this.array.slice(3,6).toString() == o.toString()){return true;}
		if(this.array.slice(6,9).toString() == o.toString()){return true;}
		return false;
	};

 }

var board = new makeBoard();
board.buildBoard();

 board.displayBoard();
 board.addChar('X',0);
 //board.addChar('O',4);
 board.addChar('O',5);
 board.addChar('O',8);
 //board.addChar('O',0);
 board.addChar('X',3);
 board.addChar('X',6);
 // board.addChar('X',1);
 // board.addChar('X',2);
 board.displayBoard();
 board.checkWin();

 console.log("\n3)" + startQuestion);


var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
        'Jack','Queen','King'];
var suitNames = ['','Hearts','Diamonds','Spade','Clubs'];

/**
 * Card factory produces a card object with explicitly defined  functions
 * @param  {[type]} id [Pass in an integer between 0 and 52 to represent standard deck of cards]
 * @return {[type]}    [Returns a card object]
 */
function Card (id) {
	this.ID = id;
	this.myRank =function (){
		var card = this.ID;
	 	return Math.floor(card/4 + 1);
	 };
	this.mySuit = function (){
		var card = this.ID;
	 	return card % 4 + 1;
	};
	this.myCardId = function (){
		return (rank-1) * 4 + (suit -1);
	};

	this.myPrecedes = function (){
		var diff = this.myRank() - CardB.myRank();
		if(diff === 0){ return false;}

		else { return true;}
	};
	this.mySameColor = function (){
		if(this.myColor() === CardB.myColor()){
			return true;
		}
		else{
			return false;
		}
	};
	this.myNextInSuit = function (){
		nextCard = cardA+4;
	    if (nextCard>51) nextCard-=52;
	    return nextCard;
	};
	this.myPrevInSuit = function (){
		prevCard = cardB-4;
	    if (prevCard<0) prevCard+=52;
	    return prevCard;
	};
 }

var ace = new Card (0);

console.log(ace );

console.log(ace.myRank());

/*
Adding the myColor, and MyName functions to the Card constructor prototype.
 */
 	ace.constructor.prototype.myColor = function (){
			 var theSuit = this.mySuit();
		return (theSuit <3)? "red":"black";
	};
	ace.constructor.prototype.myName = function (){
		var string = "";
		string = (rankNames[this.myRank()] + " of "+ suitNames[this.mySuit()]);
		return string;
	};

console.log(ace.myColor());
console.log(ace.myName());