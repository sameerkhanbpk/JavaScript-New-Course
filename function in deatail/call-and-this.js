function setUser(userName){
    this.userName  = userName

}

function dataUser(userName,email,rollNo) {
    setUser.call(this ,userName)
    this.email =email;
    this.rollNo =rollNo;

}
let chai = new dataUser('sameer','sam@gmail.com',24)
console.log(chai)
