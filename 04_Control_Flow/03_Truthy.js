const userEmail = "harsh@gmail.com"

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't jhave user email");
    
}

// Falsy Value

// false, 0 , -0 , BigInt 0n , null, "" , undefined , NaN



// Truthy value

//  "0", [] , "false" , " " , {} , fuction(){}

// if(userEmail.length === 0){
//     console.log("Empty");
    
// }

// const emptyObject = {}

// if(Object.keys(emptyObject).length === 0){
//     console.log("Empty Object");
    
// }

// Nullish coalesing Operator (??) : works on two keywords null , undefined

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary Operator

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");

