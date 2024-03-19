let name = {
    1 : "sameer" , 
     2 : "kumar"
    }
    const Class = {
        iststyear :  'A',
        secondtndyear :  'B',      
    }
 let rdArray = {...Class,...name};
// console.log(rdArray);
let khan = name.hasOwnProperty('2');

// console.log(khan)

let couser = {
    courseName : "MCA",
    Price :  5000,
    CouserInstructor :  "Mr.Kumar",
}

let {CouserInstructor} =  couser;
console.log("The Instuctor of the Course is ",CouserInstructor);

