// let user = {
    // name : "sameer", //this is not a hardcode centex this will change very easyly
    // price : 3000,
    // course : "web development",
//  wellcomeMassage : function(){
    // console.log(`${this.name} is studying ${this.course}.`);
    // console.log(this)
// }

// }
// user.wellcomeMassage()
// user.name = "khan" //here we are changing the contex  of our object so that it can be changed easily and show the receent change contex we changed 
// user.wellcomeMassage()
 // we run if a brower that is the globel object is a window object 
 (function chai(){
    console.log(`db Connected`)
})();

( (name) => {
    console.log(`My name is  ${name}`)
})('sameer')