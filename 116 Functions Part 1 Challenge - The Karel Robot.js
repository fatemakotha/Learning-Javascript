website for Karel the robot: https://stanford.edu/~cpiech/karel/ide.html

// 1-Karel moves to top right of 5/5 maze:
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   moveFourTimes();
   turnLeft();
   moveFourTimes(); 
}

function moveFourTimes(){
   move();
   move();
   move();
   move();
}

// 2-Karel puts beeper in zigzag line till top right in 5/5 maze
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   putBeeper();
   play();
   play();
   play();
   play();

   }