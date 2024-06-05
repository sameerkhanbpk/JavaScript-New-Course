// const user = {
//     name : 'sameer',
//     age :25,
//     email:'smerr@gmail.com',
//     idLogined : true,

//     newfunction : function(){
// console.log(this)
//     },
// }
// console.log(user.newfunction())


function user(username,email,islogedin){
    this.username=username;
    this.email = email;
    this.islogedin = islogedin;
return 

}

const promiseOne = new user('sameer','sameer@gmail.com',true)
const promiseTwo =new user('Ali hassan','kalimi@gmail.com',false)
console.log(promiseOne)
console.log(promiseTwo)