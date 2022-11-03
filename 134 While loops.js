// // The while loop:

var x = 1
while (x < 3) {
    console.log(x);
    x++
}


// Fizzbuzz without while loop:
var output = [];
var count = 1;

function fizzbuzz() {
    if (count % 3 === 0 && count % 5 ===0) {
        output.push("fizzbuzz");
    } else if (count % 3 === 0 ) {
        output.push("fizz");
    } else if (count % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(count);
    }
        count++;
        console.log(output);
}

fizzbuzz()
fizzbuzz()
fizzbuzz()
fizzbuzz()
fizzbuzz()
fizzbuzz()
fizzbuzz()
fizzbuzz()
fizzbuzz()
fizzbuzz()
fizzbuzz()

//FizzBuzz with WHILE LOOP:
var output = [];
var count = 1;

function fizzbuzz() {
    if (count % 3 === 0 && count % 5 ===0) {
        output.push("fizzbuzz");
    } else if (count % 3 === 0 ) {
        output.push("fizz");
    } else if (count % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(count);
    }
        count++;
        console.log(output);
}

while (count <= 100) {
    fizzbuzz()
}




//FizzBuzz with WHILE LOOP:
var output = [];
var count = 1;

function fizzbuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 ===0) {
        output.push("fizzbuzz");
    } else if (count % 3 === 0 ) {
        output.push("fizz");
    } else if (count % 5 === 0) {
        output.push("buzz");
    } else {
        output.push(count);
    }
        count++;
        console.log(output);
    }
}

fizzbuzz();