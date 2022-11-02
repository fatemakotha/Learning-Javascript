// 1-Function with inputs:
function getMilk(money) {
  var bottles = Math.floor((money / 2)) //rounds to the nearest int
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + bottles + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);


// 2-Rounding up:
// Math.round() - rounds to the nearest integer (if the fraction is 0.5 or greater - rounds up)
// Math.floor() - rounds down
// Math.ceil() - rounds up
// Math.round(3.14159)  // 3
// Math.round(3.5)      // 4
// Math.floor(3.8)      // 3
// Math.ceil(3.2)       // 4