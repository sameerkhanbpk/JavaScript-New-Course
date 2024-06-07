// function getUserData(hotlelName,score){
//     this.hotlelName = hotlelName;
//     this.score = score;
// }
// console.log(getUserData.prototype)
// getUserData.prototype.increament = function(){
//    this.score++

// }
// getUserData.prototype.printMe = function(){
// console.log('this is our Tea price',this.score)
// }

// const chai =new getUserData('engineer', 80)
// const Tea =new getUserData('Qutta', 50)

// Tea.printMe()
// chai.printMe()


// let myHero = ['thor','spiderman']

// let superpower = {
//     thor : 'hammer',
//     spider: 'sling',
//     myheroPower : function(){
//         console.log(`spiderMan power is ${this.spider}`)
//     }
// }

// Array.prototype.sameer = function(){
//     console.log('now sameer is function')
// }
// myHero.sameer()



const user={
name : 'sameer',
age :26
}
 let Teacher={
makeVadio : true,
 }
 let TAssestent ={
    hire : false
 }
 let TASupport = {
    makeASSIment : 'javaScript assigment',
    fullTime :true,
    __proto__: user
 }

 TASupport .__proto__ = user

 Object.setPrototypeOf(TASupport,user)

  let anotherString = 'sameer khan is back              '

  String.prototype.trueLength = function(){
    console.log(`the autual length ${this.trim().length}`)
  }

  anotherString.trueLength()

  'sameerkhan       '.trueLength()