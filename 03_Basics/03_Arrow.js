const user = {
    username : "Harsh",
    price : 999 , 
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "PK"
// user.welcomeMessage()

console.log(this); 

// in browser, the global object is window
// in node environment, the global object is empty object

// function chai(){
//     let username = "Harsh"
//     console.log(this.username);
    
// }
// chai()

// function chai(){
//     console.log(this);
    
// }


// const chai = () =>{
//     console.log(this);
    
// }
// chai()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo = (num1,num2)=>num1+num2  // Implicit return

// const addTwo = (num1,num2)=>(num1+num2) // Implicit return

const addTwo = (num1,num2)=>({username : "Harsh"})

console.log(addTwo(3,4))