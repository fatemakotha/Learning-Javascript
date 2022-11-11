
//Constructor function names are not camelCase but TitleCase:
function BellBoy (name, age, hasWorkPermit, language) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.language = ;anguages;
}

//Initialise object OR Create a new object:
var bellBoy1 = new BellBoy("Tim", 19, true, ["French", "English"]);
var bellBoy2 = new BellBoy("Davina", 19, true, ["French", "English"]);

//__________________________________________________________________


//Constructor function names are not camelCase but TitleCase:
function Keeper(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}

//Initialise object OR Create a new object:
var newKeeper1 = new Keeper("kol", 19, 5)
console.log(newKeeper1.name) //kol
console.log(newKeeper1.age) //19
console.log(newKeeper1.height) //5