let number = 0;

while (number <= 100) {
    // console.log(`value of ${number}`)
    number = number + 8;
}

let MyArray = ["Flash", "Thunder", "Lightning"];
let arr = 0
while (arr < MyArray.length) {
    // console.log(`value of ${MyArray[arr]}`)
   arr = arr + 1 
}

let index  = 42;
do {
    // console.log(`value of ${index}`)
index =index + 2
} while (index <= 30);

let array = [1,1,2,3,4,5];
let MyaArray =[9,4,3,6,3,45]

let myNewArray = [...MyaArray, ...array];
// console.log(myNewArray);

// console.log(typeof array)

for (const numer of myNewArray){
    // console.log(`${numer} is in the array`);
}

let map = new Map()

map.set('Name', "John Doe")
map.set('school',"Alfaisal Mamorial School")
map.set('city',"swabi")
// console.log (typeof map)
for (const [Key ,Value] of map ) {
    console.log(`${Key} ":-" ${Value}`);
}