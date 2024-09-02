function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTWoNumbers(num1,num2){
//     console.log(num1+num2);
    
// }

function addTWoNumbers(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
    console.log("Harsh");
    
}

const result = addTWoNumbers(2,6)
// console.log("Result : ",result);

function loginUserMessage(username = 'Sam'){
    if(!username){
        console.log("Please enter a username!!!");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage('Harsh'));
console.log(loginUserMessage("Pk"));

function calculateCartPrice(val1,val2,...num1){ // ... rest/spread operator depends on use
    return num1
}

console.log(calculateCartPrice(200,400,500));

const user = {
    username : "Harsh",
    price : 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is
${anyObject.price}`);
    
}

// handleObject(user)
// handleObject({
//     username : "Sam",
//     price : 900
// })

const arr = [2000,300,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(arr));
console.log(returnSecondValue([2000,300,500]));
