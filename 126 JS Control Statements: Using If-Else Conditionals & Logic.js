prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1; // 1-100

if (loveScore === 100) {
    alert("Your love score is " + loveScore + "%" + "GREAT")
} else if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + "HIGH")
} else {
    alert("Your love score is " + loveScore + "%")
}