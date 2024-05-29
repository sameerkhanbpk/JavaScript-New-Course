let Score = "33"

// console.log(typeof  Score); //number

let changValueType = Number(Score)
// console.log(typeof  changValueType, "khhh");//number

// "33" => 33
// "33abc" => NaN (not a number) also print a number in typeof
// false => 0 / true => 1
// "" => false / "sameer" => true

let isLogin = 0

let convertisLogined = Boolean(isLogin)
// console.log(typeof convertisLogined, "ddddd")
// console.log(convertisLogined)


// console.log("2" + 2 + 3 )


// console.log(2 + 2 + "2")

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);


// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);


// console.log("2" > 2)
// console.log("2" < 2)
//  console.log("2" == 2)
//  console.log("2" === 2)
//  const arr = [5,6,7,3,45,34,56,67];
//  console.log(arr);
//  console.log(arr[5]);
 // console.log(arr[undefined])
// const bigint = 234234232345558588838844n
// console.log(typeof bigint)
// premitve 
// string ,number,boolean,null,undefine, bigint,symbol

// Reprence (non premitive)
//  Array , Object , function

// **********************************************Mamory Type****************************************************

// stack (in stack we use premitive data type / whenever you use Stack that give you copy of that variable)  Heap (in heap we use non premitive data Type/ whenever you use heap type the value give you refrece)

let MychanalName = "sameerKhan"

let AnotherName = MychanalName
AnotherName = "khan123"
// console.log(MychanalName)
// console.log(AnotherName)

let userOne = {
    name : "Sameer",
    age : 20,
    country : "Pakistan"
}

let userTwo = userOne
userTwo.name = "Khanssssssss"

// console.log(userOne)
// console.log(userTwo)


// ************************************ String Basic*********************************************


// let Name = "sameer"
let RefoAccount = 34

// console.log(`my name is ${Name} and my Repo is ${RefoAccount}` )
 let name = "      sameerkhan    "
// const NewSubString = name.SubString(1,4)
// console.log(NewSubString)
// console.log(name)
// console.log(name.trim())
// toUpperCase() -----> convert all charachter in uppercase
// toLowerCase() -----> convert all charachter in lowercase


let str = 'The quickbrownfoxjumpsoverthe lazy dog.';

// const char = str.split(' ')
// console.log(char[5]);

let str2 = str.replace(str, 'sameer')
console.log(str2);