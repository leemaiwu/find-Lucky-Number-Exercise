// Write your code below this line.

// create an empty array for numbers to be added to
// create a function that takes in parameter 'n'
// parameter n will be the number of items added to our array
// create a loop to randomize numbers and add it to the empty array
// the loop will be set to the number that is given so it knows how many random numbers to add

/////// code here ////////

// let emptyList = [];
// function luckyNumbers(n) {
//     randomNum = Math.floor(Math.random() * 11 + 1);
//     return emptyList.push(randomNum);
//   } luckyNumbers(7)

//--------------------- solution done in class

/////// code here ////////

// function luckyNumbers(n) {
//   let answer = []
//   while (answer.length < n) {
//     let ranNum = Math.floor(Math.random() * 10 + 1)
//     if (!answer.includes(ranNum)) {
//       answer.push(ranNum)
//     }
//   }
//   return answer
// }
// let myArr = luckyNumbers(10)
// console.log(myArr)

//--------------------- solution provided in frodo

/////// code here ////////

function findLuckyNumbers(n) {
  let possibleNumbers = [1,2,3,4,5,6,7,8,9,10]
  let luckyNumbers = []
  for (let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * possibleNumbers.length);
    luckyNumbers.push(possibleNumbers[x])
    possibleNumbers.splice(x, 1)
  }
  return luckyNumbers
}
let myArr = findLuckyNumbers(10)
console.log(myArr)

