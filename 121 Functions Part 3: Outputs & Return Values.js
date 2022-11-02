// 1-Function with inputs and outputs:
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
  console.log("buy " + caclBottles(money, 1.5) + " bottles of milk"); //money = startingMoney and cost costPerBottle =1.5
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, 1.5); //startingAmount=money and costPerBottle=1.5
}

// var change = getMilk(4); //gets hold of what the getMilk() function returns **
// console.log(change)


function caclBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles
}


function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle
    return change
    
}

console.log("Hello here is your" + getMilk(5) + "change");