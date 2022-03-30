
//how to get capital or small letters
var name = prompt("Enter characters here: ");//input KoTHa
name = name.toUpperCase();//changes name to KOTHA
name = name.toLowerCase();//changes name to kotha

//Capitalize only the first character
var firstChar = name.slice(0,1);
var firstCharUp = firstChar.toUpperCase();

//rest of the characters must be small letters
var restChar = name.slice(1,name.length);//name.length is the last position
//change rest of the name to Lower case
var restChar = restChar.toLowerCase
var capitalisedName = firstCharUp + restChar;//gives Kotha

alert("Hello" + " " + capitalisedName)