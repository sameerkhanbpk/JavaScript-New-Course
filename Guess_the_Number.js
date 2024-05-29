let randomNumber = 50;
console.log(randomNumber)
const submit = document.querySelector('#subt')
const UserInput = document.querySelector('#guessField')
const Guesses = document.querySelector('.Guesses')
const remaning = document.querySelector('.lastResult')
const HighOrLo =  document.querySelector('.lowOrHigh')
const paras = document.querySelector('.resultParas')
const p = document.createElement('p')

let playGame = true

let prevGuess = []
let numGuess = 1

if(playGame){
    console.log(playGame);
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(UserInput.value)
        console.log(guess)
        ValidateGuess(guess)
    })
} 

function ValidateGuess(Guess){
    console.log('hello word')
    if(Guess < 0){
       console.log('please give 1 to 100 number')
    }else if(Guess == isNaN(Guess)){
        alert ("please give a valid number")
    }else if(Guess > 100){
        alert('please give under 1 to 100')
    }else{
        prevGuess.push(Guess)
        if(numGuess === 11){
            displayGuess(Guess)
            displayMassage(`Game Over Random Number was : ${randomNumber}`)
            endgame()
        } else{
            displayGuess(Guess)
            CheckGuess(Guess)

        }
    }

}

function  CheckGuess(Guess){
if(Guess === randomNumber){
    displayMassage(`Your selected number is perfectly match`)
    endgame()
}else if(Guess < randomNumber){
    displayMassage(`your guess is Tooo Low`)
}else if(Guess > randomNumber){
displayMassage(`your Guess is too High`)
}
}
function displayGuess(Guess){
UserInput.value = '';
Guesses.innerHTML += `${Guess},  `
numGuess ++
remaning.innerHTML = `${11 - numGuess}`
}
function displayMassage(Massage){
HighOrLo.innerHTML = `<h4>${Massage}<h4>`
}

function endgame(){
    UserInput.innerHTML = ''
    UserInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newButton">Start The game</h2>`
    paras.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    let button = document.querySelector('#newButton')
    button.addEventListener('click', function(e){
      randomNumber = parseInt(Math.random() * 100 + 1);
   
    prevGuess =[]
    numGuess = 1
    remaning.innerHTML =  `${11 - numGuess}`
    Guesses.innerHTML = ''
    UserInput.removeAttribute('disabled')
    paras.removeChild(p)
})
    }