//Swap the values of the variables
//The test() method tests for a match in a string. If it finds a match, it returns true, otherwise it returns false.
function test() {
var a = "3";
var b = "8";

//what I did
var a = c;
b = a;
c = b;
//what the solution said
var c = a;
a = b;
b = c;
//The console. log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
console.log("a is " + a);
console.log("b is " + b);
}