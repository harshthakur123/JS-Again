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
