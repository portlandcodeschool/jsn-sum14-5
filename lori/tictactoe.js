
function Board (){
	
	this.place = ['_','_','_',
			     '_','_','_',
			     '_','_','_'];

	this.show = function (){
	 	console.log(this.place[0], this.place[1],this.place[2]);
	 	console.log(this.place[3], this.place[4],this.place[5]);
	 	console.log(this.place[6], this.place[7],this.place[8]);

	};

	this.placeX = function (address){
		 this.place[address] = 'X';
	};

	this.placeO = function (address){
		 this.place[address] = 'O';
	};

	this.winner = function (){
        if(this.checkD() || this.checkUD() || this.checkLR())
                console.log("you win");
        else
                console.log("you lose");
 
        };
 
        this.checkD = function (){
                var check='';
                check += this.place[0] + this.place[4] + this.place[8];
                if(( check === 'XXX') || (check === 'OOO'))
                                return true;
                check = '';
                check += this.place[2] + this.place[4] + this.place[6];
                if(( check === 'XXX') || (check === 'OOO'))
                        return true;
 
                return false;
        };
 
        this.checkUD = function(){
                var check='';
                for( i = 0; i < 9; i += 3){
                        check += this.place[i];
                        if(( check === 'XXX') || (check === 'OOO'))
                                return true;
                }
                check = '';
                for( i = 1; i < 9; i += 3){
                        check += this.place[i];
                        if((check === 'XXX') || (check === 'OOO'))
                                return true;
                }
                check = '';
                for( i = 2; i < 9; i += 3){
                        check += this.place[i];
                        if((check === 'XXX') || (check === 'OOO'))
                                return true;
                }
 
                return false;
        };
 
        this.checkLR = function(){
                var x = ['X','X','X'];
                var o = ['O','O','O'];
 
                if(this.place.slice(0,3).toString() == x.toString()){return true;}
                if(this.place.slice(3,6).toString() == x.toString()){return true;}
                if(this.place.slice(6,9).toString() == x.toString()){return true;}
                if(this.place.slice(0,3).toString() == o.toString()){return true;}
                if(this.place.slice(3,6).toString() == o.toString()){return true;}
                if(this.place.slice(6,9).toString() == o.toString()){return true;}
                return false;
        };
 
 }
 
		




var myBoard = new Board();
//myBoard.show();

myBoard.placeX(3);
myBoard.placeX(4);
myBoard.placeX(0);
myBoard.placeO(5);
myBoard.placeO(1);
myBoard.placeX(2);
myBoard.placeX(6);

myBoard.show();
myBoard.winner();