var a = promt("Type a line");// lets assume 23 characters are typed
var aOne = a.length;

alert(aOne)//prints 23
alert("Remaining characters: " + (140 - aOne))//prints 117

//OR in one line
alert("Remaining characters: " + (140 - a.length))//prints 117