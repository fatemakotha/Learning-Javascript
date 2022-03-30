/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
//the following code makes the robot go in a cicle once
function main(){
   goInCircle();
   goInCircle();
}

function goInCircle() {
   move();
   turnLeft();
   move();
   turnLeft();
}