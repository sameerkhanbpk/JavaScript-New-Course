let UserEmail = "sameer"

if(UserEmail){
// console.log("Got the email");
}else{
    // console.log(typeof UserEmail);

}

if(Object.keys(UserEmail).length){
    // console.log("User name is Array")
}else{
// console.log("not a array");

}

// nullesh coalescing operator (??) undefined null
let userK;
userK = undefined ?? 10;

// console.log(userK)
//  Terrnery Operator 
// condition ? ture value false value

const simpleNumber = 100

simpleNumber >= 70 ? console.log("low number") : console.log("high number");
