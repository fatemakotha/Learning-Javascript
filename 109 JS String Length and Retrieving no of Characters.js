// 1-The length() function:
var name = "Kotha";

name.length; //prints 5

lengthOfName = name.length;

console.log(lengthOfName) //prints 5

// 2-Exercise on how many letters used and how many remaining:
// Create a prompt where user can enter a large string
var name = prompt("What is your name?");

// Tell them how many characters they have written
// Chars used:
lengthEssay = name.length;
console.log(lengthEssay)
// How many characters they have remaining
charsRemaining = 200 - lengthEssay

//Output message:
console.log("You used " + lengthEssay + " words" + "you have " + charsRemaining + " letters remaining.")
//prints: You used 80 wordsyou have 120 letters remaining.