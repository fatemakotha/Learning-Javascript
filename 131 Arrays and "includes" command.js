//Working with Javascript Arrays:
//Kotha
//Cutu
//Sheela
//Angela
//Downey

// 1-Create an array:
var guestList = ["Kotha", "Cutu", "Sheela", "Angela", "Downey"];
console.log(guestList) //prints: (5) ['Kotha', 'Cutu', 'Sheela', 'Angela', 'Downey'] // (5) means 5 items in array
console.log(guestList.length); // 5

console.log(guestList[0]) // "Kotha"

var guestName = prompt("Enter name in TITLE CASE: ")

// 2-returns True or false //this code is equivalent to "if in list" in python
if (guestList.includes(guestName)) {
    alert("Welcome")
} else {
    alert("Sorry")
}