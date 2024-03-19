let myHeros = ['khan','sulong', 'mango'];
let myAnother = [1,2,'cat']; 

let  combinedArray = [...myAnother,...myHeros]
// console.log(combinedArray); 

let  stringToUpperCase = [0,4,5,2,4,[23,45,'sameer',[34,56,23,53,56],67],'hello']
let nerwArrayReal = stringToUpperCase.flat(3);
console.log(nerwArrayReal)

console.log(Array.isArray("sameer"))
console.log(Array.from("sameer"))
 let score1 = 100
 let score2=98
 let score3=2334

 console.log(Array.of(score1,score2,score3));


