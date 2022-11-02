// lifeInWeeks Calculator:

function lifeInWeeks(age) {
    // 1-Take current age as input:
    var yearsRemaining = 90 - age;
    console.log(yearsRemaining)

    // 3-Calculate yearsRemaining in months:
    var months = yearsRemaining * 12;
    console.log(months);

    // 4-Calculate yearsRemaining in days:
    var days = yearsRemaining * 365;
    console.log(days);

    // 5-Calculate yearsRemaining in weeks:
    var weeks = yearsRemaining * 52;
    console.log(weeks);

    console.log("You have " + months + " months, " + weeks + " weeks, and " + days + " days left.");
}

lifeInWeeks(56); //prints: You have 408 months, 1768 weeks, and 12410 days left.