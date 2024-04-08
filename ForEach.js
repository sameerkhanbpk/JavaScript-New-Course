let Array = [1, 2, 3];

Array.forEach( function (value){
    // console.log(value)
}
)
function printMe(arr ,index,Array){
    // console.log(arr,index,Array);
}
Array.forEach(printMe);

const NewMyArray = [
    {
        name : 'John',
        class : 'A'

    },
    {
        name : 	 "Jane",
        class : "B",
        rollNumber : 37
    },
    {
        name : 	 "Sameer",
        class : "B",
        rollNumber : 37,
    }

   


]
let roll = NewMyArray.filter( (val)=> val.rollNumber === 37 )
console.log(roll)
// NewMyArray.forEach( (item) => {
    // console.log(item.class)
// })


// let number = [1,2,3,4,5,6,7,8,9]

// let num2 = number.filter( (vale)=>{ 
//    return     vale > 5} )
//  console.log(num2)