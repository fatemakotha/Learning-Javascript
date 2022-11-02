// BMI Calculator:\
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2); //Math.pow returns height^2
    return bmi //returs 5 for example
    
}

BMI = bmiCalculator(65, 1.8);

console.log(BMI);