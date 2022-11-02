// 1-Print numbers from 0-1
var list = [];

// 2-Adding item to array: ** Like append() in python list
list.push(1);
console.log(list); // [1]
list.push(2);
console.log(list); // [1, 2]

// 3-Remove an item from array: **like remove() in python
list.pop(); //removes the last item, thus [2]

//------------------------------------------------------------------------------------------
//FizzBuzz:
// Use for loop to print 0-100
// start value = 0, end value = 100(as 101 is not inclusive, and i++ means i increases by 1)
for (let i=0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("FizzBuzz");
    }
    console.log(i);
}

//---------------------------------OR--------------------------------------
//FizzBuzz: