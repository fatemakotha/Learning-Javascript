/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
  putBeeper();
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
  diagonalMoveAndBeeper();
}

function diagonalMoveAndBeeper(){
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}