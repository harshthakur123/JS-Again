# Projects related to DOM

# Project Link
[Click Here](https://stackblitz.com/edit/vitejs-vite-pajjzt?file=index.html)

# Solution Code

## Project 1

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

## Project 2

```javascipt
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
