// Primitive
// String , Number , Boolean , Null , Undefined , Symbol , BigInt

//Reference (non-primitive)
// Array , Objects , Functions 

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const temp = null
let email;

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2);

const bigNumber = 23635756347675675n
console.log(typeof bigNumber);


// Reference ( Non-Primitive )
// Array , Object ,, Functions

const heroes = ["Hulk","Ironman","Hawkeye"]

let myObj = {
    name : "Harsh",
    age : 23
}

const myFunction = function(){
    console.log("Hello Harsh");
    
}

console.log(typeof myFunction);


// console.log(typeof bigNumber);
// console.log(typeof null);


/*
Type	Result
Undefined	"undefined"
Null	"object" (reason)
Boolean	"boolean"
Number	"number"
BigInt	"bigint"
String	"string"
Symbol	"symbol"
Function 	"function"
Any other object	"object"

*/

// ----------------------------------------------------------------

//Stack(Primitive) , Heap(Non - Primitive)

let name1 = "Harsh"
let name2 = name1 
name2 = "AKASH"

console.log(name2);
console.log(name1);

let user1 = {
    name : "Harsh",
    email : "hkt@gmail.com"

}

let user2 = user1
console.log(user1);
user2.name="PK"
console.log(user1);

