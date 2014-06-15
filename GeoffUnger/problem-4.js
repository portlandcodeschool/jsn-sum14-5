/**
 * Created with PhpStorm.
 * User: geoffreyunger
 * Date: 6/15/14
 * Time: 9:20 AM
 */

function Animal(){
    this.move = function(){
        console.log("walk");
    }
}

function Bird(){
    this.move = function(){
        console.log("fly");
    }
    this.hasWings = true;
}
Bird.prototype = new Animal();
Bird.prototype.constructor = Bird;

function Fish(){
    this.move = function(){
        console.log("swim");
    }
}
Fish.prototype = new Animal();
Fish.prototype.constructor = Fish;

function Penguin(){
    this.move = function(){
        console.log("swim");
    }
}
Penguin.prototype = new Bird();
Penguin.prototype.constructor = Penguin;
