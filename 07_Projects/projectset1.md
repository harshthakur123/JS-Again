# Projects related to DOM

# Project Link
[Click Here](https://stackblitz.com/edit/vitejs-vite-pajjzt?file=index.html)

# Solution Code

## Project 1 Solution

```javascript
const buttons = document.querySelectorAll(".button")
// console.log(buttons);

const body = document.querySelector("body") 

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log(e.target);
         if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
         }
         if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
         }  
         if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
         }  
         if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
         }    

     })
})
```

## Project 2 Solution

```javascript
const form = document.querySelector('form')

//this gives you empty value, we have to fetch value after submit
// const height = parseInt(document.querySelector('#height').value));



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.style.color = 'red'
        result.innerHTML = 'Please give a valid height'
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.style.color = 'red'
        result.innerHTML = 'Please give a valid weight'
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // show the result
        result.innerHTML =`<span>${bmi}</span>`
        const uw = document.querySelector('#uw')
        const norm = document.querySelector('#norm')
        const ow = document.querySelector('#ow')

        if(bmi < 18.6){
            
            uw.style.backgroundColor = 'red'
            uw.style.color = 'white'
            norm.style.backgroundColor = 'white'
            norm.style.color = 'black'
            ow.style.backgroundColor = 'white'
            ow.style.color = 'black'
        }else if(bmi >=18.6 && bmi <= 24.9){
           
            uw.style.backgroundColor = 'white'
            uw.style.color = 'black'
            norm.style.backgroundColor = 'green'
            norm.style.color = 'white'
            ow.style.backgroundColor = 'white'
            ow.style.color = 'black'
        }else{
            
            uw.style.backgroundColor = 'white'
            uw.style.color = 'black'
            ow.style.backgroundColor = 'red'
            ow.style.color = 'white'
            norm.style.backgroundColor = 'white'
            norm.style.color = 'black'

        }
    }



})

```

## Project 3 Solution
```Javascript 
const clock = document.getElementById('clock')

// const clock = document.querySelector('#clock')

setInterval(function(){
    let date  = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)
``` 


## Project 4 Solution

```javascript

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



```

## Project 5 Solution

```javascript

const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <div class = 'color'>
    <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
       
    </table>
    </div>
    `
})

```

## Project 6 Solution

```javascript

// generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0 ; i < 6 ; i++ ){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

console.log(randomColor());

let stop;

const startChangingColor = function(){
   if(!stop){
     stop =  setInterval(changeBgColor,1000)  
   }
    

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
       
    }
}
const stopChangingColor = function(){
    clearInterval(stop)
    stop = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
```