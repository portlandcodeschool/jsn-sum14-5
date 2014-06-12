

/*1) Constructor basics

This is a sequence of simple exercises related to how constructors and prototypes work.

a) [easy]

    First make a constructor named Ctor for an object that has properties a and b and initializes them to 0 and 1 respectively.
    Now, make two objects named obj1 and obj2 using Ctor.
    Now make a new object obj3 this way: var obj3 = {}; Ctor.call(obj3); and check its properties.
    Next, add a property c to obj1 with a value of 2. What will be the value of obj2.c?
    Now, add a property d with the value 3 to obj1's "proto" (the object which helps out when obj1 can't do something by itself). Remember that there are at least four ways of referring to that proto object.
    What are the values of obj1.d, obj2.d, and obj3.d? Can you explain the results?

b) [easy] Having understood how the above sequence plays out, now let's get a little more practice. Start with the following code:

function User(name,pw) {
    this.getName = function () {return name;};
    this.validate = function (str) {return (pw === str);};
}
var kynareth = new User("Kynareth","treehugger");
var talos = new User("Talos","imawes0me");
var akatosh = new User("Akatosh","password");

We realize that we want to make some changes so that objects made with constructor User will have an extra field called isDislikeable which should be false by default, but set to true for talos. Change the code above as needed. (Hint: You could do it by mentioning "Talos" specifically in the constructor, but that generalizes badly. Find a better way!)

c) [moderate] Finally, let's try one more small exercise using prototypes to define defaults. Consider this code:

function A() {};
//set default values for instances of A:
A.prototype = {num:0, str:'default'};
var objA = new A();

function B() {};
// set default values for instances of B:
B.prototype.num = 0;
B.prototype.str = 'default';
var objB = new B();

There is a difference between the behaviors of objA and objB! Explain.*/
