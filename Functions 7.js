function getMilk(money) { //takes an input called money
    
console.log("leaveHouse");
console.log("moveRight");
console.log("moveRight");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveUp");
console.log("moveRight");
console.log("moveRight");

var numberOfBottles = Math.floor(money / 1.50); //uses input money to calculate how many bottles of milk we can buy using that money

console.log("buy " + numberOfBottles + " bottles of milk");


console.log("moveLeft");
console.log("moveLeft");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveDown");
console.log("moveLeft");
console.log("moveLeft");
console.log("enterHouse");

//we want to return a munber
//here 1.5 is the price of per bottle
return money % 1.5; //this will give us the remainder
//this is the money remaining after the bottles of milk are bought
}
//we want to save this remainder into a variable
var change = getMilk(4);//the input is 4 here
//we can log the value of this change using the code below
console.log(change);