// Interchange the values of a and b:
// 1-Create a function:
function test() {
    var a = "3";
    var b = "8";
    var c= "";

    c = a;
    a = b;
    b = c;
    // 2-The console.console.log(); prints answer in the console
    console.log("a is " + a);
    console.log("b is " + b);
}
test() //calls the function and pops a is 8
       //b is 3