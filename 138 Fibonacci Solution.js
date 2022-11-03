function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        //we create a var i with value 2 as we now have 2 items in output array **
        //for loop below starts from 2 and ends at n
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]) // [0, 1, 1]
        }
        
    }
    return output
}

fibonacciGenerator(10)