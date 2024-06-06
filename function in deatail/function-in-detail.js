// function devidedBy5(power)
// {
//     return power * 5
// }
// devidedBy5.power = 2
//  console.log(devidedBy5(5))
//  console.log(devidedBy5.power) 

//  console.log(devidedBy5.prototype) 


 
function  userget(usernme,Score){
this.usernme = usernme;
this.Score = Score
 
}
userget.prototype.increment = function(){
this.score++
}
userget.prototype.printMe = function(){
  console.log(`chai autual Price ${this.Score}`)
}

const chai = new userget('sameer',45)
const tea = new userget('Ali hassan',46)


console.log(chai)
console.log(tea)
chai.printMe()






















// function user(name,score){
//     this.name = name;
//     this.score = score;
// }

//  user.prototype.increment = function(){
//   console.log (this.score++)
//  }
//  user.prototype.printMe = function(){
//     console.log('this is my score',`${this.score}`)
//  }

//  const chai = new user('sameer', 80)

//  const tea =new user('ali hassan',100)

//  console.log(chai)
//  console.log(tea)
// chai.printMe()





let hero = {
    thor : 'hammer',
    spider : 'silng',

   heroos : function(){
    console.log(`spider power is  ${this.spider}`)
   }
}
Object.prototype.sameer= function(){
    console.log('now sameer is a function')
}

hero.sameer();