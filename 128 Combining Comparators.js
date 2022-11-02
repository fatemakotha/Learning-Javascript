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