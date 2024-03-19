
let myObject = Object("key1");
let myObj = {
    [myObject]: "value1",
    name :  "Sameer",
    class : "SE",
    rollNo : 334,
    "email" : "sameer@gmail.com",

}
// console.log(myObj["name"]); // accessing the property of an object using dot
// let freezobject = Object.freeze(myObj) ;// freezing the object so
// myObj.name ="Rahul";
// console.log(myObj.name);
// console.log(freezobject)

myObj.greeting = function(){
  console.log(`${myObj.name} khan sanga e`)
}
console.log(myObj.greeting())