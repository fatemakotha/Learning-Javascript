// 1-Slicing **Basically the range function as in python
var name = "Kotha";
name.slice(0,1); //prints K
name.slice(4,5); //prints a
name.slice(0,3); //prints Kot


// 2-Slice input in prompt
var name = prompt("What is your name?");

// Tell them how many characters they have written
// Chars used:
lengthEssay = name.length;
console.log(lengthEssay)
// How many characters they have remaining
charsRemaining = 200 - lengthEssay

//Output message:
console.log("You used " + lengthEssay + " words" + "you have " + charsRemaining + " letters remaining.")

console.log(name.slice(0, 201)) //prints until 200th character