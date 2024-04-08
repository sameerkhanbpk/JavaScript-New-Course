let myArray = [1,2,3,4,5,6,7,8,9,10]

// let MyArraay = myArray
// .map( (val) => {return val * 10 })

// .map( (item)=> item + 1 )
// .filter((val)=> val > 18)

// console.log(MyArraay)

let MyNum = myArray.reduce( (accumulator, CurrentValue)=> 

{
console.log(`ACCumulator ${accumulator}  CurrrentValue ${CurrentValue}`)
    
    return accumulator + CurrentValue}
, 0)
console.log(MyNum)

