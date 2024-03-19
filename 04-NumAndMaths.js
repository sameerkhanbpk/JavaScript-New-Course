const balance = new Number(100);
// console.log(balance) // 100
// console.log(balance.toString()); // "100
// console.log(typeof balance)  // object
// console.log(balance.toFixed)
let fixto = balance.toFixed(4);
// console.log("fixto: ", fixto,)

let anotherNumber = 112.6334
let  fixedAnother = anotherNumber.toPrecision(4)
// console.log(fixedAnother)   // 112


let number = 100000000000000
//  console.log(number.toLocaleString())
// ===========================Maths======================================

console.log(Math.round(1.6))    // rounds up .5 to the nearest whole number
// so Math.round(1.
console.log(Math.abs(4.6))
let min = 10;
let max = 20;
console.log("random",Math.floor(Math.random()*(max - min + 1 ) ) + 10);     // returns largest integer less than or equal to a given number
                                // if the number is already an integer it will return that integer
console.log(Math.ceil(9.1));  
    // returns smallest integer greater than
    // console.log(Math.random() * 30 .Math.floor());      // generates and returns a random number between 0 (in