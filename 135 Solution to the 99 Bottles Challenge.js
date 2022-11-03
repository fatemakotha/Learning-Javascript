// My way:
var number = 99;

while (number <= 99 && number >= 0) {
    consoleMsg = number + " bottles of beer on the wall " + number + " bottles of beer, Take 1 down, pass it around " + (number - 1) + " bottles of beer on the wall."
    console.log(consoleMsg)
    number--;
}

//----------------OR------------------------------

// Another way:
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}