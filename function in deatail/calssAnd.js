// class users {
//     constructor(userName,rollNo,email){
// this.userName = userName;
// this.rollNo = rollNo;
// this.email = email;
//     }
//    encryptPassword (){
//     return `${this.rollNo}e11`
//    }
//    changUserName(){
//     return `${this.userName.toUpperCase()}`
//    }
// }

// let chai =new users('sameer', 32,'sameer@ggmail.com',)
// console.log(chai.encryptPassword())
// console.log(chai.changUserName())


class user {
    constructor(userName){
        this.userName = userName
    }

}

class Teacher extends user{
    constructor(userName,email,Password){
        super(userName)
        this.email = email
        this.Password = Password

    }
    incryept(){
        console.log(`this is my name =${this.userName}`)
    }
}
let nameee = new Teacher('sameer','sameer@gmail.com','asdfghjkl')
nameee.incryept()