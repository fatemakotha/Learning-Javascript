// 1-The prompt() command: (**equivalent to input() in python)
prompt("What is your name??"); //pops out a space for the user to enter an input in

// 2-Variables:
var my_name = "Angela"; // saves "Angela" as a variable named my_name
alert(my_name); //pops out Angela

// 3-The prompt() and variables:
your_name = prompt("Your name: "); //takes an input from user, i.e. Kotha
alert(your_name); //pops out Kotha

// 4-Concatenating strings:
alert("My name: " + my_name + " " + "Your name: " + your_name); //pops My name: Angela Your name: Kotha

// 5-In JS fstring mean nothing,
//which meeans the following line of code produces error
//alert(f" {your_name} and {my_name}) **ERROR


// 6-Reassigning value to variables:
var level = 1;
level = 2;
level = 3;
alert("Your current level is : " + level) //pops 3