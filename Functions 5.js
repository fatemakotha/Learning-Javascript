// Create a function that tells you how many days, weeks and months yiu have left too live if you live 90 years
// Assume 365days in a year, 52 weeks in a year and 12 months in a year
function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    
    console.log("You have " + days + "days," + weeks + "weeks and " + months + "left.");
    
    
    
}
// here give input 12
lifeInWeeks(12);