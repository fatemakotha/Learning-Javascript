// for AND: &&
// for OR: ||
// for OT: !

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1-100

if (loveScore === 100) {
    alert("Your love score is " + loveScore + "%" + "GREAT")
} else if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + "HIGH")
} else if (loveScore > 30 && loveScore <= 60) {
    alert("Your love score is " + loveScore + "%" + "30/60")
} else if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + "low")
}



// BMI Calculator:\
function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2); //Math.pow returns height^2
    if (bmi < 18.5) {
        alert("Your bmi is " + bmi + " you are underweight")
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        alert("Your bmi is " + bmi + " you are normal")
    }
    else if (bmi > 24.9) {
        alert("Your bmi is " + bmi + " you are overweight")
    }
}

bmiCalculator(20, 1.8);