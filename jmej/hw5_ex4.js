var Animal = function(){
	Animal.prototype.move = moveFn;
	Animal.prototype.movement = "walk";
	function moveFn(){
    	return this.movement;
	}
}

var Bird = function(){
	this.movement = "fly";
	this.hasWings = true;
	Bird.prototype = new Animal();
    Bird.prototype.constructor = Animal;
}

var Fish = function(){
	this.movement = "swim";
	Fish.prototype = new Animal();
    Fish.prototype.constructor = Animal;
}

var Penguin = function(){
	this.movement = "swim";
	Penguin.prototype = new Bird();
    Penguin.prototype.constructor = Animal;
}

var critter = new Animal();
var eagle = new Bird();
var salmon = new Fish();

//new Animal().move();// 'walk'
//new Fish().move();// 'swim'
//new Bird().move();// 'fly'
var pengo = new Penguin();
pengo.move(); //'swim'
pengo.hasWings; //true;
pengo instanceof Bird; //true
pengo instanceof Animal; //true
