// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 === year % 4) && (0 != year % 100) || (0 === year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);


//------------OR----------------------------------

// program to check leap year
function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year";
            } else {
                return "Not leap year";
            }
        } else {
            return "Leap year";
        }
    } else {
        return "Not leap year";
    }
}

isLeap(2016);