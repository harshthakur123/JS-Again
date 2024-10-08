let randomNumber = parseInt(Math.random()*10+1);
console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number greater than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayMessage(`Game Over !!!<br/>Random number was ${randomNumber}. `)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You Guessed it right!!!')
        endGame()
    }else if(guess < randomNumber){
        displayMessage('Number is too low!!!')
    }else if(guess > randomNumber){
        displayMessage('Number is too high!!!')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML +=  `${guess},`
    numGuess++;
    remainig.innerHTML = `${11-numGuess}`
}

function displayMessage(msg){
    if(msg === 'You Guessed it right!!!'){
        console.log(msg);
        
        lowOrHi.innerHTML = `<h2 style="color: green;">${msg}</h2>`
    }else{
    lowOrHi.innerHTML = `<h2 >${msg}</h2>`
    }
}


function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start New Game</button>`
   startOver.appendChild(p)
   playGame = false
   newGame() 
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*10+1);
        playGame = []
        numGuess  = 1
        guessSlot.innerHTML = ''
        remainig.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })
}





