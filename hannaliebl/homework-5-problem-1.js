//part a

function Ctor() {
    this.a = 0;
    this.b = 1;
}

var obj1 = new Ctor();
var obj2 = new Ctor();
var obj3 = {}; Ctor.call(obj3);